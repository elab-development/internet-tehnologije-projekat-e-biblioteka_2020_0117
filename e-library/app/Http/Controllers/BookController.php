<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResources\BookCollection;
use App\Http\Resources\BookResources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\AuthorResources\AuthorCollection;
use App\Http\Resources\AuthorResources\AuthorResource;
use App\Models\Author;


class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Book::all();
        return new BookCollection($books);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'num_pages' => 'required',
            'author_id' => 'required',
            'genre_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $book = Book::create([
            'name' => $request->name,
            'num_pages' => $request->num_pages,
            'author_id' => $request->author_id,
            'genre_id' => $request->genre_id,
            
        ]);

        return response()->json(['Book created successfully.', new BookResource($book), 'success' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        return new BookResource($book);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'num_pages' => 'required',
            'author_id' => 'required',
            'genre_id' => 'required'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());


        $book->name = $request->name;
        $book->num_pages = $request->num_pages;
        $book->author_id = $request->author_id;
        $book->genre_id = $request->genre_id;


        $book->save();

        return response()->json(['Book updated successfully.', new BookResource($book), 'success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        $book->delete();
        return response()->json('Book deleted successfully.');
    }

    //pretarzivanje knjiga po autoru
    public function searchAuthor($author_id)
    {
        $books = Book::get()->where('author_id', $author_id);
        if (is_null($books)) {
            return response()->json('Data not found', 404);
        }
        return new BookCollection($books);
    }

    //pretraivanje knjiga po zanru
    public function searchGenres($genre_id)
    {
        $books = Book::get()->where('genre_id', $genre_id);
        if (is_null($books)) {
            return response()->json('Data not found', 404);
        }
        return new BookCollection($books);
    }
}
