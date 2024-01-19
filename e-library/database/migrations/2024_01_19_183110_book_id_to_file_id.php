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
        Schema::table('favourite_books', function (Blueprint $table) {
            $table->renameColumn('book_id', 'file_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('favourite_books', function (Blueprint $table) {
            $table->renameColumn('file_id', 'book_id');
        });
    }
};
