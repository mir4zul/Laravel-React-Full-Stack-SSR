<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feature>
 */
class FeatureFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'name' => fake()->name(),
      'description' => fake()->text(1000),
      'user_id' => User::Where('email', 'admin@example.com')->first()->id ?? 1, // Assuming you have a User model and at least one admin user
      'created_at' => fake()->dateTime(),
      'updated_at' => fake()->dateTime(),
    ];
  }
}
