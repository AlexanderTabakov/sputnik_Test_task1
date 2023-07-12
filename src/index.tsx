import React from "react";

import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import Quiz from "components/Quiz/Quiz";
import {Provider} from "react-redux";
import {store} from "store";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./routes/login";
import Register from "./routes/register";
import User from "./routes/user";


const router = createBrowserRouter([
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
        path: "/quiz",
        element: <Quiz/>,
    },
    {
        path: "/user",
        element: <User/>,
    },
]);

// const root = (
//     <BrowserRouter>
//         <Provider store={store}>
//             <Quiz/>
//         </Provider>
//     </BrowserRouter>
// )

const root =
(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

ReactDOM.render(
    root,
    document.getElementById('root')
);


