import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editUserStatus, getAllUsers} from "../../AuthForm/store/usersSlice";
import AdminUsersList from "./AdminUsersList";
import TrainersFilterBox from "../../TrainersList/components/TrainersListComponents/TrainersFilterBox";
import {Row} from "react-bootstrap";
import ReactLoading from "react-loading";
import TrainerInfoBox from "../../TrainersList/components/TrainersListComponents/TrainerInfoBox";
import TrainersList from "../../TrainersList/components/TrainersListComponents/TrainersList";
import AdminUsersFilterBox from "./AdminUsersFilterBox";

const AdminUsersDashboard = ({users}) => {

    const user= useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        dispatch(getAllUsers())
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

            <AdminUsersFilterBox setLoading={setLoading}/>
            {
                loading ?

                    <Row className="w-3/4 flex gap-y-10 justify-center items-start mt-5">
                        <ReactLoading type={"spin"} width={80}/>
                    </Row>
                    :
                    <AdminUsersList users={user.all_users} edit_status={changeStatusUser} />
            }


        </div>
    );
};

export default AdminUsersDashboard;