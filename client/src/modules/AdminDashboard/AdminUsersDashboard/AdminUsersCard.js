import React from 'react';
import default_avatar from "../../../static/membership.jpg";
import {formatDateWithoutTime} from "../../TrainersList/utils/getArraySpecialities";
import {FaSnowflake} from "react-icons/fa";
import no_avatar_image from "../../../static/no_avatar_image.jpg";
import {BsLockFill, BsUnlockFill} from "react-icons/bs";

const AdminUsersCard = ({user, index, edit_status}) => {
    return (
        <tr style={{cursor: "pointer", transitionDuration: ".3s"}}
            className="text-white hover:bg-[#FFC918] hover:text-black ">
            <th scope='row'>{index + 1}</th>
            <td>
                {
                    user.avatar != null ?
                        <img src={"data:image/png;base64," + user.avatar}
                             style={{width: "3rem", height: "3rem", borderRadius: "10px"}}
                             className="rounded-full"
                        />

                        :
                        <img src={no_avatar_image}
                             style={{width: "3rem", height: "3rem", borderRadius: "10px"}}
                             className="rounded-full"
                        />
                }

            </td>
            <td>
                {
                    user.name ?  user.name
                        : "Не указано"
                }

            </td>
            <td>
                {
                    user.surname ?  user.surname
                        : "Не указано"
                }

            </td>
            <td>
                {user.email}
            </td>
            <td>
                {
                    user.tel ?  user.tel
                        : "Не указано"
                }

            </td>

            <td>
                {
                    user.status === 'Active' ? "Активный" : "Заблочен"
                }
            </td>

                <td>

                        <div className="bg-gray-900 p-2 w-2/5 flex items-center justify-center hover:scale-110 " onClick={() => edit_status(user.id, user.status==="Active" ? "Block" : "Active")}
                             style={{borderRadius: "10px", transitionDuration: ".6s", border: "1px solid #ccc"}}>

                                {
                                        user.status === 'Active' ? <BsLockFill fill={"#ff0000"} size={20}/>
                                            : <BsUnlockFill fill={"#15bd80"} size={20}/>
                                }

                        </div>
                </td>


        </tr>
    );
};

export default AdminUsersCard;