
import './App.css';
import { useState, useEffect } from 'react';
/* import { Navigate, Routes, Route } from 'react-router-dom'; */

import { Register } from './Components/Register/Register';


const App = () => {
 /*  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userIsLoggedIn = checkLoginStatus();
    setLoggedIn(userIsLoggedIn);
  }, []);

  const checkLoginStatus = () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    return isLoggedIn === 'true';
  } */
  

  return (
    <>
    
      <Register></Register>
      
    </>
    
  )
  
};

    
export default App;


