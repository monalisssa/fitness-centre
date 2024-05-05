package com.example.fitness_centre.model.Payment;


import com.example.fitness_centre.model.Member.Member;
import com.example.fitness_centre.model.Member.MemberDTO;
import com.example.fitness_centre.model.Trainer.Trainer;
import com.example.fitness_centre.model.Trainer.TrainerDTO;
import com.example.fitness_centre.model.User.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalTime;
import java.util.Date;

@Getter
@Setter
public class PaymentDTO {


    private Long id;

    private BigDecimal amount;

    private Date payment_date;

    private LocalTime payment_time;

    private long user_id;

    private long member_id;


    public static PaymentDTO toDTO(Payment payment) {
        PaymentDTO paymentDTO = new PaymentDTO();
        paymentDTO.setId(payment.getId());
        paymentDTO.setAmount(payment.getAmount());
        paymentDTO.setPayment_date(payment.getPayment_date());
        paymentDTO.setPayment_time(payment.getPayment_time());
        paymentDTO.setUser_id(payment.getUser().getId());
        paymentDTO.setMember_id(payment.getMember().getId());
        return paymentDTO;
    }
}
