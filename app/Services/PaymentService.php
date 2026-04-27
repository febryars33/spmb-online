<?php

namespace App\Services;

use App\Data\PaymentData;
use App\Exceptions\PaymentRequestException;
use App\Repositories\TransactionRepository;
use Illuminate\Support\Facades\DB;
use Throwable;

class PaymentService
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        protected TransactionRepository $transaction
    )
    {
        //
    }

    public function createTransaction(PaymentData $dto)
    {
        return DB::transaction(function() use ($dto) {
            try {
                return $this->transaction->create($dto);
            } catch (Throwable $th) {
                throw new PaymentRequestException(
                    message: 'Gagal melakukan pembayaran',
                    previous: $th
                );
            }
        });
    }
}
