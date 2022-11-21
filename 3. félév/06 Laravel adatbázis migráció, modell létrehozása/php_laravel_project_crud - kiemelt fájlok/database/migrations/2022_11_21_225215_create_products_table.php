<?php

// Migration: Laravelben egy PHP fájl, amely leírja, hogyan nézzen ki egy adatbázistábla

// Migration létrehozása parancssorból:
// php artisan make:migration create_products_table

// Migration futtatása: 
// php artisan migrate

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    // Új adatbázistábla létrehozása - ez fut le migráláskor
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            // Adatbázis mezők
            // Az adattípust mindig meg kell adni

            $table->id();                   // azonosító mező (auto increment)
            $table->text('title');          // termék neve
            $table->text('description');
            $table->text('short_notes');
            $table->decimal('price',10,2);  // DECIMAL(10,2) típus, pl. 99999999.99
            $table->text('picture');        // képeket is szövegváltozóban tárolunk
            $table->text('slug');           // keresőbarát URL
            $table->timestamps();           // létrehozási és frissítési időbélyeg
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
