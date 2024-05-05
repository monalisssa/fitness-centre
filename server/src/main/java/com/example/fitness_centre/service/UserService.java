package com.example.fitness_centre.service;


import com.example.fitness_centre.model.Comments.Comment;
import com.example.fitness_centre.model.Comments.CommentDTO;
import com.example.fitness_centre.model.User.User;
import com.example.fitness_centre.model.User.UserDTO;
import com.example.fitness_centre.model.Workouts.WorkoutPlan;
import com.example.fitness_centre.repository.RoleRepository;
import com.example.fitness_centre.repository.UserRepository;
import com.example.fitness_centre.repository.WorkoutPlanRepository;
import com.example.fitness_centre.security.auth.AuthenticationRequest;
import com.example.fitness_centre.security.auth.AuthenticationUser;
import com.example.fitness_centre.security.jwt.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepo;
    private final RoleRepository roleRepo;
    private final WorkoutPlanRepository workoutPlanRepository;



    public AuthenticationUser registration(User user, long role_id) {
        user.setRole(roleRepo.findById(role_id).get());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if(role_id == 2) user.setStatus("Active");
        else user.setStatus("Admin");

        WorkoutPlan workoutPlan = new WorkoutPlan();
        workoutPlan.setUser(userRepo.save(user));
        workoutPlanRepository.save(workoutPlan);

        var jwtToken = jwtService.generateRefreshToken(user);
        return AuthenticationUser.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationUser authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var findUser = userRepo.findUserByEmail(request.getEmail())
                .orElseThrow();

        var jwtToken = jwtService.generateRefreshToken(findUser);
        return AuthenticationUser.builder()
                .token(jwtToken)
                .build();

    }

    public List<UserDTO> getAll() {

        return userRepo.findAll().stream().map(UserDTO::toDTO).toList();
    }


    public Long delete(long id) {
        userRepo.deleteById(id);
        return id;
    }

    public AuthenticationUser refreshToken(
            HttpServletRequest request
    ) {

        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userName;
        AuthenticationUser authenticationUser = null;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return null;
        }
        refreshToken = authHeader.substring(7);
        userName = jwtService.extractUsername(refreshToken);
        if (userName != null) {
            var user = userRepo.findUserByEmail(userName)
                    .orElseThrow();

            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateRefreshToken(user);
                authenticationUser = AuthenticationUser.builder()
                        .token(accessToken)
                        .build();
            }
        }

        return authenticationUser;

    }


    public UserDTO editUserAvatar(long id, MultipartFile image) throws IOException {

        User user = userRepo.findById(id).get();
        user.setAvatar(image.getBytes());
        return UserDTO.toDTO(userRepo.save(user));

    }


    public UserDTO editUserInfo(User edit_user, long user_id) {

        User user = userRepo.findById(user_id).get();
        user.setEmail(edit_user.getEmail());
        user.setName(edit_user.getName());
        user.setTel(edit_user.getTel());
        user.setSurname(edit_user.getSurname());
        return UserDTO.toDTO(userRepo.save(user));

    }


    public UserDTO getOne(long id){

        return UserDTO.toDTO(userRepo.findById(id).get());
    }

    public UserDTO editUserStatus(long id, String status)
    {
        User user = userRepo.findById(id).get();
        user.setStatus(status);
        return UserDTO.toDTO(userRepo.save(user));
    }

}




