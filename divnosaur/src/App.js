
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from "./Components/Login/Login";
import { PostWall } from "./Components/PostWall/PostWall";
import { Error404 } from './Components/Error404/Error404';
// import { Register } from "./Components/Register/Register";
import Formulario from './Components/RegisterFinal/Formulario';
import { Perfil } from "./Components/Perfil/Perfil";
import { Followers } from "./Components/Followers/Followers";
/* import { IngProject } from "./Components/Projects/IngProject/IngProject";
import { InmoProject } from "./Components/Projects/InmoProject/InmoProject";
import { TurisProject } from "./Components/Projects/TurisProject/TurisProject"; */
/* import { Provider } from 'react-redux';
import { store } from "./redux/store"; */
import AppPerfil from './Components/Perfil/AppPerfil';


const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        {/* <AppPerfil /> */}
        <Routes>

          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postwall" element={<PostWall />} />
          <Route path="/register" element={<Formulario />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/profile" element={<AppPerfil />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="*" element = {<Error404/>}/>
        </Routes>
        </BrowserRouter>
      {/* </Provider> */}
    </>
  );
};

export default App;





