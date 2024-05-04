import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {filterUsers, getAllUsers, searchUser} from "../../../AuthForm/store/usersSlice";
import {Button, Container, Form} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import {getAllUserMembers} from "../../../MembershipsList/store/membersSlice";

const UserMembershipsFilterBox = ({setLoading, user, memberships, trainers}) => {

    const dispatch = useDispatch();

    const [membershipFilter, setMembershipFilter] = useState('')
    const [trainerFilter, setTrainerFilter] = useState('')
    const [dateFilter, setDateFilter] = useState('')


    const resetFilter = () =>
    {
        setDateFilter('')
        setTrainerFilter('')
        setDateFilter('')
    }

    useEffect(() => {

        setLoading(true);
        dispatch(getAllUserMembers(user.id))

        setTimeout(() => {

            const filters = {
                membershipFilter: membershipFilter,
                trainerFilter: trainerFilter,
                dateFilter: dateFilter
            }

            if (membershipFilter || trainerFilter || dateFilter) {

            }

            setLoading(false);
        }, 1000);

    }, [trainerFilter, membershipFilter, dateFilter]);

    return (
        <Container>
            <Form className="flex gap-5">

                <div className="flex flex-col gap-3 w-1/6">
                    <h4>Фильтры</h4>

                </div>

            </Form>

            <Button className="btn mt-3" onClick={() => resetFilter()}>
                Сбросить фильтры
            </Button>
        </Container>
    );
};

export default UserMembershipsFilterBox;