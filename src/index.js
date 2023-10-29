import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import Slice from "./slice/Slice";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: Slice.reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
