<?php

use App\Http\Controllers\Api\Mobile\AuthMobileController;
use App\Http\Controllers\Api\Mobile\TableMobileController;
use App\Http\Controllers\Api\Web\AuthWebController;
use App\Http\Controllers\Api\Web\CashRegisterController;
use App\Http\Controllers\Api\Web\CategoryController;
use App\Http\Controllers\Api\Web\CenterStocksController;
use App\Http\Controllers\Api\Web\CustomerController;
use App\Http\Controllers\Api\Web\EntryNotesController;
use App\Http\Controllers\Api\Web\ExitNotesController;
use App\Http\Controllers\Api\Web\InventoriesController;
use App\Http\Controllers\Api\Web\OrderController;
use App\Http\Controllers\Api\Web\PaymentController;
use App\Http\Controllers\Api\Web\PaymentMethodController;
use App\Http\Controllers\Api\Web\PdvController;
use App\Http\Controllers\Api\Web\ProductController;
use App\Http\Controllers\Api\Web\ReservationController;
use App\Http\Controllers\Api\Web\StockTransferController;
use App\Http\Controllers\Api\Web\SubCategoryController;
use App\Http\Controllers\Api\Web\SuppliersController;
use App\Http\Controllers\Api\Web\TableController;
use App\Http\Controllers\Api\Web\UserController;
use App\Http\Middleware\Sanctum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('login',[AuthWebController::class,'login']);
Route::post('/barman-login', [AuthMobileController::class, 'login']);


Route::middleware([Sanctum::class])->group(function () {

    
    Route::get('auxiliar-product/{id}',[StockTransferController::class,'products']);

    Route::get('auxiliar',[InventoriesController::class,'center']);

    Route::resource('entrynotes', EntryNotesController::class);
    Route::resource('exitnotes', ExitNotesController::class);

    Route::resource('inventories', InventoriesController::class);

    Route::resource('stocktransfers', StockTransferController::class);

    Route::resource('centerstocks', CenterStocksController::class);
    Route::resource('suppliers', SuppliersController::class);

    Route::resource('categories', CategoryController::class);
    Route::resource('subcategories', SubCategoryController::class);
    Route::resource('products', ProductController::class);
    Route::resource('customers', CustomerController::class);
    Route::resource('tables', TableController::class);
    Route::post('logout',[AuthWebController::class,'logout']);


    Route::resource('paymentmethods', PaymentMethodController::class);

    Route::resource('users', UserController::class);
    Route::resource('reservations', ReservationController::class);

    Route::resource('pdv', PdvController::class);
    Route::get('pdvquicksellslist',[PdvController::class,'listquicksells']);


    Route::get('pdv/quicksell',[PdvController::class,'quicksell']);
    Route::post('pdv/quicksell',[PdvController::class,'savequicksell']);
    



    Route::post('getreceipt/{id}',[PdvController::class,'getreceipt']);
    Route::post('getquickreceipt/{id}',[PdvController::class,'getquickreceipt']);

    Route::get('pdv/closeaccount/{id}',[PdvController::class,'closeaccount']);

    Route::post('payaccount',[PdvController::class,'payaccount']);
    Route::post('order/report',[OrderController::class,'report']);



    Route::resource('payments', PaymentController::class);
    Route::resource('orders', OrderController::class);

    Route::post('orderitem/{id}',[OrderController::class,'deleteorderitem']);
    Route::post('quickorderdelete/{id}',[OrderController::class,'deleteorder']);

    Route::get('cashregisters/report',[CashRegisterController::class,'report']);





    Route::get('pdvkitchen',[PdvController::class,'indexKitchen']);

    Route::get('changestatus/{id}',[PdvController::class,'changestatus']);

    Route::get('pdvbar',[PdvController::class,'indexBar']);

    Route::get('barchangestatus/{id}',[PdvController::class,'barchangestatus']);


    Route::post('cashregisters/open',[CashRegisterController::class,'open']);
    // Route::resource('cashregisters', CashRegisterController::class);

    Route::get('cashregister',[CashRegisterController::class,'index']);
    Route::get('cashregister/{id}',[CashRegisterController::class,'show']);


    Route::post('cashregisters/close',[CashRegisterController::class,'close']);

    Route::get('cashregisters/dashboard',[CashRegisterController::class,'dashboard']);

    Route::get('cashregisters/dailydashboard',[CashRegisterController::class,'dailydashboard']);
    Route::get('daily/quicksellreport',[CashRegisterController::class,'quicksellreportdaily']);
    Route::get('daily/tablesellreport',[CashRegisterController::class,'tablesellreportdaily']);
    Route::get('daily/paymentreport',[CashRegisterController::class,'paymentreportdaily']);


    

    Route::get('cashregisters/quicksellreport',[CashRegisterController::class,'quicksellreport']);
    Route::get('cashregisters/tablesellreport',[CashRegisterController::class,'tablesellreport']);
    Route::get('cashregisters/paymentreport',[CashRegisterController::class,'paymentreport']);



    Route::resource('mobile-tables', TableMobileController::class);

    Route::post('createorder',[TableMobileController::class,'createorder']);

    Route::get('consumption/{id}',[TableMobileController::class,'consumption']);

    Route::get('closeaccount/{id}',[TableMobileController::class,'closeaccount']);

    Route::post('mobile-savequicksell',[TableMobileController::class,'savequicksell']);




    Route::get('mobile-cashregister/open',[TableMobileController::class,'openCashRegister']);

    Route::post('mobile-cashregister/close',[TableMobileController::class,'closeCashRegister']);

    Route::get('mobile-home',[TableMobileController::class,'home']);


    Route::get('quicksellpdv',[TableMobileController::class,'quicksell']);

    Route::get('getuserdetails/{token}',[AuthMobileController::class,'getuserdetails']);




});







