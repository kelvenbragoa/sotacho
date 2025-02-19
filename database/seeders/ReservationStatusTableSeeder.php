<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReservationStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('reservation_statuses')->insert([
            [
                "name"=>"Ativa",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Cancelada",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Concluida",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
        ]);
    }
}
