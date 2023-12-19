<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'genre_id',
        'name'
        
    ];
<<<<<<< HEAD

    public function books()
    {
        return $this->hasMany(Book::class);
    }
=======
public function genre_books(){
    return $this->hasMany(Book::class);
}

>>>>>>> 046f93aa526b9b127c25eff41272b825f84b656e
}
