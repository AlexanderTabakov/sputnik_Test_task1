import React from "react";
import {App} from "app/App";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import Quiz from "components/Quiz/Quiz";

const root = (
    <BrowserRouter>
        <Quiz/>
    </BrowserRouter>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);
