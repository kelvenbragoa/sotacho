<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\PaymentMethod;
use App\Models\Product;
use App\Models\StockCenter;
use App\Models\Table;
use App\Models\User;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function report(){
        $orders = Order::with('table')
        ->with('itens')
        ->with('status')
        ->orderBy('created_at','desc')
        ->get();
        $products = Product::get();
        $tables = Table::get();

        $users = User::get();

        $pdf = Pdf::loadView('pdf.report', compact('orders','products','tables','users'))->setOptions([
            'setPaper'=>'a4',
            // 'setPaper' => [0, 0, 226.77, 500],
            'defaultFont' => 'sans-serif',
            'isRemoteEnabled' => 'true'
        ]);
        return $pdf->stream('report.pdf');
    }
    public function index()
    {
        //
        $searchQuery = request('query');

            $orders = Order::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->where('id','like',"%{$searchQuery}%");
            })
            ->with('table')
            ->with('itens')
            ->with('status')
            ->with('user')
            ->orderBy('created_at','desc')
            ->paginate();

            return response()->json($orders);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $order = Order::with('table')->with('itens')->with('status')->find($id);

        return response()->json($order);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }


    public function deleteorderitem(string $id){
        $orderitem = OrderItem::find($id);

        $table_id = $orderitem->order->table_id;
        $total = $orderitem->total;
        $quantity = $orderitem->quantity;
        $product = Product::find($orderitem->product_id);


        $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();
                if ($principalStockCenter) {
                    $stockCenterProduct = $product->stockCenterProducts()
                        ->where('stock_center_id', $principalStockCenter->id)
                        ->first();

                    if ($stockCenterProduct) {
                        $stockCenterProduct->quantity += $quantity;
                        $stockCenterProduct->save();
                    }
                }

        $orderitem->delete();

        $categories = Category::with(['sub_categories.products' => function($query) {
            $query->withQuantityInPrincipalStock();
        }])->get();
        $order = Order::where('table_id', $table_id)
        ->where(function($query) {
            $query->where('order_status_id', 1)
                ->orWhere('order_status_id', 2);
        })
        ->first();
        $order_id = 0;
        if ($order) {
            $order_id = $order->id;
        }
        $order->update([
            'total' => $order->total - $total
        ]);

        
        $total_consumed = Order::where('table_id', $table_id)
        ->where(function($query) {
            $query->where('order_status_id', 1)
                ->orWhere('order_status_id', 2);
        })
        ->sum('total');

        $payment_methods = PaymentMethod::all();
        $orderItems = OrderItem::where('order_id',$order_id)->with('product')->get();

        return response()->json([
            "categories"=>$categories,
            "total_consumed"=>$total_consumed,
            "payment_methods"=>$payment_methods,
            "order_items"=>$orderItems
        ]);

       
    }


    public function deleteorder($id){
        $order = Order::find($id);
        foreach($order->itens as $item){
            $product = Product::find($item->product_id);
            $quantity = $item->quantity;


            $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();
                if ($principalStockCenter) {
                    $stockCenterProduct = $product->stockCenterProducts()
                        ->where('stock_center_id', $principalStockCenter->id)
                        ->first();

                    if ($stockCenterProduct) {
                        $stockCenterProduct->quantity += $quantity;
                        $stockCenterProduct->save();
                    }
                }
            $item->delete();
        }
        Payment::where('order_id', $order->id)->delete();
        $order->delete();
        return response()->noContent();
    }
}
