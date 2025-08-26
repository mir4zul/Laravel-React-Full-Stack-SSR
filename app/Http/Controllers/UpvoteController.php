<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpvoteController extends Controller
{
  public function store(Request $request)
  {
    $data = $request->validate([
      'feature_id' => 'required|exists:features,id',
      'upvote' => 'required|boolean',
    ]);

    $feature = Feature::findOrFail($data['feature_id']);
    $feature->upvotes()->create([
      'user_id' => Auth::id(),
      'upvote' => $data['upvote'],
    ]);
    return redirect()->back();
  }
  // public function destroy($id)
  // {
  //   $upvote = Auth::user()->upvotes()->findOrFail($id);
  //   $upvote->delete();
  //   return redirect()->back();
  // }

  public function destroy(Feature $feature)
  {
    $upvote = $feature->upvotes()->where('user_id', Auth::id())->firstOrFail();
    $upvote->delete();
    return redirect()->back();
  }
}
