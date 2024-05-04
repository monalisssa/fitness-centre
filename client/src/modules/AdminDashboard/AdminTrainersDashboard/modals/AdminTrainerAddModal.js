import React, {useEffect, useRef, useState} from 'react';
import {Button, Container, Form, Modal, ModalBody} from "react-bootstrap";
import UserInfoBox from "../../../UserAccountDashboard/components/UserProfile/UserInfoBox";
import UserProfileDashboard from "../../../UserAccountDashboard/components/UserProfile/UserProfileDashboard";
import {getArraySpecialities} from "../../../TrainersList/utils/getArraySpecialities";
import {useDispatch, useSelector} from "react-redux";
import {BiDownArrow, BiPlus} from "react-icons/bi";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {addNewTrainer, searchTrainerBySurname} from "../../../TrainersList/store/trainersSlice";
import {useAlert} from "react-alert";

const AdminTrainerAddModal = ({openModal, handleClose, setLoading}) => {

    const [experience, setExperience] = useState("")
    const [gender, setGender] = useState("")
    const [specialities, setSpecialities] = useState([])
    const [newSpeciality, setNewSpeciality] = useState('')
    const alert = useAlert()
    const [validated, setValidated] = useState(false)
    const dispatch = useDispatch();
    const trainers = useSelector(state => state.trainers);
    const [trainersSpecialities, setTrainersSpecialities] = useState(getArraySpecialities(trainers.trainers))
    const [selectSpeciality, setSelectSpeciality] = useState(trainersSpecialities[0])

    const buttonRef = useRef(null);
    const [user_info, setUserInfo] = useState(null); // Добавлено объявление user_info

    useEffect(() => {
        if (validated) {
            handleAddNewTrainerAfterValidation();
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

    const handleAddNewTrainerAfterValidation = () => {
        if (specialities.length === 0) {
            alert.show("Выберите направление!");
        } else {
            const create_specialities = [];
            specialities.forEach((el) => create_specialities.push({ name: el }));

            const trainer = {
                user: user_info,
                trainer: {
                    experience: experience,
                    gender: gender,
                },
                specialities: create_specialities,
            };

            setLoading(true);
            handleClose(true);
            alert.show("Тренер успешно добавлен!");
            setTimeout(() => {
                dispatch(addNewTrainer(trainer));
                setLoading(false);
            }, 1000);
        }
    };

    const addSpecialities = () => {
        if (newSpeciality) {
            if (!specialities.find((el) => newSpeciality === el))
                setSpecialities([...specialities, newSpeciality]);
            setNewSpeciality("");
        }

        if (selectSpeciality && !newSpeciality) {
            if (!specialities.find((el) => selectSpeciality === el))
                setSpecialities([...specialities, selectSpeciality]);
            setSelectSpeciality("");
        }
    };

    const handleAddNewTrainer = (userInfo) => {
        setUserInfo(userInfo); // Обновлено присвоение значения user_info
        buttonRef.current.click();
    };
    return (
        <Modal
            show={openModal}
            onHide={handleClose}
            className="text-white"
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавление тренера</Modal.Title>
            </Modal.Header>
            <ModalBody>

                <Container className="flex gap-44">
                    <UserInfoBox add_trainer={true} handleAddNewTrainer={handleAddNewTrainer}/>

                    <div className="flex flex-col items-start">

                        <Form className="mt-3 text-sm" onSubmit={handleSubmit}>

                            <div className="flex justify-start gap-5 fs-6 items-center">
                                <Form.Group>
                                    <Form.Label className="text-gray-300">Опыт</Form.Label>
                                    <Form.Control
                                        className="bg-zinc-800 border-none focus:bg-zinc-800 text-white text-sm mb-2 w-20"
                                        value={experience}
                                        onChange={(event) => setExperience(event.target.value)}
                                        controlId="validationCustom05"
                                        type="number"
                                        required

                                    >
                                    </Form.Control>


                                </Form.Group>

                                <Form.Group aria-required={true}>
                                    <Form.Label className="text-gray-300">Пол</Form.Label>

                                    <div className="flex gap-2">
                                        <Form.Check className="text-sm"
                                                    label="Мужской"
                                                    name="group1"
                                                    type={"radio"}
                                                    id={`reverse-1`}
                                                    value="Мужской"
                                                    checked={gender === "Мужской"}
                                                    onChange={(event) => setGender(event.target.value)}
                                        />
                                        <Form.Check className="text-sm"
                                                    label="Женский"
                                                    name="group2"
                                                    type={"radio"}
                                                    id={`reverse-2`}
                                                    value="Женский"
                                                    checked={gender === "Женский"}
                                                    onChange={(event) => setGender(event.target.value)}
                                        />
                                    </div>

                                </Form.Group>


                            </div>




                            <div className="flex gap-3  items-center ">

                                <Form.Group className="mt-3 w-1/2">
                                    <Form.Label className="text-gray-300">Добавить</Form.Label>
                                    <Form.Control
                                        className="bg-zinc-800 border-none focus:bg-zinc-800 text-white  text-sm mb-2"
                                        value={newSpeciality}
                                        onChange={(event) => setNewSpeciality(event.target.value)}
                                        controlId="validationCustom06"


                                    >
                                    </Form.Control>


                                </Form.Group>

                                <Form.Group className="mt-2">
                                    <Form.Label className="text-gray-300">Выбрать</Form.Label>
                                    <Form.Select aria-label="Default select example" className="bg-zinc-800 text-white text-sm"
                                                 onChange={(event) => setSelectSpeciality(event.target.value)}
                                                 value={selectSpeciality}
                                    >
                                        <option value={trainersSpecialities[0]}>{trainersSpecialities[0]}</option>
                                        {
                                            trainersSpecialities.map(((el, index) =>

                                                    index!==0 && <option value={el}>{el}</option>

                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>

                                    <BiPlus size={30} className="mt-4 cursor-pointer hover:scale-110" onClick={() => addSpecialities()}/>


                            </div>


                            <Accordion className="mt-4 w-2/3">
                                <AccordionSummary
                                    expandIcon={<BiDownArrow fill={"#fff"}/>}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >

                                    {
                                        specialities.length!==0 ? "Выбранные направления" : "Нет направлений"
                                    }
                                </AccordionSummary>


                                <AccordionDetails>
                                    <ul>
                                        {specialities.map((speciality, index) =>
                                          <li>{speciality}</li>)
                                        }
                                    </ul>

                                </AccordionDetails>
                            </Accordion>

                            <Button ref={buttonRef} type="submit" style={{ display: 'none' }}></Button>
                        </Form>
                    </div>


                </Container>

            </ModalBody>
        </Modal>
    );
};

export default AdminTrainerAddModal;