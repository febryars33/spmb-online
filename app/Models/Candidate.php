<?php

namespace App\Models;

use App\Enums\RegistrationType;
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
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
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
    'religion_id',
    'religion_other',
    'gender',
    'birth_certificate_number',
    'is_locked',
    'snapshot',
])]
#[Appends([
    'progress',
    'counted_fields',
    'counted_documents',
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

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'type'      =>  RegistrationType::class,
            'is_locked' =>  'boolean',
            'snapshot'  =>  'json',
        ];
    }

    public function progress(): Attribute
    {
        return Attribute::make(
            get: fn () => round(($this->counted_fields + $this->counted_documents) / 2)
        );
    }

    public function countedDocuments(): Attribute
    {
        return Attribute::make(
            get: function (): int {
                $documents = $this->relationLoaded('documentable')
                    ? $this->documentable
                    : $this->documentable()->get(['id', 'name']);

                $total = $documents->where('is_required', true)->count();

                if ($total === 0) {
                    return 0;
                }

                $filled = $documents->whereNotNull('path')
                    ->whereNotNull('name')
                    ->where('is_required', true)
                    ->count();

                return (int) round(($filled / $total) * 100);
            }
        );
    }

    public function countedFields(): Attribute
    {
        return Attribute::make(
            get: function () {
                $fields = collect($this->attributes)
                    ->forget(['id', 'user_id', 'province_id', 'regency_id', 'district_id', 'sub_district_id', 'enrollment_id', 'type', 'religion_other', 'is_locked', 'snapshot', 'created_at', 'updated_at']);

                if ($fields->isEmpty()) {
                    return 0;
                }

                $filled = 0;

                foreach ($fields as $value) {
                    if (!is_null($value)) {
                        $filled++;
                    }
                }

                return (int) round(($filled / $fields->count()) * 100);
            }
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
     * The reviews that belong to the Candidate
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function reviews(): BelongsToMany
    {
        return $this->belongsToMany(ReviewType::class)
            ->using(CandidateReviewType::class)
            ->withPivot(['id', 'note'])
            ->withTimestamps();
    }
}
