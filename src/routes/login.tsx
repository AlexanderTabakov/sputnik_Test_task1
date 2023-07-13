import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {  Modal } from 'antd';
import {signInUser} from "../firebase";
import {startSession} from "../storage/session";

export default function Login() {

    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit = async (event:any) => {
        event.preventDefault();

        // validate the inputs
        if (!email || !password) {
            setError("Please enter your username and password.");
            return;
        }

        // clear the errors
        setError("");

        // TODO: send the login request
        try {
            const loginResponse = await signInUser(email, password);
            startSession(loginResponse.user);
            navigate("/quiz");
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
        console.log("Logging in...");
    }

    return (


        <>

            <Button onClick={showModal}>ВОЙТИ</Button>

            <Modal open={isModalOpen} cancelText={'Закрыть окно'}  onOk={handleOk} onCancel={handleCancel}>

                <Container maxWidth="xs" sx={{mt: 2}}>
                    <Typography variant="h5" component="h1" gutterBottom textAlign="center">
                        ЗАЙТИ
                    </Typography>
                    {error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>}
                    <Box component="form" onSubmit={onSubmit}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{mt: 1}}
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{mt: 3}}
                            fullWidth
                        />
                        <Button variant="contained" type="submit" sx={{mt: 3}} fullWidth>ЗАХАДИ</Button>
                        <Box sx={{mt: 2}}>
                            Нет аккаунта? <Link href="/register">Регистрация</Link>
                        </Box>
                    </Box>
                </Container>

            </Modal>

        </>
    )
}
