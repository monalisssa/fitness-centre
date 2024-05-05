package com.example.fitness_centre.model.Trainer;

import com.example.fitness_centre.model.Speciality;
import com.example.fitness_centre.model.User.User;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class TrainerRequest {
    @Getter
    @Setter
    private Trainer trainer;

    @Getter
    @Setter
    private User user;

    @Getter
    @Setter
    private List<Speciality> specialities;
}
