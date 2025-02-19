<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('departments')->insert([
            [
                "name"=>"Cozinha",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Bar",
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
        ]);
    }
}
