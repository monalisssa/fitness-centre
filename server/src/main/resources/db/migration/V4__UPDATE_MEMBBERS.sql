ALTER TABLE member
ADD COLUMN trainer_id long,
ADD CONSTRAINT fk_trainer
FOREIGN KEY (trainer_id) REFERENCES trainer(id);