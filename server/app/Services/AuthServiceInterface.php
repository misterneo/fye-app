<?php

namespace App\Services;

interface AuthServiceInterface
{
    public function login($email, $password, $deviceName);

    public function register($name, $email, $password);

    public function createToken($user, $deviceName);

    public function logout($user);
}
