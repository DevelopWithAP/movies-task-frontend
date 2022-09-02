import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Header from '../Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css';
import { baseUrl } from '../../api/baseUrl';

const Login = (): JSX.Element => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [danger, setDanger] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = (event: any): void => {
        event.preventDefault();
        const loginEndpoint = `${baseUrl}/auth/login`;

        axios.post(loginEndpoint, {
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    localStorage.setItem('token', `${response.data.access_token}`);
                    navigate('/movies');
                }
            })
            .catch(() => {
                setDanger(true);
            });
    }
    return (
        <Container className={styles.loginContainer}>
            <Header children={<h4>Log In</h4>}/>
            <Alert
                show={danger}
                variant="danger"
            >
                Invalid Credentials.
            </Alert>
            <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Email </Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" isValid={(email.length && email.includes('@')) ? true : false} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Enter Password" isValid={password.length > 2} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!email || !password}>
                    Log In
                </Button>
            </Form>
        </Container>
    );
};

export default Login;