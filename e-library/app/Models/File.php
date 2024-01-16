<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;
    protected $fillable = [
        'file_id',
        'name',
        'file_path',
        'num_pages',
        'author_id',
        'genre_id'
    ];

    public function author()
    {
        return $this->belongsTo(Author::class);
    }
 
    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }
   
    public function favBooks()
    {
        return $this->hasMany(FavBook::class);
    }

    protected $primaryKey = 'file_id';
}
