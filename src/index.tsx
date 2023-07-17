import React from "react";
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {store} from "store";
import {createHashRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./routes/login";
import Register from "./routes/register";
import QuizPage from "pages/QuizPage/QuizPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";


const router = createHashRouter([
    {
        path: "/",
        element: <Navigate to="login"/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/QuizPage",
        element: <QuizPage/>,
    },
    {
        path: '*',
        element: <NotFoundPage/>,
    },
]);



const root =
(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

ReactDOM.render(
    root,
    document.getElementById('root')
);


