<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFeatureRequest;
use App\Http\Resources\FeatureResource;
use App\Models\Feature;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;
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
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('Feature/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreFeatureRequest $request)
  {
    Feature::create($request->all());

    return redirect()->route('features.index')->with('success', 'Feature created successfully.');
  }

  /**
   * Display the specified resource.
   */
  public function show(Feature $feature)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Feature $feature)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Feature $feature)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Feature $feature)
  {
    //
  }
}
