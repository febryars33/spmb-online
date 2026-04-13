<?php

namespace App\Http\Controllers\Dashboard;

use App\Enums\RegistrationType;
use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Enrollment;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Throwable;

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

        // sementara pendaftaran siswa pindahan dinonaktifkan karena masih dalam tahap pengembangan.
        if ($request->type === RegistrationType::TRANSFER->value) {
            throw ValidationException::withMessages([
                'message' => 'Maaf, pendaftaran siswa pindahan saat ini belum dibuka.',
            ]);
        }

        try {
            $enrollment = Enrollment::where(function ($query) {
                $query->where('start_date', '<=', now())
                    ->where('end_date', '>=', now());
            })->firstOrFail();
        } catch (ModelNotFoundException $e) {
            throw ValidationException::withMessages([
                'message' => 'Maaf, pendaftaran siswa baru saat ini belum dibuka.',
            ]);
        }

        DB::beginTransaction();
        try {
            $candidate = $this->candidate()->create([
                'enrollment_id' => $enrollment->id,
                'type' => $request->type,
            ]);

            DB::commit();
        } catch (QueryException $e) {
            DB::rollBack();

            if (app()->environment('local')) {
                return back()
                    ->withErrors([
                        'file' => $e->getFile(),
                        'line' => $e->getLine(),
                        'message' => $e->getMessage(),
                    ]);
            }

            Log::emergency($e->getMessage(), [
                'type' => $request->type,
                'user_id' => Auth::id(),
                'enrollment_id' => $enrollment->id,
                'candidate_id' => $candidate->id,
                'request' => $request->all(),
            ]);

            return back()
                ->withErrors([
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'message' => __('Internal Server Error'),
                ]);
        } catch (Throwable $th) {
            DB::rollBack();

            if (app()->environment('local')) {
                return back()
                    ->withErrors([
                        'file' => $th->getFile(),
                        'line' => $th->getLine(),
                        'message' => $th->getMessage(),
                    ]);
            }

            Log::emergency($th->getMessage(), [
                'type' => $request->type,
                'user_id' => Auth::id(),
                'enrollment_id' => $enrollment->id,
                'candidate_id' => $candidate->id,
                'request' => $request->all(),
            ]);

            return back()
                ->withErrors([
                    'file' => $th->getFile(),
                    'line' => $th->getLine(),
                    'message' => __('Internal Server Error'),
                ]);
        }

        $candidate->parents()->createMany([
            ['type' => 'father'],
            ['type' => 'mother'],
            ['type' => 'guardian'],
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
