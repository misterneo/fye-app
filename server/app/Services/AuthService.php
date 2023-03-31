<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthService implements AuthServiceInterface
{

    public function login($email, $password, $deviceName)
    {
        $user = User::where('email', $email)->first();

        if (!$user || !Hash::check($password, $user->password)) {
            return response()->json([
                'errors' => [
                    'email' => 'The provided credentials are incorrect.',
                ],
            ], 401);
        }

        $token = $user->createToken($deviceName)->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }


    public function register($name, $email, $password)
    {
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
        ]);

        $token = $user->createToken($user->email)->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function createToken($user, $deviceName)
    {
        $token = $user->createToken($deviceName)->plainTextToken;

        return response()->json([
            'token' => $token,
        ]);
    }

    public function logout($user)
    {
        //
        $user->tokens()->delete();

        return response()->json([
            'message' => 'Logged out',
        ]);
    }
}
