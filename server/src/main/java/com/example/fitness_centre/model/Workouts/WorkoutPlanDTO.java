package com.example.fitness_centre.model.Workouts;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class WorkoutPlanDTO {
    private long id;
    private long user_id;
    private long role_id;
    private List<WorkoutDTO> workouts;


    public static WorkoutPlanDTO toDTO(WorkoutPlan workoutPlan) {
        WorkoutPlanDTO dto = new WorkoutPlanDTO();
        dto.setId(workoutPlan.getId());
        dto.setUser_id(workoutPlan.getUser().getId());
        dto.setWorkouts(workoutPlan.getWorkouts().stream().map(WorkoutDTO::toDTO).toList());
        dto.setRole_id(workoutPlan.getUser().getRole().getId());

        return dto;

    }
}
