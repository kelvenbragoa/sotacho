<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('statuses')->insert([
            [
                "name"=>"Ativo",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Inativo",
                "created_at"=>now(),
                "updated_at"=>now(),
            ]
        ]);
    }
}
