<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TableStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('table_statuses')->insert([
            [
                "name"=>"Livre",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Ocupada",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Reservada",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Agrupada",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Fechamento",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Manutenção",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
        ]);
    }
}
