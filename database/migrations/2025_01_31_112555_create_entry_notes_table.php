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
        Schema::create('entry_notes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('stock_center_id');
            $table->string('ref');
            $table->string('document_ref');
            $table->string('serie');
            $table->integer('products_number');
            $table->integer('supplier_id')->nullable();
            $table->text('obs')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entry_notes');
    }
};
