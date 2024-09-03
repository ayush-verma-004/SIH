package com.example.edubridge.controller;

import java.util.List;

import com.example.edubridge.model.User;
import com.example.edubridge.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll() {
        return userService.getAllUsers();
    }

    @PostMapping("/add")
    public String createUser(@RequestBody User user) {
        userService.saveUser(user);
        return "User registration is done!";
    }

    @PostMapping("/edit")
    public String editUser(@RequestParam String username, @RequestParam String password,
                           @RequestParam(required = false) String name,
                           @RequestParam(required = false) String collegeName,
                           @RequestParam(required = false) String role,
                           @RequestParam(required = false) String primarySkill,
                           @RequestParam(required = false) String secondarySkill) {
        User user = userService.getUserByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            if (name != null) user.setName(name);
            if (collegeName != null) user.setCollegeName(collegeName);
            if (role != null) user.setRole(role);
            if (primarySkill != null) user.setPrimarySkill(primarySkill);
            if (secondarySkill != null) user.setSecondarySkill(secondarySkill);
            userService.saveUser(user);
            return "User information updated successfully!";
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid username or password");
        }
    }
    @GetMapping("/search")
    public ResponseEntity<?> searchUser(@RequestParam String username) {
        User user = userService.getUserByUsername(username);
        if (user != null) {
            user.setPassword(null); 
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
}
