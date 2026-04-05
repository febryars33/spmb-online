<?php

namespace App\Http\Controllers\Dashboard;

use App\Enums\RegistrationType;
use App\Http\Controllers\Controller;
use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard/Home', [
            'meta' => [
                'title' => 'Dashboard Orang Tua',
                'description' => 'Halaman dashboard orang tua yang menampilkan informasi dan data tentang kandidat.',
            ],
            'candidates' => Inertia::scroll(function () {
                return Candidate::whereUserId(Auth::id())->paginate(9);
            }),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'type' => [
                'required',
                Rule::in(RegistrationType::cases()),
            ],
        ]);

        $this->candidate()->create([
            'type' => $request->type,
        ]);

        Inertia::flash([
            'message' => 'Pendaftaran berhasil ditambahkan.',
        ]);

        return back();
    }

    protected function candidate()
    {
        /** @var App\Models\User $ user */
        $user = request()->user();

        return $user->candidates();
    }
}
