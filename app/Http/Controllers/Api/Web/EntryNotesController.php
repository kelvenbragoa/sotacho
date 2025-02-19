<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\EntryNoteItem;
use App\Models\EntryNotes;
use App\Models\StockCenter;
use App\Models\StockCenterProduct;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EntryNotesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $searchQuery = request('query');

            $entrynotes = EntryNotes::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->where('ref','like',"%{$searchQuery}%");
            })
            ->with('stockcenter')
            ->with('supplier')
            ->orderBy('created_at','desc')
            ->paginate();

            return response()->json($entrynotes);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $suppliers = Supplier::get();
        $stockcenters = StockCenter::get();

        return response()->json([
           'suppliers'=>$suppliers,
           'stockcenters'=>$stockcenters
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();

        
        $entrynote = EntryNotes::create([
            'user_id'=>Auth::user()->id,
            'ref'=>$data['reference'],
            'document_ref'=>$data['document_reference'],
            'serie'=>$data['serie'],
            'supplier_id'=>$data['stock_supplier_id'],
            'stock_center_id'=>$data['stock_center_id'],
            'products_number'=>count($data['stockcenterproducts']),
        ]);

        foreach($data['stockcenterproducts'] as $item){

            $stockcenterproduct = StockCenterProduct::find($item['id']);
            $last_quantity = $stockcenterproduct->quantity;
            // $product = Product::find($item['product_id']);

            // if($data['stock_center_id'] == 1){

            //     $product->update([
            //         'quantity'=>$last_quantity + $item['quantity']
            //     ]);
            // }

            $stockcenterproduct->update([
                'quantity'=>$last_quantity + $item['quantity']
            ]);

            $entryNoteItem = EntryNoteItem::create([
                'stock_center_id'=>$data['stock_center_id'],
                'entry_note_id'=>$entrynote->id,
                'product_id'=>$item['product_id'],
                'quantity'=>$item['quantity'],
                'last_quantity'=>$last_quantity
            ]);


        }

        return response()->json($entrynote);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $entrynote = EntryNotes::
        with('stockcenter')
        ->with('user')
        ->with('supplier')
        ->with('itens.product')
        ->find($id);
        return response()->json($entrynote);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //

        $entrynote = EntryNotes::find($id);
        


        return response()->json($entrynote);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $data = $request->all();


        $entrynote = EntryNotes::find($id);

        $entrynote->update($data);

        return response()->json($entrynote);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

        $entrynote = EntryNotes::find($id);

        $entrynote->delete();

        return true;
    }
}
