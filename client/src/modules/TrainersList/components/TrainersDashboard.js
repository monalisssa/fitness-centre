import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import TrainersList from "./TrainersListComponents/TrainersList";
import {getAllTrainers} from "../store/trainersSlice";
import TrainersFilterBox from "./TrainersListComponents/TrainersFilterBox";
import ReactLoading from "react-loading";
import {Col, Container, Row} from "react-bootstrap";
import {getArraySpecialities} from "../utils/getArraySpecialities";
import TrainerInfoBox from "./TrainersListComponents/TrainerInfoBox";
import CommentsFilterBox from "./CommentsListComponents/CommentsFilterBox";
import CommentsDashboard from "./CommentsDashboard";

const TrainersDashboard = () => {
    const dispatch = useDispatch();
    const trainers = useSelector(state => state.trainers);

    const [loading, setLoading] = useState(false)
    const [openTrainerInfo, setOpenTrainerInfo] = useState(false)

    useEffect(() => {
        dispatch(getAllTrainers())
        console.log(getArraySpecialities(trainers.trainers))
    }, []);


    const handleSetLoading = (value) =>
    {
        setLoading(value)
    }

    const handleOpenTrainerInfo = (trainer) =>
    {
        setLoading(true)
        setTimeout(() => {
                setOpenTrainerInfo(trainer)
                setLoading(false)
            }, 1000

        )
    }
    return (
        <div className="mt-32 mx-14 dashboard p-10 flex flex-col justify-between gap-3 min-h-screen" style={{borderRadius: "1%"}}>
            <div className="flex ">
                {
                    loading ?

                        <Row className="w-3/4 flex gap-y-10 justify-center items-start mt-5">
                            <ReactLoading type={"spin"} width={80}/>
                        </Row>
                        :

                        <>
                            {
                                openTrainerInfo ?


                                    <TrainerInfoBox trainer={openTrainerInfo}/>


                                    :

                                    <TrainersList trainers={trainers} openInfo={handleOpenTrainerInfo}/>
                            }

                        </>

                }
                {
                    !openTrainerInfo &&
                <TrainersFilterBox setLoading={handleSetLoading}/>
                }
            </div>
            {
                openTrainerInfo &&
            <CommentsDashboard trainer_id={openTrainerInfo.id}/>
            }


        </div>
    );
};

export default TrainersDashboard;