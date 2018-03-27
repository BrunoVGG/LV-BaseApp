<?php

namespace App\Http\Controllers;

use Hash,Auth,Storage;
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

        $validatedData = $request->validate([
            'name' => 'required|max:100',
            'email' => 'required'
        ]);

        $user = User::findOrFail(Auth::user()->id);
        $user->name = $request->Input("name");
        $user->email = $request->Input("email");
        $user->save();   
    }

    public function updateImage(Request $request){

        $image = file_get_contents($request->Input("image"));
        $image_name = Auth::user()->id.'_avatar.png';

        Storage::put('public/avatar/'.$image_name, $image);

        $user = User::findOrFail(Auth::user()->id);
        $user->avatar = $image_name;
        $user->save();

        return asset("storage/avatar/$image_name");      
    }

    public function updatePassword(Request $request){

        $validatedData = $request->validate([
            'password' => 'required|confirmed|min:6',
        ]);

        $user = User::findOrFail(Auth::user()->id);;

        $user->password = Hash::make($request->Input("password"));
        $user->save();
    }

    public function data(Request $request){
        $user = Auth::user();

        $user = User::findOrFail(Auth::user()->id);

        if($user->avatar):
            $avatar = $user->avatar;
            $avatar_file = asset("storage/avatar/$avatar");
            $user->avatar = $avatar_file;
        endif;

        return $user;       
    }
}
