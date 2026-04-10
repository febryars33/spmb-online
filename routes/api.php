<?php

use App\Http\Controllers\Auth\API\ProvinceController;
use Illuminate\Support\Facades\Route;

Route::prefix('/regionals')->name('regionals.')->group(function () {
    Route::get('/provinces', [ProvinceController::class, 'index'])->name('provinces.index');
    Route::get('/provinces/{province}', [ProvinceController::class, 'show'])->name('provinces.show');
    Route::get('/regencies/{province_id}', 'App\Http\Controllers\RegencyController@index');
    Route::get('/districts/{regency_id}', 'App\Http\Controllers\DistrictController@index');
    Route::get('/sub-districts/{district_id}', 'App\Http\Controllers\SubDistrictController@index');
});
