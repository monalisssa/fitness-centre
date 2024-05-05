import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {
    ABOUT_ROUTE,
    ACCOUNT_USER_ROUTE, ADMIN_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    MEMBERSHIPS_ROUTE,
    REGISTRATION_ROUTE, TRAINERS_ROUTE
} from "../utils/const_routers";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import AccountUserPage from "../pages/AccountUserPage";
import MembershipsPage from "../pages/MembershipsPage";
import TrainersPage from "../pages/TrainersPage";
import AdminPage from "../pages/AdminPage";
import AboutPage from "../pages/AboutPage";



const AppRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<Navigate to={HOME_ROUTE} />} />
            <Route path={HOME_ROUTE} element={<HomePage />} exact/>
            <Route path={LOGIN_ROUTE} element={<AuthPage />}/>
            <Route path={REGISTRATION_ROUTE} element={<AuthPage />}/>
            <Route path={ACCOUNT_USER_ROUTE} element={<AccountUserPage />}/>
            <Route path={MEMBERSHIPS_ROUTE} element={<MembershipsPage />}/>
            <Route path={TRAINERS_ROUTE} element={<TrainersPage />}/>
            <Route path={ADMIN_ROUTE} element={<AdminPage />}/>
            <Route path={ABOUT_ROUTE} element={<AboutPage />}/>

        </Routes>


    );
};

export default AppRouter;