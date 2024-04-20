package com.example.fitness_centre.repository;

import com.example.fitness_centre.model.Comments.Comment;
import com.example.fitness_centre.model.Trainer.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllByTrainer(Trainer trainer);
}
