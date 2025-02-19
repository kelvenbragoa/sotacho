<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EntryNoteItem extends Model
{
    //
    protected $guarded = [];

    public function stockcenter(){
        return $this->hasOne('App\Models\StockCenter', 'id', 'stock_center_id');
    }

    public function product(){
        return $this->hasOne('App\Models\Product', 'id', 'product_id');
    }

}
