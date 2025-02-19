<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryItem extends Model
    {
     protected $guarded = [];
     public function product(){
        return $this->hasOne('App\Models\Product', 'id', 'product_id');
    }
}

