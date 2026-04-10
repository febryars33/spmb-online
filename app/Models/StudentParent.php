<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'name',
    'nik_number',
    'job',
    'phone',
    'address',
    'type',
])]
class StudentParent extends Model
{
    //
}
