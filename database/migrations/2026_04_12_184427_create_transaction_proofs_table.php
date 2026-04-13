<?php

use App\Models\Transaction;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transaction_proofs', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Transaction::class)
                ->constrained()
                ->restrictOnDelete();

            $table->string('original_path');
            $table->string('hashed_path');
            $table->string('sender_name');
            $table->string('bank_name');
            $table->text('note')->nullable();
            $table->timestamp('uploaded_at');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_proofs');
    }
};
