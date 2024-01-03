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




    public function books()
    {
        return $this->hasMany(Book::class);
    }
    
    protected $primaryKey = 'genre_id';
}



