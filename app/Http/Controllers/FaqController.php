<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use RalphJSmit\Laravel\SEO\Support\SEOData;

class FaqController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Faq', [
            'seo' => new SEOData(
                title: 'FAQ',
                description: 'Pertanyaan yang sering ditanyakan',
            ),
        ]);
    }
}
