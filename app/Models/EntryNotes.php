<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EntryNotes extends Model
    {
     protected $guarded = [];
     public function stockcenter(){
        return $this->hasOne('App\Models\StockCenter', 'id', 'stock_center_id');
    }

    public function supplier(){
        return $this->hasOne('App\Models\Supplier', 'id', 'supplier_id');
    }

    public function user(){
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }

    public function itens(){
        return $this->hasMany('App\Models\EntryNoteItem','entry_note_id','id');
    }
}

