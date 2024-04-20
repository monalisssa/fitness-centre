package com.example.fitness_centre.model;



import com.example.fitness_centre.model.User.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
public class Role {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter
    @Setter
    @OneToMany(mappedBy = "role")
    private List<User> users;

    @Getter
    private String name;

    public Role(){};
}

