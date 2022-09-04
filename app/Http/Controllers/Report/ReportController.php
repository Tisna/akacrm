<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use App\Models\Inventory\Contact;
use App\Models\Inventory\InventoryTransaction;
use App\Models\Inventory\ItemWarehouse;
use App\Models\Reports\AgingSchedule;
use App\Models\Settings\Entity;
use App\Services\Reports\ReportService;
use Carbon\Carbon;
use IFRS\Models\Account;
use IFRS\Models\LineItem;
use IFRS\Models\Transaction;
use IFRS\Reports\AccountStatement;
use IFRS\Reports\BalanceSheet;
use IFRS\Reports\CashFlowStatement;
use IFRS\Reports\IncomeStatement;
use IFRS\Reports\TrialBalance;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\App;

class ReportController extends Controller
{
    public ReportService $service;

    public function __construct(ReportService $service)
    {
        $this->service = $service;
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse|void
     * @throws \IFRS\Exceptions\MissingAccount
     * @throws \Exception
     */
    public function preview(Request $request)
    {
        App::setLocale(auth()->user()->locale);
        Carbon::setLocale(auth()->user()->locale);
        $report_type = strtoupper($request->report_type);
        $account_id = $request->account_id;
        $first_date = date('Y-m-') . '01';
        $end_day = date('Y-m-t');
        $start_date = (isset($request->start_date)) ? $request->start_date : $first_date;
        $end_date = (isset($request->end_date)) ? $request->end_date : $end_day;

        $entity = Entity::find($request->user()->entity_id);

        switch ($report_type) {
            case strtoupper('Account Balance'):
                $report = new AccountStatement($account_id, null, $start_date, $end_date);
                return $this->success([
                    'data' => $report->getTransactions(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '6'
                ]);

            case strtoupper('Journal Entry'):
                $report = Transaction::whereBetween('transaction_date', [$start_date, $end_date])
                    ->with(['ledgers.postAccount'])
                    ->get();

                return $this->success([
                    'data' => view('reports.journal', compact('report'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '10'
                ]);

            case strtoupper('Profit and loss statement'):
                $report = new IncomeStatement($start_date, $end_date, $entity);
                //$data = $this->service->transformProfitAndLoss($report->getSections());
                return $this->success([
                    'data' => collect($report->getSections($start_date, $end_date)),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '6'
                ]);
            //return $this->success(['data' => $report->getResults(date('m'), date('Y'), $entity)]);

            case strtoupper('Balance sheet'):
                $report = new BalanceSheet($end_date, $entity);
                return $this->success([
                    'data' => $report->getSections(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '6'
                ]);

            case strtoupper('Trial Balance'):
                $report = new TrialBalance($end_date, $entity);
                $data = $report->getSections();
                return $this->success([
                    // 'data' => $data,
                    'data' => view('reports.trial-balance', compact('data'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '6'
                ]);

            case strtoupper('Statement of cash flow'):
            case strtoupper('Statement of cash flows'):
                $report = new CashFlowStatement($start_date, $end_date, $entity);
                return $this->success([
                    'data' => $report->getSections(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '6'
                ]);

            case strtoupper('Product/Service List'):
                $report = $this->service->getItemList();
                return $this->success([
                    'data' => view('reports.item_list', compact('report'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Accounts payable aging summary'):
                $report = new AgingSchedule('PAYABLE', $end_date, auth()->user()->entity->currency_id);
                $items = $report->attributes();
                return $this->success([
                    'data' => view('reports.ap_aging', compact('items'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '8'
                ]);

            case strtoupper('Accounts receivable aging summary'):
                $report = new AgingSchedule('RECEIVABLE', $end_date, auth()->user()->entity->currency_id);
                $items = $report->attributes();
                return $this->success([
                    'data' => view('reports.ap_aging', compact('items'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '8'
                ]);

            case strtoupper('Inventory Valuation Detail'):
                $inventoryValuation = InventoryTransaction::whereBetween('transaction_date', [$start_date, $end_date])
                    ->orderBy('item_id')
                    ->get();

                return $this->success([
                    'data' => view('reports.inventory_valuation', compact('inventoryValuation'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Inventory Valuation Summary'):
                $start_date = $start_date . ' 00:00:01';
                $end_date = $end_date . ' 23:59:00';
                $inventoryValuation = ItemWarehouse::whereBetween('updated_at', [$start_date, $end_date])
                    ->orderBy('item_id')
                    ->get();

                return $this->success([
                    'data' => view('reports.inventory_valuation_detail', compact('inventoryValuation'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Customer Balance Summary'):
                $customers = Contact::where('type', 'Customer')->get();
                $customer_account = [];
                foreach ($customers as $customer) {
                    $account = Account::find($customer->receivable_account_id);
//                    $schedule = new AccountSchedule(
//                        $customer->receivable_account_id
//                    );
//                    if ($schedule->getTransactions()) {
//                        $customer_account[] = $schedule->getTransactions();
//                    }
                    $transaction = $account->getTransactions($start_date, $end_date);
                    if ($transaction['transactions']) {
                        $customer_account[] = Arr::add($transaction, 'customer', $customer->name);
                    }
                }

                return $this->success([
                    //'data' => $customer_account,
                    'data' => view('reports.customer_balance', compact('customer_account'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Vendor Balance Summary'):
                $customers = Contact::where('type', 'Vendor')->get();
                $customer_account = [];
                foreach ($customers as $customer) {
                    $account = Account::find($customer->payable_account_id);
//                    $schedule = new AccountSchedule(
//                        $customer->receivable_account_id
//                    );
//                    if ($schedule->getTransactions()) {
//                        $customer_account[] = $schedule->getTransactions();
//                    }
                    $transaction = $account->getTransactions($start_date, $end_date);
                    if ($transaction['transactions']) {
                        $customer_account[] = Arr::add($transaction, 'customer', $customer->name);
                    }
                }

                return $this->success([
                    //'data' => $customer_account,
                    'data' => view('reports.customer_balance', compact('customer_account'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Sales by Product/Service Summary'):
                $list_items = LineItem::select('item_id')
                    ->whereHas('transaction', function ($query) use ($end_date, $start_date) {
                        $query->whereIn('transaction_type', ['IN', 'CS'])
                            ->whereBetween('transaction_date', [$start_date, $end_date]);
                    })
                    ->distinct()
                    ->get();
                $items = [];
                foreach ($list_items as $item) {
                    $itm = LineItem::whereHas('transaction', function ($query) {
                        $query->whereIn('transaction_type', ['IN', 'CS']);
                    })
                        ->where('item_id', $item->item_id)
                        ->get();
                    $items[] = [
                        'item' => $item->item->name,
                        'list' => $itm
                    ];
                }

            case strtoupper('Purchases by Product/Service Detail'):
                $list_items = LineItem::select('item_id')
                    ->whereHas('transaction', function ($query) use ($end_date, $start_date) {
                        $query->whereIn('transaction_type', ['BL', 'CP'])
                            ->whereBetween('transaction_date', [$start_date, $end_date]);
                    })
                    ->distinct()
                    ->get();
                $items = [];
                foreach ($list_items as $item) {
                    $itm = LineItem::whereHas('transaction', function ($query) {
                        $query->whereIn('transaction_type', ['BL', 'CP']);
                    })
                        ->where('item_id', $item->item_id)
                        ->get();
                    $items[] = [
                        'item' => $item->item->name,
                        'list' => $itm
                    ];
                }

                return $this->success([
                    //'data' => $customer_account,
                    'data' => view('reports.item_balance', compact('items'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Sales by Customer Summary'):
                $list_items = Transaction::select('contact_id')
                    ->whereHas('contact', function ($query) {
                        $query->whereIn('type', ['Customer']);
                    })
                    ->whereIn('transaction_type', ['IN', 'CS'])
                    ->whereBetween('transaction_date', [$start_date, $end_date])
                    ->distinct()
                    ->get();
                $items = [];
                foreach ($list_items as $item) {
                    $transaction = Transaction::where('contact_id', $item->contact_id)
                        ->whereIn('transaction_type', ['IN', 'CS'])
                        ->whereBetween('transaction_date', [$start_date, $end_date])
                        ->orderBy('transaction_date')
                        ->get();

                    $items[] = [
                        'customer' => $item->contact->name,
                        'list' => $transaction
                    ];
                }

                return $this->success([
                    //'data' => $customer_account,
                    'data' => view('reports.sales_by_customer', compact('items'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Transaction List by Vendor'):
                $list_items = Transaction::select('contact_id')
                    ->whereHas('contact', function ($query) {
                        $query->whereIn('type', ['Vendor']);
                    })
                    ->whereIn('transaction_type', ['BL', 'CP'])
                    ->whereBetween('transaction_date', [$start_date, $end_date])
                    ->distinct()
                    ->get();
                $items = [];
                foreach ($list_items as $item) {
                    $transaction = Transaction::where('contact_id', $item->contact_id)
                        ->whereIn('transaction_type', ['BL', 'CP'])
                        ->whereBetween('transaction_date', [$start_date, $end_date])
                        ->orderBy('transaction_date')
                        ->get();

                    $items[] = [
                        'customer' => $item->contact->name,
                        'list' => $transaction
                    ];
                }

                return $this->success([
                    //'data' => $customer_account,
                    'data' => view('reports.sales_by_customer', compact('items'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Income by Customer Summary'):
                $customers = Contact::where('type', 'Customer')->get();
                $customer_account = [];
                foreach ($customers as $customer) {
                    $account = Account::find($customer->receivable_account_id);
                    $transaction = $account->getTransactions($start_date, $end_date);
                    $customer_account[] = array_merge(['customer' => $customer], $transaction);
                }

                return $this->success([
                    'data' => $customer_account,
                    //'data' => view('reports.customer_income', compact('customer_account'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Open invoice'):
                $data = Transaction::whereBetween('transaction_date', [$start_date, $end_date])
                    ->whereNotIn('status', ['paid'])
                    ->where('transaction_type', 'IN')
                    ->get();

                return $this->success([
                    //'data' => $customer_account,
                    'data' => view('reports.open_invoice', compact('data'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);

            case strtoupper('Unpaid Bills'):
                $data = Transaction::whereBetween('transaction_date', [$start_date, $end_date])
                    ->whereNotIn('status', ['paid'])
                    ->where('transaction_type', 'BL')
                    ->get();

                return $this->success([
                    //'data' => $customer_account,
                    'data' => view('reports.unpaid_bill', compact('data'))->render(),
                    'start_date' => Carbon::parse($start_date)->isoFormat('DD MMMM Y'),
                    'end_date' => Carbon::parse($end_date)->isoFormat('DD MMMM Y'),
                    'width' => '12'
                ]);
        }

        throw new \Exception('No report match');
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        App::setLocale(auth()->user()->locale);

        return $this->success([
            'data' => $this->service->reportList()
        ]);
    }
}
