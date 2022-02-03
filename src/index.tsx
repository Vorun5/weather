import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./provider/ThemeProvider";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
