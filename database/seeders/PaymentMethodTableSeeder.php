<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentMethodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('payment_methods')->insert([
            [
                "name"=>"Dinheiro",
                "status_id"=>1,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Cartão",
                "status_id"=>1,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            // [
            //     "name"=>"Dividido",
            //     "status_id"=>1,
            //     "created_at"=>now(),
            //     "updated_at"=>now(),
            // ],
            [
                "name"=>"Emola",
                "status_id"=>1,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"MPesa",
                "status_id"=>1,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Mkesh",
                "status_id"=>1,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
            [
                "name"=>"Conta Movel",
                "status_id"=>1,
                "created_at"=>now(),
                "updated_at"=>now(),
            ],
        ]);
    }
}
