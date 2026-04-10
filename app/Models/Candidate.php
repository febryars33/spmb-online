<?php

namespace App\Models;

use App\Observers\CandidateObserver;
use App\Policies\CandidatePolicy;
use Illuminate\Database\Eloquent\Attributes\Appends;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\UsePolicy;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

#[Fillable([
    'user_id',
    'type',
    'name',
    'nisn',
    'kk_number',
    'nik_number',
    'province_id',
    'regency_id',
    'district_id',
    'sub_district_id',
    'enrollment_id',
    'birth_date',
    'birth_place',
    'address',
    'father_name',
    'mother_name',
    'religion_id',
    'gender',
    'birth_certificate_number',
])]
#[Appends([
    'completeness',
    'progress',
])]
#[UsePolicy(CandidatePolicy::class)]
#[ObservedBy(CandidateObserver::class)]
class Candidate extends Model
{
    use HasUuids;

    /**
     * The relations to eager load on every query.
     */
    protected $with = [
        'religion',
    ];

    public function progress(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->completeness
        );
    }

    /**
     * Get the user that owns the Candidate
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the religion that owns the Candidate
     */
    public function religion(): BelongsTo
    {
        return $this->belongsTo(Religion::class);
    }

    /**
     * Get the documentable that owns the Candidate
     *
     * @return BelongsTo
     */
    public function documentable(): MorphMany
    {
        return $this->morphMany(Document::class, 'documentable');
    }

    /**
     * Get all of the parents for the Candidate
     */
    public function parents(): HasMany
    {
        return $this->hasMany(StudentParent::class);
    }

    /**
     * Get the enrollment that owns the Candidate
     */
    public function enrollment(): BelongsTo
    {
        return $this->belongsTo(Enrollment::class);
    }

    /**
     * Percentage of required documents that have been uploaded.
     * Utilizes already-loaded relation to avoid N+1.
     */
    public function completeness(): Attribute
    {
        return Attribute::make(
            get: function (): int {
                $documents = $this->relationLoaded('documentable')
                    ? $this->documentable
                    : $this->documentable()->get(['id', 'name']);

                $total = $documents->count();

                if ($total === 0) {
                    return 0;
                }

                $filled = $documents->whereNotNull('name')->count();

                return (int) round(($filled / $total) * 100);
            }
        );
    }
}
