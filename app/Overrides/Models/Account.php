<?php

/**
 * Eloquent IFRS Accounting
 *
 * @author    Edward Mungai
 * @copyright Edward Mungai, 2020, Germany
 * @license   MIT
 */

namespace IFRS\Models;

use Carbon\Carbon;
use function collect;
use function config;
use IFRS\Exceptions\HangingTransactions;
use IFRS\Exceptions\InvalidCategoryType;
use IFRS\Exceptions\MissingAccountType;
use IFRS\Interfaces\Recyclable;
use IFRS\Interfaces\Segregatable;
use IFRS\Traits\ModelTablePrefix;
use IFRS\Traits\Recycling;
use IFRS\Traits\Segregating;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * Class Account
 *
 *
 * @property Entity $entity
 * @property Category $category
 * @property Currency $currency
 * @property int|null $code
 * @property string $name
 * @property string $description
 * @property string $account_type
 * @property Carbon $destroyed_at
 * @property Carbon $deleted_at
 */
class Account extends Model implements Recyclable, Segregatable
{
    use Segregating;
    use SoftDeletes;
    use Recycling;
    use ModelTablePrefix;

    /**
     * Account Type.
     *
     * @var string
     */
    const NON_CURRENT_ASSET = 'NON_CURRENT_ASSET';

    const CONTRA_ASSET = 'CONTRA_ASSET';

    const INVENTORY = 'INVENTORY';

    const BANK = 'BANK';

    const CURRENT_ASSET = 'CURRENT_ASSET';

    const RECEIVABLE = 'RECEIVABLE';

    const NON_CURRENT_LIABILITY = 'NON_CURRENT_LIABILITY';

    const CONTROL = 'CONTROL';

    const CURRENT_LIABILITY = 'CURRENT_LIABILITY';

    const PAYABLE = 'PAYABLE';

    const EQUITY = 'EQUITY';

    const OPERATING_REVENUE = 'OPERATING_REVENUE';

    const OPERATING_EXPENSE = 'OPERATING_EXPENSE';

    const NON_OPERATING_REVENUE = 'NON_OPERATING_REVENUE';

    const DIRECT_EXPENSE = 'DIRECT_EXPENSE';

    const OVERHEAD_EXPENSE = 'OVERHEAD_EXPENSE';

    const OTHER_EXPENSE = 'OTHER_EXPENSE';

    const RECONCILIATION = 'RECONCILIATION';

    /**
     * Purchasable Account Types
     *
     * @var array
     */
    const PURCHASABLES = [
        Account::OPERATING_EXPENSE,
        Account::DIRECT_EXPENSE,
        Account::OVERHEAD_EXPENSE,
        Account::OTHER_EXPENSE,
        Account::NON_CURRENT_ASSET,
        Account::CURRENT_ASSET,
        Account::INVENTORY,
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'account_type',
        'account_id',
        'currency_id',
        'category_id',
        'entity_id',
        'description',
        'code',
    ];

//    protected $appends = [
//        'balance',
//    ];

    /**
     * Get Human Readable Account types
     *
     * @param  array  $types
     * @return array
     */
    public static function getTypes(array $types): array
    {
        $typeNames = [];

        foreach ($types as $type) {
            $typeNames[] = Account::getType($type);
        }

        return $typeNames;
    }

    /**
     * Get Human Readable Account Type.
     *
     * @param  string  $type
     * @return string
     */
    public static function getType(string $type): string
    {
        return config('ifrs')['accounts'][$type];
    }

    /**
     * Get all accounts with opening balances for the given year
     *
     * @param  int  $year
     * @param  Entity|null  $entity
     * @return array
     */
    public static function openingBalances(int $year, Entity $entity = null)
    {
        if (is_null($entity)) {
            $entity = Auth::user()->entity;
        }

        $accounts = collect([]);
        $balances = ['debit' => 0, 'credit' => 0];

        foreach (Account::where('entity_id', '=', $entity->id)->get() as $account) {
            $account->openingBalance = $account->openingBalance($year, null, $entity)[$account->entity->currency_id];
            if ($account->openingBalance != 0) {
                $accounts->push($account);
            }
            if ($account->openingBalance > 0) {
                $balances['debit'] += $account->openingBalance;
            } else {
                $balances['credit'] += $account->openingBalance;
            }
        }

        return ['balances' => $balances, 'accounts' => $accounts];
    }

    /**
     * Chart of Account Section Balances for the Reporting Period.
     *
     * @param  array  $accountTypes
     * @param  null  $startDate
     * @param  null  $endDate
     * @param  bool  $fullBalance
     * @param  Entity|null  $entity
     * @return array
     */
    public static function sectionBalances(
        array $accountTypes,
        $startDate = null,
        $endDate = null,
        bool $fullBalance = true,
        Entity $entity = null
    ): array {
        if (is_null($entity)) {
            $entity = Auth::user()->entity;
        }

        $balances = [
            'sectionOpeningBalance' => 0,
            'sectionClosingBalance' => 0,
            'sectionMovement' => 0,
            'sectionCategories' => [],
        ];

        $startDate = is_null($startDate) ? ReportingPeriod::periodStart($endDate, $entity) : Carbon::parse($startDate);
        $endDate = is_null($endDate) ? Carbon::now() : Carbon::parse($endDate);
        $periodStart = ReportingPeriod::periodStart($endDate, $entity);

        $year = ReportingPeriod::year($endDate, $entity);

        $accounts = Account::whereIn('account_type', $accountTypes)->where('entity_id', '=', $entity->id)->get();
        foreach ($accounts as $account) {
            $reportingCurrencyId = $account->entity->currency_id;

            $account->openingBalance = $account->openingBalance($year)[$reportingCurrencyId]
                + $account->currentBalance($periodStart, $startDate)[$reportingCurrencyId];

            $account->balanceMovement = $account->currentBalance($startDate, $endDate)[$reportingCurrencyId];

            $account->closingBalance = $fullBalance ? $account->openingBalance + $account->balanceMovement
                : $account->balanceMovement;

            $account->balanceMovement *= -1;

            if ($account->closingBalance != 0 || $account->balanceMovement != 0) {
                if (is_null($account->category)) {
                    $categoryName = config('ifrs')['accounts'][$account->account_type];
                    $categoryId = 0;
                } else {
                    $category = $account->category;
                    $categoryName = $category->name;
                    $categoryId = $category->id;
                }

                if (array_key_exists($categoryName, $balances['sectionCategories'])) {
                    $balances['sectionCategories'][$categoryName]['accounts']->push((object) $account->attributes);
                    $balances['sectionCategories'][$categoryName]['total'] += $account->closingBalance;
                } else {
                    $balances['sectionCategories'][$categoryName]['accounts'] = collect([(object) $account->attributes]);
                    $balances['sectionCategories'][$categoryName]['total'] = $account->closingBalance;
                    $balances['sectionCategories'][$categoryName]['id'] = $categoryId;
                }
                $balances['sectionOpeningBalance'] += $account->openingBalance;
                $balances['sectionMovement'] += $account->balanceMovement;
                $balances['sectionClosingBalance'] += $account->closingBalance;
            }
        }

        return $balances;
    }

    /**
     * Instance Type.
     *
     * @return string
     */
    public function getTypeAttribute(): string
    {
        return Account::getType($this->account_type);
    }

    /**
     * Instance Identifier.
     *
     * @param  bool  $type
     * @return string
     */
    public function toString(bool $type = false): string
    {
        return $type ? $this->type.': '.$this->name : $this->name;
    }

    /**
     * Account Currency.
     *
     * @return BelongsTo
     */
    public function currency(): BelongsTo
    {
        return $this->belongsTo(Currency::class);
    }

    /**
     * Account Category.
     *
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Account Balances.
     *
     * @return HasMany
     */
    public function balances(): HasMany
    {
        return $this->hasMany(Balance::class);
    }

    /**
     * Account attributes.
     *
     * @return object
     *
     * @throws \IFRS\Exceptions\MissingReportingPeriod
     */
    public function attributes(): object
    {
        $this->attributes['closingBalance'] = $this->closingBalance();

        return (object) $this->attributes;
    }

//    /**
//     * @throws \IFRS\Exceptions\MissingReportingPeriod
//     */
//    public function getBalanceAttribute()
//    {
//        return ($this->closingBalance()[1]) ? $this->closingBalance()[1] : 0;
//    }

    /**
     * Get Account's Closing Balances for the Reporting Period.
     *
     * @param  string|null  $endDate
     * @param  int|null  $currencyId
     * @return array
     *
     * @throws \IFRS\Exceptions\MissingReportingPeriod
     */
    public function closingBalance(string $endDate = null, int $currencyId = null): array
    {
        $entity = $this->entity;

        $endDate = is_null($endDate) ? ReportingPeriod::periodEnd(null, $entity) : Carbon::parse($endDate);
        $startDate = ReportingPeriod::periodStart($endDate, $entity);
        $year = ReportingPeriod::year($endDate, $entity);
        $balances = $this->openingBalance($year, $currencyId);
        $transactions = $this->currentBalance($startDate, $endDate, $currencyId);
        foreach (array_keys($balances) as $currency) {
            $balances[$currency] += $transactions[$currency];
        }

        return $balances;
    }

    /**
     * Get Account's Opening Balances for the Reporting Period.
     *
     * @param  int|null  $year
     * @param  int|null  $currencyId
     * @return array
     *
     * @throws \IFRS\Exceptions\MissingReportingPeriod
     */
    public function openingBalance(int $year = null, int $currencyId = null): array
    {
        $entity = $this->entity;

        $balances = [$entity->currency_id => 0];

        if (! is_null($year)) {
            $period = ReportingPeriod::getPeriod($year.'-01-01', $entity);
        } else {
            $period = $entity->current_reporting_period;
        }

        $openingBalances = $this->balances->where('entity_id', '=', $entity->id)
            ->filter(function ($balance, $key) use ($period) {
                return $balance->reporting_period_id == $period->id;
            });

        if (! is_null($currencyId)) {
            $openingBalances = $this->balances->where('entity_id', '=', $entity->id)
                ->filter(function ($balance, $key) use ($currencyId) {
                    return $balance->currency_id == $currencyId;
                });
            $balances[$currencyId] = 0;
        }

        foreach ($openingBalances as $each) {
            if (! is_null($currencyId) && $entity->currency_id != $currencyId) {
                $each->balance_type == Balance::DEBIT ?
                    $balances[$currencyId] += $each->balance / $each->exchangeRate->rate :
                    $balances[$currencyId] -= $each->balance / $each->exchangeRate->rate;
            }
            $each->balance_type == Balance::DEBIT ?
                $balances[$entity->currency_id] += $each->balance :
                $balances[$entity->currency_id] -= $each->balance;
        }

        return $balances;
    }

    /**
     * Get Account's Current Balances for the Period given.
     *
     * @param  Carbon|null  $startDate
     * @param  Carbon|null  $endDate
     * @param  int|null  $currencyId
     * @return array
     */
    public function currentBalance(Carbon $startDate = null, Carbon $endDate = null, int $currencyId = null): array
    {
        $entity = $this->entity;

        $startDate = is_null($startDate) ? ReportingPeriod::periodStart($endDate, $entity) : $startDate;
        $endDate = is_null($endDate) ? Carbon::now() : $endDate;

        return Ledger::balance($this, $startDate, $endDate, $currencyId);
    }

    /**
     * Check if the account has closing transactions.
     *
     * @param  int|null  $year
     * @return bool
     */
    public function isClosed(int $year = null): bool
    {
        if (is_null($year)) {
            $year = $this->entity->current_reporting_period->calendar_year;
        }

        return $this->closingTransactionsQuery($year)->count() > 0;
    }

    /**
     * Account Closing Transactions Query
     *
     * @param  int  $year
     * @return Builder
     */
    private function closingTransactionsQuery(int $year)
    {
        $transactionsTable = config('ifrs.table_prefix').'transactions';
        $closingTransactionsTable = config('ifrs.table_prefix').'closing_transactions';

        return DB::table($transactionsTable)
            ->join(
                $closingTransactionsTable,
                $closingTransactionsTable.'.transaction_id',
                '=',
                $transactionsTable.'.id'
            )
            ->where($transactionsTable.'.account_id', '=', $this->id)
            ->whereYear($transactionsTable.'.transaction_date', '=', $year)
            ->selectRaw(
                'transaction_id AS id,
                account_id,
                '.$transactionsTable.'.currency_id,
                reporting_period_id,
                credited,
                transaction_type,
                transaction_date,
                narration'
            );
    }

    /**
     * Get the account's has closing transactions.
     *
     * @param  int|null  $year
     * @return array
     */
    public function closingTransactions(int $year = null): array
    {
        if (is_null($year)) {
            $year = $this->entity->current_reporting_period->calendar_year;
        }

        return $this->processTransactions($this->closingTransactionsQuery($year));
    }

    /**
     * Process the Transactions returned by a query.
     *
     * @param $query
     * @return array
     */
    private function processTransactions($query): array
    {
        $transactions = ['total' => 0, 'transactions' => []];

        foreach ($query->get() as $transaction) {
            $transaction->amount = abs(Ledger::contribution($this, $transaction->id));
            $transaction->contribution = $transaction->credited ? $transaction->amount * -1 : $transaction->amount;
            $transaction->type = Transaction::getType($transaction->transaction_type);
            $transaction->date = Carbon::parse($transaction->transaction_date)->toFormattedDateString();
            $transactions['transactions'][] = $transaction;
            $transactions['total'] += $transaction->contribution;
        }

        return $transactions;
    }

    /**
     * Get Account's Transactions for the Reporting Period.
     *
     * @param  string|null  $startDate
     * @param  string|null  $endDate
     * @return array
     */
    public function getTransactions(string $startDate = null, string $endDate = null): array
    {
        $startDate = is_null($startDate) ? ReportingPeriod::periodStart($endDate, $this->entity)
            : Carbon::parse($startDate);
        $endDate = is_null($endDate) ? Carbon::now() : Carbon::parse($endDate);

        return $this->processTransactions($this->transactionsQuery($startDate, $endDate));
    }

    /**
     * Account Transactions Query
     *
     * @param  Carbon  $startDate
     * @param  Carbon  $endDate
     * @param  int|null  $currencyId
     * @return Builder
     */
    public function transactionsQuery(Carbon $startDate, Carbon $endDate, int $currencyId = null): Builder
    {
        $transactionsTable = config('ifrs.table_prefix').'transactions';
        $ledgerTable = config('ifrs.table_prefix').'ledgers';

        $query = DB::table(
            $transactionsTable
        )
            ->leftJoin($ledgerTable, $transactionsTable.'.id', '=', $ledgerTable.'.transaction_id')
            ->where($transactionsTable.'.deleted_at', null)
            ->where($transactionsTable.'.entity_id', $this->entity_id)
            ->where($transactionsTable.'.transaction_date', '>=', $startDate)
            ->where($transactionsTable.'.transaction_date', '<=', $endDate->endOfDay())
            ->select(
                $transactionsTable.'.id',
                $transactionsTable.'.transaction_date',
                $transactionsTable.'.transaction_no',
                $transactionsTable.'.reference',
                $transactionsTable.'.transaction_type',
                $transactionsTable.'.credited',
                $transactionsTable.'.narration',
                $ledgerTable.'.rate'
            )->distinct();

        if (! is_null($currencyId)) {
            $query->where($transactionsTable.'.currency_id', $currencyId);
        }
        $query->where(
            function ($query) use ($ledgerTable) {
                $query->where($ledgerTable.'.post_account', $this->id)
                    ->orwhere($ledgerTable.'.folio_account', $this->id);
            }
        );

        return $query;
    }

    /**
     * Validate Account.
     *
     * @param  array  $options
     * @return bool
     *
     * @throws InvalidCategoryType
     * @throws MissingAccountType
     */
    public function save(array $options = []): bool
    {
        if (Auth::user()) {
            $entity = Auth::user()->entity;
        } else {
            $entity = Entity::where('id', '=', $this->entity_id)->first();
        }

        if (! isset($this->currency_id)) {
            $this->currency_id = $entity->currency_id;
        }

        if (is_null($this->account_type)) {
            throw new MissingAccountType();
        }

        $typeChanged = $this->isDirty('account_type')
            && $this->account_type != $this->getOriginal('account_type') && ! is_null($this->id);

        if (is_null($this->code) || $typeChanged) {
            $this->code = $this->getAccountCode();
        }

        if (! is_null($this->category) && $this->category->category_type != $this->account_type) {
            throw new InvalidCategoryType($this->account_type, $this->category->category_type);
        }

        $this->name = ucfirst($this->name);

        return parent::save($options);
    }

    /**
     * Calculate Account Code.
     */
    private function getAccountCode(): int
    {
        if (! isset($this->currency_id) && $this->entity) {
            $this->currency_id = $this->entity->currency_id;
        }

        $query = Account::withTrashed()
            ->where('account_type', $this->account_type);

        if (! is_null($this->entity_id)) {
            $query->withoutGlobalScopes()->where('entity_id', $this->entity_id);
        }

        return config('ifrs')['account_codes'][$this->account_type] + $query->count() + 1;
    }

    /**
     * Check for Current Year Transactions.
     *
     * @throws HangingTransactions|\IFRS\Exceptions\MissingReportingPeriod
     */
    public function delete(): bool
    {
        if ($this->closingBalance()[$this->entity->currency_id] != 0) {
            throw new HangingTransactions();
        }

        return parent::delete();
    }
}
