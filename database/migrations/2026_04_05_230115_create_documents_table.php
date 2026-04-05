<?php

use App\Models\DocumentType;
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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(DocumentType::class);
            $table->uuidMorphs('documentable');
            $table->string('path')->nullable();
            $table->string('name')->nullable();
            $table->string('extension')->nullable();
            $table->string('mime')->nullable();
            $table->integer('size')->nullable();
            $table->json('allowed_extensions')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->fullText(['path', 'name', 'extension', 'mime']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
