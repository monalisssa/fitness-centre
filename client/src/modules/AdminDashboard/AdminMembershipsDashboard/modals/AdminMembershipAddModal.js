import React, {useEffect, useRef, useState} from 'react';
import {useAlert} from "react-alert";
import {useDispatch, useSelector} from "react-redux";

import {Button, Container, Form, Modal, ModalBody} from "react-bootstrap";
import {addMembership} from "../../../MembershipsList/store/membershipsSlice";

const AdminMembershipAddModal = ({setLoading, handleClose, openModal}) => {

    const [period, setPeriod] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [personal, setPersonal] = useState("Абонемент")
    const [timeVisit, setTimeVisit] = useState("")
    const [timeExit, setTimeExit] = useState("")
    const [price, setPrice] = useState(0)


    const alert = useAlert()
    const [validated, setValidated] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        if (validated) {
            const membership = {
                period_duration: period,
                type: personal,
                price: price,
                name: name,
                description: description,
                time_visit_start: timeVisit,
                time_visit_end: timeExit
            };

            setLoading(true);
            handleClose(true);
            alert.show("Абонемент успешно добавлен!");
            setTimeout(() => {
                dispatch(addMembership(membership));
                setLoading(false);
            }, 1200);
        }
    }, [validated]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        setValidated(true);
    };



    return (
        <Modal
            show={openModal}
            onHide={handleClose}
            className="text-white"
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавление абонемента</Modal.Title>
            </Modal.Header>
            <ModalBody>

                <Container>

                    <Form className="flex flex-col text-sm w-5/6" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label className="text-gray-300">Название</Form.Label>
                            <Form.Control
                                className="bg-zinc-800 border-none focus:bg-zinc-800 text-white text-sm mb-2 "
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                controlId="validationCustom01"
                                required

                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="text-gray-300">Период действия</Form.Label>

                            <Form.Select aria-label="Default select example"
                                         className="bg-zinc-800 text-white text-sm mb-2"
                                         onChange={(event) => setPeriod(event.target.value)}
                                         value={period}
                            >
                                <option value={1}>1 день</option>
                                <option value={7}>1 неделя</option>
                                <option value={14}>2 недели </option>
                                <option value={30}>1 месяц</option>
                                <option value={90}>3 месяца</option>
                                <option value={180}>6 месяцев</option>
                            </Form.Select>

                        </Form.Group>

                        <Form.Group >
                            <Form.Label className="text-gray-300">Тип</Form.Label>
                            <Form.Select aria-label="Default select example" className="bg-zinc-800 text-white text-sm w-2/3  mb-2"
                                         onChange={(event) => setPersonal(event.target.value)}
                                         value={personal}
                            >
                                <option value={"Абонемент"}>Абонемент</option>
                                <option value={"Персональная тренировка"}>Персональная тренировка</option>
                            </Form.Select>
                        </Form.Group>

                        {
                            personal === "Абонемент" &&
                            <div className="flex gap-4">
                                <Form.Group className="flex items-center gap-2">
                                    <Form.Label className="text-gray-300 w-32">Посещение c</Form.Label>
                                    <Form.Control
                                        className="bg-zinc-800 border-none focus:bg-zinc-800 text-white text-sm mb-2 w-14"
                                        value={timeVisit}
                                        onChange={(event) => setTimeVisit(event.target.value)}
                                        controlId="validationCustom03"
                                        placeholder="8:00"
                                        required
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="flex items-center gap-2">
                                    <Form.Label className="text-gray-300 w-10">До</Form.Label>
                                    <Form.Control
                                        className="bg-zinc-800 border-none focus:bg-zinc-800 text-white text-sm mb-2 w-14"
                                        value={timeExit}
                                        onChange={(event) => setTimeExit(event.target.value)}
                                        placeholder="21:00"
                                        controlId="validationCustom04"
                                        required
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        }


                        <Form.Group>
                            <Form.Label className="text-gray-300">Цена</Form.Label>
                            <Form.Control
                                className="bg-zinc-800 border-none focus:bg-zinc-800 text-white text-sm mb-2 w-20"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                controlId="validationCustom06"
                                type="number"
                                required

                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="text-gray-300">Примечание</Form.Label>
                            <Form.Control
                                className="bg-zinc-800 border-none focus:bg-zinc-800 text-white text-sm mb-2 "
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                controlId="validationCustom06"

                            >
                            </Form.Control>
                        </Form.Group>


                        <div className="flex justify-end w-full ml-20">
                            <Button type="submit" className="w-1/2">Добавить</Button>
                        </div>

                    </Form>
                </Container>

            </ModalBody>
        </Modal>
    );
};

export default AdminMembershipAddModal;