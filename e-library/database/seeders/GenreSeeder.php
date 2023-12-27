<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Providers\AppServiceProvider;
use App\GenreService;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
   

     

    public function run(): void
    {
   
        Genre::factory(5)->create();
   
    }
}
