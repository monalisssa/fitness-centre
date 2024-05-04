import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import no_avatar_image from "../../../../static/no_avatar_image.jpg";
import {BiCalendar, BiPhone, BiSolidMessageDots} from "react-icons/bi";
import {MdEmail} from "react-icons/md";
import {formatYears} from "../../utils/getArraySpecialities";
import {FaCheck} from "react-icons/fa";
import {BsGenderFemale, BsGenderMale} from "react-icons/bs";


const TrainerInfoBox = ({trainer}) => {
    return (

        <Row className="w-3/4 flex gap-5 mt-4 justify-center">
            <Col md={5} >
                {trainer.avatar ?
                    <Card.Img src={"data:image/png;base64," + trainer.avatar} className="w-[22rem] h-3/7" style={{borderRadius: "2%"}}>
                    </Card.Img>
                    :
                    <Card.Img src={no_avatar_image} className="w-[22rem] h-3/7">
                    </Card.Img>
                }


                <div className="flex gap-1 px-2 w-[22rem] mt-2"
                         style={{boxShadow: "1px 5px 10px #000", borderRadius: "2%"}}>
                        <BiSolidMessageDots size={20}/>
                        <p className="text-sm p-2 text-left">

                            {trainer.description
                                ? trainer.description
                                : "Нет слогана..."
                            }

                        </p>

                </div>



            </Col>


            <Col className="flex flex-column gap-4 mt-2 " md={6}>
                <p className="text-2xl">{trainer.name} {trainer.surname}</p>
                <ul className="w-4/5">
                    <li className="flex items-center gap-2">
                        <p className="flex gap-2">
                            <BiPhone/>
                            Телефон:
                        </p>

                        <span className="text-sm text-gray-400">{trainer.tel}</span>
                    </li>

                    <li className="flex items-center gap-2">

                        <p className="flex gap-2">
                            <MdEmail/>
                            Почта:
                        </p>

                        <span className="text-sm text-gray-400">{trainer.email}</span>
                    </li>

                </ul>


                    <ul className="w-4/5">
                        <li className="flex gap-2 items-center ">
                            <p className="flex gap-2">
                                <BiCalendar/>
                                Возраст:

                            </p>

                            <span
                                className="text-sm text-gray-400 flex items-center"> 12.12.2003 ({trainer.age} {formatYears(trainer.age)})
                            </span>
                        </li>
                        <li className="flex gap-2 items-center ">
                            <p className="flex gap-2  ">
                                {
                                    trainer.gender === "Мужской" ? <BsGenderMale />
                                        : <BsGenderFemale/>
                                }
                                Пол:

                            </p>
                            <span className="text-sm text-gray-400">{trainer.gender}</span>
                        </li>
                    </ul>


                <div className="w-full flex flex-column">
                    <p className="flex gap-3 items-center mt-2">Опыт работы :
                        <span className="text-gray-400 space-x-3">
                        {trainer.experience} {formatYears(trainer.experience)}
                    </span>
                    </p>

                    <ul>
                       Основные направления:
                        {trainer.specialities.map(speciality =>
                            <li className="text-sm flex gap-3 mt-2">
                                <FaCheck fill={"#FFC918"}/>
                                {speciality.name}</li>
                        )}

                    </ul>
                </div>

            </Col>
        </Row>





    );
};

export default TrainerInfoBox;