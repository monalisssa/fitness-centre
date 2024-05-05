package com.example.fitness_centre.model.Payment;


import com.example.fitness_centre.model.Member.Member;
import com.example.fitness_centre.model.User.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Entity
public class Payment {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Setter
    private BigDecimal amount;

    @Getter
    @Setter
    private Date payment_date;

    @Getter
    @Setter
    private LocalTime payment_time;


    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;



    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
