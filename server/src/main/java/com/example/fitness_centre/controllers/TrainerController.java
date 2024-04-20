package com.example.fitness_centre.controllers;


import com.example.fitness_centre.model.Trainer.TrainerRequest;
import com.example.fitness_centre.service.TrainerService;
import com.example.fitness_centre.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/trainers")
public class TrainerController {
    private final TrainerService trainerService;
    private final UserService userService;

    public TrainerController(TrainerService trainerService, UserService userService) {
        this.trainerService = trainerService;
        this.userService = userService;
    }


    @PostMapping("/add_trainer")
    public ResponseEntity addTrainer(@RequestBody TrainerRequest trainer)
    {
        try{
            return ResponseEntity.ok(trainerService.addNewTrainer(trainer));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }

    @GetMapping("/get_all")
    public ResponseEntity getAllTrainers()
    {
        try{
            return ResponseEntity.ok(trainerService.getAllTrainers());
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }
}
