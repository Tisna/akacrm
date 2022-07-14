<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessPartner\ContactController;
use App\Http\Controllers\Documents\DocumentController;
use App\Http\Controllers\File\FileController;
use App\Http\Controllers\Inventory\ItemCategoryController;
use App\Http\Controllers\Inventory\ItemController;
use App\Http\Controllers\Inventory\ItemGroupController;
use App\Http\Controllers\Inventory\ItemUnitController;
use App\Http\Controllers\Inventory\WarehouseController;
use App\Http\Controllers\Settings\SettingController;
use App\Http\Controllers\Transactions\TransactionController;
use Illuminate\Support\Facades\Route;

Route::get('logo', [\App\Http\Controllers\Settings\LogoController::class, 'index']);
// List nav bar menu for guest
Route::post('/auth/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('menus', [AuthController::class, 'menus']);

    Route::group(['prefix' => 'auth'], function () {
        Route::post('/roles', [AuthController::class, 'roles']);
        Route::post('/permissions', [AuthController::class, 'permissions']);
        Route::get('/user', [AuthController::class, 'user']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
    });
    // Inventory routes
    Route::group(['prefix' => 'inventory'], function () {
        Route::apiResources([
            'items' => ItemController::class,
            'item-units' => ItemUnitController::class,
            'item-category' => ItemCategoryController::class,
            'item-groups' => ItemGroupController::class,
            'warehouse' => WarehouseController::class,
        ]);
    });

    Route::group(['prefix' => 'bp'], function () {
        Route::delete('delete-bank/{id}', [ContactController::class, 'deleteBank']);
        Route::delete('delete-email/{id}', [ContactController::class, 'deleteEmail']);
        Route::apiResources([
            'contacts' => ContactController::class,
        ]);
    });

    // List all master routes
    Route::prefix('master')
        ->group(__DIR__.'/master.php');

    // payroll route
    Route::group(['prefix' => 'payroll'], function () {
        Route::apiResources([
            'employees' => \App\Http\Controllers\Payroll\EmployeeController::class,
            'contractors' => \App\Http\Controllers\Payroll\ContractorController::class,
            'work-locations' => \App\Http\Controllers\Payroll\WorkLocationController::class,
        ]);
    });

    Route::apiResources([
        'payrolls' => \App\Http\Controllers\Payroll\PayrollController::class,
    ]);

    // List all sales routes
    Route::apiResources([
        'transactions' => TransactionController::class,
    ]);

    // List all documents routes
    Route::post('document-files', [FileController::class, 'store']);
    Route::get('document-files', [FileController::class, 'index']);
    Route::delete('document-files', [FileController::class, 'destroy']);

    Route::group(['prefix' => 'document'], function () {
        // Route::get('form/arrow', [DocumentController::class, 'arrowAction']);
        Route::get('audit/{id}', [DocumentController::class, 'getAudit']);
        Route::get('copy/{id}', [\App\Http\Controllers\Common\CopyDocumentController::class, 'copyDocument']);
        Route::get('print', [\App\Http\Controllers\Documents\DocumentExportController::class, 'print']);
        Route::post('email', [\App\Http\Controllers\Documents\DocumentExportController::class, 'email']);
    });

    Route::apiResource('documents', DocumentController::class);

    // List all master routes
    Route::prefix('financial')
        ->group(__DIR__.'/financial.php');

    // Route Resource for settings
    Route::apiResources([
        'entities' => \App\Http\Controllers\Settings\EntityController::class,
        'settings' => SettingController::class,
    ]);
});
