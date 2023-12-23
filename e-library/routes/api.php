<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthorController;
use App\Http\Resources\AuthorResources\AuthorCollection;
use App\Http\Resources\AuthorResources\AuthorResource;
use App\Http\Controllers\API\AuthController;



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



//Route::resource('/users', UserController::class);

//Route::get('/authors', AuthorController::class,'index');

//Route::resource('/books', BookController::class)->only(['index', 'show']);;
//ova ruta mozda nece da nam treba, ali neka je zakomentarisana za svaki slucaj

Route::group(['middleware' => ['auth:sanctum']], function () {

   /* Route::get('/profile', function (Request $request) {
        return auth()->user();
    });  */

    Route::group(['middleware' => ['admin']], function () {
    });

    Route::resource('books', BookController::class)->only(['update', 'store', 'destroy'])->middleware('admin');

    Route::resource('authors', AuthorController::class)->only(['update', 'store', 'destroy'])->middleware('admin');

    Route::resource('favbooks', FavBookController::class)->only(['index', 'show', 'store', 'destroy']);

    Route::put('/update-user', [AuthController::class, 'update']);

    Route::post('/logout', [AuthController::class, 'logout']);
});

