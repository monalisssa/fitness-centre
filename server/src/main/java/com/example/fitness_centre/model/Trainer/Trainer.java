package com.example.fitness_centre.model.Trainer;


import com.example.fitness_centre.model.Speciality;
import com.example.fitness_centre.model.User.User;
import com.example.fitness_centre.model.Workouts.Workout;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
public class Trainer {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Getter
    @Setter
    private int age;

    @Getter
    @Setter
    private String gender;

    @Getter
    @Setter
    @ManyToMany
    @JoinTable(
            name = "trainer_speciality",
            joinColumns = @JoinColumn(name = "trainer_id"),
            inverseJoinColumns = @JoinColumn(name = "speciality_id")
    )
    private List<Speciality> specialities;

    @Getter
    @Setter
    private Boolean is_personal;

    @Getter
    @Setter
    private String description;

    @Getter
    @Setter
    private String experience;


    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "trainer")
    private List<Workout> workouts;
}




