import React from "react";

const Button:React.FC = ({children}, onclick)=> {
    return (
        <button onClick={onclick}>{children}</button>
    )
}

export default Button
