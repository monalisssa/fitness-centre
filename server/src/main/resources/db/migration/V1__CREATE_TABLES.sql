create table hibernate_sequence (
    next_val bigint
) engine=MyISAM;

insert into hibernate_sequence values (1);

CREATE TABLE role(
                     id BIGINT NOT NULL AUTO_INCREMENT,
                     name varchar(64) not null,
                     PRIMARY KEY (id)
) engine=MyISAM;

CREATE TABLE user(
                     id BIGINT NOT NULL AUTO_INCREMENT,
                     email varchar(50) not null unique,
                     password varchar(64) not null unique,
                     name varchar(30),
                     surname varchar(30),
                     tel varchar(64) unique,
                     avatar LONGBLOB,
                     role_id BIGINT not null,
                     status varchar(64) default 'Active' not null,
                     PRIMARY KEY (id),
                     FOREIGN KEY (role_id) REFERENCES role(id)
) engine=MyISAM;

CREATE TABLE trainer (
                         id BIGINT NOT NULL AUTO_INCREMENT,
                         age INT NOT NULL,
                         experience INT NOT NULL,
                         gender VARCHAR(20) NOT NULL,
                         is_personal BOOLEAN NOT NULL,
                         description VARCHAR(64),
                         user_id BIGINT NOT NULL UNIQUE,
                         PRIMARY KEY (id),
                         FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=MyISAM;

CREATE TABLE speciality (
                            id BIGINT NOT NULL AUTO_INCREMENT,
                            name VARCHAR(64) NOT NULL UNIQUE,
                            PRIMARY KEY (id)
) ENGINE=MyISAM;

CREATE TABLE trainer_speciality (
                                    trainer_id BIGINT NOT NULL,
                                    speciality_id BIGINT NOT NULL,
                                    FOREIGN KEY (trainer_id) REFERENCES trainer(id),
                                    FOREIGN KEY (speciality_id) REFERENCES speciality(id)
) ENGINE=MyISAM;


CREATE TABLE comment(
                         id BIGINT NOT NULL AUTO_INCREMENT,
                         user_id BIGINT NOT NULL,
                         trainer_id BIGINT NOT NULL,
                         stars DOUBLE PRECISION,
                         text_commentary VARCHAR(364),
                         PRIMARY KEY (id),
                         FOREIGN KEY (user_id) REFERENCES user(id),
                         FOREIGN KEY (trainer_id) REFERENCES trainer(id)
) engine=MyISAM;


CREATE TABLE membership(
                           id BIGINT NOT NULL AUTO_INCREMENT,
                           name VARCHAR(64) UNIQUE,
                           type VARCHAR(30) NOT NULL,
                           period_duration int not null,
                           time_visit_start VARCHAR(20),
                           time_visit_end VARCHAR(20),
                           price DECIMAL not null,
                           description VARCHAR(100),
                           PRIMARY KEY (id)

) engine=MyISAM;

CREATE TABLE workout_plan(
                             id BIGINT NOT NULL AUTO_INCREMENT,
                             user_id BIGINT NOT NULL UNIQUE,
                             PRIMARY KEY (id)
) engine=MyISAM;


CREATE TABLE workout(
                        id BIGINT NOT NULL AUTO_INCREMENT,
                        workout_date DATE NOT NULL,
                        workout_time TIME NOT NULL,
                        is_personal BOOLEAN,
                        trainer_id BIGINT NOT NULL,
                        member_id BIGINT NOT NULL,
                        workout_plan_id BIGINT NOT NULL UNIQUE,
                        PRIMARY KEY (id),
                        FOREIGN KEY (trainer_id) REFERENCES trainer(id),
                        FOREIGN KEY (member_id) REFERENCES member(id),
                        FOREIGN KEY (workout_plan_id) REFERENCES workout_plan(id)

) engine=MyISAM;

CREATE TABLE member(
                       id BIGINT NOT NULL AUTO_INCREMENT,
                       age INT,
                       gender VARCHAR(20) not null,
                       joining_date DATE not null,
                       end_of_membership_date DATE not null,
                       membership_id BIGINT NOT NULL,
                       user_id BIGINT NOT NULL UNIQUE,
                       PRIMARY KEY (id),
                       FOREIGN KEY (user_id) REFERENCES user(id),
                       FOREIGN KEY (membership_id) REFERENCES membership(id)

) engine=MyISAM;



CREATE TABLE payment(
                        id BIGINT NOT NULL AUTO_INCREMENT,
                        amount DECIMAL NOT NULL,
                        payment_date DATE NOT NULL,
                        payment_time TIME NOT NULL,
                        member_id BIGINT NOT NULL,
                        user_id BIGINT NOT NULL UNIQUE,
                        PRIMARY KEY (id),
                        FOREIGN KEY (member_id) REFERENCES member(id),
                        FOREIGN KEY (user_id) REFERENCES user(id)

) engine=MyISAM;





