<?php

namespace App\Repository;

use App\Data\PaymentData;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TransactionRepository
{
    protected User $auth;

    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        $this->auth = Auth::user();
    }

    public function create(PaymentData $dto)
    {
        return Transaction::create([
            'user_id'   =>  $this->auth->id,
            'candidate_id'  =>  $dto->candidate_id,
            'amount'    =>  $dto->amount
        ]);
    }
}
