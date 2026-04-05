<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\WithoutTimestamps;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[WithoutTimestamps]
class Religion extends Model
{
    /**
     * Get all of the candidates for the Religion
     */
    public function candidates(): HasMany
    {
        return $this->hasMany(Candidate::class);
    }
}
