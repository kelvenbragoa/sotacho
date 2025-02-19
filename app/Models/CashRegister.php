<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CashRegister extends Model
{
    //
    protected $guarded = [];

    public function orderitens()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function orderItensTotal()
    {
        return $this->orderitens()->sum('total');
    }

    protected function orderItensTotalSum(): CashRegister
{
    return CashRegister::get(fn () => $this->orderitens()->sum('total'));
}

    public function user(){
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }
    public function status(){
        return $this->hasOne('App\Models\CashRegisterStatus', 'id', 'cash_register_status_id');
    }
}
