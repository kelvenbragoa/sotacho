<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    //
    protected $guarded = [];

    public function status(){
        return $this->hasOne('App\Models\TableStatus', 'id', 'table_status_id');
    }

    public function last_order(){
        return $this->hasOne('App\Models\Order', 'table_id', 'id')
                    ->whereIn('order_status_id', [1, 2])  // Filtra os status 1 ou 2
                    ->orderBy('id','desc'); // Ordena pelo ID de forma decrescente
    }
}
