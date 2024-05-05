import React from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import UserMembershipCard from "../UserMemberships/UserMembershipCard";
import UserWorkoutsCard from "./UserWorkoutsCard";

const UserWorkoutsList = ({workouts, trainers}) => {


    console.log(workouts)
    return (
        <MDBTable  align="middle" className="bg-zinc-800 mt-5 " style={{borderRadius: "10px"}}>
            <MDBTableHead>
                <tr className="text-black bg-[#FFC918] table-header">
                    <th scope='col'>#</th>
                    <th scope='col'>Абонемент</th>

                    {
                        workouts.role_id === 3 ? <th scope='col'>Клиент</th>
                            : <th scope='col'>Тренер</th>
                    }

                    {
                        workouts.role_id === 3 &&
                        <th scope='col'>Телефон</th>
                    }

                    <th scope='col'>Дата</th>
                    <th scope='col'>Время</th>
                    <th scope='col'>Отмена</th>

                </tr>
            </MDBTableHead>
            <MDBTableBody>

                {workouts.workouts.map((workout, index) =>

                    <UserWorkoutsCard workout={workout} index={index} role_id={workouts.role_id} trainer={trainers.find(trainer => trainer.id === workout.trainer_id)}/>

                )}

            </MDBTableBody>

        </MDBTable>

    );
};

export default UserWorkoutsList;