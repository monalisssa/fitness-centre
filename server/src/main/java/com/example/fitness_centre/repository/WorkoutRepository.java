package com.example.fitness_centre.repository;

import com.example.fitness_centre.model.Workouts.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {
}
