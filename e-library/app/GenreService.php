<?php


namespace App;

class GenreService
{
    public function getRandomUniqueGenres($zanrovi, $brojVrednosti = 5)
    {
        $nasumicniZanrovi = array_rand($zanrovi, $brojVrednosti);

        while (count(array_unique($nasumicniZanrovi)) < $brojVrednosti) {
            shuffle($nasumicniZanrovi);
        }

        return array_map(function ($index) use ($zanrovi) {
            return $zanrovi[$index];
        }, $nasumicniZanrovi);
    }
}