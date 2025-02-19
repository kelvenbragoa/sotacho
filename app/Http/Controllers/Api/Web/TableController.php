<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Table;
use Illuminate\Http\Request;

class TableController extends Controller
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
            ->orderBy('name','asc')
            ->paginate();

            return response()->json($tables);
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
        $table = Table::create([
            'name' => $data['name'],
            'capacity' => $data['capacity'],
            'table_status_id'=>1
        ]);
        return response()->json($table);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $table = Table::with('status')->find($id);

        return response()->json($table);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $table = Table::with('status')->find($id);

        return response()->json([
            'table' => $table,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $data = $request->all();
        $table = Table::find($id);
        $table->update($data);
        return response()->json($table);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

        $table = Table::find($id);
        $existOrder = Order::where('table_id', $table->id)->first();
        if ($existOrder) {
            return response()->json(['message' => 'Não é possível a mesa, existe pedidos associadas'], 404);
        }
        $table->delete();
        return true;
    }
}
