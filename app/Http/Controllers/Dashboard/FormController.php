<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Religion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

    public function form(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        $candidate->loadMissing(['religion', 'parents']);

        $candidate->setRelation('parents', $candidate->parents->mapWithKeys(function ($item) {
            return [$item->type => [
                'id' => $item->id,
                'name' => $item->name,
                'address' => $item->address,
            ]];
        }));

        return Inertia::render('Dashboard/Form', [
            'religions' => Religion::all(),
            'candidate' => $candidate,
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
        $candidate->loadCount('documentable');

        return Inertia::render('Dashboard/Document', [
            'candidate' => $candidate,
            'meta' => [
                'title' => 'Dokumen Persyaratan',
                'description' => 'asd',
            ],
        ]);
    }

    public function send(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        return Inertia::render('Dashboard/Send', [
            'candidate' => $candidate,
            'meta' => [
                'title' => 'Konfirmasi & Kirim Berkas',
                'description' => 'asd',
            ],
        ]);
    }

    public function review(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        return Inertia::render('Dashboard/Review', [
            'candidate' => $candidate,
            'meta' => [
                'title' => 'Status Review Pendaftaran',
                'description' => 'asd',
            ],
        ]);
    }

    public function update(Request $request, Candidate $candidate)
    {

        DB::transaction(function () use ($request, $candidate) {
            /** @var array $parents */
            $parents = $request->array('parents');

            $candidate->update($request->only([
                'name', 'kk_number', 'nik_number', 'nisn', 'birth_place', 'birth_date', 'address', 'religion_id', 'gender', 'birth_certificate_number',
            ]));

            foreach ($parents as $type => $data) {
                if (empty(array_filter($data))) {
                    continue;
                }

                $candidate->parents()->updateOrCreate(['type' => $type], $data);
            }

            return back();
        });
    }

    public function destroy(Candidate $candidate)
    {
        $candidate->delete();

        $candidate->parents()->delete();

        $candidate->documentable()->delete();

        Inertia::flash([
            'message' => 'Pendaftaran berhasil dihapus.',
        ]);

        return back();
    }
}
