<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CashRegisterTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('cash_register_statuses')->insert([
            [
                "name"=>"Aberto",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Fechado",
                "created_at"=>now(),
                "updated_at"=>now(),
            ]
        ]);
    }
}
