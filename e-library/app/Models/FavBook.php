<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Models\User;
use App\Http\Models\File;

class FavBook extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'file_id',
        'user_id'
        
    ];

    protected $table = 'favourites';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
 
    public function book()
    {
        return $this->belongsTo(File::class);
    }

    
}
