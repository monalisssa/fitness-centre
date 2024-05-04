import React, {useState} from 'react';

import {Button} from "react-bootstrap";
import UserProfileDashboard from "../UserAccountDashboard/components/UserProfile/UserProfileDashboard";
import {useSelector} from "react-redux";
import AdminUsersDashboard from "./AdminUsersDashboard/AdminUsersDashboard";
import AdminTrainersDashboard from "./AdminTrainersDashboard/AdminTrainersDashboard";
import AdminMembershipsDashboard from "./AdminMembershipsDashboard/AdminMembershipsDashboard";


const AdminDashboard = () => {


    const [menuTab, setMenuTab] = useState(1)

    const user = useSelector(state => state.currentUser);
    const selectMenu = (value) =>
    {
        setMenuTab(value)

    }
    return (
        <div className="mt-32 mx-14 dashboard p-10 flex flex-col gap-3 min-h-screen" style={{borderRadius: "1%"}}>

            <ul className="flex gap-3 justify-center items-center">

                <li>
                    <Button className={`w-48 bg-transparent  text-white ${menuTab === 1 ? "btn-active" : ""}`}
                            onClick={() => selectMenu(1)}>
                        Мой профиль
                    </Button>
                </li>
                <li>
                    <Button className={`bg-transparent  text-white w-48  ${menuTab === 2 ? "btn-active" : ""}`}
                            onClick={() => selectMenu(2)}>
                        Абонементы
                    </Button>
                </li>

                <li>
                    <Button className={`bg-transparent  text-white w-48  ${menuTab === 3 ? "btn-active" : ""}`}
                            onClick={() => selectMenu(3)}>
                        Тренеры
                    </Button>
                </li>

                <li>
                    <Button className={`bg-transparent  text-white w-48  ${menuTab === 4 ? "btn-active" : ""}`}
                            onClick={() => selectMenu(4)}>
                        Пользователи
                    </Button>
                </li>

                <li>
                    <Button className={` bg-transparent  text-white w-48  ${menuTab === 5 ? "btn-active" : ""}`}
                            onClick={() => selectMenu(5)}>
                        Продажи
                    </Button>
                </li>
            </ul>

            {
                menuTab === 1 && <UserProfileDashboard user={user.user}/>
            }

            {
                menuTab === 4 && <AdminUsersDashboard/>
            }

            {
                menuTab === 3 && <AdminTrainersDashboard/>
            }


            {
                menuTab === 2 && <AdminMembershipsDashboard/>
            }


        </div>
    );
};

export default AdminDashboard;