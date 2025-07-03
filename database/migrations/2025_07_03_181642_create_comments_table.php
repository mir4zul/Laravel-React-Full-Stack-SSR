<?php

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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId(\App\Models\Feature::class, 'feature_id')
                ->constrained('features')
                ->cascadeOnDelete('cascade');
            $table->foreignId(\App\Models\User::class, 'user_id')
                ->constrained('users')
                ->cascadeOnDelete('cascade');
            $table->longText('comment', 2000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
