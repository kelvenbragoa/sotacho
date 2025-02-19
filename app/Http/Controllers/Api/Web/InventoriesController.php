<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Inventory;
use App\Models\InventoryItem;
use App\Models\StockCenter;
use App\Models\StockCenterProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InventoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $searchQuery = request('query');

            $inventories = Inventory::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->where('ref','like',"%{$searchQuery}%");
            })
            ->with('stockcenter')
            ->orderBy('created_at','desc')
            ->paginate();
            return response()->json($inventories);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $stockcenters = StockCenter::all();
        return response()->json(["stockcenters"=>$stockcenters]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();

        
        $inventory = Inventory::create([
            'user_id'=>Auth::user()->id,
            'ref'=>$data['reference'],
            'stock_center_id'=>$data['stock_center_id'],
            'products_number'=>count($data['stockcenterproducts']),
        ]);

        foreach($data['stockcenterproducts'] as $item){

            $stockcenterproduct = StockCenterProduct::find($item['id']);
            $last_quantity = $stockcenterproduct->quantity;
            // $product = Product::find($item['product_id']);

            // if($data['stock_center_id'] == 1){

            //     $product->update([
            //         'quantity'=>$item['quantity']
            //     ]);
            // }

            $stockcenterproduct->update([
                'quantity'=>$item['quantity']
            ]);

            $inventoryItem = InventoryItem::create([
                'stock_center_id'=>$data['stock_center_id'],
                'inventory_id'=>$inventory->id,
                'product_id'=>$item['product_id'],
                'quantity'=>$item['quantity'],
                'last_quantity'=>$last_quantity
            ]);


        }

        return response()->json($inventory);


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $inventory = Inventory::
        with('stockcenter')
        ->with('itens.product')
        ->with('user')
        ->find($id);

        return response()->json($inventory);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //

        $inventory = Inventory::find($id);
        


        return $inventory;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $data = $request->all();


        $inventory = Inventory::find($id);

        $inventory->update($data);

        return $inventory;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

        $inventory = Inventory::find($id);

        $inventory->delete();

        return true;
    }

    public function center(){
        
    }



}
