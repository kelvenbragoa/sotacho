<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $categoryIds = DB::table('categories')->pluck('id')->toArray();
        $subcategoryIds = DB::table('sub_categories')->pluck('id')->toArray();

        // Inserção de produtos
        $productNames = [
            'Coca Cola', 'Pepsi', 'Fanta Laranja', 'Guaraná Antártica', 
            'Sprite', 'Monster Energy', 'Red Bull', 'Heineken', 
            'Skol Beats', 'Brahma', 'Água Crystal', 'Água Bonafont', 
            'Água Perrier', 'Lipton Chá Gelado', 'Chá Mate Leão', 
            'Del Valle Sucos', 'Suco de Uva Integral', 'H2OH!', 
            'Schweppes Citrus', 'Johnnie Walker', 'Jack Daniel’s', 
            'Smirnoff Vodka', 'Absolut Vodka', 'Campari', 
            'Baileys Irish Cream', 'Martini', 'Chandon Espumante', 
            'Moët & Chandon', 'Catuaba Selvagem', 'Jurupinga'
        ];
        $productData = [];

        foreach ($productNames as $name) {
            $productData[] = [
                "name" => $name,
                "image" => 'image/pizza.png',
                "department_id"=>1,
                "category_id" => $categoryIds[array_rand($categoryIds)],  // Categoria aleatória
                "sub_category_id" => $subcategoryIds[array_rand($subcategoryIds)],  // Categoria aleatória
                "price" => rand(100, 1000),  // Preço aleatório entre 1,00 e 10,00
                "created_at" => now(),
                "updated_at" => now(),
            ];
        }

        DB::table('products')->insert($productData);
    }
}
