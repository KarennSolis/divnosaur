
import './App.css';

import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { PostWall } from './Components/PostWall/PostWall';
import { Perfil } from './Components/Perfil/Perfil';
import { Followers } from './Components/Followers/Followers';
import { IngProject } from './Components/Projects/IngProject/IngProject';
import { InmoProject } from './Components/Projects/InmoProject/InmoProject';
import { TurisProject } from './Components/Projects/TurisProject/TurisProject';





function App() {
  return (

    <>
    <div className="App">

      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <PostWall></PostWall> */}
      {/* <Perfil></Perfil> */}
      {/* <Followers></Followers> */}
      {/* <IngProject></IngProject> */}
      {/* <InmoProject></InmoProject> */}
      <TurisProject></TurisProject>

    </div>
    </>
    
  )
}

export default App;
