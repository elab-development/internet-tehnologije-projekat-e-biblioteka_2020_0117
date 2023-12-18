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
        $table->foreign('author_id')->references('author_id')->on('authors');
        $table->foreign('genre_id')->references('genre_id')->on('genres');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
