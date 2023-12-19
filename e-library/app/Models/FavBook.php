<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavBook extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'book_id',
        'user_id'
        
    ];
<<<<<<< HEAD
=======

>>>>>>> 56377dd8857e9e1260d7788e246616f53add799d
    public function user()
    {
        return $this->belongsTo(User::class);
    }
<<<<<<< HEAD
 
=======

>>>>>>> 56377dd8857e9e1260d7788e246616f53add799d
    public function book()
    {
        return $this->belongsTo(Book::class);
    }
<<<<<<< HEAD

=======
>>>>>>> 56377dd8857e9e1260d7788e246616f53add799d
}
