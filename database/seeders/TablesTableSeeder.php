<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TablesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('tables')->insert([
            [
                "name"=>"Mesa 1",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mesa 2",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mesa 3",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mesa 4",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mesa 5",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mesa 6",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mesa 7",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mesa 8",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mesa 9",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mesa 10",
                "table_status_id"=>1,
                "capacity"=>5,
                "created_at"=>now(),
                "updated_at"=>now(),
            ]
        ]);
        
    }
}
