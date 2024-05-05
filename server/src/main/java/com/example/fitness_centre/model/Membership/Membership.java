package com.example.fitness_centre.model.Membership;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
public class Membership {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String type;

    @Getter
    @Setter
    private int period_duration;

    @Getter
    @Setter
    private BigDecimal price;

    @Getter
    @Setter
    private String time_visit_start;

    @Getter
    @Setter
    private String time_visit_end;

    @Getter
    @Setter
    private String description;

}
