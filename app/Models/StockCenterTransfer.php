<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockCenterTransfer extends Model
    {
     protected $guarded = [];

     public function stockcenterorigin(){
        return $this->hasOne('App\Models\StockCenter', 'id', 'stock_center_origin_id');
    }

    public function stockcenterdestination(){
        return $this->hasOne('App\Models\StockCenter', 'id', 'stock_center_destination_id');
    }

    public function user(){
        return $this->hasOne('App\Models\User','id','user_id');
    }


    public function itens(){
        return $this->hasMany('App\Models\StockCenterTransferItem','stock_center_transfer_id','id');
    }
}

