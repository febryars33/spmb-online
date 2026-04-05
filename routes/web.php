<?php

use App\Http\Controllers\DocumentUploadController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', HomeController::class)->name('home');
Route::get('/check', function () {
    return Inertia::render('Check', [
        'meta' => [
            'title' => 'Lacak Pendaftaran',
            'description' => 'Masukkan Nomor Registrasi untuk melihat status terbaru pendaftaran putra-putri Anda.',
        ],
    ]);
})->name('check');

Route::post('/document-upload', DocumentUploadController::class)->name('document.upload');

Route::get('/faq', FaqController::class)->name('faq');

require __DIR__.'/auth.php';
require __DIR__.'/dashboard.php';
