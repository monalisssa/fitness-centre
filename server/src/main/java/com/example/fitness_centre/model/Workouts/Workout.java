package com.example.fitness_centre.model.Workouts;


import com.example.fitness_centre.model.Member.Member;
import com.example.fitness_centre.model.Trainer.Trainer;
import com.example.fitness_centre.model.User.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;
import java.util.Date;

@Entity
public class Workout {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Setter
    private Date workout_date;

    @Getter
    @Setter
    private LocalTime workout_time;

    @Getter
    @Setter
    private Boolean is_personal;


    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "trainer_id")
    private Trainer trainer;

    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "workout_plan_id")
    private WorkoutPlan workout_plan;


}
