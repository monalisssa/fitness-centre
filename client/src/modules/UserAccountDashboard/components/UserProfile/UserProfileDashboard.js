import React, {useEffect, useRef, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {useDispatch} from "react-redux";

import no_avatar_image from "../../../../static/no_avatar_image.jpg"
import {editUserAvatar} from "../../../AuthForm/store/usersSlice";
import ReactLoading from "react-loading";
import UserInfoBox from "./UserInfoBox";
const UserProfileDashboard = ({user, add_trainer, handleAddUserAvatar}) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (selectedFile) {

            if(user) {
                const user_obj = {
                    avatar: selectedFile,
                    user_id: user.id,
                };

                setLoading(true);

                setTimeout(() => {
                    dispatch(editUserAvatar(user_obj)).then(() => {
                        setLoading(false);
                    });
                }, 1500);
            }

            else{
                handleAddUserAvatar(selectedFile)
            }

        }
    }, [dispatch, selectedFile, user]); // Запускать колбэк, когда selectedFile изменяется

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };



    return (
        <Container className={`${add_trainer ? "" : "mt-5 flex gap-36 items-center"}`}>

            <div className="flex flex-col items-center gap-4">

                {
                    loading ?  <ReactLoading type={"spin"} width={50} className="mb-5"/>

                        : <>

                            {
                                user && user.avatar != null ?
                                    <img src={"data:image/png;base64," + user.avatar}
                                         className="w-[18rem] h-3/7 "
                                         style={{borderRadius: "10%", border: "1px solid #ccc"}}
                                    />

                                    :

                                    <img src={no_avatar_image} className={`h-3/7 ${add_trainer ? "w-[5rem]" : "w-[18rem]"}`}
                                           style={{borderRadius: "10%", border: "1px solid #ccc"}}
                                    />
                            }
                        </>
                }

                <div>
                    <input type="file" ref={fileInputRef} style={{display: 'none'}} onChange={handleFileChange}/>
                    <Button onClick={handleButtonClick} className="btn-light">Редактировать аватарку</Button>
                </div>
            </div>


            {
                !add_trainer &&  <UserInfoBox user={user}/>
            }




        </Container>


);
};

export default UserProfileDashboard;