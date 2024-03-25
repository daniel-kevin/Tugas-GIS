<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MasterObject;
use Illuminate\Http\Request;

class ObjectController extends Controller
{
    public function getObject(Request $request){
        $data = MasterObject::with([
            'gambar',
            'tipeObject'
        ])->where('tipe_object_id', $request->tipe_object)->get();

        return response()->json([
            'status' => true,
            'message' => 'Berhasil mengambil data',
            'data' => $data,
        ]);
    }
}
