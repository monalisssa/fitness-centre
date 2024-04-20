package com.example.fitness_centre.repository;

import com.example.fitness_centre.model.Role;
import com.example.fitness_centre.model.Speciality;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpecialityRepository extends JpaRepository<Speciality, Long> {
    Optional<Speciality> findSpecialityByName(String name);
}
