<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\Fluent\Concerns\Has;

class Feature extends Model
{
  use HasFactory;
  protected $table = 'features';
  protected $fillable = [
    'user_id',
    'name',
    'description',
  ];
  protected $casts = [
    'created_at' => 'datetime',
    'updated_at' => 'datetime',
  ];

  public function comments()
  {
    return $this->hasMany(Comment::class);
  }

  public function upvotes()
  {
    return $this->hasMany(Upvote::class);
  }

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
