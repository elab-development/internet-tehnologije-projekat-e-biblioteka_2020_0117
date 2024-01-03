<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\GenreResources\GenreCollection;
use App\Http\Resources\GenreResources\GenreResource;

class GenreController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            
            'name' => 'required|string|max:50',
           
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors(), 'success' => false]);
        }

        $genre = Genre::create([

           
            'name' => $request->name,
            
           
        ]);

        return response()->json(['Genre stored successfully.', new GenreResource($genre), 'success' => true]);


    }

    public function create(Request $request)
    {
        
        $request->validate([
            'name' => 'required|string|max:50'
            
        ]);

        
        $genre = Genre::create($request->all());

        
        return response()->json(['message' => 'Genre created successfully', 'genre' => $genre], 201);
        
    }

    


}
