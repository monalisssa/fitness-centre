import React from 'react';
import {Row} from "react-bootstrap";
import TrainerCard from "./TrainerCard";

const TrainersList = ({trainers, openInfo}) => {
    console.log(trainers)
    return (
        <Row className="w-3/4 flex gap-y-10 ">
            {trainers.trainers.map(trainer =>
                <TrainerCard trainer={trainer} openInfo={openInfo}/>
            )}


        </Row>
    );
};

export default TrainersList;