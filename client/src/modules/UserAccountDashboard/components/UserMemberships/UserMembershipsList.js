import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";

import default_avatar from "../../../../static/no_avatar_image.jpg"
import UserMembershipCard from "./UserMembershipCard";


const UserMembershipsList = ({members}) => {
    return (
        <>
            <MDBTable  align="middle" className="bg-zinc-800 mt-5 " style={{borderRadius: "10px"}}>
                <MDBTableHead>
                    <tr className="text-black bg-[#FFC918] table-header">
                        <th scope='col'>#</th>
                        <th scope='col'>Абонемент</th>
                        <th scope='col'>Начало действия</th>
                        <th scope='col'>Конец действия</th>
                        <th scope='col'>С тренером</th>
                        <th scope='col'>Сумма</th>
                        <th scope='col'>Статус</th>
                        <th scope='col'>Заморозка</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {members.map((member, index) =>
                            <UserMembershipCard member={member} index={index}/>
                    )}
                </MDBTableBody>

            </MDBTable>


        </>
    );
};

export default UserMembershipsList;