package com.example.fitness_centre.model.Trainer;

import com.example.fitness_centre.model.Speciality;
import com.example.fitness_centre.model.User.User;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class TrainerDTO {

    @Getter
    @Setter
    private long id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String email;

    @Getter
    @Setter
    private String surname;

    @Getter
    @Setter
    private String tel;

    @Getter
    @Setter
    private byte[] avatar;

    @Getter
    @Setter
    private int age;

    @Getter
    @Setter
    private String gender;

    @Getter
    @Setter
    private List<Speciality> specialities;

    @Getter
    @Setter
    private Boolean is_personal;

    @Getter
    @Setter
    private String description;


    @Getter
    @Setter
    private String experience;

    public static TrainerDTO toDTO(Trainer trainer, User user) {
        TrainerDTO trainerDTO = new TrainerDTO();
        trainerDTO.setId(trainer.getId());
        trainerDTO.setAge(trainer.getAge());
        trainerDTO.setEmail(user.getEmail());
        trainerDTO.setDescription(trainer.getDescription());
        trainerDTO.setName(user.getName());
        trainerDTO.setGender(trainer.getGender());
        trainerDTO.setSpecialities(trainer.getSpecialities());
        trainerDTO.setSurname(user.getSurname());
        trainerDTO.setAvatar(user.getAvatar());
        trainerDTO.setTel(user.getTel());
        trainerDTO.setIs_personal(trainer.getIs_personal());
        trainerDTO.setExperience(trainer.getExperience());
        return trainerDTO;
    }
}