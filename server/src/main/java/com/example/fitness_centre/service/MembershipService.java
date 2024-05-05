package com.example.fitness_centre.service;


import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.repository.MembershipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MembershipService {
    private final MembershipRepository membershipRepository;

    public Membership addNewMembership(Membership membership) {

        return membershipRepository.save(membership);
    }

    public List<Membership> getAllMemberships() {
        return membershipRepository.findAll();
    }


    public void deleteMemebrship(Long membershipId) {
        membershipRepository.deleteById(membershipId);
    }

}
