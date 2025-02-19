<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $guarded = [];

    public function category(){
        return $this->hasOne('App\Models\Category', 'id', 'category_id');
    }

    public function subcategory(){
        return $this->hasOne('App\Models\SubCategory', 'id', 'sub_category_id');
    }

    public function orderitens()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function stockCenterProducts()
    {
        return $this->hasMany(StockCenterProduct::class);
    }

    // public function quantityInPrincipalStock()
    // {
    //     // Encontra o stock_center principal
    //     $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();

    //     if ($principalStockCenter) {
    //         // Retorna a quantidade do produto no estoque principal
    //         $stockCenterProduct = $this->stockCenterProducts()
    //             ->where('stock_center_id', $principalStockCenter->id)
    //             ->first();

    //         return $stockCenterProduct ? $stockCenterProduct->quantity : 0;
    //     }

    //     return 0;
    // }
    public function quantityInPrincipalStock()
{
    static $principalStockCenterId = null;

    if (is_null($principalStockCenterId)) {
        $principalStockCenterId = StockCenter::where('is_principal_stock', 1)->value('id');
    }

    if ($principalStockCenterId) {
        return $this->stockCenterProducts()
            ->where('stock_center_id', $principalStockCenterId)
            ->value('quantity') ?? 0;
    }

    return 0;
}

    // public function scopeWithQuantityInPrincipalStock($query)
    // {
    //     return $query->addSelect([
    //         'quantity_in_principal_stock' => StockCenterProduct::select('quantity')
    //             ->join('stock_centers', 'stock_centers.id', '=', 'stock_center_products.stock_center_id')
    //             ->whereColumn('stock_center_products.product_id', 'products.id')
    //             ->where('stock_centers.is_principal_stock', 1)
    //             ->limit(1)
    //     ]);
    // }
    public function scopeWithQuantityInPrincipalStock($query)
{
    return $query->addSelect([
        'quantity_in_principal_stock' => StockCenterProduct::select('quantity')
            ->whereColumn('product_id', 'products.id')
            ->whereHas('stockCenter', function ($q) {
                $q->where('is_principal_stock', 1);
            })
            ->limit(1)
    ]);
}
}
