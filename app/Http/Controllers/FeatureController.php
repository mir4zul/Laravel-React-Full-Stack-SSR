<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFeatureRequest;
use App\Http\Resources\FeatureResource;
use App\Models\Feature;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FeatureController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $features = Feature::latest()->paginate();

    return Inertia::render('Feature/Index', [
      'features' => FeatureResource::collection($features)
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreFeatureRequest $request)
  {
    Feature::create([
      'name' => $request->name,
      'description' => $request->description,
      'user_id' => Auth::user()->id,
    ]);

    return redirect()->route('features.index')->with('success', 'Feature created successfully.');
  }

  /**
   * Display the specified resource.
   */
  public function show(Feature $feature)
  {
    return Inertia::render('Feature/Show', [
      'feature' => new FeatureResource($feature)
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Feature $feature)
  {
    return Inertia::render('Feature/Edit', [
      'feature' => new FeatureResource($feature)
    ])->with("success", 'Feature updated successfully.');
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(StoreFeatureRequest $request, Feature $feature)
  {
    $feature->update([
      'name' => $request->name,
      'description' => $request->description,
    ]);

    return redirect()->route('features.index')->with('success', 'Feature updated successfully.');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Feature $feature)
  {
    $feature->delete();

    return redirect()->route('features.index')->with('success', 'Feature deleted successfully.');
  }
}
