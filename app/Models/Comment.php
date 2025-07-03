<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
  protected $guarded = [];
  protected $casts = [
    'created_at' => 'datetime',
    'updated_at' => 'datetime',
  ];

  public function feature(): BelongsTo
  {
    return $this->belongsTo(Feature::class);
  }
  public function user() : BelongsTo
  {
    return $this->belongsTo(User::class);
  }
  public function getCreatedAtAttribute($value)
  {
    return \Carbon\Carbon::parse($value)->diffForHumans();
  }
}
