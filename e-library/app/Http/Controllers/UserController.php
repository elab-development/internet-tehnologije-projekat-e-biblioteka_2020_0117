<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResources\UserCollection;
use App\Http\Resources\UserResources\UserResource;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //u promenljivu $users upisi sve objekte tipa User
        $users = User::all();
        
        //vrati kolekciju User-a
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            
            'username' => 'required|string|max:50',
            'name' => 'required|string|max:50',
            //'surname' => 'string|max:50',
            'email' => 'required|email',
            'email_verified_at' => 'nullable'
            
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors(), 'success' => false]);
        }

        $user = User::create([

            'username' => $request->username,
            'name' => $request->name,
            //'surname' => $request->surname,
            'email' => $request->email
           
        ]);

        return response()->json(['User stored successfully.', new UserResource($user), 'success' => true]);


    }

    /**
     * Display the specified resource.
     */
    public function show(User $user_id)
    {
        $user = User::find($user_id);
        if (is_null($user)) {
            return response()->json('Data not found', 404);
        }
        return new UserResource($user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $user = User::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'surname' => 'required|string|max:50',
            'email' => 'required|email',
            'username' => 'required|string|max:50',
        
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());


        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->email = $request->email;
        $user->username = $request->username;
        

        $user->save();

        return response()->json(['User data updated successfully.', new UserResource($user), 'success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json('User deleted successfully.');
    }
}
