import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {filterUsers, searchUser} from "../../AuthForm/store/usersSlice";
import {Button, Container, Form} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import {getAllUsers} from "../../AuthForm/store/usersSlice";

const AdminUsersFilterBox = ({setLoading}) => {
    const [searchName, setSearchName] = useState('')
    const [searchEmail, setSearchEmail] = useState('')
    const dispatch = useDispatch();


    const [statusFilter, setStatusFilter] = useState('')

    const resetFilter = () =>
    {
        setStatusFilter('')
        setSearchName('')
        setSearchEmail('')

    }

    useEffect(() => {
        setLoading(true);

        dispatch(getAllUsers());

        setTimeout(() => {
            if (searchName || searchEmail) {

                const serachUser = {
                    name: searchName,
                    email: searchEmail
                }
                dispatch(searchUser(serachUser))
            }

            else dispatch(getAllUsers());

            setLoading(false);
        }, 1000);
    }, [searchName, searchEmail, setLoading, dispatch]);


    useEffect(() => {

        setLoading(true);
        dispatch(getAllUsers());

        setTimeout(() => {
            if (statusFilter) {
                dispatch(filterUsers(statusFilter));
            }

            setLoading(false);
        }, 1000);

    }, [statusFilter]);

    return (
        <Container>
            <Form className="flex gap-5">

                <div className="w-1/4 flex flex-col gap-3">
                    <div className="relative w-100">

                        <Form.Control className="bg-zinc-800 focus:bg-zinc-800 text-sm p-2 text-white"
                                      placeholder="Введите фамилию или имя..."
                                      value={searchName}
                                      onChange={(event) => setSearchName(event.target.value)}
                        >
                        </Form.Control>

                        <div
                            className="absolute top-50 right-3 -translate-y-1/2 cursor-pointer hover:scale-125 transition-all duration-1000">
                            <FaSearch/>
                        </div>
                    </div>

                    <div className="relative w-100">
                        <Form.Control className="bg-zinc-800 focus:bg-zinc-800 text-sm p-2 text-white"
                                      placeholder="Введите email..."
                                      value={searchEmail}
                                      onChange={(event) => setSearchEmail(event.target.value)}
                        >
                        </Form.Control>

                        <div
                            className="absolute top-50 right-3 -translate-y-1/2 cursor-pointer hover:scale-125 transition-all duration-1000">
                            <FaSearch/>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-3 w-1/6">
                    <h4>Фильтры</h4>
                    <Form.Select aria-label="Default select example" className="bg-zinc-800 text-white"
                                 onChange={(event) => setStatusFilter(event.target.value)}
                                 value={statusFilter}>
                        <option value={""}>Все статусы</option>
                        <option value={"Active"}>Активный</option>
                        <option value={"Block"}>Заблочен</option>
                        <option value={"Admin"}>Админ</option>
                    </Form.Select>
                </div>

            </Form>

            <Button className="btn mt-3" onClick={() => resetFilter()}>
                Сбросить фильтры
            </Button>
        </Container>
    );
};

export default AdminUsersFilterBox;