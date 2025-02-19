<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\CashRegister;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\PaymentMethod;
use App\Models\Product;
use App\Models\StockCenter;
use App\Models\Table;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Barryvdh\DomPDF\Facade\Pdf;


class PdvController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $searchQuery = request('query');

            $tables = Table::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->where('name','like',"%{$searchQuery}%");
            })
            ->with('status')
            ->with('last_order.user')
            ->orderBy('id','asc')
            ->paginate(100);

            $openCashRegister = CashRegister::where('user_id', Auth::id())
            ->where('cash_register_status_id', 1) // 1 = Aberto
            ->first();
            if ($openCashRegister) {
                $total = $openCashRegister->orderItens()->sum('total');

            // $quicksells = Order::with('itens')->whereNull('table_id')->where('cash_register_id',$openCashRegister->id)->get();
        
                return response()->json([
                    'tables'=>$tables,
                    'cash_register'=>$openCashRegister,
                    'totalcash'=>$total,
                    // 'quicksells'=>$quicksells
                ]);
            }


            return response()->json([
                'tables'=>$tables,
                'cash_register'=>$openCashRegister,
                'totalcash'=>0
            ]);
    }

    public function listquicksells(){
        $openCashRegister = CashRegister::where('user_id', Auth::id())
            ->where('cash_register_status_id', 1) // 1 = Aberto
            ->first();
        if (!$openCashRegister) {
            $quicksells = Order::with('itens.product')->with('status')->with('user')->whereNull('table_id')->where('cash_register_id',0)->orderBy('id','desc')->paginate();
            return response()->json([
                'quicksells'=>$quicksells
            ]);
        }
        $quicksells = Order::with('itens.product')->with('status')->with('user')->whereNull('table_id')->where('cash_register_id',$openCashRegister->id)->orderBy('id','desc')->paginate();
        return response()->json([
            'quicksells'=>$quicksells
        ]);

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
        $data = $request->all();
        $table = Table::find($data['table_id']);
        $total_consumed = 0;

        $newBarItems = [];
        $newKitchenItems = [];

        $openCashRegister = CashRegister::where('user_id', Auth::id())
        ->where('cash_register_status_id', 1) // 1 = Aberto
        ->first();

        if (!$openCashRegister) {
            return response()->json([
                'message' => 'Não é possível realizar a venda. Abra o caixa primeiro.'
            ], 403); // Código HTTP 403 - Proibido
        }

        if($table->table_status_id == 5){
            return response()->json(['message'=>'A mesa esta finalizada.'],403);
        }

        foreach ($data['products'] as $item) {
            $product = Product::withQuantityInPrincipalStock()->find($item['id']);
        
            // Correção do operador de comparação e da propriedade
            if ($product->quantity_in_principal_stock < $item['quantity'] || $product->quantity_in_principal_stock == 0) {
                return response()->json([
                    'message' => "A quantidade de {$product->name} não é suficiente. Atualmente tem {$product->quantity_in_principal_stock} unidades em estoque."
                ], 403); // Código HTTP 403 - Proibido
            }
        }

        if($table->table_status_id == 1){
            $order =  Order::create([
                'table_id' => $table->id,
                'user_id' => Auth::user()->id,
                'total'=>$data['total'],
                'order_status_id' => 1,
                'cash_register_id' => $openCashRegister->id
            ]);
            foreach($data['products'] as $item){

                $product = Product::withQuantityInPrincipalStock()->find($item['id']);

                $orderItem = OrderItem::create([
                    'order_id'=>$order->id,
                    'user_id' => Auth::user()->id,
                    'product_id' => $item['id'],
                    'quantity' => $item['quantity'],
                    'order_item_status_id' =>1,
                    'department_id' => $product->department_id,
                    'price'=>$product->price,
                    'total'=>$product->price * $item['quantity'],
                    'cash_register_id' => $openCashRegister->id
                ]);
                if ($product->department_id == 1) {
                    $newKitchenItems[] = $orderItem;
                } elseif ($product->department_id == 2) {
                    $newBarItems[] = $orderItem;
                }
                $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();
                if ($principalStockCenter) {
                    $stockCenterProduct = $product->stockCenterProducts()
                        ->where('stock_center_id', $principalStockCenter->id)
                        ->first();

                    if ($stockCenterProduct) {
                        $stockCenterProduct->quantity -= $item['quantity'];
                        $stockCenterProduct->save();
                    }
                }
            }
            $total_consumed = $data['total'];
        }
        if($table->table_status_id == 2){



            $last_order = Order::where('table_id',$table->id)->where('order_status_id',1)->first();

            if($last_order->user_id != Auth::user()->id){
                return response()->json([
                    'message' => "Impossivel adicionar itens a esta mesa. Esta mesa foi aberta por".$last_order->user->name
                ], 403); // Código HTTP 403 - Proibido
            }


            
            foreach($data['products'] as $item){
                
                $product = Product::withQuantityInPrincipalStock()->find($item['id']);

                $orderItem = OrderItem::create([
                        'order_id'=>$last_order->id,
                        'product_id' => $item['id'],
                        'quantity' => $item['quantity'],
                        'department_id' => $product->department_id,
                        'order_item_status_id' =>1,
                        'price'=>$product->price,
                        'total'=>$product->price * $item['quantity'],
                        'user_id'=>Auth::user()->id,
                        'cash_register_id' => $openCashRegister->id
                ]);
                if ($product->department_id == 1) {
                    $newKitchenItems[] = $orderItem;
                } elseif ($product->department_id == 2) {
                    $newBarItems[] = $orderItem;
                }
                // }
                $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();
                if ($principalStockCenter) {
                    $stockCenterProduct = $product->stockCenterProducts()
                        ->where('stock_center_id', $principalStockCenter->id)
                        ->first();

                    if ($stockCenterProduct) {
                        $stockCenterProduct->quantity -= $item['quantity'];
                        $stockCenterProduct->save();
                    }
                }
                
            }

            $last_order->update([
                'total'=>OrderItem::where('order_id', $last_order->id)->sum('total')
            ]);
            $total_consumed = OrderItem::where('order_id', $last_order->id)->sum('total');
        }
        $table->update([
            'table_status_id'=>2
        ]);

        $order = Order::where('table_id',$table->id)->where('order_status_id',1)->first();
        $orderitens = OrderItem::where('order_id',$order->id)->get();

        $barItems = $orderitens->where('department_id', 2);
        $kitchenItems = $orderitens->where('department_id', 1);


        $pdf = Pdf::loadView('pdf.receipt', compact('order','orderitens','barItems','kitchenItems'))->setOptions([
            'defaultFont' => 'sans-serif',
            'isRemoteEnabled' => 'true'
        ]);
        return $pdf->setPaper([0, 0, 226.77, 500])->stream('receipt.pdf');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $openCashRegister = CashRegister::where('user_id', Auth::id())
        ->where('cash_register_status_id', 1) // 1 = Aberto
        ->first();

        if (!$openCashRegister) {
            return response()->json([
                'message' => 'Não é possível realizar ou iniciar a venda. Abra o caixa primeiro.'
            ], 403); // Código HTTP 403 - Proibido
        }

        $categories = Category::with(['sub_categories.products' => function($query) {
            $query->withQuantityInPrincipalStock();
        }])->get();
        $order = Order::where('table_id', $id)
        ->where(function($query) {
            $query->where('order_status_id', 1)
                ->orWhere('order_status_id', 2);
        })
        ->first();
        $order_id = 0;
        if ($order) {
            $order_id = $order->id;
        }

        
        $total_consumed = Order::where('table_id', $id)
        ->where(function($query) {
            $query->where('order_status_id', 1)
                ->orWhere('order_status_id', 2);
        })
        ->sum('total');

        $payment_methods = PaymentMethod::all();
        $orderItems = OrderItem::where('order_id',$order_id)->with('product')->get();

        $table = Table::find($id);

        return response()->json([
            "categories"=>$categories,
            "total_consumed"=>$total_consumed,
            "payment_methods"=>$payment_methods,
            "order_items"=>$orderItems,
            "table"=>$table
        ]);
    }

    public function savequicksell(Request $request){
        $data = $request->all();
        $total_consumed = 0;

        $openCashRegister = CashRegister::where('user_id', Auth::id())
        ->where('cash_register_status_id', 1) // 1 = Aberto
        ->first();

        if (!$openCashRegister) {
            return response()->json([
                'message' => 'Não é possível realizar a venda. Abra o caixa primeiro.'
            ], 403); // Código HTTP 403 - Proibido
        }

        foreach ($data['products'] as $item) {
            $product = Product::withQuantityInPrincipalStock()->find($item['id']);
        
            // Correção do operador de comparação e da propriedade
            if ($product->quantity_in_principal_stock < $item['quantity'] || $product->quantity_in_principal_stock == 0) {
                return response()->json([
                    'message' => "A quantidade de {$product->name} não é suficiente. Atualmente tem {$product->quantity_in_principal_stock} unidades em estoque."
                ], 403); // Código HTTP 403 - Proibido
            }
        }




            $order =  Order::create([
                'user_id' => Auth::user()->id,
                // 'user_id'=>1,
                'total'=>$data['total'],
                'order_status_id' => 3,
                'cash_register_id' => $openCashRegister->id
            ]);
            foreach($data['products'] as $item){
                $product = Product::withQuantityInPrincipalStock()->find($item['id']);
                OrderItem::create([
                    'order_id'=>$order->id,
                    'product_id' => $item['id'],
                    'department_id' => $product->department_id,
                    'quantity' => $item['quantity'],
                    'order_item_status_id' =>1,
                    'price'=>$product->price,
                    'user_id' => Auth::user()->id,
                    'total'=>$product->price * $item['quantity'],
                    'cash_register_id' => $openCashRegister->id
                ]);
                $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();
                if ($principalStockCenter) {
                    $stockCenterProduct = $product->stockCenterProducts()
                        ->where('stock_center_id', $principalStockCenter->id)
                        ->first();

                    if ($stockCenterProduct) {
                        $stockCenterProduct->quantity -= $item['quantity'];
                        $stockCenterProduct->save();
                    }
                }
            }
            $total_consumed = $data['total'];
  
        // $table = Table::find($id);
        $orderitens = OrderItem::where('order_id',$order->id)->get();

        $payment = Payment::create([
            "order_id"=>$order->id,
            "payment_method_id"=>$data["payment_method_id"],
            "amount"=>$data['total'],
            "cash_register_id" => $openCashRegister->id,
            "user_id" => Auth::user()->id
        ]);

        $barItems = $orderitens->where('department_id', 2);
        $kitchenItems = $orderitens->where('department_id', 1);

        $pdf = Pdf::loadView('pdf.receiptquicksell', compact('order','orderitens','barItems','kitchenItems','payment'))->setOptions([
            'defaultFont' => 'sans-serif',
            'isRemoteEnabled' => 'true'
        ]);
        return $pdf->setPaper([0, 0, 226.77, 500])->stream('receiptquicksell.pdf');
    }

    public function quicksell(){
        $openCashRegister = CashRegister::where('user_id', Auth::id())
        ->where('cash_register_status_id', 1) // 1 = Aberto
        ->first();

        if (!$openCashRegister) {
            return response()->json([
                'message' => 'Não é possível realizar ou iniciar a venda. Abra o caixa primeiro.'
            ], 403); // Código HTTP 403 - Proibido
        }
        $categories = Category::with(['sub_categories.products' => function($query) {
            $query->withQuantityInPrincipalStock();
        }])->get();
        $total_consumed = 0;
        $payment_methods = PaymentMethod::all();
        return response()->json([
            "categories"=>$categories,
            "total_consumed"=>$total_consumed,
            "payment_methods"=>$payment_methods
        ]);
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

    public function getreceipt(string $id) {

        
        $order = Order::where('table_id', $id)->where('order_status_id', 1)->orWhere('order_status_id', 2)->first();
        if (!$order) {
            return response()->json([
                'message' => 'Não existe conta aberta nesta mesa'
            ], 404);
        }

        $orderitens = OrderItem::where('order_id', $order->id)->with('product')->get();
        // $table = $order->table; // Supondo que o relacionamento exista

    
        $pdf = Pdf::loadView('pdf.receiptgeneral', compact('order', 'orderitens'))->setOptions([
            'isHtml5ParserEnabled' => true,
            'isPhpEnabled' => true,
            'isRemoteEnabled' => true,
            'dpi' => 96, 
            'defaultFont' => 'sans-serif',
        ]);
    
        return $pdf->setPaper([0, 0, 226.77, 500])->stream('receiptgeneral.pdf');
    }

    public function getquickreceipt(string $id) {

        
        $order = Order::find($id);
        if (!$order) {
            return response()->json([
                'message' => 'Não existe conta aberta nesta mesa'
            ], 404);
        }

        $orderitens = OrderItem::where('order_id', $order->id)->with('product')->get();
        // $table = $order->table; // Supondo que o relacionamento exista

    
        $pdf = Pdf::loadView('pdf.receiptquicktable', compact('order', 'orderitens'))->setOptions([
            'isHtml5ParserEnabled' => true,
            'isPhpEnabled' => true,
            'isRemoteEnabled' => true,
            'dpi' => 96, 
            'defaultFont' => 'sans-serif',
        ]);
    
        return $pdf->setPaper([0, 0, 226.77, 500])->stream('receiptquicktable.pdf');
    }


    public function closeaccount(string $id){
        $table = Table::find($id);
        $order = Order::where('table_id', $id)->where('order_status_id', 1)->first();

        if(!$order){
            return response()->json([
                'message' => 'A sua conta já foi encerrada. Pode Finalizar a conta.'
            ], 404);
        }

        $order->update([
            "order_status_id"=>2,
            "closed_by_user_id"=>Auth::user()->id,

        ]);

        $table->update([
            "table_status_id"=>5
        ]);

        $orderitens = OrderItem::where('order_id',$order->id)->get();

        $pdf = Pdf::loadView('pdf.finalreceipt', compact('order','orderitens'))->setOptions([
            // 'setPaper'=>'a4',
            // 'setPaper' => [0, 0, 226.77, 500],
            'defaultFont' => 'sans-serif',
            'isRemoteEnabled' => 'true'
        ]);
        return $pdf->setPaper([0, 0, 226.77, 500])->stream('finalreceipt.pdf');



    }

    public function payaccount(Request $request){
        $data = $request->all();
        $table = Table::find($data['table_id']);
        $order = Order::where('table_id', $data['table_id'])->where('order_status_id', 2)->first();

        $openCashRegister = CashRegister::where('user_id', Auth::id())
        ->where('cash_register_status_id', 1) // 1 = Aberto
        ->first();

        if (!$openCashRegister) {
            return response()->json([
                'message' => 'Não é possível realizar a venda. Abra o caixa primeiro.'
            ], 403); // Código HTTP 403 - Proibido
        }

        if(!$order){
            return response()->json([
                'message' => 'Por favor, primeiro feche o pedido para poder finalizar a conta da mesa.'
            ], 404);
        }

        $order->update([
            "order_status_id"=>3,
            "fineshed_by_user_id"=>Auth::user()->id,
        ]);

        $table->update([
            "table_status_id"=>1
        ]);

        $orderitens = OrderItem::where('order_id',$order->id)->get();

        foreach($orderitens as $item){
            $item->update([
                'order_item_status_id'=>4
            ]);
        }

        $payment = Payment::create([
            "order_id"=>$order->id,
            "payment_method_id"=>$data["payment_method_id"],
            "amount"=>$order->total,
            "cash_register_id" => $openCashRegister->id,
            "user_id" => Auth::user()->id
        ]);

        $pdf = Pdf::loadView('pdf.customerreceipt', compact('order','orderitens','payment'))->setOptions([
            // 'setPaper'=>'a4',
            // 'setPaper' => [0, 0, 226.77, 500],
            'defaultFont' => 'sans-serif',
            'isRemoteEnabled' => 'true'
        ]);
        return $pdf->setPaper([0, 0, 226.77, 500])->stream('customerreceipt.pdf');

    }



    public function indexKitchen(){
        $order_itens_pending = OrderItem::where('order_item_status_id', 1)->where('department_id',1)->with('product')->with('order.table')->orderBy('created_at','asc')->get();
        $order_itens_getting_ready = OrderItem::where('order_item_status_id', 2)->where('department_id',1)->with('product')->with('order.table')->orderBy('updated_at','desc')->get();
        $order_itens_ready = OrderItem::where('order_item_status_id', 3)->where('department_id',1)->with('product')->with('order.table')->orderBy('updated_at','desc')->get();
        $order_itens_delivered = OrderItem::where('order_item_status_id', 4)->where('department_id',1)->with('product')->with('order.table')->orderBy('updated_at','desc')->get();

        return response()->json([
            "order_itens_pending"=>$order_itens_pending,
            "order_itens_getting_ready"=>$order_itens_getting_ready,
            "order_itens_ready"=>$order_itens_ready,
            "order_itens_delivered"=>$order_itens_delivered
        ]);
    }

    public function changestatus(string $id)
{
    $order_item = OrderItem::find($id);

    if (!$order_item) {
        return response()->json(['message' => 'Order item not found'], 404);
    }

    $currentStatus = $order_item->order_item_status_id;

    switch ($currentStatus) {
        case 1:
            $nextStatus = 2;
            break;
        case 2:
            $nextStatus = 3;
            break;
        case 3:
            $nextStatus = 4;
            break;
        case 4:
            $nextStatus = 4;
            break;
        default:
            return response()->json(['message' => 'Invalid status'], 400);
    }

    $order_item->update(['order_item_status_id' => $nextStatus]);


    $order_itens_pending = OrderItem::where('order_item_status_id', 1)->where('department_id',1)->with('product')->with('order.table')->orderBy('created_at','asc')->get();
    $order_itens_getting_ready = OrderItem::where('order_item_status_id', 2)->where('department_id',1)->with('product')->with('order.table')->orderBy('updated_at','desc')->get();
    $order_itens_ready = OrderItem::where('order_item_status_id', 3)->where('department_id',1)->with('product')->with('order.table')->orderBy('updated_at','desc')->get();
    $order_itens_delivered = OrderItem::where('order_item_status_id', 4)->where('department_id',1)->with('product')->with('order.table')->orderBy('updated_at','desc')->get();

    return response()->json([
        "order_itens_pending"=>$order_itens_pending,
        "order_itens_getting_ready"=>$order_itens_getting_ready,
        "order_itens_ready"=>$order_itens_ready,
        "order_itens_delivered"=>$order_itens_delivered
    ]);
}


public function indexBar(){
    $order_itens_pending = OrderItem::where('order_item_status_id', 1)->where('department_id',2)->with('product')->with('order.table')->orderBy('created_at','asc')->get();
    
    $order_itens_delivered = OrderItem::where('order_item_status_id', 4)->where('department_id',2)->with('product')->with('order.table')->orderBy('updated_at','desc')->get();

    return response()->json([
        "order_itens_pending"=>$order_itens_pending,
        
        "order_itens_delivered"=>$order_itens_delivered
    ]);
}

public function barchangestatus(string $id)
{
$order_item = OrderItem::find($id);

if (!$order_item) {
    return response()->json(['message' => 'Order item not found'], 404);
}

$currentStatus = $order_item->order_item_status_id;

switch ($currentStatus) {
    case 1:
        $nextStatus = 4;
        break;
    case 4:
        $nextStatus = 4;
        break;
    default:
        return response()->json(['message' => 'Invalid status'], 400);
}

$order_item->update(['order_item_status_id' => $nextStatus]);


$order_itens_pending = OrderItem::where('order_item_status_id', 1)->where('department_id',2)->with('product')->with('order.table')->orderBy('created_at','asc')->get();
$order_itens_delivered = OrderItem::where('order_item_status_id', 4)->where('department_id',2)->with('product')->with('order.table')->orderBy('updated_at','desc')->get();

return response()->json([
    "order_itens_pending"=>$order_itens_pending,
    "order_itens_delivered"=>$order_itens_delivered
]);
}
}
