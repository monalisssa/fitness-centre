import React from 'react';
import {Container} from "react-bootstrap";
import CardTrainer from "./CardTrainer";
import trainer_2 from "../../static/trainer_2.jpg"
import trainer_4 from "../../static/trainer_4.jpg"
import {useResize} from "../../utils/use_resize";
const ListTrainers = () => {
    const { width, isScreenSm, isScreenMd, isScreenXxl, isScreenLg, isScreenXl } = useResize();
    return (

            <Container className="d-flex trainers-list gap-4 justify-content-center  mb-5">

                {
                    isScreenXxl &&


                   <CardTrainer image={trainer_4} name={"Морозова Е.А."}/>
                    && <CardTrainer image={trainer_4} name={"Морозова Е.А."}/>
                    && <CardTrainer image={trainer_4} name={"Морозова Е.А."}/>


                }
                <CardTrainer image={trainer_2} name={"Морозова Е.А."}/>

            </Container>


    );
};

export default ListTrainers;