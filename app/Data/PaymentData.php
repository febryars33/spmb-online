<?php

namespace App\Data;

use Illuminate\Http\Request;

readonly class PaymentData
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        public string $candidate_id,
        public int $amount
    ) {}

    public static function fromRequest(Request $request): static
    {
        return new static(
            candidate_id: $request->candidate_id,
            amount: $request->amount
        );
    }
}
