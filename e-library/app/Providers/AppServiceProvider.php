<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\GenreService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

        $this->genreService = new GenreService();

        $this->app->singleton(GenreService::class, function ($app) {
            return new GenreService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        
    }

    function getRandomUniqueGenres($zanrovi, $brojVrednosti = 5)
        {
            if ($brojVrednosti > count($zanrovi)) {
                throw new Exception("Zahtevani broj vrednosti je veći od dostupnih žanrova.");
            }
        
            $nasumicniZanrovi = array_rand($zanrovi, $brojVrednosti);
        
            
            while (count(array_unique($nasumicniZanrovi)) < $brojVrednosti) {
                shuffle($nasumicniZanrovi);
            }
        
            return array_map(function ($index) use ($zanrovi) {
                return $zanrovi[$index];
            }, $nasumicniZanrovi);
        }
}
