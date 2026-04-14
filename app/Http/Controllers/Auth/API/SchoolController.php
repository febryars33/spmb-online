<?php

namespace App\Http\Controllers\Auth\API;

use App\Http\Controllers\Controller;
use App\Models\School;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $school = School::query()
            ->select(['id', 'name', 'address']);

        if ($request->query('search')) {
            $school->where('name', 'like', "%{$request->query('search')}%")
                ->orWhere('address', 'like', "%{$request->query('search')}%");
        }

        return response()->json($school->paginate());
    }

    /**
     * Display the specified resource.
     */
    public function show(School $school)
    {
        return response()->json($school->only(['id', 'name', 'address']));
    }
}
