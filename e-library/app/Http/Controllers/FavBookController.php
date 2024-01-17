<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResources\FavBookCollection;
use App\Http\Resources\BookResources\FavBookResource;
use App\Models\FavBook;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class FavBookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)//userov id se prosledjuje
    {
       
        //$user = $request->user;
        //$user_id = $user->id;
        $books = FavBook::get()->where('user_id', $id)->pluck('book_id');
        if (is_null($books)) {
            return response()->json('There are no such files', 404);
        }
        //return new FavBookCollection($books);
        return $books;

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
            'file_id' => 'required',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $favBook = FavBook::create([
            'file_id' => $request->file_id,
            'user_id' => $request->id//mozda treba user_id
        ]);

        return response()->json(['Favourite book created successfully.', new FavBookResource($favBook), 'success' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FavBook  $favBook
     * @return \Illuminate\Http\Response
     */
    public function show($favBook_id)
    {


        $favBook = FavBook::get()->where('id', $favBook_id)->first();
        if (!$favBook) {
            return response()->json('Data not found', 404);
        }
        return new FavBookResource($favBook);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $file_id = $request->file_id;
        $user_id = $request->id;//mozda user_id

        $favBook = FavBook::get()->where('file_id', '=',$file_id)->where('user_id','=',$id)->first();
        
        if (!$favBook) {
            return response()->json('There is no such favourite book', 404);
        }

        $favBook->delete();

        return response()->json('Book removed from favourites successfully.');
    }
}
