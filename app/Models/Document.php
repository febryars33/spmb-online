<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Appends;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'path',
    'name',
    'extension',
    'size',
    'mime',
    'document_type_id',
    'documentable_type',
    'documentable_id',
])]
#[Appends([
    'url',
])]
class Document extends Model
{
    protected $with = [
        'document_type',
    ];

    /**
     * Get the document_type that owns the Document
     */
    public function document_type(): BelongsTo
    {
        return $this->belongsTo(DocumentType::class);
    }

    public function url(): Attribute
    {
        return Attribute::make(function () {
            if (is_null($this->path)) {
                return null;
            }

            return asset('storage'.'/'.$this->path);
        });
    }
}
