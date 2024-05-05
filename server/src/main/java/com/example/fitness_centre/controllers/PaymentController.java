package com.example.fitness_centre.controllers;


import com.example.fitness_centre.model.Trainer.TrainerRequest;
import com.example.fitness_centre.service.PaymentService;
import com.example.fitness_centre.service.TrainerService;
import com.example.fitness_centre.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;
    private final UserService userService;

    @GetMapping("/get_statistics")
    public ResponseEntity getStatistics()
    {
        try{
            return ResponseEntity.ok(paymentService.getOrderMonthStatistics());
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }


    @GetMapping("/get_all")
    public ResponseEntity getAllPayment()
    {
        try{
            return ResponseEntity.ok(paymentService.getAllMemberships());
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }

}
