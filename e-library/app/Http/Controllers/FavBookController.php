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
    public function index()
    {
        $user_id = auth()->user()->id;
        //$user = $request->user;
        //$user_id = $user->id;
        $books = FavBook::get()->where('user_id', $user_id);
        if (is_null($books)) {
            return response()->json('Data not found', 404);
        }
        return new FavBookCollection($books);
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
            'book_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $favBook = FavBook::create([
            'book_id' => $request->book_id,
            'user_id' => auth()->user()->user_id//id
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
    public function destroy($favBook_id)
    {
        $user_id = auth()->user()->user_id;
        $favBook = FavBook::get()->where('id', '=',$favBook_id)->where('user_id','=',$user_id)->first();
        //ovo sa = je rekao chat gpt da treba
        if (!$favBook) {
            return response()->json('Data not found', 404);
        }

        $favBook->delete();

        return response()->json('Book removed from favourites successfully.');
    }
}
