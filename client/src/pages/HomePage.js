import React from 'react';
import About from "../components/homeComponents/About";
import Cover from "../components/homeComponents/Cover";
import Footer from "../components/Footer";
import SidebarMenu from "react-bootstrap-sidebar-menu";


const HomePage = () => {
    return (
        <div>
            <Cover></Cover>
            <About></About>
        </div>
    );
};

export default HomePage;