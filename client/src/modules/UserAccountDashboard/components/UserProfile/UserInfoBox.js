import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {editUserInfo} from "../../../AuthForm/store/usersSlice";

const UserInfoBox = ({user, buy_membership, handleBuyMembership, add_trainer, handleAddNewTrainer}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        setValidated(true);
        if(!add_trainer) handleEditUser();


        if(buy_membership) handleBuyMembership()
        if(add_trainer)
        {
            const user_info = {
                email: email,
                password: password,
                tel: tel,
                surname: surname,
                name: name
            }

            handleAddNewTrainer(user_info)
        }


    };

    useEffect(() => {
            if (user) {
                setName(user.name ? user.name : '')
                setSurname(user.surname ? user.surname : '')
                setTel(user.tel ? user.tel : '')
                setEmail(user.email ? user.email : '')
            }
        },
        [user]
    );

    const handleEditUser = () =>
    {
        const user_info =
        {
            "name": name,
            "surname": surname,
            "tel": tel,
            "email": email,
            "id": user.id
        }

        dispatch(editUserInfo(user_info))

    }
    return (
        <Form className={`flex text-sm ${buy_membership ? 'w-5/6 gap-3' : 'w-1/4 flex-col'}`} validated={validated} onSubmit={handleSubmit}>

                <div className="flex flex-col gap-2">
                    <Form.Group>
                        <Form.Label className="text-gray-300">Имя</Form.Label>
                        <Form.Control
                            className="bg-zinc-800 border-none focus:bg-zinc-800 text-white w-72 text-sm mb-2"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            controlId="validationCustom01"
                            pattern="^[а-яА-ЯёЁ]+$"
                            required={!!buy_membership || !!add_trainer}

                        >
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" className="pt-1.5">
                            Некорретное имя. Только русские буквы без пробелов!
                        </Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-gray-300">Фамилия</Form.Label>

                        <Form.Control className="bg-zinc-800 border-none focus:bg-zinc-800 text-white w-72 text-sm mb-2"
                                      value={surname}
                                      onChange={(event) => setSurname(event.target.value)}
                                      controlId="validationCustom02"
                                      pattern="^[а-яА-ЯёЁ]+$"
                                      required={!!buy_membership || !!add_trainer}
                        >

                        </Form.Control>
                        <Form.Control.Feedback type="invalid" className="pt-1.5">
                            Некорретная фамилия. Только русские буквы без пробелов!
                        </Form.Control.Feedback>


                    </Form.Group>


                </div>


                <div className="flex flex-col gap-2">
                    <Form.Group>
                        <Form.Label className="text-gray-300">Телефон</Form.Label>
                        <Form.Control className="bg-zinc-800 border-none focus:bg-zinc-800 text-white w-72 text-sm mb-2"
                                      value={tel}
                                      onChange={(event) => setTel(event.target.value)}
                                      controlId="validationCustom03"
                                      pattern="^\+375 \((29|33|44|25)\) \d{3}-\d{2}-\d{2}$"
                                      placeholder="Формат: +375 (33) 605-20-56"
                                      required={!!buy_membership || !!add_trainer}
                        >
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" className="pt-1.5">
                            Некорретный номер телефона.
                        </Form.Control.Feedback>


                    </Form.Group>


                    <Form.Group>
                        <Form.Label className="text-gray-300">Почта</Form.Label>
                        <Form.Control className="bg-zinc-800 border-none focus:bg-zinc-800 text-white w-72 text-sm mb-2"
                                      value={email}
                                      onChange={(event) => setEmail(event.target.value)}
                                      controlId="validationCustom04"
                                      type="email"
                                      required={!!buy_membership || !!add_trainer}

                        >
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" className="pt-1.5">
                            Некорректная почта.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {
                        add_trainer &&
                        <Form.Group>
                            <Form.Label className="text-gray-300">Пароль</Form.Label>
                            <Form.Control className="bg-zinc-800 border-none focus:bg-zinc-800 text-white w-72 text-sm mb-2"
                                          value={password}
                                          onChange={(event) => setPassword(event.target.value)}
                                          controlId="validationCustom05"
                                          type="password"
                                          min={8}
                                          required={!!buy_membership || !!add_trainer}

                            >
                            </Form.Control>
                            <Form.Control.Feedback type="invalid" className="pt-1.5">
                                Минимум 8 знаков.
                            </Form.Control.Feedback>
                        </Form.Group>
                    }

                    {
                        buy_membership &&
                        <div >
                            <Button className="btn-light w-2/3 mt-3 ml-56 mb-3 " type="submit">Оформить</Button>
                        </div>

                    }

                    {
                        add_trainer &&

                            <Button className="btn-light mt-3 mb-3  w-full " type="submit">Добавить</Button>


                    }


                </div>

            {
                !buy_membership && !add_trainer &&
                <Button className="btn-light w-72 mt-3" type="submit">Редактировать</Button>

            }




        </Form>
    );
};

export default UserInfoBox;