<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MasterObject extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'm_object';
    protected $primaryKey = 'id';
    protected $guarded = [];

    public function gambar(){
        return $this->hasMany(ObjectGambar::class,'object_id','id');
    }

    public function tipeObject(){
        return $this->belongsTo(TipeObject::class,'tipe_object_id','id');
    }
}
