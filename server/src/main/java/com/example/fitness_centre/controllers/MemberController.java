package com.example.fitness_centre.controllers;


import com.example.fitness_centre.model.Comments.Comment;
import com.example.fitness_centre.model.Member.Member;
import com.example.fitness_centre.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {


    private final MemberService memberService;

    @PostMapping("/add_member")
    public ResponseEntity addComment(@RequestBody Member member, @RequestParam long membership_id,  @RequestParam long user_id, @RequestParam long trainer_id)
    {
        try{
            return ResponseEntity.ok(memberService.addNewMember(member, membership_id, user_id,  trainer_id));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }


    @GetMapping("/get_all/{user_id}")
    public ResponseEntity addComment(@PathVariable long user_id)
    {
        try{
            return ResponseEntity.ok(memberService.getMembers(user_id));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }


}
