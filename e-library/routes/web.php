<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\FileUpload;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/upload-file', [FileUpload::class, 'createForm']);
Route::post('/upload-file', [FileUpload::class, 'fileUpload'])->name('fileUpload');


<<<<<<< HEAD
Route::get('/getFile/{filename}', [FileUpload::class, 'getFile']);
// Route::get('storage/{filename}', function ($filename)
// {
//     return File::make(storage_path('public/' . $filename))->response();
// });
=======
Route::get('/getFile/{name}', [FileUpload::class, 'getFile']);
>>>>>>> 0e0718a8b57ae32e7bac064bd0e02cc1bff85667
//proveriti ime fajlova

