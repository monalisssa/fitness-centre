
import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {FaUser} from "react-icons/fa";
import {
    ABOUT_ROUTE,
    ACCOUNT_USER_ROUTE,
    ADMIN_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    MEMBERSHIPS_ROUTE,
    TRAINERS_ROUTE
} from "../utils/const_routers";
import {useNavigate} from "react-router-dom";
import {BiSolidDoorOpen} from "react-icons/bi";
import {useSelector} from "react-redux";
import {AiFillSetting} from "react-icons/ai";
const Header = () => {

    const navigate = useNavigate()

    const current_user = useSelector(state => state.currentUser);
    return (
        <Navbar className="p-3 m-3 rounded border-amber-50">
            <Container>
                <Navbar.Brand href="#home">Fitness</Navbar.Brand>
                <Nav className="flex gap-5">
                    <Nav.Link onClick={() =>navigate(HOME_ROUTE)}>Главная</Nav.Link>
                    <Nav.Link onClick={() =>navigate(MEMBERSHIPS_ROUTE)}>Абонементы</Nav.Link>
                    <Nav.Link onClick={() =>navigate(TRAINERS_ROUTE)}>Тренера</Nav.Link>
                    <Nav.Link onClick={() =>navigate(ABOUT_ROUTE)}>О нас</Nav.Link>

                    <div className="flex gap-2">
                        <Button className="flex items-center gap-2 btn-light" onClick={() =>navigate(LOGIN_ROUTE)}>
                            {current_user.status === 'auth'
                                ?
                                <>
                                    <BiSolidDoorOpen size={20}/> Выйти
                                </>
                                :
                                <>
                                    <FaUser/>
                                    Войти
                                </>

                            }

                        </Button>

                        {current_user.status === 'auth' && current_user.user.role_id === 2 &&
                            <Button className="flex items-center gap-2 btn-light" onClick={() =>navigate(ACCOUNT_USER_ROUTE)}>
                                <FaUser />
                                Личный кабинет
                            </Button>

                        }

                        {current_user.status === 'auth' && current_user.user.role_id === 1 &&
                            <Button className="flex items-center gap-2 btn-light" onClick={() =>navigate(ADMIN_ROUTE)}>
                                <AiFillSetting />
                                Админ панель
                            </Button>

                        }

                        {current_user.status === 'auth' && current_user.user.role_id === 3 &&
                            <Button className="flex items-center gap-2 btn-light" onClick={() =>navigate(ACCOUNT_USER_ROUTE)}>
                                <FaUser />
                                Для тренера
                            </Button>

                        }
                    </div>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;