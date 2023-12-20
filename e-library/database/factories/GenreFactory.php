<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Genre;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Genre>
 */
class GenreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     //$factory->define(App\Models\Genre::class, function (Faker $faker);

    public function definition(): array
    {
        
        //$genre_names = ['Fiction', 'Science fiction', 'Mistery', 'Thriller', 'Romance', 'Fantasy', 'Crime', 'Horror'];
        //return [
         //   'name' => $genre_names->randomElement($genre_names)
        //];


        //$factory->define(App\Models\Genre::class, function (Faker $faker) {
         //   $genre_names = ['Fiction', 'Science fiction', 'Mistery', 'Thriller', 'Romance', 'Fantasy', 'Crime', 'Horror'];
            
         //   return [
         //       'name' => $faker->randomElement($genre_names)
         //   ];
        //});

        return [

            'name' => $this->faker->word()
            
        ];


    }
}
