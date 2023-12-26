<?php

use ErlandMuchasaj\LaravelFileUploader\FileUploader; 
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

Route::get('/', function () {
    return view('welcome');
});

// visualize the form
Route::get('/files', function (Request $request) {
    return view('files');
})->name('files');

// handle the post request
Route::post('/files', function (Request $request) {

    $max_size = (int) ini_get('upload_max_filesize') * 1000;


    $request->validate([
        'file' => [
            'required',
            'file',
            'max:'.$max_size,
        ]
    ]);

    $file = $request->file('file');

    $response = FileUploader::store($file);

    return redirect()
            ->back()
            ->with('success','File has been uploaded.')
            ->with('file', $response);
})->name('files.store');