<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\loginController;

Route::get('/', function () {
    return view('app');
})->where('vue_capture', '[\/\w\.-]*');

Route::get('/login', function () {
    return view('Login');
})->where('vue_capture', '[\/\w\.-]*');

Route::get('/signup', function () {
    return view('Signup');
})->where('vue_capture', '[\/\w\.-]*');

Route::get('/dashboard', function () {
    return view('Dashboard');
})->where('vue_capture', '[\/\w\.-]*');

Route::post('/login', [loginController::class, 'login']);
Route::post('/signup', [RegisterController::class, 'register']);
