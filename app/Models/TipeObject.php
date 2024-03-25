<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipeObject extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'm_object_tipe';
    protected $primaryKey = 'id';
    protected $guarded = [];
}
