package com.example.fitness_centre.service;


import com.example.fitness_centre.model.Speciality;
import com.example.fitness_centre.model.Trainer.Trainer;
import com.example.fitness_centre.model.Trainer.TrainerDTO;
import com.example.fitness_centre.model.Trainer.TrainerRequest;
import com.example.fitness_centre.model.User.User;
import com.example.fitness_centre.repository.SpecialityRepository;
import com.example.fitness_centre.repository.TrainerRepository;
import com.example.fitness_centre.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TrainerService {

    private final TrainerRepository trainerRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final SpecialityRepository specialityRepository;

    public TrainerDTO addNewTrainer(TrainerRequest trainerRequest) {
        
        userService.registration(trainerRequest.getUser(), 3);
        User saved_user = userRepository.findUserByEmail(trainerRequest.getUser().getEmail()).get();

        trainerRequest.getSpecialities().forEach(speciality ->
                specialityRepository.findSpecialityByName(speciality.getName()).orElseGet(() -> {
                    return specialityRepository.save(speciality);
                })
        );


        List<Speciality> saved_specialities = specialityRepository.findAll().stream()
                .filter(speciality -> trainerRequest.getSpecialities().stream()
                        .map(Speciality::getName)
                        .anyMatch(name -> name.equals(speciality.getName())))
                .toList();

        Trainer trainer = trainerRequest.getTrainer();
        trainer.setUser(saved_user);
        trainer.setSpecialities(saved_specialities);

        Trainer saved_trainer = trainerRepository.save(trainer);

        return TrainerDTO.toDTO(saved_trainer, saved_user);

    }

    public List<TrainerDTO> getAllTrainers() {
       List <Trainer> trainers = trainerRepository.findAll();
       return trainers.stream().map(trainer -> TrainerDTO.toDTO(trainer, userRepository.findById(trainer.getUser().getId()).get())).toList();
    }


    public void deleteTrainer(Long trainerId) {
        trainerRepository.deleteById(trainerId);
    }
}
