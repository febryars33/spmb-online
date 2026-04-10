<?php

namespace App\Http\Controllers\Auth\API;

use App\Http\Controllers\Controller;
use App\Models\Province;

class ProvinceController extends Controller
{
    public function index()
    {
        return response()->json(Province::paginate());
    }

    public function show(Province $province)
    {
        return response()->json($province);
    }
}
