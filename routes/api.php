<?php

//use Input;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/user/create', 'UserController@store');

Route::get('/', function (Request $request) {
    return $request->all();
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/system/user/data', 'UserController@data');
Route::middleware('auth:api')->get('/system/users', 'UserController@index');
Route::middleware('auth:api')->get('/system/myuser', 'UserController@data');
Route::middleware('auth:api')->put('/system/myuser', 'UserController@update');
Route::middleware('auth:api')->put('/system/myuser/password', 'UserController@updatePassword');
Route::middleware('auth:api')->put('/system/myuser/image', 'UserController@updateImage');
