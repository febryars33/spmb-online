<?php

use App\Http\Controllers\Dashboard\FormController;
use App\Http\Controllers\Dashboard\HomeController;
use App\Http\Controllers\DocumentUploadController;
use Illuminate\Support\Facades\Route;

Route::prefix('/dashboard')
    ->name('dashboard.')
    ->group(function () {
        Route::get('/', [HomeController::class, 'index'])->name('home.index');
        Route::post('/', [HomeController::class, 'store'])->name('home.store');

        Route::get('/{candidate}', [FormController::class, 'guide'])->name('form.guide');
        Route::get('/{candidate}/form', [FormController::class, 'form'])->name('form.form');
        Route::get('/{candidate}/document', [FormController::class, 'document'])->name('form.document');
        Route::get('/{candidate}/send', [FormController::class, 'send'])->name('form.send');
        Route::get('/{candidate}/review', [FormController::class, 'review'])->name('form.review');
        Route::put('/{candidate}', [FormController::class, 'update'])->name('form.update');
        Route::delete('/{candidate}', [FormController::class, 'destroy'])->name('form.destroy');
        Route::patch('/{candidate}/document/{document}', [DocumentUploadController::class, 'setToNull'])->name('form.document.null');
    })->middleware(['auth', 'disable-ssr']);
