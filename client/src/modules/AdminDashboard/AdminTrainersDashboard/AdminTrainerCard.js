import React from 'react';
import {formatYears} from "../../TrainersList/utils/getArraySpecialities";
import no_avatar_image from "../../../static/no_avatar_image.jpg"
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {BiDownArrow} from "react-icons/bi";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {MdDelete, MdEditSquare} from "react-icons/md";
import {RiEditFill} from "react-icons/ri";
import {IoIosSettings} from "react-icons/io";

const AdminTrainerCard = ({trainer, index}) => {
    return (
        <tr style={{cursor: "pointer", transitionDuration: ".3s"}}
            className="text-white hover:bg-[#FFC918] hover:text-black ">
            <th scope='row'>{index + 1}</th>
            <td>
                {
                    trainer.avatar != null ?
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

            </td>
            <td>
                {
                    trainer.name
                }

            </td>
            <td>
                {
                    trainer.surname
                }

            </td>
            <td>
                {trainer.email}
            </td>
            <td>
                {
                    trainer.tel
                }

            </td>

            <td>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<BiDownArrow fill={"#fff"}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className="bg-red"
                    >
                        {trainer.specialities[0].name}
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            {trainer.specialities.map((el, index) =>
                                index !== 0 && <li>{el.name}</li>
                            )}
                        </ul>

                    </AccordionDetails>
                </Accordion>

            </td>

            <td>
                {trainer.experience + " " + formatYears(trainer.experience)}

            </td>

            <td>


            </td>

            <td>
                <div className="flex gap-2">
                    <IoIosSettings  fill={"#3CB371"} size={30}/>
                    <MdDelete fill={"#DC143C"} size={30}/>
                </div>

            </td>



        </tr>
    );
};

export default AdminTrainerCard;