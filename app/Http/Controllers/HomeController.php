<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use RalphJSmit\Laravel\SEO\Support\SEOData;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('Home', [
            'seo' => new SEOData(
                title: 'Selamat datang di SPMB',
                description: 'SPMB SMA PGRI 1 Bandung',
            ),
        ]);
    }
}
