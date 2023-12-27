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

    public function books()
    {
        return $this->hasMany(Book::class);
    }
    protected $primaryKey = 'author_id';

}
