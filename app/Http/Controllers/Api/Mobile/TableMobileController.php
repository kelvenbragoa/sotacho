<?php

namespace App\Http\Controllers\Api\Mobile;

use App\Http\Controllers\Controller;
use App\Models\CashRegister;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\Product;
use App\Models\StockCenter;
use App\Models\Table;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TableMobileController extends Controller
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
            ->orderBy('name','asc')
            ->get();

            return response()->json($tables);
    }

    public function createorder(Request $request){

        $data = $request->all();
        $table = Table::find($data['table_id']);

        $openCashRegister = CashRegister::where('user_id', Auth::id())
        ->where('cash_register_status_id', 1) // 1 = Aberto
        ->first();

        if (!$openCashRegister) {
            return response()->json([
                'message' => 'Não é possível realizar a venda. Abra o caixa primeiro.'
            ], 200); // Código HTTP 403 - Proibido
        }

        if($table->table_status_id == 5){
            return response()->json(['message'=>'A mesa esta finalizada.'],200);
        }
        $product = Product::withQuantityInPrincipalStock()->find($data['product_id']);
        
            if ($product->quantity_in_principal_stock < $data['quantity'] || $product->quantity_in_principal_stock == 0) {
                return response()->json([
                    'message' => "A quantidade de {$product->name} não é suficiente. Atualmente tem {$product->quantity_in_principal_stock} unidades em estoque."
                ], 400); // Código HTTP 403 - Proibido
            }

        if($table->table_status_id == 1){
            $order =  Order::create([
                'table_id' => $table->id,
                // 'user_id' => Auth::user()->id,
                'user_id'=>$data['user_id'],
                'total'=>$data['quantity'] * $product->price,
                'order_status_id' => 1,
                'cash_register_id' => $openCashRegister->id
            ]);

                $product = Product::withQuantityInPrincipalStock()->find($data['product_id']);
                $orderItem = OrderItem::create([
                    'order_id'=>$order->id,
                    'product_id' => $data['product_id'],
                    'quantity' => $data['quantity'],
                    'order_item_status_id' =>1,
                    'department_id' => $product->department_id,
                    'price'=>$product->price,
                    'total'=>$data['quantity'] * $product->price,
                    'user_id'=>Auth::user()->id,
                    'cash_register_id' => $openCashRegister->id
                ]);
                $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();
                if ($principalStockCenter) {
                    $stockCenterProduct = $product->stockCenterProducts()
                        ->where('stock_center_id', $principalStockCenter->id)
                        ->first();

                    if ($stockCenterProduct) {
                        $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();
                        if ($principalStockCenter) {
                            $stockCenterProduct = $product->stockCenterProducts()
                                ->where('stock_center_id', $principalStockCenter->id)
                                ->first();
        
                            if ($stockCenterProduct) {
                                $stockCenterProduct->quantity -= $data['quantity'];
                                $stockCenterProduct->save();
                            }
                        };
                        $stockCenterProduct->save();
                    }
                }
        }

        if($table->table_status_id == 2){

            $last_order = Order::where('table_id',$table->id)->where('order_status_id',1)->first();

            if($last_order->user_id != Auth::user()->id){
                return response()->json([
                    'message' => "Impossivel adicionar itens a esta mesa. Esta mesa foi aberta por".$last_order->user->name
                ], 400); // Código HTTP 403 - Proibido
            }
            
                
                // $orderItem = OrderItem::where('order_id', $last_order->id)->where('product_id', $data['product_id'])->first();
                $product = Product::withQuantityInPrincipalStock()->find($data['product_id']);

                // if($orderItem){
                //     $quantity_updated = $orderItem->quantity + $data['quantity'];
                    
                //     $orderItem->update([
                //         'quantity' => $quantity_updated,
                //         'total'=>$orderItem->price * $quantity_updated,
                //     ]);
                // }else{
                    if ($product->quantity_in_principal_stock < $data['quantity'] || $product->quantity_in_principal_stock == 0) {
                        return response()->json([
                            'message' => "A quantidade de {$product->name} não é suficiente. Atualmente tem {$product->quantity_in_principal_stock} unidades em estoque."
                        ], 400); // Código HTTP 403 - Proibido
                    }
                    
                    $orderItem = OrderItem::create([
                        'order_id'=>$last_order->id,
                        'product_id' => $data['product_id'],
                        'quantity' => $data['quantity'],
                        'department_id' => $product->department_id,
                        'order_item_status_id' =>1,
                        'price'=>$product->price,
                        'total'=>$product->price * $data['quantity'],
                        'user_id'=>Auth::user()->id,
                        'cash_register_id' => $openCashRegister->id
                    ]);
                    $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();
                    if ($principalStockCenter) {
                        $stockCenterProduct = $product->stockCenterProducts()
                            ->where('stock_center_id', $principalStockCenter->id)
                            ->first();
    
                        if ($stockCenterProduct) {
                            $principalStockCenter = StockCenter::where('is_principal_stock', 1)->first();
                            if ($principalStockCenter) {
                                $stockCenterProduct = $product->stockCenterProducts()
                                    ->where('stock_center_id', $principalStockCenter->id)
                                    ->first();
            
                                if ($stockCenterProduct) {
                                    $stockCenterProduct->quantity -= $data['quantity'];
                                    $stockCenterProduct->save();
                                }
                            };
                            $stockCenterProduct->save();
                        }
                    }
                // }

                $last_order->update([
                    'total'=>OrderItem::where('order_id', $last_order->id)->sum('total')
                ]);
                $total_consumed = OrderItem::where('order_id', $last_order->id)->sum('total');
            }

            
            

            $table->update([
                'table_status_id'=>2
            ]);

            return response()->json([
                'message'=>"Produto adiconado a conta"
            ]);

    }

    /**
     * Show the form for creating a new resource.
     */

    public function consumption(string $id){
        $table = Table::find($id);

        $order = Order::where('table_id', $table->id)
        ->where(function($query) {
            $query->where('order_status_id', 1)
                ->orWhere('order_status_id', 2);
        })
        ->with('itens.product')
        ->with('status')
        ->with('table')
        ->with('user')
        ->first();
        $order_id = 0;
        if ($order) {
            $order_id = $order->id;
        }

        
       

        return response()->json([
            "order"=>$order
        ]);

    }

    public function closeaccount(string $id){
        $table = Table::find($id);
        $order = Order::where('table_id', $id)->where('order_status_id', 1)->first();

        if($order->user_id != Auth::user()->id){
            return response()->json([
                'message' => "Impossivel adicionar itens a esta mesa. Esta mesa foi aberta por".$order->user->name
            ], 400); // Código HTTP 403 - Proibido
        }

        

        $order->update([
            "order_status_id"=>2,
            "closed_by_user_id"=>Auth::user()->id
        ]);

        $table->update([
            "table_status_id"=>5
        ]);

        $orderitens = OrderItem::where('order_id',$order->id)->get();

        return response()->json([
            "message"=>"Conta fechada com sucesso",
        ]);



    }


    public function openCashRegister(Request $request){
        $data = $request->all();
        $existingCashRegister = CashRegister::where('user_id', Auth::user()->id)
        ->where('cash_register_status_id', 1)
        ->first();

        if ($existingCashRegister) {
            return response()->json([
                'message' => 'Já existe uma caixa aberto para este usuário.',
                'cash_register' => $existingCashRegister
            ], 200);
        }
        $cashregister = CashRegister::create([
            'user_id' => Auth::user()->id,
            'cash_register_status_id' => 1,
            'opening_balance'=>0,
            'opened_at' => now(),
        ]);

        return response()->json([
            'message'=>'Caixa aberta com sucesso',
        ]);
    }


    public function closeCashRegister(Request $request)
    {

        $data = $request->all();
        $cashRegister = CashRegister::
            where('user_id', Auth::id())
            ->where('cash_register_status_id', 1) // 1 = Aberto
            ->first();

        if (!$cashRegister) {
            return response()->json([
                'message' => 'Nenhum caixa aberto encontrado para este usuário.'
            ], 200);
        }

        $order = Order::where('cash_register_id', $cashRegister->id)
            ->where('order_status_id', 1) // 1 = Aberta
            ->orWhere('order_status_id',2)
            ->first();
        if ($order) {
                return response()->json([
                    'message' => 'Existe uma encomenda que não foi finalizada. Por Favor Finalize e Feche a sua conta.'
                ], 200);
        }



        // Calcular o total de vendas realizadas durante o período do caixa
        $totalSales = OrderItem::where('cash_register_id', $cashRegister->id)
            ->sum('total');

        // Atualizar informações do caixa
        $cashRegister->update([
            'closing_balance' => $data['closing_balance'],
            'automatic_closing_balance' => $totalSales,
            'closed_at' => now(),
            'difference'=> $totalSales - $data['closing_balance'],
            'cash_register_status_id' => 2 // 2 = Fechado
        ]);

        // // Calcular a diferença entre o saldo esperado e o real
        // $expectedBalance = $cashRegister->opening_balance + $totalSales;
        // $difference = $request->closing_balance - $expectedBalance;

        return response()->json([
            'message' => 'Caixa Fechada com suscesso'
        ], 200);
    }

    public function home(){

        $openCashRegister = CashRegister::where('user_id', Auth::id())
            ->where('cash_register_status_id', 1) // 1 = Aberto
            ->first();
            if ($openCashRegister) {
                $total = $openCashRegister->orderItens()->sum('total');
        
                return response()->json([
                    'cash_register'=>$openCashRegister,
                    'totalcash'=>$total
                ]);
            }


            return response()->json([
                'cash_register'=>$openCashRegister,
                'totalcash'=>0
            ]);
    }


    public function quicksell(){

        $openCashRegister = CashRegister::where('user_id', Auth::id())
        ->where('cash_register_status_id', 1) // 1 = Aberto
        ->first();

        // if (!$openCashRegister) {
        //     return response()->json([
        //         'message' => 'Não é possível realizar ou iniciar a venda. Abra o caixa primeiro.'
        //     ], 403); // Código HTTP 403 - Proibido
        // }

        $categories = Category::with(['sub_categories.products' => function($query) {
            $query->withQuantityInPrincipalStock();
        }])->get();


        return response()->json([
            "categories"=>$categories
        ]);

    }

    public function savequicksell(Request $request){
        $data = $request->all();

        // return $data;



        $openCashRegister = CashRegister::where('user_id', Auth::id())
        ->where('cash_register_status_id', 1) // 1 = Aberto
        ->first();

        if (!$openCashRegister) {
            return response()->json([
                'message' => 'Não é possível realizar a venda. Abra o caixa primeiro.'
            ], 400); // Código HTTP 403 - Proibido
        }

        foreach ($data['products'] as $item) {
            $product = Product::withQuantityInPrincipalStock()->find($item['id']);
        
            // Correção do operador de comparação e da propriedade
            if ($product->quantity_in_principal_stock < $item['quantity'] || $product->quantity_in_principal_stock == 0) {
                return response()->json([
                    'message' => "A quantidade de {$product->name} não é suficiente. Atualmente tem {$product->quantity_in_principal_stock} unidades em estoque."
                ], 400); // Código HTTP 403 - Proibido
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
        // $orderitens = OrderItem::where('order_id',$order->id)->get();

        $payment = Payment::create([
            "order_id"=>$order->id,
            "payment_method_id"=>$data["payment_method_id"],
            "amount"=>$data['total'],
            "cash_register_id" => $openCashRegister->id,
            "user_id" => Auth::user()->id
        ]);

        return response()->json([
            "message"=>"Pedido realizado com sucesso",
        ]);

    }
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
}
