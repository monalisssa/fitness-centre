import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";

import UserProfileDashboard from "./UserProfile/UserProfileDashboard";
import UserMembershipsDashboard from "./UserMemberships/UserMembershipsDashboard";
import UserWorkoutsDashboard from "./UserWorkouts/UserWorkoutsDashboard";

const UserAccountDashboard = () => {

    const user = useSelector(state => state.currentUser);

    const [menuTab, setMenuTab] = useState(1)

    const selectMenu = (value) =>
    {
        setMenuTab(value)

    }
    return (
        <div className="mt-32 mx-14 dashboard p-10 flex flex-col gap-3 min-h-screen" style={{borderRadius: "1%"}}>

            <ul className="flex gap-3 justify-center items-center">

                <li>
                    <Button className={`btn-light w-48  ${menuTab===1 ? "btn-active" : ""}`} onClick={() => selectMenu(1)}>
                        Мой профиль
                    </Button>
                </li>

                {
                    user.user.role_id === 2 &&
                    <li>
                        <Button className={`btn-light w-48  ${menuTab === 2 ? "btn-active" : ""}`}
                                onClick={() => selectMenu(2)}>
                            Мои абонементы
                        </Button>
                    </li>

                }

                <li>
                    <Button className={`btn-light w-48  ${menuTab === 3 ? "btn-active" : ""}`}
                            onClick={() => selectMenu(3)}>
                        Моё расписание
                    </Button>
                </li>
            </ul>

            {
                menuTab===1 && <UserProfileDashboard user={user.user}/>
            }

            {
                menuTab===2 && <UserMembershipsDashboard user={user.user}/>
            }

            {
                menuTab===3 && <UserWorkoutsDashboard user={user.user}/>
            }



        </div>
    );
};

export default UserAccountDashboard;