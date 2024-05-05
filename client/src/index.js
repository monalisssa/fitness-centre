
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/globalStore";
import {transitions, positions, Provider as AlertProvider, types} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    type: types.SUCCESS,
    timeout: 5000,
    // you can also just use 'scale'
    transition: transitions.SCALE,
    containerStyle: {
        zIndex: 10000
    }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AlertProvider template={AlertTemplate} {...options}>
        <Provider store={store}>
            <App />
        </Provider>
    </AlertProvider>

);


