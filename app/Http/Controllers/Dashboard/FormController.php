<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Religion;
use App\Models\School;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Throwable;

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
            'religions' =>  Religion::all(),
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

        $candidate->load(['documentable']);

        return Inertia::render('Dashboard/Document', [
            'candidate' => $candidate,
            'meta' => [
                'title' => 'Dokumen Persyaratan',
                'description' => 'Halaman dokumen persyaratan yang menampilkan informasi dan data tentang kandidat.',
            ],
        ]);
    }

    public function send(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        if ($candidate->is_locked) {
            return to_route('dashboard.form.review', $candidate);
        }

        return Inertia::render('Dashboard/Send', [
            'candidate' => $candidate,
            'meta' => [
                'title' => 'Konfirmasi dan Kirim Berkas',
                'description' => 'Kirim berkas persyaratan dan konfirmasi formulir pendaftaran.',
            ],
        ]);
    }

    public function review(Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        $candidate->load(['reviews']);

        return Inertia::render('Dashboard/Review', [
            'candidate' => $candidate,
            'meta' => [
                'title' => 'Status Pengajuan Pendaftaran',
                'description' => 'asd',
            ],
        ]);
    }

    public function update(Request $request, Candidate $candidate)
    {
        Gate::authorize('update', $candidate);

        $request->merge([
            'school_id' => null
        ]);

        try {
            if ($candidate->is_locked) {
                return back()->withErrors([
                    'message' => 'Pendaftaran anda sedang dikunci. Silahkan tunggu beberapa saat lagi.',
                ]);
            }

            if (!is_null($request->school)) {
                $school = $request->array('school');
                if (is_null($school['id']) && !is_null($school['name'])) {
                    $school = School::create([
                        'name' => $school['name'],
                    ]);

                    $request->request->set('school_id', $school->id);
                } else {
                    $request->request->set('school_id', $school['id']);
                }
            }

            /** @var array $parents */
            $parents = $request->array('parents');

            $candidate->update($request->only([
                'name', 'kk_number', 'nik_number', 'nisn', 'birth_place', 'birth_date', 'address', 'religion_id', 'school_id', 'gender', 'birth_certificate_number',
            ]));

            foreach ($parents as $type => $data) {
                if (empty(array_filter($data))) {
                    continue;
                }

                $candidate->parents()->updateOrCreate(['type' => $type], $data);
            }

            return back();
        } catch (Throwable $th) {
            return back()->withErrors([
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function destroy(Candidate $candidate)
    {
        try {
            DB::transaction(function () use ($candidate) {
                if ($candidate->is_locked) {
                    return back()->withErrors([
                        'message' => 'Pendaftaran anda sedang dikunci. Silahkan tunggu beberapa saat lagi.',
                    ]);
                }

                $candidate->documentable()->delete();

                $candidate->parents()->delete();

                $candidate->delete();
            });

            Inertia::flash([
                'message' => 'Pendaftaran berhasil dihapus.',
            ]);

            return back();
        } catch (Throwable $th) {
            return back()->withErrors([
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function submit(Request $request, Candidate $candidate)
    {
        Gate::authorize('view', $candidate);

        $snapshot = $candidate->snapshot;

        if ($snapshot['progress'] !== 100) {
            return back()->withErrors([
                'message' => 'Silahkan lengkapi Formulir dan Berkas Persyaratan terlebih dahulu sampai 100%.',
            ]);
        }

        $request->validate([
            'agree' => [
                'required',
                'boolean',
                'accepted'
            ],
        ]);

        $candidate->update([
            'is_locked' => true,
        ]);

        return to_route('dashboard.form.review', $candidate);
    }
}
