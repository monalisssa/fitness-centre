import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editUserStatus, getAllUsers} from "../../../AuthForm/store/usersSlice";
import AdminUsersFilterBox from "../../../AdminDashboard/AdminUsersDashboard/AdminUsersFilterBox";
import {Row} from "react-bootstrap";
import ReactLoading from "react-loading";
import AdminUsersList from "../../../AdminDashboard/AdminUsersDashboard/AdminUsersList";
import {getAllWorkouts} from "../../store/workoutsSlice";
import UserWorkoutsList from "./UserWorkoutsList";
import {getAllTrainers} from "../../../TrainersList/store/trainersSlice";
import {getArraySpecialities} from "../../../TrainersList/utils/getArraySpecialities";

const UserWorkoutsDashboard = ({user}) => {

    const workouts = useSelector(state => state.workouts.workouts);
    const trainers = useSelector(state => state.trainers.trainers);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getAllTrainers())
    }, []);


    useEffect(() => {
        dispatch(getAllWorkouts(user.id))
    }, []);

    const changeStatusUser = (id, status) =>
    {
        const edit_user = {
            "id": id,
            "status": status
        }
        dispatch(editUserStatus(edit_user))
    }
    return (
        <div className="mt-5">

            {
                loading ?

                    <Row className="w-3/4 flex gap-y-10 justify-center items-start mt-5">
                        <ReactLoading type={"spin"} width={80}/>
                    </Row>
                    :
                    <>
                        {
                            workouts.workouts.length !== 0 ?
                                <div className="flex flex-col justify-center items-center">
                                    Ближайшие 8 тренировок
                                    <UserWorkoutsList workouts={workouts} trainers={trainers} />
                                </div>

                            :
                                <p className="flex justify-center">В вашем расписании нет персональных тренировок. </p>
                        }
                    </>

            }


        </div>
    );
};

export default UserWorkoutsDashboard;