import React, {useEffect, useState} from 'react';
import {Button, Card, Form, Modal} from "react-bootstrap";

import {FaCalendar, FaClock} from "react-icons/fa";

import UserInfoBox from "../../../UserAccountDashboard/components/UserProfile/UserInfoBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {BiCalendar} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {addMember} from "../../store/membersSlice";
import {Alert} from "@mui/material";
import {useAlert} from "react-alert";
import {generateTimeOptions} from "../../utils/generateTimeArray";
import {calculateTrainingDates} from "../../utils/generateDateArray";
import {addNewWorkouts, getAllWorkouts} from "../../../UserAccountDashboard/store/workoutsSlice";
const MembershipBuyingModal = ({membership,show, handleClose, user}) => {

    const alert = useAlert()
    const [startDate, setStartDate] = useState(new Date());
    const trainers = useSelector(state => state.trainers.trainers);
    const workouts = useSelector(state => state.workouts.workouts);

    const [selectTrainer, setSelectTrainer] = useState(0);
    const [selectTimes, setSelectTimes] = useState(0);
    const [selectTimeStart, setSelectTimeStart] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllWorkouts(user.user.id))
    }, []);
    const handleBuyMembership = () =>
    {

        const member = {
            "joining_date": startDate,
            "user_id": user.user.id,
            "membership_id": membership.id,
            "trainer_id": selectTrainer
        }
        dispatch(addMember(member))
            .then(data => {
                const add_workouts = calculateTrainingDates(membership.period_duration, selectTimes, startDate, selectTimeStart);

                const final_add_workouts =
                    {
                        workouts: add_workouts,
                        trainer_id: data.payload.trainer_id,
                        member_id: data.payload.id,
                        user_id: user.user.id
                    }
                if (membership.type==="Персональная тренировка") {
                    dispatch(addNewWorkouts(final_add_workouts));
                }
                handleClose(true);
                alert.show("Абонемент успешно оформлен и добавлен в 'Мои абонементы' !");
            })
            .catch(error => {
                // Обработка ошибки при выполнении dispatch
                console.error('Ошибка при добавлении абонемента:', error);
            });

    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose} className="text-white"
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Оформление абонемента</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="flex gap-10">
                        <Card  className="overflow-hidden card-membership bg-zinc-800 w-1/2">
                            <Card.Body className="flex flex-col gap-2">
                                <Card.Text>
                                    <span className="text-[#FFC918]">{membership.name}</span>
                                </Card.Text>
                                <Card.Text className="text-sm flex items-center gap-2"> <FaClock/> Посещение
                                    c <span>{membership.time_visit_start} ДО {membership.time_visit_end}</span></Card.Text>
                                <Card.Text className="text-sm flex items-center gap-2"> <FaCalendar/>Период действия - <span
                                    className="text-[#FFC918]"> {membership.period_duration} </span></Card.Text>
                                {
                                    membership.description &&
                                    <Card.Text className="text-sm text-gray-400">
                                        * {membership.description}
                                    </Card.Text>
                                }
                                <div className="flex justify-end text-[#FFC918] text-2xl mt-1">
                                    {membership.price} BYN
                                </div>
                            </Card.Body>
                        </Card>


                        {
                            membership.type === 'Персональная тренировка' &&

                            <div className="flex flex-col gap-4 w-1/3">
                                <Form.Group >
                                    <Form.Label className="text-gray-300 mt-2 text-sm">Тренер</Form.Label>
                                    <Form.Select aria-label="Default select example" className="bg-zinc-800 text-white text-sm"
                                                 onChange={(event) => setSelectTrainer(event.target.value)}
                                                 value={selectTrainer}
                                    >
                                        {
                                            trainers.map(trainer =>
                                                <option value={trainer.id}>{trainer.name + " " + trainer.surname}</option>
                                            )
                                        }
                                    </Form.Select>
                                </Form.Group>

                                {
                                    membership.period_duration > 1  &&
                                <Form.Group >
                                    <Form.Label className="text-gray-300 mt-2 text-sm">Занятия</Form.Label>
                                    <Form.Select aria-label="Default select example"
                                                 className="bg-zinc-800 text-white text-sm "
                                                 onChange={(event) => setSelectTimes(event.target.value)}
                                                 value={selectTimes}
                                    >
                                        <option value={1}>1 раз в неделю</option>
                                        <option value={2}>2 раза в неделю</option>
                                        <option value={3}>3 раза в неделю</option>

                                    </Form.Select>
                                </Form.Group>

                                }

                                <Form.Group >
                                    <Form.Label className="text-gray-300 mt-2 text-sm">Время</Form.Label>
                                    <Form.Select aria-label="Default select example"
                                                 className="bg-zinc-800 text-white text-sm "
                                                 onChange={(event) => setSelectTimeStart(event.target.value)}
                                                 value={selectTimeStart}
                                    >
                                        {
                                            generateTimeOptions(6, 22)
                                        }

                                    </Form.Select>
                                </Form.Group>


                            </div>

                        }

                    </div>



                    <div className="mt-2 text-sm flex flex-col gap-2 w-56">


                           <span className="text-gray-300">

                            {membership.period_duration === 1
                                ? " Дата посещения:"
                                : " Дата действия:"
                            }

                           </span>
                            <div
                                className="bg-zinc-800 text-white text-sm flex items-center justify-between p-2">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                                <BiCalendar size={18} className="cursor-pointer"/>
                            </div>
                    </div>

                    {
                        user.status === 'auth' &&

                        <div className="mt-4">
                            <UserInfoBox user={user.user} buy_membership={true} handleBuyMembership={handleBuyMembership}/>
                        </div>

                    }

                </Modal.Body>
            </Modal>



        </>
    );
};

export default MembershipBuyingModal;