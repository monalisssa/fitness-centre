package com.example.fitness_centre.controllers;


import com.example.fitness_centre.model.Comments.Comment;
import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.service.CommentService;
import com.example.fitness_centre.service.MembershipService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comments")
@RequiredArgsConstructor
public class CommentController {


    private final CommentService commentService;

    @PostMapping("/add_comment")
    public ResponseEntity addComment(@RequestBody Comment comment, @RequestParam long trainer_id, @RequestParam long user_id)
    {
        try{
            return ResponseEntity.ok(commentService.addNewComment(comment, trainer_id, user_id));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }

    @GetMapping("/get_all/{trainer_id}")
    public ResponseEntity getAllComments(@PathVariable long trainer_id)
    {
        try{
            return ResponseEntity.ok(commentService.getAllComments(trainer_id));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body("Произошла ошибка!");
        }

    }
}
