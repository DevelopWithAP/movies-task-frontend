import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './MyMovies.module.css';
import { Navigate, NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import * as movies from '../../myMovies.json';

const MyMovies = (): JSX.Element => {

  const data = JSON.parse(JSON.stringify(movies));
  const myMovies: [] = data.movies;
  const token = localStorage.getItem('token');

  // Ensures only registered users can access route.
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>
  }

  return (
    <Container className={styles.moviesContainer}>
      <Header children={<h4>My Favourite Movies</h4>} />
      <Navigation>
        <NavLink to="/login" className={styles.navLink}>Log Out</NavLink>
        <NavLink to="/users/personal" className={styles.navLink}>My Account</NavLink>
      </Navigation>
      <Row xs={1} md={4} className="g-4">
        {myMovies.map(({ title, posterPath, releaseDate }) => (
          <Card border="secondary" style={{ width: '18rem' }} className="mx-2">
            <Card.Img variant="top" src={posterPath} className={styles.card} />
            <Card.Body>
              <Card.Title> {title} </Card.Title>
              <Card.Footer>{releaseDate}</Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default MyMovies;