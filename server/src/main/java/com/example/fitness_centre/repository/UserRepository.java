package com.example.fitness_centre.repository;


import com.example.fitness_centre.model.User.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findUserByEmail(String email);
    User findUserByPassword(String password);
}

