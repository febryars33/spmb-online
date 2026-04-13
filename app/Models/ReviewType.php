<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Appends;
use Illuminate\Database\Eloquent\Attributes\WithoutTimestamps;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

#[WithoutTimestamps]
class ReviewType extends Model
{
    public function color(): Attribute
    {
        return Attribute::make(function($value) {
            if (is_null($value) || !preg_match('/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i', $value)) {
                return '#ffffff';
            }

            return $value;
        });
    }
}
