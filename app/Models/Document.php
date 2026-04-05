<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

#[Fillable([
    'path',
    'name',
    'extension',
    'size',
    'mime',
    'document_type_id',
    'documentable_type',
    'documentable_id'
])]
class Document extends Model
{
    use SoftDeletes;

    protected $with = [
        'document_type'
    ];

    /**
     * Get the document_type that owns the Document
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function document_type(): BelongsTo
    {
        return $this->belongsTo(DocumentType::class);
    }
}
