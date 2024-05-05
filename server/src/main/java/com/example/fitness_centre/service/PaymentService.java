package com.example.fitness_centre.service;


import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.model.Payment.Payment;
import com.example.fitness_centre.model.Payment.PaymentDTO;
import com.example.fitness_centre.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;


    public ArrayList<Map.Entry<LocalDate, Long>> getOrderMonthStatistics()
    {

        HashMap<LocalDate, Long> statistics = new HashMap<>();
        List<Payment> payments = paymentRepository.findAll();
        LocalDate startDate = LocalDate.now().withDayOfMonth(1); // Начальная дата (первое число текущего месяца)
        LocalDate endDate = LocalDate.now().plusMonths(1).withDayOfMonth(1).minusDays(1); // Конечная дата (последний день текущего месяца)

        List<LocalDate> dateList = new ArrayList<>();

        LocalDate currentDate = startDate;
        while (!currentDate.isAfter(endDate)) {
            dateList.add(currentDate);
            currentDate = currentDate.plusDays(1);
        }

        dateList.forEach(localDate ->
        {
            long count = payments.stream().filter(order-> order.getPayment_date().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().toString().equals(localDate.toString())).count();
            statistics.put(localDate, count);
        });

        TreeMap<LocalDate, Long> sortedStatistics = new TreeMap<>(statistics);
        ArrayList<Map.Entry<LocalDate, Long>> dataList = new ArrayList<>(sortedStatistics.entrySet());
        return dataList;
    }


    public PaymentDTO getOne(long id) {

        return PaymentDTO.toDTO(paymentRepository.findById(id).get());
    }

    public List<PaymentDTO> getAllMemberships() {
        return paymentRepository.findAll().stream().map(PaymentDTO::toDTO).toList();
    }
}
