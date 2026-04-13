<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

#[Fillable([
    'candidate_id',
    'review_type_id',
    'note'
])]
class CandidateReviewType extends Pivot implements HasMedia
{
    use InteractsWithMedia;

    protected $with = [
        'media'
    ];
}
