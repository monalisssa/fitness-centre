import React from 'react';
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE} from "../../../utils/const_routers";
import AuthForm from "./AuthForm";
import RegistrationForm from "./RegistrationForm";

const AuthPageForm = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div className="auth flex justify-end items-center">
            {
                isLogin ? <AuthForm/>
                    : <RegistrationForm/>
            }
        </div>
    );
};

export default AuthPageForm;