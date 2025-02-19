<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $guarded = [];

    public function department(){
        return $this->hasOne('App\Models\Department', 'id', 'department_id');
    }

    public function sub_categories(){
        return $this->hasMany('App\Models\SubCategory','category_id','id');
    }
}
