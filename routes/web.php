<?php

use App\Http\Controllers\DocumentUploadController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\XenditTestController;
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

Route::get('/faq', FaqController::class)->name('faq');

Route::get('/xendit-test', XenditTestController::class);

Route::get('/semantic', function() {
    return view('semantic');
});

require __DIR__.'/auth.php';
require __DIR__.'/dashboard.php';
