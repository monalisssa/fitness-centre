import React from 'react';
import AdminUsersCard from "./AdminUsersCard";
import {MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import UserMembershipCard from "../../UserAccountDashboard/components/UserMemberships/UserMembershipCard";

const AdminUsersList = ({users, edit_status}) => {


    return (

        <>
            <MDBTable  align="middle" className="bg-zinc-800 mt-3" style={{borderRadius: "10px"}}>
                <MDBTableHead>
                    <tr className="text-black bg-[#FFC918] table-header">
                        <th scope='col'>#</th>
                        <th scope='col'>Аватар</th>
                        <th scope='col'>Имя</th>
                        <th scope='col'>Фамилия</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Телефон</th>
                        <th scope='col'>Статус</th>
                        <th scope='col'>Блокировка</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>

                    {
                        users.filter(user => user.role_id === 2).map((el, index) =>
                            <AdminUsersCard user={el} index={index} edit_status={edit_status}/>
                        )
                    }

                </MDBTableBody>

            </MDBTable>


        </>

    );
};

export default AdminUsersList;