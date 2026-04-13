<?php

use App\Enums\RegistrationType;
use App\Models\District;
use App\Models\Enrollment;
use App\Models\Province;
use App\Models\Regency;
use App\Models\Religion;
use App\Models\SubDistrict;
use App\Models\User;
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
        Schema::create('candidates', function (Blueprint $table) {
            $table->uuid('id')
                ->primary()
                ->unique();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Province::class)->nullable();
            $table->foreignIdFor(Regency::class)->nullable();
            $table->foreignIdFor(District::class)->nullable();
            $table->foreignIdFor(SubDistrict::class)->nullable();
            $table->foreignIdFor(Enrollment::class)->nullable(); // if nullable it means transfer student
            $table->string('registration_number')
                ->unique()
                ->nullable();
            $table->string('kk_number', 16)->nullable();
            $table->string('nik_number', 16)->nullable();
            $table->string('name')->nullable();
            $table->string('nisn', 10)->nullable();
            $table->string('gender')->nullable();
            $table->string('birth_certificate_number')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('birth_place')->nullable();
            $table->longText('address')->nullable();
            $table->foreignIdFor(Religion::class)
                ->nullable()
                ->constrained('religions')
                ->onDelete('restrict');
            $table->string('religion_other')->nullable();
            $table->enum('type', RegistrationType::cases())
                ->nullable();
            $table->boolean('is_locked')->default(false);
            $table->json('snapshot')->nullable();

            $table->fullText([
                'nisn',
                'name',
                'kk_number',
                'nik_number',
                'birth_place',
                'address',
                'birth_certificate_number',
            ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidates');
    }
};
