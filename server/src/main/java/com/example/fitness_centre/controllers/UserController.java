package com.example.fitness_centre.controllers;

import com.example.fitness_centre.model.User.User;
import com.example.fitness_centre.security.auth.AuthenticationRequest;
import com.example.fitness_centre.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/registration")
    public ResponseEntity registration(@RequestBody User user, @RequestParam long role_id)
    {
        try{
            return ResponseEntity.ok(userService.registration(user, role_id));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }


    @PostMapping("/authenticate")
    public ResponseEntity authenticate(
        @RequestBody AuthenticationRequest request) {
        try
        {
            return ResponseEntity.ok(userService.authenticate(request));
        }

        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Не верный пароль или логин!");
        }

    }

    @GetMapping("/refresh_token")
    public ResponseEntity refresh_token(HttpServletRequest request) {
        try
        {
            return ResponseEntity.ok(userService.refreshToken(request));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Токен не валидный!");
        }

    }

    @GetMapping("/all")
    public ResponseEntity getUsers()
    {
        try{

            return ResponseEntity.ok(userService.getAll());
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity getUser(@PathVariable long id)
    {
        try{

            return ResponseEntity.ok(userService.getOne(id));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable long id)
    {
        try{
            return ResponseEntity.ok(userService.delete(id));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }
    }

    @PutMapping("edit_avatar/{id}")
    public ResponseEntity editUser(@PathVariable long id,  @RequestPart("avatar") MultipartFile avatar)
    {
        try{
            return ResponseEntity.ok(userService.editUserAvatar(id, avatar));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }
    }

    @PutMapping("edit_user/{id}")
    public ResponseEntity editUser(@PathVariable long id,  @RequestBody User user)
    {
        try{
            return ResponseEntity.ok(userService.editUserInfo(user, id));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }
    }

    @PutMapping("edit_status/{id}")
    public ResponseEntity editUser(@PathVariable long id,  @RequestParam String status)
    {
        try{
            return ResponseEntity.ok(userService.editUserStatus(id, status));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }
    }

}
