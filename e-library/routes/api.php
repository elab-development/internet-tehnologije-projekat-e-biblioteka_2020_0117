<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\FavBookController;
use App\Http\Resources\AuthorResources\AuthorCollection;
use App\Http\Resources\AuthorResources\AuthorResource;
use App\Http\Controllers\API\AuthController;
use App\Http\middleware;
use App\Http\Resources\GenreResources\GenreCollection;
use App\Http\Resources\GenreResources\GenreResource;
use App\Http\Middeware\Admin;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('/users', [UserController::class, 'index']);
 









//ruta za pretrazivanje po 2 kriterijuma

//
//Route::delete('/authors/{author_id}', AuthorController::class,'destroy');//->only(['update', 'store', 'destroy']);//->middleware('admin');
//Route::delete('/authors/{author_id}', [AuthorController::class, 'destroy']);
//Route::delete('/api/authors', [AuthorController::class, 'destroy']);





//Route::resource('/users', UserController::class);

//Route::get('/authors', AuthorController::class,'index');

//Route::resource('/books', BookController::class)->only(['index', 'show']);;
//ova ruta mozda nece da nam treba, ali neka je zakomentarisana za svaki slucaj

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [UserController::class, 'show']); 
    Route::delete('/destroyFavBook', [FavBookController::class, 'destroy']);
    Route::post('/storeFavBook', [FavBookController::class, 'store']);

    Route::group(['middleware' => ['admin']], function () {
        
        Route::resource('/books', BookController::class)->only(['update', 'store', 'destroy'])->middleware('admin');
        Route::resource('/genres/{genre_id}', GenreController::class)->only(['create', 'store'])->middleware('admin');
        Route::put('/update-user', [AuthController::class, 'update']);

        //nisu nesto mnogo bitne rute al neka ih
        Route::get('/authors/{author_id}', [BookController::class, 'searchAuthor']);
        Route::get('/genres/{genre_id}', [BookController::class, 'searcGenres']);
        Route::get('/genresAndAuthors/{author_id,genre_id}',[BookController::class,'searchAuthorGenre']);
        Route::get('/api/authors', [AuthorController::class, 'show']);
    });

    
    

  
});

