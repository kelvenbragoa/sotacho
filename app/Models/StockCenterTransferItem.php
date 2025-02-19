<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockCenterTransferItem extends Model
    {
     protected $guarded = [];
     public function product(){
        return $this->hasOne('App\Models\Product', 'id', 'product_id');
    }
}

