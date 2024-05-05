import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {formatWorkoutDate} from "../../utils/formatWorkoutDate";
import no_avatar_image from "../../../../static/no_avatar_image.jpg";
import default_avatar from "../../../../static/membership.jpg";
import {MdCancel, MdOutlineCancel} from "react-icons/md";
import {FaSnowflake} from "react-icons/fa";

const UserWorkoutsCard = ({workout, index, role_id, trainer}) => {


    const [cancel, setCencel] = useState(false)
    return (
        <>
            {
                !cancel &&
                <tr style={{cursor: "pointer", transitionDuration: ".3s"}}
                    className="text-white hover:bg-[#FFC918] hover:text-black ">
                    <th scope='row'>{index + 1}</th>
                    <td className="flex gap-2 ">
                        <div className="flex gap-2 items-center">
                            <img
                                src={default_avatar}
                                alt=''
                                style={{width: "6rem", height: "3rem", borderRadius: "10px"}}

                            />
                            {
                                workout.membership_name
                            }
                        </div>

                    </td>
                    <td>

                        <div className="flex gap-2 items-center">
                            {
                                trainer.avatar ?
                                    <img src={"data:image/png;base64," + trainer.avatar}
                                         style={{width: "3rem", height: "3rem", borderRadius: "10px"}}
                                         className="rounded-full"
                                    />

                                    :
                                    <img src={no_avatar_image}
                                         style={{width: "3rem", height: "3rem", borderRadius: "10px"}}
                                         className="rounded-full"
                                    />
                            }

                            {
                                role_id === 2 ? workout.trainer_name + "  " + workout.trainer_surname
                                    : workout.member_name + "  " + workout.member_surname
                            }

                        </div>

                    </td>
                    {
                        role_id === 3 &&
                        <td>
                            {workout.member_tel}
                        </td>
                    }

                    <td>
                        {formatWorkoutDate(workout.workout_date)}
                    </td>
                    <td>
                        {
                            String(workout.workout_time).substring(0, 5)
                        }

                    </td>


                    <td>


                        <div className="bg-gray-900 p-2 w-10 flex items-center justify-center hover:scale-110 "
                             style={{borderRadius: "10px", transitionDuration: ".6s", border: "1px solid #ccc"}}>
                            <MdOutlineCancel fill={"#DC143C"} size={20} onClick={() => setCencel(true)}/>
                        </div>
                    </td>


                </tr>
            }
        </>


    );
};

export default UserWorkoutsCard;