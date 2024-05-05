package com.example.fitness_centre.repository;

import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MembershipRepository extends JpaRepository<Membership, Long> {

}
