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
        Schema::create('upvotes', function (Blueprint $table) {
            $table->id();
            $table->foreignId(\App\Models\Feature::class, 'feature_id')
                ->constrained()
                ->cascadeOnDelete('cascade');
            $table->foreignId(\App\Models\User::class, 'user_id')
                ->constrained()
                ->cascadeOnDelete('cascade');
               $table->boolean('upvote');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('upvotes');
    }
};
