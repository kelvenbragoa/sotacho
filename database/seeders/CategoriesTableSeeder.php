<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            //
            // Inserção de categorias
            $categories = [
                'Bebidas', 'Refeições'
            ];

            $subcategories1 = [
                'Refrigerantes', 'Sucos', 'Água Mineral', 'Energéticos', 
                'Cervejas', 'Vinhos', 'Destilados', 'Chás Gelados', 
                'Águas Saborizadas', 'Licores','Whisky'
            ];

            $subcategories2 = [
                'Entradas', 'Café da Manhã', 'Jantar', 'Acompanhantes',
                'Pratos Principais', 'Sobremesas', 'Sanduíches', 'Lanches Rápidos',
                'Saladas', 'Massas', 'Carnes', 'Peixes e Frutos do Mar'
            ];
            $categoryData = [];
            $categoryData1 = [];
            $categoryData2 = [];

            foreach ($categories as $categoryName) {
                $categoryData[] = [
                    "name" => $categoryName,
                    "department_id"=>1,
                    "image" => 'image/pizza.png',
                    "created_at" => now(),
                    "updated_at" => now(),
                ];
            }

            foreach ($subcategories1 as $subcategoryName1) {
                $categoryData1[] = [
                    "name" => $subcategoryName1,
                    "category_id" => 1,
                    "image" => 'image/pizza.png',
                    "created_at" => now(),
                    "updated_at" => now(),
                ];
            }

            foreach ($subcategories2 as $subcategoryName2) {
                $categoryData2[] = [
                    "name" => $subcategoryName2,
                    "category_id" => 2,
                    "image" => 'image/pizza.png',
                    "created_at" => now(),
                    "updated_at" => now(),
                ];
            }

            DB::table('categories')->insert($categoryData);
            DB::table('sub_categories')->insert($categoryData1);
            DB::table('sub_categories')->insert($categoryData2);
    }
}
