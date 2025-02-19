<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthWebController extends Controller
{
    //
    public function login(Request $request){
        $loginUserData = $request->validate([
            'email'=>'required|string|email',
            'password'=>'required|min:8'
        ]);

        if (Auth::attempt($loginUserData)) {
            $user = User::where('email',$loginUserData['email'])->first();
            $token = $user->createToken($user->name.'-AuthToken')->plainTextToken;
            return response()->json([
                'user'=>$user,
                'access_token' => $token,
            ]);
        }else{
            return response()->json([
                'message' => 'Usuario/Password incorrectos'
            ],401);
        }
        
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
          "message"=>"logged out"
        ]);
    }
}
