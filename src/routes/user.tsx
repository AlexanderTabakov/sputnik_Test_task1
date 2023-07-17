import {Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "storage/session";
import {useDispatch} from "react-redux";

export default function User() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const dispatch = useDispatch()
    const onLogOutClickHandler = () => {
        dispatch({type:'LOGOUT'})
    }



    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/login");
        }

        const session = getSession();
        setEmail(session.email);

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
