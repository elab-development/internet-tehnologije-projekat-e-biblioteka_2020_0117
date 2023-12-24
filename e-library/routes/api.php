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

Route::get('/users', [UserController::class, 'index']);
Route::get('/user', [UserController::class, 'show']);  //nisam sigurna...

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/authors/{author_id}', [BookController::class, 'searchAuthor']);
Route::get('/genres/{genre_id}', [BookController::class, 'searcGenres']);

//Route::resource('/users', UserController::class);

//Route::get('/authors', AuthorController::class,'index');

//Route::resource('/books', BookController::class)->only(['index', 'show']);;
//ova ruta mozda nece da nam treba, ali neka je zakomentarisana za svaki slucaj

Route::group(['middleware' => ['auth:sanctum']], function () {

   /* Route::get('/profile', function (Request $request) {
        return auth()->user();
    }); */

    Route::group(['middleware' => ['admin']], function () {
        //zar rute ispod ne treba da budu ovde ili je ono ->middleware('admin') zapravo to
    });

    Route::resource('books', BookController::class)->only(['update', 'store', 'destroy'])->middleware('admin');

    Route::resource('authors', AuthorController::class)->only(['update', 'store', 'destroy'])->middleware('admin');
    
    Route::resource('genres', GenreController::class)->only(['create', 'store'])->middleware('admin');

    Route::resource('favbooks', FavBookController::class)->only(['index', 'show', 'store', 'destroy']);
    //mozda ovde da stavimo rutu da svako (ne mora da bude admin) moze da samo ponistava ovo favBook, kao da moze da postavi da mu se neka knjiga
    //ne svidja vise, ili da napravimo dve posebno jedna bude store, a druga destroy da mogu da rade svi to kad su ulogovani
    

  
});

