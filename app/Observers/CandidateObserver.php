<?php

namespace App\Observers;

use App\Models\Candidate;

class CandidateObserver
{
    /**
     * Handle the Candidate "created" event.
     */
    public function created(Candidate $candidate): void
    {
        $documentTypes = $candidate->enrollment->requirements;

        if ($documentTypes->isEmpty()) {
            return;
        }

        $documents = $documentTypes->map(function ($documentTypes) use ($candidate): array {
            return [
                'documentable_id' => $candidate->id,
                'documentable_type' => Candidate::class,
                'document_type_id' => $documentTypes->id
            ];
        });

        $candidate->documentable()->createMany($documents);
    }

    /**
     * Handle the Candidate "updated" event.
     */
    public function updated(Candidate $candidate): void
    {
        //
    }

    /**
     * Handle the Candidate "deleted" event.
     */
    public function deleted(Candidate $candidate): void
    {
        //
    }

    /**
     * Handle the Candidate "restored" event.
     */
    public function restored(Candidate $candidate): void
    {
        //
    }

    /**
     * Handle the Candidate "force deleted" event.
     */
    public function forceDeleted(Candidate $candidate): void
    {
        //
    }
}
