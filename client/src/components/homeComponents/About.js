import React from 'react';
import {Button, Card, Carousel, Container} from "react-bootstrap";
import ListTrainers from "../trainersComponents/ListTrainers";
import SidebarMenu from "react-bootstrap-sidebar-menu";

const About = () => {
    return (
        <div className="position-relative about" >
            <div className="mb-4 p-3" >
                <h2 className="w-2.5">Тренеры</h2>
                <p style={{color: "#a0a0a0"}}>Самая лучшая и тд</p>
            </div>
            <Carousel>
                <Carousel.Item>
                  <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>

                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
                <Carousel.Item>
                    <ListTrainers/>

                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default About;