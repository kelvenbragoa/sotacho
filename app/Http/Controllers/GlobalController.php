<?php

namespace App\Http\Controllers;

use App\Models\CashRegister;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;


class GlobalController extends Controller
{
    //
    public function relatorio(){

        $dateURL = request('date');

        $date = $dateURL ? date('Y-m-d', strtotime($dateURL)) : date('Y-m-d');
    
        $cashRegister = CashRegister::with('orderitens')
        ->with('user')
        ->with('status')->whereDate('created_at', $date)->get();
    
        $cashRegister->transform(function ($cash) {
            $cash->order_itens_total = $cash->orderitens->sum('total');
            return $cash;
        });
    
        $cashRegisterId = $cashRegister->pluck('id');
    
        $orders = Order::with('itens')
            ->whereIn('cash_register_id', $cashRegisterId)
            ->get();
    
        $orderItems = $orders->flatMap->itens;
    
        $orderItemsTable = $orderItems->filter(function ($item) {
            return $item->order->table_id !== null;
        });
    
        $totalSales = $orderItems->sum('total');
        $totalOrders = $orderItems->count();
        $averageTicket = $totalOrders > 0 ? $totalSales / $totalOrders : 0;
    
        $tableOrders = $orders->whereNotNull('table_id');
        $quickSellOrders = $orders->whereNull('table_id');
    
        $totalOrderTables = $tableOrders->count();
        $totalOrderQuickSell = $quickSellOrders->count();
    
        $totalOrderTablesAmount = $orderItemsTable->sum('total');
        $totalOrderQuickSellAmount = $quickSellOrders->flatMap->itens->sum('total');
    
        $totalPayments = Payment::whereIn('cash_register_id', $cashRegisterId)->count();
        $totalPaymentsAmount = Payment::whereIn('cash_register_id', $cashRegisterId)->sum('amount');
        $ticket = round($averageTicket, 2);
        // return response()->json([
        //     'cash_register' => $cashRegister,
        //     'total_sales' => $totalSales,
        //     'total_orders' => $totalOrders,
        //     'total_tables' => $totalOrderTables,
        //     'total_quick_sell' => $totalOrderQuickSell,
        //     'average_ticket' => round($averageTicket, 2),
        //     'total_tables_amount' => $totalOrderTablesAmount,
        //     'total_quick_sell_amount' => $totalOrderQuickSellAmount,
        //     'total_payments' => $totalPayments,
        //     'total_payments_amount' => $totalPaymentsAmount,
        // ]);

        $pdf = Pdf::loadView('pdf.report', compact('cashRegister','totalSales','totalOrders','totalOrderTables','totalOrderQuickSell','ticket','totalOrderTablesAmount','totalOrderQuickSellAmount','totalPayments','totalPaymentsAmount'))->setOptions([
            'setPaper'=>'a8',
            // 'setPaper' => [0, 0, 640, 2376],
            'defaultFont' => 'sans-serif',
            'isRemoteEnabled' => 'true'
        ]);
        return $pdf->setPaper('a4')->stream('report.pdf');
    }
}
