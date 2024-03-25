<?php

use App\Http\Controllers\Api\ObjectController;
use App\Models\MasterObject;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::prefix('api')->group(function () {
    Route::get('/object/get-object',[ObjectController::class,'getObject']);
});

Route::get('/version', function() {
    return response()->json([
        'status' => true,
        'message' => 'ok',
        'data' => array(
            'version' => '1.0.0',
            'date' => '25 Maret 2024'
        )
    ]);
});
