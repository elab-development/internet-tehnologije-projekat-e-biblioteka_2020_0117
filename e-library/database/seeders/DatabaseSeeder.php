<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;
use App\Models\Book;
use App\Models\FavBook;
use App\Models\User;
//use Illuminate\Database\Console\Seeds\WithoutModelEvents;
//use Illuminate\Database\Seeder;
//use Illuminate\Support\Facades\Hash;

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
        $user1 = User::create([
            'user_id' => 1,
            'name' => 'Adam',
            'surname' => 'Adamic',
            'username' => 'ADAM',
            'email' => 'adam@example.com',
            'password' => Hash::make('admin1234')
            
        ]);
        $user2 = User::create([
            'user_id' => 2,
            'name' => 'Bdam',
            'surname' => 'Bdamic',
            'username' => 'BDAM',
            'email' => 'bdam@example.com',
            'password' => Hash::make('admin1234')
        ]);
    }
}
