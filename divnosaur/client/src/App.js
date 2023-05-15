
import './App.css';
import { useState, useEffect } from 'react';
import { Redirect, Routes, Route } from 'react-router-dom';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in and update state accordingly
    const userIsLoggedIn = checkLoginStatus();
    setLoggedIn(userIsLoggedIn);
  }, []);

  const checkLoginStatus = () => {
    // Check if user is logged in
    // Return true or false
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/postwall" element={<PostWall />} />
      {loggedIn ? (
        <Route path="/postwall" element={<Dashboard />} />
      ) : (
        <Redirect to="/login" />
      )}
    </Routes>
  );
};

    
  


