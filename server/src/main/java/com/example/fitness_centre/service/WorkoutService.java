package com.example.fitness_centre.service;


import com.example.fitness_centre.exceptions.TheSameWorkoutsDateAndTimeException;
import com.example.fitness_centre.model.Comments.Comment;
import com.example.fitness_centre.model.Comments.CommentDTO;
import com.example.fitness_centre.model.Member.Member;
import com.example.fitness_centre.model.Trainer.Trainer;
import com.example.fitness_centre.model.User.User;
import com.example.fitness_centre.model.Workouts.Workout;
import com.example.fitness_centre.model.Workouts.WorkoutDTO;
import com.example.fitness_centre.model.Workouts.WorkoutPlan;
import com.example.fitness_centre.model.Workouts.WorkoutPlanDTO;
import com.example.fitness_centre.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WorkoutService {

    private final MemberRepository memberRepository;
    private final WorkoutPlanRepository workoutPlanRepository;
    private final TrainerRepository trainerRepository;
    private final WorkoutRepository workoutRepository;
    private final UserRepository userRepository;



    public List<WorkoutDTO> addNewWorkouts(List<Workout> workouts, long trainer_id, long member_id)
    {
        return workouts.stream().map(workout -> {
            try {
                return addNewWorkout(workout, trainer_id, member_id);
            } catch (TheSameWorkoutsDateAndTimeException e) {
                throw new RuntimeException(e);
            }
        }).toList();
    }


    public WorkoutDTO addNewWorkout(Workout workout, long trainer_id, long member_id) throws TheSameWorkoutsDateAndTimeException {
        User user = memberRepository.findById(member_id).get().getUser();
        WorkoutPlan workoutPlan = workoutPlanRepository.findByUser(user);
        List<Workout> workouts = workoutRepository.findAll();

        for (Workout existingWorkout : workouts) {
            LocalDateTime existingDate = toLocalDateTime(existingWorkout.getWorkout_date());
            LocalTime existingTime = existingWorkout.getWorkout_time();

            if (existingDate.toLocalDate().isEqual( toLocalDateTime(workout.getWorkout_date()).toLocalDate()) &&
                    existingTime.equals(workout.getWorkout_time())) {
                // Вернуть ошибку, так как есть совпадение по дате и времени
                throw new TheSameWorkoutsDateAndTimeException();
            }
        }



        workout.setTrainer(trainerRepository.findById(trainer_id).get());
        workout.setMember(memberRepository.findById(member_id).get());
        workout.setWorkout_plan(workoutPlan);

        return WorkoutDTO.toDTO(workoutRepository.save(workout));
    }

    private LocalDateTime toLocalDateTime(Date date) {
        // Преобразование типа Date в LocalDateTime
        return date.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();
    }


    public WorkoutPlanDTO getWorkoutPlan(long user_id) {
        WorkoutPlan workoutPlan = workoutPlanRepository.findByUser(userRepository.findById(user_id).get());
        List<Workout> workouts = workoutPlan.getWorkouts();
        workouts.sort(Comparator.comparing(Workout::getWorkout_date));
        List<Workout> closestWorkouts = workouts.subList(0, Math.min(workouts.size(), 8));

        List<WorkoutDTO> workoutDTOs = closestWorkouts.stream()
                .map(WorkoutDTO::toDTO)
                .toList();
        WorkoutPlanDTO workoutPlanDTO = WorkoutPlanDTO.toDTO(workoutPlan);
        workoutPlanDTO.setWorkouts(workoutDTOs);
        return workoutPlanDTO;

    }

    public void deleteWorkout(Long trainerId) {
        workoutRepository.deleteById(trainerId);
    }



}
