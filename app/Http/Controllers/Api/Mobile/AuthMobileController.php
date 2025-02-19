<?php

namespace App\Http\Controllers\Api\Mobile;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthMobileController extends Controller
{
    //
    public function login(Request $request){
        $data = $request->all();
        $loginUserData = $request->validate([
            'email'=>'required|string|email',
            'password'=>'required|min:8'
        ]);

        if (Auth::attempt($loginUserData)) {

            
            $user = User::where('email',$loginUserData['email'])->first();
            if($user->role_id != 3){
                return response()->json([
                    'message' => 'Usuario no autorizado'
                ],403);
            }
            $token = $user->createToken($user->name.'-AuthToken')->plainTextToken;

            $array = array(
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'token' => $token,
            );

            return response()->json([
                'user'=>$array,
                'access_token' => $token,
            ]);
        }else{
            return response()->json([
                'message' => 'Usuario/Password incorrectos'
            ],403);
        }
   
    }

    public function getuserdetails($token){
        
        $user = Auth::user();
        $array = array(
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'token' => $token,
        );

        return response()->json([
            'user'=>$array,
            'access_token' => $token,
        ]);
    }
}
