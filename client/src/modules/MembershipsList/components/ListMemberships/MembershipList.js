import React from 'react';
import MembershipCard from "./MembershipCard";
import FilterMembership from "./FilterMembership";
import {Col, Row} from "react-bootstrap";

const MembershipList = ({memberships, openBuyingForm}) => {

    return (
        <div >


            <div className="flex flex-col gap-3">

                <h4 className="text-2xl">Абонементы</h4>
                <Row className="flex-row">
                    {memberships.filter(el => el.type === "Абонемент" ).map((el) => (
                        <Col className="flex-grow-0 flex-shrink-0" xs={4}>
                            <MembershipCard membership={el} openModal={openBuyingForm}/>
                        </Col>
                    ))}
                </Row>

            </div>

            <div className="flex flex-col gap-3">

                <h4 className="text-2xl">Персональные тренировки</h4>
                <Row className="flex-row">
                    {memberships.filter(el => el.type === "Персональная тренировка" ).map((el) => (
                        <Col className="flex-grow-0 flex-shrink-0" xs={4}>
                            <MembershipCard membership={el} openModal={openBuyingForm}/>
                        </Col>
                    ))}
                </Row>

            </div>


            <FilterMembership/>
        </div>
    );
};

export default MembershipList;