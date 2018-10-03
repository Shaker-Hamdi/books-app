import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { configureStore } from "./store/configureStore";
import ErrorBoundary from "./util/ErrorBoundary";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

const rooteEl = document.getElementById("root");
const store = configureStore();

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </Router>
        </Provider>,
        rooteEl
    );
};

render();
registerServiceWorker();
