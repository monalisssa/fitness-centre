import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {ACCOUNT_USER_ROUTE, ADMIN_ROUTE, REGISTRATION_ROUTE} from "../../../utils/const_routers";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { authUser} from "../store/usersSlice";

import {PiSmileySadFill} from "react-icons/pi";


const AuthForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuth, setIsAuth] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const current_user = useSelector(state => state.currentUser);



    const handleSubmit = (event) => {
            event.preventDefault();
            setIsLogin(true)
            const user = {
                password: password,
                email: email,
            };
            dispatch(authUser(user));
    };

    useEffect(() => {
        if(isLogin) {
            if (current_user.status === 'auth')
            {
                setIsAuth(true)

                if(current_user.user.role_id === 2) navigate(ACCOUNT_USER_ROUTE)
                if(current_user.user.role_id === 1) navigate(ADMIN_ROUTE)
                if(current_user.user.role_id === 3) navigate(ACCOUNT_USER_ROUTE)
            }
            else if (current_user.status === 'rejected') setIsAuth(false)
        }
    }, [current_user, isLogin]);



    return (
        <>
            <Form className="relative flex flex-column w-1/4 mr-52 gap-4" onSubmit={handleSubmit}>
                <h2 className="m-auto text-3xl">Авторизация</h2>
                {isAuth === false && <div className="text-sm text-[#FF6347] bg-neutral-900 p-2 flex gap-3 items-center rounded">Неправильный email или пароль! <PiSmileySadFill size={20}/></div>}
                <Form.Control
                    placeholder="Введите email..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    type="email"
                />
                <Form.Control
                    placeholder="Введите пароль..."
                    value={password}
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                <div>
                    Нет аккаунта?
                    <NavLink to={REGISTRATION_ROUTE}
                             className="text-[#FFC918] hover:underline"> Зарегистрируйся!</NavLink>
                </div>

                <Button type="submit" className="btn-light">
                    Войти
                </Button>
            </Form>
        </>

    )
};

export default AuthForm