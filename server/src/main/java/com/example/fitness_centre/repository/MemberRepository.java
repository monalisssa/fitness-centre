package com.example.fitness_centre.repository;

import com.example.fitness_centre.model.Member.Member;
import com.example.fitness_centre.model.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {

    List<Member> findAllByUser(User user);
}
