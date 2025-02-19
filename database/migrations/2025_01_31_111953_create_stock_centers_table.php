<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stock_centers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('is_principal_stock')->default(0);
            $table->string('name');
            $table->string('code');
            $table->string('location');
            $table->string('maximum_capacity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_centers');
    }
};
