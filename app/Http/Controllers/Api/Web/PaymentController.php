<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\PaymentMethod;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $searchQuery = request('query');

            $payments = Payment::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->where('id','like',"%{$searchQuery}%");
            })
            ->with('method')
            ->orderBy('created_at','desc')
            ->paginate();

            return response()->json($payments);
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
        $payment = Payment::with('method')->find($id);

        return response()->json($payment);
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
        $table = PaymentMethod::find($id);
        $existOrder = Payment::where('payment_method_id', $table->id)->first();
        if ($existOrder) {
            return response()->json(['message' => 'Não é possível o metodo, existe pedidos associadas'], 404);
        }
        $table->delete();
        return true;
    }
}
