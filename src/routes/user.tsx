import {Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "../storage/session";
import {useDispatch, useSelector} from "react-redux";
import {addToAnswersList} from "store/redusers/answers";

export default function User() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");

    const dispatch = useDispatch()
    const onLogOutClickHandler = () => {
        dispatch({type:'LOGOUT'})
    }



    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/login");
        }

        let session = getSession();
        setEmail(session.email);

        console.log("Your access token is: " + session.accessToken);
    }, [navigate]);

    const onLogout = () => {
        endSession();
        onLogOutClickHandler()
        navigate("/login");
    }

    return (
        <Container maxWidth="xs" sx={{mt: 2}}>
            <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
                Вы зашли как:
            </Typography>
            <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
                {email}
            </Typography>
            {/*<Typography variant="p" component="p" textAlign="center" gutterBottom>*/}
            {/*    Check the console for your (access/session) token.*/}
            {/*</Typography>*/}
            <Button variant="contained" color="error" onClick={onLogout} sx={{mt: 3}} fullWidth>
                ВЫХАДИ
            </Button>
        </Container>
    )
}
