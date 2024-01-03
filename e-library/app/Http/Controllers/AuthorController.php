<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthorResources\AuthorCollection;
use App\Http\Resources\AuthorResources\AuthorResource;
use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $authors = Author::all();
        return new AuthorCollection($authors);
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
            'surname' => 'required|string|max:50'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $author = Author::create([
            'name' => $request->name,
            'surname' => $request->surname
        ]);

        return response()->json(['Author created successfully.', new AuthorResource($author), 'success' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function show($author_id)
    {
        $author = Author::find($author_id);
        if (is_null($author)) {
            return response()->json('Data not found', 404);
        }
        return new AuthorResource($author);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $author = Author::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'surname' => 'required|string|max:50'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());


        $author->name = $request->name;
        $author->surname = $request->surname;

        $author->save();

        return response()->json(['Author updated successfully.', new AuthorResource($author), 'success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function destroy($author_id)
    {

       // dd($author_id);

        //$author_id = $request->input('author_id');
        $author = Author::find($author_id);

        if (!$author) {
            return response()->json('Author not found.', 404);
        }
    
        $author->delete();
        return response()->json('Author deleted successfully.');
    }
}
