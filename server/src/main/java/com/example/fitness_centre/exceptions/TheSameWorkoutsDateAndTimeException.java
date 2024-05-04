package com.example.fitness_centre.exceptions;

public class TheSameWorkoutsDateAndTimeException extends Exception{
    public TheSameWorkoutsDateAndTimeException() {
        super("Ошибка: Совпадение даты и времени тренировок");
    }
}
