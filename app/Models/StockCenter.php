<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockCenter extends Model
    {
     protected $guarded = [];
     
     public function stockcenterproducts(){
        return $this->hasMany('App\Models\StockCenterProduct','stock_center_id','id');
    }
}

