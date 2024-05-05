import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../../../utils/const_routers";
import {Button, Form} from "react-bootstrap";
import {addNewUser} from "../store/usersSlice";
import {useDispatch} from "react-redux";

const RegistrationForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [tel, setTel] = useState('')


    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            password: password,
            email: email,
            name: name ? name : null,
            surname: surname ? surname : null,
            tel: tel ? tel : null

        };
        dispatch(addNewUser(user));
    };
    return (
            <Form className="relative flex flex-column w-1/4 mr-52 gap-8" onSubmit={handleSubmit}>
                <h2 className="m-auto text-3xl">Регистрация</h2>
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
                    <>
                        <Form.Control
                            placeholder="Введите имя..."
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />

                        <Form.Control
                            placeholder="Введите фамилию..."
                            value={surname}
                            onChange={(event) => setSurname(event.target.value)}
                        />

                        <Form.Control
                            placeholder="Введите телефон..."
                            value={tel}
                            onChange={(event) => setTel(event.target.value)}
                        />
                    </>
                <div>

                <div>
                    Есть аккаунт?
                    <NavLink to={LOGIN_ROUTE} className="text-[#FFC918] hover:underline"> Авторизация!</NavLink>
                </div>


                </div>

                <Button type="submit" className="btn-light">
                        Зарегистрироваться
                </Button>
            </Form>
    )
};

export default RegistrationForm
