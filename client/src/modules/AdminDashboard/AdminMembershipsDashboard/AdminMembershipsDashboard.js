import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Row} from "react-bootstrap";
import {BiPlus} from "react-icons/bi";
import ReactLoading from "react-loading";
import {getAllMemberships} from "../../MembershipsList/store/membershipsSlice";
import AdminMembershipsFilterBox from "./AdminMembershipsFilterBox";
import AdminMembershipsList from "./AdminMembershipsList";
import AdminMembershipAddModal from "./modals/AdminMembershipAddModal";

const AdminMembershipsDashboard = () => {
    const memberships = useSelector(state => state.memberships.memberships);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [addMembershipModal, setAddMembershipModal] = useState(false)
    useEffect(() => {
        dispatch(getAllMemberships())
    }, []);

    const handleCloseAddMembershipModal = () =>
    {
        setAddMembershipModal(false)
    }

    return (
        <div className="mt-5">

            <div className="flex flex-col items-end gap-4">
                <AdminMembershipsFilterBox setLoading={setLoading}/>
                <Button className="ml-4 flex gap-2 items-center mt-2" onClick={() => setAddMembershipModal(true)}>
                    Добавить абонемент
                    <BiPlus size={20}/>
                </Button>
            </div>


            {
                loading ?

                    <Row className="w-3/4 flex gap-y-10 justify-center items-start mt-5">
                        <ReactLoading type={"spin"} width={80}/>
                    </Row>
                    :
                    <AdminMembershipsList memberships={memberships}  />
            }


            {
                addMembershipModal && <AdminMembershipAddModal openModal={setAddMembershipModal} handleClose={handleCloseAddMembershipModal} setLoading={setLoading}/>
            }
        </div>
    );
};

export default AdminMembershipsDashboard;