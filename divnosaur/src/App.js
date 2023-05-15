
import './App.css';
import { useState, useEffect } from 'react';
/* import { Navigate, Routes, Route } from 'react-router-dom'; */
import PostWall from "./Components/PostWall";
import Login from "./Components/Login";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userIsLoggedIn = checkLoginStatus();
    setLoggedIn(userIsLoggedIn);
  }, []);

  const checkLoginStatus = () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    return isLoggedIn === 'true';
  }
  

  return (
    {/* <Routes>
      {loggedIn ? (
        <Route path="/postwall" element={<PostWall />} />
      ) : (
        <Navigate to="/login"  element={<Login/>}/>
      )}
    </Routes> */}
  );
};

    
  


