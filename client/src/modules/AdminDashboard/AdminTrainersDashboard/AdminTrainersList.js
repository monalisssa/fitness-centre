import React from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import AdminUsersCard from "../AdminUsersDashboard/AdminUsersCard";
import AdminTrainerCard from "./AdminTrainerCard";

const AdminTrainersList = ({trainers}) => {


    return (


        <>

            <MDBTable  align="middle" className="bg-zinc-800 mt-2" style={{borderRadius: "10px"}}>
                <MDBTableHead>
                    <tr className="text-black bg-[#FFC918] table-header">
                        <th scope='col'>#</th>
                        <th scope='col'>Аватар</th>
                        <th scope='col'>Имя</th>
                        <th scope='col'>Фамилия</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Телефон</th>
                        <th scope='col'>Направления</th>
                        <th scope='col'>Опыт</th>
                        <th scope='col'>Рейтинг</th>
                        <th scope='col'></th>

                    </tr>
                </MDBTableHead>
                <MDBTableBody>

                    {
                        trainers.map((el, index) =>
                            <AdminTrainerCard trainer={el} index={index} />
                        )
                    }

                </MDBTableBody>

            </MDBTable>


        </>
    );
};

export default AdminTrainersList;