<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('Log-in');
});

Route::get('/register', function(){
    return view('Register');
});