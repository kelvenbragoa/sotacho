<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $searchQuery = request('query');

            $categories = SubCategory::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->where('name','like',"%{$searchQuery}%");
            })
            ->with('category.department')
            ->orderBy('name','asc')
            ->paginate();

            return response()->json($categories);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $categories = Category::all();

        return response()->json([
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        $subcategory = SubCategory::create([
            'category_id' => $data['category_id'],
            'name'=>$data['name'],
            'image'=>null,
        ]);
        return response()->json($subcategory);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $subcategory = SubCategory::
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
        $subcategory = SubCategory::find($id);
        $categories = category::all();

        return response()->json([
            'categories' => $categories,
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
        $subcategory = SubCategory::find($id);
        $subcategory->update($data);
        return response()->json($subcategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

        $subcategory = SubCategory::find($id);
        $existProduct = Product::where('sub_category_id', $subcategory->id)->first();
        if ($existProduct) {
            return response()->json(['message' => 'Não é possível a categoria, existe produtos associadas'], 404);
        }
        $subcategory->delete();
        return true;
    }
}
