package com.example.bitirme.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.bitirme.model.AuthRequest;
import com.example.bitirme.model.User;
import com.example.bitirme.service.AuthenticationService;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/signup")
    public String signUp(@RequestBody User user) {
        return authenticationService.signUp(user);
    }

    @PostMapping("/signin")
    public String signIn(@RequestBody AuthRequest authRequest) {
        return authenticationService.signIn(authRequest.getEmail(), authRequest.getPassword());
    }
}