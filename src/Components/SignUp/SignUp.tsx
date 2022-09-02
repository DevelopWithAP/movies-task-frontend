import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SignUp.module.css';

import { baseUrl } from '../../api/baseUrl';


const SignUp = () => {

    localStorage.clear();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [danger, setDanger] = useState<boolean>(false);

    const handleSubmit = (e: any): void => {

        e.preventDefault();

        const signUpEndpoint = `${baseUrl}/auth/signup`;

        axios.post(signUpEndpoint, { email: email, password: password })
            .then((response) => {
                if (response.status === 201) {
                    localStorage.setItem('token', `${response.data.access_token}`);
                    setSuccess(true);
                }
            })
            .catch(() => {
                setDanger(true);
            });
    };

    return (
            <Container className={styles.myContainer}>
                <Header children={<h4>Create account</h4>}/>
                <Alert
                    show={success}
                    variant="success"
                >
                    Account Created. You can log in <Link to="/login">here</Link>.
                </Alert>
                <Alert
                    show={danger}
                    variant="danger"
                >
                    Account already exists. You can log in using your credentials <Link to="/login">here</Link>
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
                        Sign Up
                    </Button>
                </Form>
                <div>Already have an account? <Link to="/login">Log in</Link></div>
            </Container>
    );
}

export default SignUp;