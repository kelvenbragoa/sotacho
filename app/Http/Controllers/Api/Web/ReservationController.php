<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Reservation;
use App\Models\ReservationStatus;
use App\Models\Table;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $searchQuery = request('query');

            $reservations = Reservation::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->where('name','like',"%{$searchQuery}%");
            })
            ->with('table')
            ->with('customer')
            ->with('status')
            ->orderBy('name','asc')
            ->paginate();

            return response()->json($reservations);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $tables = Table::all();
        $customers = Table::all();
        $status = ReservationStatus::all();

        return response()->json([
            'tables' => $tables,
            'customers' => $customers,
            'status' => $status,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        $subcategory = Reservation::create([
            'table_id' => $data['table_id'],
            'reservation_status_id'=>$data['reservation_status_id'],
            'customer_id' => $data['customer_id'],
            'customer_name'=>$data['customer_name'],
            'reservation_time'=>$data['reservation_time'],
            'time'=>$data['time'],
        ]);
        return response()->json($subcategory);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $subcategory = Reservation::
        with('category.department')
        ->find($id);

        return response()->json($subcategory);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $subcategory = Reservation::find($id);
        $reservations = Category::all();

        return response()->json([
            'reservations' => $reservations,
            'subcategory' => $subcategory
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $data = $request->all();
        $subcategory = Reservation::find($id);
        $subcategory->update($data);
        return response()->json($subcategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

        $subcategory = Reservation::find($id);
        $subcategory->delete();
        return true;
    }
}
