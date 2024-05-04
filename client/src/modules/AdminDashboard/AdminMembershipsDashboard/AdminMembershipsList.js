import React from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import AdminMembershipCard from "./AdminMembershipCard";

const AdminMembershipsList = ({memberships}) => {
    return (

        <MDBTable  align="middle" className="bg-zinc-800 mt-2" style={{borderRadius: "10px"}}>
            <MDBTableHead>
                <tr className="text-black bg-[#FFC918] table-header">
                    <th scope='col'>#</th>
                    <th scope='col'>Название</th>
                    <th scope='col'>Период</th>
                    <th scope='col'>Вход</th>
                    <th scope='col'>С тренером</th>
                    <th scope='col'>Цена</th>
                    <th scope='col'>Примечание</th>
                    <th scope='col'></th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>

                {
                    memberships.map((el, index) =>
                        <AdminMembershipCard membership={el} index={index}/>
                    )
                }

            </MDBTableBody>

        </MDBTable>

    );
};

export default AdminMembershipsList;