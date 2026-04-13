<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

#[Fillable([
    'title',
    'slug',
    'description',
    'start_date',
    'end_date',
])]
class Enrollment extends Model
{
    use HasSlug;

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    /**
     * The requirements that belong to the Enrollment
     */
    public function requirements(): BelongsToMany
    {
        return $this->belongsToMany(DocumentType::class)
            ->withPivot(['is_required']);
    }
}
