
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from "./Components/Login/Login";
import { PostWall } from "./Components/PostWall/PostWall";
import { Error404 } from './Components/Error404/Error404';
import Formulario from './Components/RegisterFinal/Formulario';
import { Perfil } from "./Components/Perfil/Perfil";
import { Followers } from "./Components/Followers/Followers";
import { FriendsSuggests } from './Components/Followers/FriendsSuggst';


/* import { IngProject } from "./Components/Projects/IngProject/IngProject";
import { InmoProject } from "./Components/Projects/InmoProject/InmoProject";
import { TurisProject } from "./Components/Projects/TurisProject/TurisProject"; */

import AppPerfil from './Components/Perfil/AppPerfil';


const App = () => {

 
  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Formulario />} />
          <Route path="/postwall" element={<PostWall />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/profile" element={<AppPerfil />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/friendssuggests" element={<FriendsSuggests />} />
          <Route path="*" element={<Error404 />} />

        </Routes>

      </BrowserRouter>

    </>
  );
};

export default App;





