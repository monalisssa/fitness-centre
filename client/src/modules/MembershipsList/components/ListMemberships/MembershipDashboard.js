import React, {useEffect, useState} from 'react';
import MembershipList from "./MembershipList";
import {useDispatch, useSelector} from "react-redux";
import {getAllMemberships} from "../../store/membershipsSlice";
import MembershipBuyingModal from "../MembershipBuyingModal/MembershipBuyingModal";
import {Alert} from "@mui/material";
import {useAlert} from "react-alert";


const MembershipDashboard = () => {

    const dispatch = useDispatch();

    const memberships = useSelector(state => state.memberships);
    const user = useSelector(state => state.currentUser);

    const [openMembershipModal, setOpenMembershipModal] = useState(null)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    useEffect(() => {
        dispatch(getAllMemberships())
    }, []);

    const handleOpenBuyingForm = (membership) =>
    {
        setOpenMembershipModal(membership)
        setShow(true)
    }

    return (
        <>
            <div className="mt-32 m-20 dashboard p-10" style={{border: "1px solid #ccc", borderRadius: "1%"}}>
                <MembershipList memberships={memberships} openBuyingForm={handleOpenBuyingForm}/>
                {openMembershipModal != null &&
                    <MembershipBuyingModal membership={openMembershipModal} show={show} handleClose={handleClose}
                                           user={user}/>}

            </div>
        </>

    );
};

export default MembershipDashboard;