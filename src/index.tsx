import React from "react";

import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import Quiz from "components/Quiz/Quiz";
import {Provider} from "react-redux";
import {store} from "store";



const root = (
    <BrowserRouter>
        <Provider store={store}>
            <Quiz/>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);
