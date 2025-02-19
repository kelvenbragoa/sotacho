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
        Schema::create('stock_center_transfers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('stock_center_transfer_status_id');
            $table->unsignedBigInteger('stock_center_origin_id');
            $table->unsignedBigInteger('stock_center_destination_id');
            $table->unsignedBigInteger('user_id');
            $table->string('ref');
            $table->date('transfer_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_center_transfers');
    }
};
