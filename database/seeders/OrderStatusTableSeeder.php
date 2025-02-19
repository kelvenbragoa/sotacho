<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('order_statuses')->insert([
            [
                "name"=>"Aberta",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Finalizada",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Paga",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
        ]);
    }
}
