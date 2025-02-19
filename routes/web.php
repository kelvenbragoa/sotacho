<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\GlobalController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('homepage');
});
Route::get('/homepage', function () {
    return view('homepage');
});


Route::get('/relatorio',[GlobalController::class,'relatorio']);


//Last route to overlap every route hitting laravel route

Route::get('{view}', ApplicationController::class)->where('view','(.*)');