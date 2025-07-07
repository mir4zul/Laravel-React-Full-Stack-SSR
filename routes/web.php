<?php

use App\Http\Controllers\FeatureController;
use App\Models\Feature;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('dashboard', function () {
    return Inertia::render('dashboard');
  })->name('dashboard');

  Route::get('features', [FeatureController::class, 'index'])->name('features.index');
  Route::post('features', [FeatureController::class, 'store'])->name('features.store');
  Route::delete('features/{feature}', [FeatureController::class, 'destroy'])->name('features.destroy');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
