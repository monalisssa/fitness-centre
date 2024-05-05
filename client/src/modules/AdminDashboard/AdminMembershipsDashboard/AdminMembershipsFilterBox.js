import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {filterUsers, getAllUsers, searchUser} from "../../AuthForm/store/usersSlice";
import {Button, Container, Form} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import {getAllMemberships} from "../../MembershipsList/store/membershipsSlice";

const AdminMembershipsFilterBox = ({setLoading}) => {
    const [searchName, setSearchName] = useState('')
    const dispatch = useDispatch();


    const [periodFilter, setPeriodFilter] = useState('')

    const resetFilter = () =>
    {
        setPeriodFilter('')
    }

    useEffect(() => {
        setLoading(true);

        dispatch(getAllMemberships());

        setTimeout(() => {
            if (searchName) {

            }

            else dispatch(getAllMemberships());

            setLoading(false);
        }, 1000);
    }, [searchName, setLoading, dispatch]);


    useEffect(() => {

        setLoading(true);
        dispatch(getAllMemberships());

        setTimeout(() => {
            if (periodFilter) {
                dispatch(filterUsers(periodFilter));
            }

            setLoading(false);
        }, 1000);

    }, [periodFilter]);

    return (
        <Container>
            <Form className="flex gap-5">

                <div className="w-1/4 flex flex-col gap-3">
                    <div className="relative w-100">

                        <Form.Control className="bg-zinc-800 focus:bg-zinc-800 text-sm p-2 text-white"
                                      placeholder="Введите название абонемента..."
                                      value={searchName}
                                      onChange={(event) => setSearchName(event.target.value)}
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
                                 onChange={(event) => setPeriodFilter(event.target.value)}
                                 value={periodFilter}>
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
    )

};

export default AdminMembershipsFilterBox;