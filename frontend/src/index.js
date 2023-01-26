import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {routers} from "./Routers";
import {store} from "./Store"
import "./Scss/main.scss"
import './18next'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback ={(<div>Loading ...</div>)} >
    <Provider store={store}>
        <RouterProvider router={routers}/>
    </Provider>
    </Suspense>
);

