<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\StockCenter;
use App\Models\StockCenterProduct;
use Illuminate\Http\Request;

class CenterStocksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $searchQuery = request('query');

            $stockcenter = StockCenter::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->where('name','like',"%{$searchQuery}%");
            })
            ->orderBy('name','asc')
            ->paginate();

            return response()->json($stockcenter);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        // $departments = Department::all();

        // return response()->json([
        //     'departments' => $departments
        // ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        if($data['is_principal_stock'] == 1){
            $principalstock = StockCenter::where('is_principal_stock',1)->first();
            if($principalstock){
                return response()->json(['message'=>'So pode haver um centro de stock principal de venda.'],400);
            }
        }
        $stockcenter = StockCenter::create($data);

        $allStockCenters = StockCenter::all();
        $allProducts = Product::all();

        foreach ($allStockCenters as $stockCenter) {
            foreach ($allProducts as $product) {
                $exists = StockCenterProduct::where('product_id', $product->id)
                    ->where('stock_center_id', $stockCenter->id)
                    ->exists();
                if (!$exists) {
                    StockCenterProduct::create([
                        'product_id' => $product->id,
                        'stock_center_id' => $stockCenter->id,
                        'quantity' => 0,
                    ]);
                }
            }
        }
        return response()->json($stockcenter);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $stockcenter = StockCenter::
        with('stockcenterproducts')
        ->find($id);

        $stockcenterProducts = StockCenterProduct::where('stock_center_id', $id)
        ->when(request('query'),function($query,$searchQuery){
            $query->whereHas('product',function($q) use ($searchQuery){
                $q->where('name','like',"%{$searchQuery}%");
            });
        })
        ->with('product.category')
        ->with('product.subcategory')
        ->paginate();
        // $products = Product::query()
        //     ->when(request('query'),function($query,$searchQuery){
        //         $query->where('name','like',"%{$searchQuery}%");
        //     })
        //     ->with('category.department')
        //     ->with('subcategory')
        //     ->orderBy('name','asc')
        //     ->paginate();


        return response()->json([
            "stockcenter"=>$stockcenter,
            "stockcenterproducts"=>$stockcenterProducts
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $stockcenter = StockCenter::find($id);

        return response()->json([
            'stockcenter' => $stockcenter
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $data = $request->all();
        $stockcenter = StockCenter::find($id);
        $stockcenter->update($data);
        return response()->json($stockcenter);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

        $stockcenter = StockCenter::find($id);
        $stockcenter->delete();
        return true;
    }
}
