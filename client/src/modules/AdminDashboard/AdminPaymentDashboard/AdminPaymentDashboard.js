import React from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import AdminTrainerCard from "../AdminTrainersDashboard/AdminTrainerCard";
import no_avatar_image from "../../../static/no_avatar_image.jpg";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {BiDownArrow} from "react-icons/bi";
import {formatYears} from "../../TrainersList/utils/getArraySpecialities";
import {IoIosSettings} from "react-icons/io";
import {MdDelete} from "react-icons/md";

const AdminPaymentDashboard = () => {
    return (
        <MDBTable  align="middle" className="bg-zinc-800 mt-2" style={{borderRadius: "10px"}}>
            <MDBTableHead>
                <tr className="text-black bg-[#FFC918] table-header">
                    <th scope='col'>#</th>
                    <th scope='col'>Клиент</th>
                    <th scope='col'>Дата покупки</th>
                    <th scope='col'>Время покупки</th>
                    <th scope='col'>Абонемент</th>
                    <th scope='col'>Сумма</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>

                <tr style={{cursor: "pointer", transitionDuration: ".3s"}}
                    className="text-white hover:bg-[#FFC918] hover:text-black ">
                    <th scope='row'>1</th>
                    <td>Елизавета Романова</td>
                    <td>04.05.2024</td>
                    <td>18.45</td>
                    <td>
                        Стальная женщина
                    </td>
                    <td>
                        35 BYN
                    </td>

                </tr>


                <tr style={{cursor: "pointer", transitionDuration: ".3s"}}
                    className="text-white hover:bg-[#FFC918] hover:text-black ">
                    <th scope='row'>1</th>
                    <td>Елизавета Романова</td>
                    <td>04.05.2024</td>
                    <td>20.19</td>
                    <td>
                        Стальная женщина
                    </td>
                    <td>
                        35 BYN
                    </td>

                </tr>

            </MDBTableBody>

        </MDBTable>

    );
};

export default AdminPaymentDashboard;