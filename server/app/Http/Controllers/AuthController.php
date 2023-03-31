<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterationRequest;
use App\Services\AuthServiceInterface;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private $authService;

    public function __construct(AuthServiceInterface $authService)
    {
        $this->authService = $authService;
    }

    public function getUser(Request $request)
    {
        return $request->user();
    }

    public function login(LoginRequest $request)
    {
        return $this->authService->login(
            $request->email,
            $request->password,
            $request->device_name
        );
    }

    public function register(RegisterationRequest $request)
    {
        return $this->authService->register(
            $request->name,
            $request->email,
            $request->password
        );
    }

    public function createToken(Request $request)
    {
        return $this->authService->createToken($request->user(), $request->device_name);
    }

    public function logout(Request $request)
    {
        return $this->authService->logout($request->user());
    }
}
