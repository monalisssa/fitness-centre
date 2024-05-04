import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUserMembers} from "../../../MembershipsList/store/membersSlice";
import UserMembershipsList from "./UserMembershipsList";
import {getAllTrainers} from "../../../TrainersList/store/trainersSlice";
import {getAllMemberships} from "../../../MembershipsList/store/membershipsSlice";
import {Row} from "react-bootstrap";
import ReactLoading from "react-loading";
import UserWorkoutsList from "../UserWorkouts/UserWorkoutsList";
import AdminUsersFilterBox from "../../../AdminDashboard/AdminUsersDashboard/AdminUsersFilterBox";
import UserMembershipsFilterBox from "./UserMembershipsFilterBox";

const UserMembershipsDashboard = ({user}) => {
    const members = useSelector(state => state.members);
    const memberships = useSelector(state => state.memberships.memberships);
    const trainers = useSelector(state => state.trainers.trainers);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUserMembers(user.id))
        dispatch(getAllTrainers())
        dispatch(getAllMemberships())
    }, []);
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
                            members.members.length !== 0 ?
                            <UserMembershipsList members={members.members}/>
                                :
                                <p className="flex justify-center">У вас нет купленных абонементов. </p>
                        }
                    </>

            }

        </div>
    );
};

export default UserMembershipsDashboard;