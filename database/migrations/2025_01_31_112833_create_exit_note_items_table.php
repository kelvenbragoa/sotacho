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
        Schema::create('exit_note_items', function (Blueprint $table) {
            $table->id();
            $table->integer('stock_center_id');
            $table->integer('exit_note_id');
            $table->integer('product_id');
            $table->integer('quantity');
            $table->integer('last_quantity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exit_note_items');
    }
};
