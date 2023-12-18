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
        Schema::create('favourite_books', function (Blueprint $table) {
            
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->foreign('book_id')->references('book_id')->on('books');
            
        });

        //Schema::rename($FavBook, $Favourites);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favourite_books');
    }

    
    


};


