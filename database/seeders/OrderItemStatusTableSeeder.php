<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderItemStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('order_item_statuses')->insert([
            [
                "name"=>"Pendente",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Preparando",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Pronto",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Entregue",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
        ]);
    }
}
