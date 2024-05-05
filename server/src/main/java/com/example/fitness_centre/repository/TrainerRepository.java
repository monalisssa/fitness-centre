package com.example.fitness_centre.repository;

import com.example.fitness_centre.model.Trainer.Trainer;
import com.example.fitness_centre.model.User.User;
import com.example.fitness_centre.model.Workouts.WorkoutPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainerRepository extends JpaRepository<Trainer, Long> {
    Trainer findByUser(User user);
}
