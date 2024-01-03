<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;
use App\Models\Book;
use App\Models\FavBook;
use App\Models\User;
use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
//use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        //brisemo sve iz baze ukoliko je nesto slucajno ostalo
        //User::truncate();
        //Author::truncate();
        //Book::truncate();
        //FavBook::truncate();
        //Genre::truncate();
       


        User::factory(5)->create();
       //Genre::factory(5)->create();
       // Author::factory(5)->create();
            //ovo za Genre nece da radi jer iz nekog razloga hoce da ubaci kolone uipdated_at i created_at a one ne postoje u modelu

//napraviti call metodu koja zove ostale seedere
    }
}
