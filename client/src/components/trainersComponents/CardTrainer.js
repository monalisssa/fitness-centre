import React from 'react';
import {Card} from "react-bootstrap";

const CardTrainer = ({image, name}) => {
    return (
        <Card  className="overflow-hidden w-25">
            <Card.Img variant="top" src={image} className="card-image" />
        </Card>
    );
};

export default CardTrainer;