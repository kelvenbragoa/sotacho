<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use Illuminate\Http\Request;

class PaymentMethodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $searchQuery = request('query');

            $paymentmethod = PaymentMethod::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->where('name','like',"%{$searchQuery}%");
            })
            ->with('status')
            ->orderBy('name','asc')
            ->paginate();

            return response()->json($paymentmethod);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return response()->noContent();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        $paymentmethod = PaymentMethod::create([
            'name'=>$data['name'],
            'status_id'=>1,
        ]);
        return response()->json($paymentmethod);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $paymentmethod = PaymentMethod::with('status')->find($id);

        return response()->json($paymentmethod);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $paymentmethod = PaymentMethod::with('status')->find($id);

        return response()->json([
            'paymentmethod' => $paymentmethod,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $data = $request->all();
        $paymentmethod = PaymentMethod::find($id);
        $paymentmethod->update($data);
        return response()->json($paymentmethod);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $paymentmethod = PaymentMethod::find($id);
        $paymentmethod->delete();
        return true;
    }
}
