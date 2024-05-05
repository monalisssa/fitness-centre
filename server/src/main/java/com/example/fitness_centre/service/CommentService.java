package com.example.fitness_centre.service;


import com.example.fitness_centre.model.Comments.Comment;
import com.example.fitness_centre.model.Comments.CommentDTO;
import com.example.fitness_centre.model.Membership.Membership;
import com.example.fitness_centre.model.Trainer.Trainer;
import com.example.fitness_centre.model.Trainer.TrainerDTO;
import com.example.fitness_centre.repository.CommentRepository;
import com.example.fitness_centre.repository.TrainerRepository;
import com.example.fitness_centre.repository.UserRepository;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final TrainerRepository trainerRepository;
    private final UserRepository userRepository;


    public CommentDTO addNewComment(Comment comment, long trainerId, long userId) {

        comment.setTrainer( trainerRepository.findById(trainerId).get());
        comment.setUser(userRepository.findById(userId).get());
        return CommentDTO.toDTO(commentRepository.save(comment));
    }


    public List<CommentDTO> getAllComments(long trainer_id) {
        List <Comment> comments = commentRepository.findAllByTrainer(trainerRepository.findById(trainer_id).get());
        return comments.stream().map(CommentDTO::toDTO).toList();
    }


}
