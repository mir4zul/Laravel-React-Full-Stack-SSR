<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
  protected $table = 'features';
  protected $fillable = [
    'name',
    'description',
    'status',
    'created_at',
    'updated_at'
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
  public function getStatusAttribute($value)
  {
    return $value === 'open' ? 'Open' : ($value === 'closed' ? 'Closed' : 'In Progress');
  }
}
 