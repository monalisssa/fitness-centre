import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Row} from "react-bootstrap";
import ReactLoading from "react-loading";
import {getAllTrainers} from "../../TrainersList/store/trainersSlice";
import AdminTrainersList from "./AdminTrainersList";
import TrainersFilterBox from "../../TrainersList/components/TrainersListComponents/TrainersFilterBox";
import {BiPlus} from "react-icons/bi";
import AdminTrainerAddModal from "./modals/AdminTrainerAddModal";

const AdminTrainersDashboard = () => {
    const trainers = useSelector(state => state.trainers.trainers);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [addTrainerModal, setAddTrainerModal] = useState(false)
    useEffect(() => {
        dispatch(getAllTrainers())
    }, []);

    const handleCloseAddTrainerModal = () =>
    {
        setAddTrainerModal(false)
    }

    return (
        <div className="mt-5">

            <div className="flex flex-col items-end gap-4">
                <TrainersFilterBox setLoading={setLoading} admin={true}/>
                <Button className="ml-4 flex gap-2 items-center mt-2" onClick={() => setAddTrainerModal(true)}>
                    Добавить тренера
                    <BiPlus size={20}/>
                </Button>
            </div>


            {
                loading ?

                    <Row className="w-3/4 flex gap-y-10 justify-center items-start mt-5">
                        <ReactLoading type={"spin"} width={80}/>
                    </Row>
                    :
                    <AdminTrainersList trainers={trainers}  />
            }


            {
                addTrainerModal && <AdminTrainerAddModal openModal={setAddTrainerModal} handleClose={handleCloseAddTrainerModal} setLoading={setLoading}/>
            }
        </div>
    );
};

export default AdminTrainersDashboard;