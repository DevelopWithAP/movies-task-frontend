import React from 'react';
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import MyMovies from './Components/MyMovies/MyMovies';
import User from './Components/User/User';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route element={<MyMovies />} path="movies"/>
          <Route element={<User />} path="users/personal" /> 
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
