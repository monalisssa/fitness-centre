package com.example.fitness_centre.model.Comments;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class CommentDTO {


    @Getter
    @Setter
    private long id;

    @Getter
    @Setter
    private long user_id;

    @Getter
    @Setter
    private long trainer_id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String text_commentary;

    @Getter
    @Setter
    private Double stars;

    @Getter
    @Setter
    private Date date_comment;

    @Getter
    @Setter
    private byte[] avatar;

    public static CommentDTO toDTO(Comment comment) {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setId(comment.getId());
        commentDTO.setUser_id(comment.getUser().getId());
        commentDTO.setTrainer_id(comment.getTrainer().getId());
        commentDTO.setDate_comment(comment.getDate_comment());
        commentDTO.setStars(comment.getStars());
        commentDTO.setName(comment.getUser().getName());
        commentDTO.setAvatar(comment.getUser().getAvatar());
        commentDTO.setText_commentary(comment.getText_commentary());
        return commentDTO;
    }
}
