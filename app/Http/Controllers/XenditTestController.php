<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Illuminate\Http\Request;

class XenditTestController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $candidate = Candidate::with(['reviews'])->find('019d526b-0413-71a2-86bc-34bba43f04e2');

        return response()->json($candidate);
    }
}
