import React from 'react';

import {IoIosSettings} from "react-icons/io";
import {MdDelete} from "react-icons/md";
import membership_image from "../../../static/membership.jpg"
import {getDurationString} from "../../MembershipsList/utils/calculationOfPeriodDurationMembership";
const AdminMembershipCard = ({membership, index}) => {
    return (
        <tr style={{cursor: "pointer", transitionDuration: ".3s"}}
            className="text-white hover:bg-[#FFC918] hover:text-black ">
            <th scope='row'>{index + 1}</th>
            <td>
                <img src={membership_image}
                     style={{width: "6rem", height: "3rem", borderRadius: "10px"}}
                     className="rounded-full mb-2"
                />
                {
                    membership.name
                }
            </td>

            <td>
                {
                    getDurationString(membership.period_duration)
                }

            </td>
            <td>
                {
                    membership.type === 'Персональная тренировка' ? "По согласовании"
                        : <>C <span>{membership.time_visit_start} ДО {membership.time_visit_end}</span>
                        </>

                }
            </td>
            <td>
                {
                    membership.type === 'Персональная тренировка' ? "С тренером"
                        : "Без тренера"

                }

            </td>

            <td>

                {membership.price + " BYN"}

            </td>

            <td>
                {
                    membership.description  ? membership.description : "Нет"

                }

            </td>
            <td>
                <div className="flex gap-2">
                    <IoIosSettings fill={"#3CB371"} size={30}/>
                    <MdDelete fill={"#DC143C"} size={30}/>
                </div>

            </td>


        </tr>
    );
};

export default AdminMembershipCard;