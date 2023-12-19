<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'author_id',
        'name',
        'surname'
        
    ];

<<<<<<< HEAD
    public function books()
    {
=======
    public function books(){
>>>>>>> 046f93aa526b9b127c25eff41272b825f84b656e
        return $this->hasMany(Book::class);
    }

}
