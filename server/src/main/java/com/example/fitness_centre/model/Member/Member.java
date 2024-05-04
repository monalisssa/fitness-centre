package com.example.fitness_centre.model.Member;


import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.model.Trainer.Trainer;
import com.example.fitness_centre.model.User.User;
import com.example.fitness_centre.model.Workouts.Workout;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
public class Member {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Setter
    private Date joining_date;


    @Getter
    @Setter
    private Date end_of_membership_date;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "membership_id")
    private Membership membership;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;


    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "trainer_id")
    private Trainer trainer;

    @OneToMany(mappedBy = "member")
    private List<Workout> workouts;

}
