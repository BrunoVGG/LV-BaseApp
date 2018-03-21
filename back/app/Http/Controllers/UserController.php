<?php

namespace App\Http\Controllers;

use Hash,Auth;
use Illuminate\Http\Request;
use Laravel\Passport\Passport;
use App\User;

class UserController extends Controller
{

    public function index(){
        return User::get();
    }

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

    public function update(Request $request){

        return Auth::user();

        $validatedData = $request->validate([
            'name' => 'required|max:100',
            'email' => 'required|unique:users',
            'password' => 'confirmed|min:6'
        ]);

        return Auth::user();
        return "Update User";

        $user = new User;
        $user->name = $request->Input("name");
        $user->email = $request->Input("email");
        $user->password = Hash::make($request->Input("password"));
        $user->save();   
    }

    public function data(Request $request){
        return Auth::user();        
    }
}
