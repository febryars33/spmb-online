<?php

use App\Models\Candidate;
use App\Models\District;
use App\Models\Education;
use App\Models\Province;
use App\Models\Regency;
use App\Models\Religion;
use App\Models\SubDistrict;
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
        Schema::create('student_parents', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Candidate::class)->nullable();
            $table->foreignIdFor(Religion::class)->nullable();
            $table->foreignIdFor(Education::class)->nullable();
            $table->foreignIdFor(Province::class)->nullable();
            $table->foreignIdFor(Regency::class)->nullable();
            $table->foreignIdFor(District::class)->nullable();
            $table->foreignIdFor(SubDistrict::class)->nullable();
            $table->string('name')->nullable();
            $table->string('nik_number', 16)->nullable();
            $table->string('phone')->nullable();
            $table->text('address')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('birth_place')->nullable();
            $table->string('job')->nullable();
            $table->integer('average_income')->nullable();
            $table->enum('type', ['father', 'mother', 'guardian'])->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_parents');
    }
};
