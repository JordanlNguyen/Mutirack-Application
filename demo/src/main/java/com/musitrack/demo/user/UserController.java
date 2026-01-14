package com.musitrack.demo.user;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
public class UserController {
    //login
    //register

    private final UserServices userServices;
    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @PostMapping("/register")
    public UserResponseModel register(@RequestBody UserModel user) {
        // {status : "success or failed", message : "--------", "JWT" : xxxxxxx}
        return userServices.registerUser(user);
    }

    @PostMapping("/login")
    public UserResponseModel login(@RequestBody LoginRequestModel request) {
        // {status : "success or failed", message : "--------", "JWT" : xxxxxxx}
        return userServices.loginUser(request);
    }
}