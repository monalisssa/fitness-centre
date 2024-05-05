package com.example.fitness_centre.controllers;


import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.service.MembershipService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/memberships")
public class MembershipController {

    private final MembershipService membershipService;

    public MembershipController(MembershipService membershipService) {
        this.membershipService = membershipService;
    }

    @PostMapping("/add_membership")
    public ResponseEntity addMembership(@RequestBody Membership membership)
    {
        try{
            return ResponseEntity.ok(membershipService.addNewMembership(membership));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }

    @GetMapping("/get_all")
    public ResponseEntity getAllMemberships()
    {
        try{
            return ResponseEntity.ok(membershipService.getAllMemberships());
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable long id) {
        try {
            membershipService.deleteMemebrship(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }
    }

}
