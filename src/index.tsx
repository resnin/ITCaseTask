import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom";
import App from './App'
import './styles/index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";

const rootView = document.getElementById('root')

if (rootView) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        </React.StrictMode>,
        rootView
    )
}
