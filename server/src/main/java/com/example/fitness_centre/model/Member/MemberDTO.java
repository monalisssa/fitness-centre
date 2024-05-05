package com.example.fitness_centre.model.Member;


import com.example.fitness_centre.model.Comments.Comment;
import com.example.fitness_centre.model.Comments.CommentDTO;
import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.model.User.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class MemberDTO {

    private Long id;

    private Long user_id;

    private Long membership_id;

    private Long trainer_id;

    private Date joining_date;

    private Date end_joining_date;

    private Boolean is_frozen;
    public static MemberDTO toDTO(Member member) {
       MemberDTO memberDTO = new MemberDTO();
       memberDTO.setId(member.getId());
       memberDTO.setUser_id(member.getUser().getId());
       memberDTO.setMembership_id(member.getMembership().getId());
       memberDTO.setJoining_date(member.getJoining_date());
       memberDTO.setEnd_joining_date(member.getEnd_of_membership_date());

       memberDTO.setIs_frozen(member.getIs_frozen());
       if(member.getTrainer() != null)  memberDTO.setTrainer_id(member.getTrainer().getId());
       return memberDTO;
    }

}
