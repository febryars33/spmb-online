<?php

use App\Models\DocumentType;
use App\Models\Enrollment;
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
        Schema::create('document_type_enrollment', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Enrollment::class);
            $table->foreignIdFor(DocumentType::class);
            $table->longText('note')->nullable();
            $table->boolean('is_required')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('document_type_enrollment');
    }
};
