<?php

use App\Http\Controllers\FeatureController;
use App\Http\Controllers\UpvoteController;
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
  Route::get('features/{feature}', [FeatureController::class, 'show'])->name('features.show');
  Route::get('features/{feature}/edit', [FeatureController::class, 'edit'])->name('features.edit');
  Route::put('features/{feature}', [FeatureController::class, 'update'])->name('features.update');
  Route::delete('features/{feature}', [FeatureController::class, 'destroy'])->name('features.destroy');

  Route::post('features/{feature}/upvote', [UpvoteController::class, 'store'])->name('upvote.store');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
