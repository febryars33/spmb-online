<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

class DocumentUploadController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'id'    =>    [
                'required',
                'exists:documents,id',
            ],
            'file' => [
                'required',
                'file',
            ],
        ]);

        $id = (int) $request->id;
        $file = $request->file('file');

        $document = Document::find($id);

        $name = $file->hashName();
        $extension = $file->extension();
        $size = $file->getSize();
        $mime = $file->getMimeType();

        $path = $file->storeAs("documents/$document->documentable_id", $name, 'public');

        // dd($path);

        $document->update([
            'path' => $path,
            'name' => $name,
            'extension' => $extension,
            'size' => $size,
            'mime' => $mime,
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
            'path' => null
        ]);

        return back();
    }
}
