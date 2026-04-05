<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('Home', [
            'meta' => [
                'title' => 'Selamat datang di SPMB',
                'description' => 'Selamat datang di SPMB',
            ],
        ]);
    }
}
