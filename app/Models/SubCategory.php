<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    //
    protected $guarded = [];
    public function category(){
        return $this->hasOne('App\Models\Category', 'id', 'category_id');
    }

    public function products(){
        return $this->hasMany('App\Models\Product','sub_category_id','id');
    }
}
