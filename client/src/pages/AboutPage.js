import React from 'react';
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";



const AboutPage = () => {
    return (
        <div className="page-cover">
            <div className="mt-32 m-20 dashboard p-10" style={{border: "1px solid #ccc", borderRadius: "1%"}}>
                <div className="w-1/2 mb-3">"Мы" - это современный фитнес-клуб, предлагающий широкий спектр услуг и возможностей для занятий спортом и поддержания здорового образа жизни. В нашем клубе мы стремимся создать комфортную и мотивирующую атмосферу, где каждый найдет свое место и достигнет своих фитнес-целей.
                    Мы здесь</div>
            <YMaps>
                <Map defaultState={{ center: [53.910814737411314, 27.549773296783922], zoom: 9 }}>
                    <Placemark defaultGeometry={[53.910814737411314, 27.549773296783922]} />
                </Map>
            </YMaps>
            </div>
        </div>
    );
};

export default AboutPage;