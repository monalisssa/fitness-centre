package com.example.fitness_centre.controllers;


import com.example.fitness_centre.exceptions.TheSameWorkoutsDateAndTimeException;
import com.example.fitness_centre.model.Comments.Comment;
import com.example.fitness_centre.model.Workouts.Workout;
import com.example.fitness_centre.service.WorkoutService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workouts")
@RequiredArgsConstructor
public class WorkoutController {

    private final WorkoutService workoutService;

    @PostMapping("/add_workout")
    public ResponseEntity addComment(@RequestBody Workout workout, @RequestParam long trainer_id, @RequestParam long member_id)
    {
        try{
            return ResponseEntity.ok(workoutService.addNewWorkout(workout, trainer_id, member_id));
        }
        catch (TheSameWorkoutsDateAndTimeException e)
        {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }

    @PostMapping("/add_workouts")
    public ResponseEntity addWorkouts(@RequestBody List<Workout> workouts, @RequestParam long trainer_id, @RequestParam long member_id)
    {
        try{
            return ResponseEntity.ok(workoutService.addNewWorkouts(workouts, trainer_id, member_id));
        } catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity getUser(@PathVariable long id)
    {
        try{

            return ResponseEntity.ok(workoutService.getWorkoutPlan(id));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }
    }
}
