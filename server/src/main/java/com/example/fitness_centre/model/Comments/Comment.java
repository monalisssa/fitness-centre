package com.example.fitness_centre.model.Comments;


import com.example.fitness_centre.model.Trainer.Trainer;
import com.example.fitness_centre.model.User.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
public class Comment {


    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Setter
    private Double stars;

    @Getter
    @Setter
    private String text_commentary;

    @Getter
    @Setter
    private Date date_comment;

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

}
