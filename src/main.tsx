import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'flowbite/dist/flowbite.min.js';
import 'flowbite';
import {BrowserRouter} from "react-router-dom";
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";
import {apiSlice} from "./redux/features/api/apiSlice.ts";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApiProvider api={apiSlice}>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </ApiProvider>
    </React.StrictMode>,
)
