package com.example.fitness_centre.model.User;


import com.example.fitness_centre.model.Comments.Comment;
import com.example.fitness_centre.model.Comments.CommentDTO;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

public class UserDTO {

    @Getter
    @Setter
    private long id;

    @Getter
    @Setter
    private String email;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String surname;

    @Getter
    @Setter
    private String status;


    @Getter
    @Setter
    private String tel;

    @Getter
    @Setter
    private byte[] avatar;

    @Getter
    @Setter
    private long role_id;


    public static UserDTO toDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setName(user.getName());
        dto.setSurname(user.getSurname());
        dto.setTel(user.getTel());
        dto.setAvatar(user.getAvatar());
        dto.setStatus(user.getStatus());
        dto.setRole_id(user.getRole().getId());
        return dto;

    }
}
