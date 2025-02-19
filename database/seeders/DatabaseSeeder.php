<?php

namespace Database\Seeders;

use App\Models\OrderItemStatus;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        // $this->call(ProductTableSeeder::class);
        // $this->call(DepartmentTableSeeder::class);
        // $this->call(CategoriesTableSeeder::class);
        // $this->call(UserTableSeeder::class);
        // $this->call(OrderStatusTableSeeder::class);
        // $this->call(PaymentMethodTableSeeder::class);
        // $this->call(ReservationStatusTableSeeder::class);
        // $this->call(RoleTableSeeder::class);
        // $this->call(TablesTableSeeder::class);
        // $this->call(TableStatusTableSeeder::class);
        // $this->call(OrderItemStatusTableSeeder::class);
        // $this->call(StatusTableSeeder::class);
        $this->call(CashRegisterTableSeeder::class);


    }
}
