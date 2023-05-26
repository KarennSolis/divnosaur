
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from "./Components/Login/Login";
import { PostWall } from "./Components/PostWall/PostWall";
import { Register } from "./Components/Register/Register";
import Formulario from './Components/RegisterFinal/Formulario';
import { Perfil } from "./Components/Perfil/Perfil";
import { Followers } from "./Components/Followers/Followers";
/* import { IngProject } from "./Components/Projects/IngProject/IngProject";
import { InmoProject } from "./Components/Projects/InmoProject/InmoProject";
import { TurisProject } from "./Components/Projects/TurisProject/TurisProject"; */


const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postwall" element={<PostWall />} />
        <Route path="/register" element={<Formulario />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/followers" element={<Followers />} />
        
      </Routes>
    </>
  );
};

export default App;





