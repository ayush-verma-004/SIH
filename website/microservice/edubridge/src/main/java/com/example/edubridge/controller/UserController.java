package com.example.edubridge.controller;

import com.example.edubridge.model.User;
import com.example.edubridge.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll(){
        return userService.getAllUsers();
    }

    @PostMapping("/add")
    public String createUser(@ModelAttribute User user){
        userService.saveUser(user);
        return "Your registration is done!";
    }
}