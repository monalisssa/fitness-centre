import React, {useState} from 'react';
import default_avatar from "../../../../static/membership.jpg";
import {formatDate, formatDateWithoutTime} from "../../../TrainersList/utils/getArraySpecialities";
import {useSelector} from "react-redux";
import {FaSnowflake} from "react-icons/fa";

const UserMembershipCard = ({member, index}) => {

    const [block, setBlock] = useState(false)
    const memberships = useSelector(state => state.memberships);
    return (
        <tr style={{cursor: "pointer", transitionDuration: ".3s"}} className="text-white">
            <th scope='row'>{index + 1}</th>
            <td >

                <img
                    src={default_avatar}
                    alt=''
                    style={{width: "6rem", height: "3rem", borderRadius:"10px"}}
                    className="mb-2"
                />
                {memberships.memberships.find(membership => membership.id === member.membership_id).name}
            </td>
            <td >{formatDateWithoutTime(member.joining_date)}</td>
            <td>
                {formatDateWithoutTime(member.end_joining_date)}
            </td>
          
            <td>
                {member.trainer_id ? "С тренером"
                    : "Без тренера"
                }
            </td>

            <td>
                {memberships.memberships.find(membership => membership.id === member.membership_id).price} BYN
            </td>

            <td>
                {
                    block ? "Заморожен" : "Действителен"
                }

            </td>

            <td>
                <div className="bg-gray-900 p-2 w-2/3 flex items-center justify-center hover:scale-110 " style={{borderRadius: "10px", transitionDuration: ".6s", border: "1px solid #ccc" }}>
                    <FaSnowflake fill={"#6495ed "} size={20} onClick={() => setBlock(true)}/>
                </div>

            </td>


        </tr>
    );
};

export default UserMembershipCard;