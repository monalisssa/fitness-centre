package com.example.fitness_centre.repository;


import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.model.Payment.Payment;
import org.springframework.data.jpa.repository.JpaRepository;




public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
