import { baseUrl } from "../../api/baseUrl";
import axios from 'axios';
import { Navigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import styles from './User.module.css';

const User = () => {

    const token = localStorage.getItem('token');
    const userEndpoint = `${baseUrl}/users/personal`;

    const [user, setUser] = useState<any>();

    useEffect(() => {
        axios.get(userEndpoint, { headers: { 'Authorization': `Bearer ${token}` } })
            .then((response) => {
                const currentUser = response.data;
                
                setUser(currentUser);
            })
            .catch((err) => console.log(err));
    });

    const formatDateProperty = (date: Date): string  => {
        return new Date(date).toDateString();
    };

    if (!token) {
        return <Navigate to="/login" replace={true}></Navigate>
    }

    return (
        <Container className={styles.container}>
            <Header children={<h4>Account Info</h4>} />
            <Navigation>
                <NavLink to="/movies" className={styles.navLink}>Back to movies</NavLink>
            </Navigation>
            <Card className="text-center">
                <Card.Header>User Information</Card.Header>
                <Card.Body>
                    <Card.Text key={user?.email}>
                        <strong> Email: </strong> {user?.email}
                    </Card.Text>
                    <Card.Text key={user?.createdAt}>
                        <strong> Date Joined: </strong> {`${formatDateProperty(user?.createdAt)}`}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default User;