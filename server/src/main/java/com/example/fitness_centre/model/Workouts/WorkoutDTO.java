package com.example.fitness_centre.model.Workouts;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Setter
@Getter
public class WorkoutDTO {

    private long id;
    private Date workout_date;
    private LocalTime workout_time;
    private long trainer_id;
    private long member_id;
    private String membership_name;
    private String trainer_name;
    private String trainer_surname;
    private String member_name;
    private String member_surname;
    private String member_tel;

    public static WorkoutDTO toDTO(Workout workout) {
       WorkoutDTO dto = new WorkoutDTO();
       dto.setId(workout.getId());
       dto.setWorkout_date(workout.getWorkout_date());
       dto.setWorkout_time(workout.getWorkout_time());
       dto.setTrainer_id(workout.getTrainer().getId());
       dto.setMember_id(workout.getMember().getId());
       dto.setMembership_name(workout.getMember().getMembership().getName());
       dto.setMember_name(workout.getMember().getUser().getName());
       dto.setMember_surname(workout.getMember().getUser().getSurname());
       dto.setMember_tel(workout.getMember().getUser().getTel());
       dto.setTrainer_name(workout.getTrainer().getUser().getName());
       dto.setTrainer_surname(workout.getTrainer().getUser().getSurname());
       return dto;

    }

}
