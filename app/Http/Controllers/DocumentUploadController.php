<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DocumentUploadController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Candidate $candidate, Document $document)
    {
        // dd($request->all(), $candidate, $document);
        $request->validate([
            'file' => [
                'required',
                'file',
            ],
        ]);

        $file = $request->file('file');

        $name = $file->hashName();
        $extension = $file->extension();
        $size = $file->getSize();
        $mime = $file->getMimeType();

        $path = $file->storeAs("documents/$document->documentable_id", $name, 'public');

        $document->update([
            'path' => $path,
            'name' => $name,
            'extension' => $extension,
            'size' => $size,
            'mime' => $mime,
        ]);

        $candidate->touch();

        Inertia::flash([
            'message' => 'Dokumen berhasil diunggah.',
        ]);

        return back();
    }

    public function setToNull(Candidate $candidate, Document $document)
    {
        Gate::authorize('update', $candidate);

        $storage = Storage::disk('public');

        if ($storage->exists($document->path) && $document->path !== null) {
            $storage->delete($document->path);
        }

        $document->update([
            'name' => null,
            'extension' => null,
            'size' => null,
            'mime' => null,
            'path' => null,
        ]);

        $candidate->touch();

        return back();
    }
}
