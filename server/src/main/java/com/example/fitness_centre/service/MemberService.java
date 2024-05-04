package com.example.fitness_centre.service;


import com.example.fitness_centre.model.Member.Member;
import com.example.fitness_centre.model.Member.MemberDTO;
import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.model.Workouts.WorkoutPlan;
import com.example.fitness_centre.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final TrainerRepository trainerRepository;
    private final UserRepository userRepository;
    private final MembershipRepository membershipRepository;
    private final WorkoutPlanRepository workoutPlanRepository;

    public MemberDTO addNewMember(Member member,long membership_id, long user_id, long trainer_id)
    {

        if(trainer_id != 0) member.setTrainer(trainerRepository.findById(trainer_id).get());

        member.setUser(userRepository.findById(user_id).get());
        member.setMembership(membershipRepository.findById(membership_id).get());

        int duration = membershipRepository.findById(membership_id).get().getPeriod_duration();
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, duration);

        member.setEnd_of_membership_date(calendar.getTime());
        return MemberDTO.toDTO(memberRepository.save(member));

    }


    public List<MemberDTO> getMembers(long user_id)
    {
        List<Member> members = memberRepository.findAllByUser(userRepository.findById(user_id).get());
        return members.stream().map(MemberDTO::toDTO).toList();

    }




}
