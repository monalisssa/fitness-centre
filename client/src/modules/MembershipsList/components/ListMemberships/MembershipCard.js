import React, {useState} from 'react';
import {Button, Card, CardImg} from "react-bootstrap";
import membership_image from "../../../../static/membership.jpg"
import {FaCalendar, FaClock} from "react-icons/fa";
import {getDurationString} from "../../utils/calculationOfPeriodDurationMembership";
const MembershipCard = ({membership, openModal}) => {


    return (

        <Card  className="overflow-hidden card-membership bg-zinc-800 w-96 p-0 mb-20" style={{borderRadius: "5%", border: "1px solid #ccc"}}>

            <div className="relative">
                <CardImg src={membership_image} className="w-full"/>
                <div className="flex justify-end bg-[#FFC918] text-black text-2xl absolute top-0 right-0 p-2" style={{borderLeft: "1px solid #000", borderBottom: "1px solid #000"}}>
                    {membership.price} BYN
                </div>
            </div>

            <Card.Body className="flex flex-col gap-2">
            <Card.Text>
                    <span className="text-[#FFC918]">{membership.name}</span>
                </Card.Text>
                <Card.Text className="text-sm flex items-center gap-2"> <FaClock/> Посещение
                    c <span>{membership.time_visit_start} ДО {membership.time_visit_end}</span></Card.Text>
                <Card.Text className="text-sm flex items-center gap-2"> <FaCalendar/>Период действия - <span
                    className="text-[#FFC918]"> {getDurationString(membership.period_duration)} </span></Card.Text>
                {
                    membership.description ?
                    <Card.Text className="text-sm text-gray-400">
                        * {membership.description}
                    </Card.Text>

                        : <Card.Text className="text-sm text-gray-400">
                            *
                        </Card.Text>
                }

            </Card.Body>
            <div className="flex justify-end p-2">
                <Button onClick={() => openModal(membership)} className="w-2/3 btn-light" >Купить</Button>
            </div>

        </Card>

    );
};

export default MembershipCard;