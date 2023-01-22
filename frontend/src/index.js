import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {routers} from "./Routers";
import {store} from "./Store"
import "./Scss/main.scss"
import './18n'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={routers}/>
    </Provider>
);

