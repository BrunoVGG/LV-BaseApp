<?php

namespace App\Http\Controllers;

use Hash;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function store(Request $request){

        $validatedData = $request->validate([
            'name' => 'required|max:100',
            'email' => 'required|unique:users',
            'password' => 'confirmed|min:6'
        ]);

        $user = new User;
        $user->name = $request->Input("name");
        $user->email = $request->Input("email");
        $user->password = Hash::make($request->Input("password"));
        $user->save();          

    }
}
