<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Genre;
use App\Providers\AppServiceProvider;
use App\GenreService;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Genre>
 */
class GenreFactory extends Factory
{

    protected $model = Genre::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     //$factory->define(App\Models\Genre::class, function (Faker $faker);

    public function definition(): array
    {
        //kod se nalazi ispod ovih silnih komentara
        
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
        $genreService = app(GenreService::class);
        $genres = ['Fantasy', 'Mistery', 'Science fiction', 'Romance', 'Thriller', 'Crime', 'Drama', 'Advanture', 'Horror', 'Biography'];
        $randomGenres = $genreService->getRandomUniqueGenres($genres);
        


        return [

            'name' => $randomGenres 
            
        ];


    }
}
