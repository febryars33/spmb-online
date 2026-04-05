<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Religion;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class FormController extends Controller
{
    public function guide(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        return Inertia::render('Dashboard/Guide', [
            'candidate' => $candidate,
            'meta' => [
                'title' => 'Petunjuk Pengisian Formulir',
                'description' => 'Halaman petunjuk pengisian formulir yang menampilkan informasi dan data tentang kandidat.',
            ],
            'guides' => [
                'Diisi dengan huruf cetak / kapital.',
                'Tempat dan Tanggal Lahir diisi sesuai dengan Akte / Kenal Lahir.',
                'Jumlah Saudara Kandung tidak termasuk siswa yang bersangkutan.',
                'Kolom pekerjaan diisi dengan jenis pekerjaan yang spesifik.',
                'Pada bagian "IDENTITAS SEKOLAH ASAL" wajib diisi (Tidak boleh dikosongkan).',
            ],
            'navigate' => [
                'previous' => null,
                'next' => route('dashboard.form.form', $candidate->id),
            ],
        ]);
    }

    public function show(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        $candidate->loadMissing(['religion']);

        return Inertia::render('Dashboard/Form', [
            'religions'  =>  Religion::all(),
            'candidate' =>  $candidate,
            'meta' => [
                'title' => 'Formulir Pendaftaran',
                'description' => 'Halaman formulir pendaftaran yang menampilkan informasi dan data tentang kandidat.',
            ],
        ]);
    }

    public function document(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        $candidate->load(['documentable.document_type']);

        // dd($candidate->toArray());

        return Inertia::render('Dashboard/Document', [
            'candidate' =>  $candidate,
            'meta'  =>  [
                'title' =>  'Dokumen Persyaratan',
                'description'   =>  'asd'
            ]
        ]);
    }

    public function send(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        return Inertia::render('Dashboard/Send', [
            'candidate' =>  $candidate,
            'meta'  =>  [
                'title' =>  'Konfirmasi & Kirim Berkas',
                'description'   =>  'asd'
            ]
        ]);
    }

    public function review(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        return Inertia::render('Dashboard/Review', [
            'candidate' =>  $candidate,
            'meta'  =>  [
                'title' =>  'Status Review Pendaftaran',
                'description'   =>  'asd'
            ]
        ]);
    }

    public function update(Request $request, Candidate $candidate)
    {
        $candidate->update($request->all());

        return back();
    }

    public function destroy(Candidate $candidate)
    {
        $candidate->delete();

        Inertia::flash([
            'message' => 'Pendaftaran berhasil dihapus.',
        ]);

        return back();
    }
}
