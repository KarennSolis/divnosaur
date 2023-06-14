import React from "react";
import "./Perfil.css";
import "./Modal.css";
import "./Cv.css";
import { FollowerProfile } from "./FollowerProfile";
import { Navbar2 } from "../Navbar/Navbar2/Navbar2";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changefields,
  updateAge,
  updateCountry,
  updateEmail,
  updateExperience,
  updateHobbies,
  updateName,
} from "../../redux/userSlice";
import { useState, useEffect } from "react";
import validator from "validator";


export function Perfil(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const followerData = props.followerData;
  // console.log(`ESTE ES EL USUARIO DEL CUAL QUIERES VER SU PERFIL ${followerData.age}`)

  const [successMessage, setSuccessMessage] = useState("");
  const resetFields = () => {
    setIsEditingName(false);
    setIsEditingCountry(false);
    setIsEditingAge(false);
    setIsEditingExperience(false);
    setIsEditingHobbies(false);
    setEditingEmail(false);
    setErrorMessage("");
    setErrorMessageEmail("");
    setNewUser({ ...user });
  };

  const handleCancel = () => {
    window.location.reload(); // Recargar la página del perfil
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      if (!value) {
        // Mostrar mensaje de error si el campo está vacío
        setErrorMessageEmail("El correo electrónico es requerido");
        // return;
      }
      if (!validator.isEmail(value)) {
        // Mostrar mensaje de error si el correo electrónico no cumple el formato esperado
        setErrorMessageEmail("El correo electrónico no es válido");
        // return;
      } else {
        setErrorMessageEmail("");
      }
    }
    if (name === "name") {
      if (value.length < 8) {
        // Mostrar mensaje de error
        setErrorMessage("El campo de nombre debe tener mínimo 8 caracteres");
        // return;
      } else if (value.length > 50) {
        // Mostrar mensaje de error
        setErrorMessage("El campo de nombre debe tener máximo 50 caracteres");
        // return;
      } else {
        setErrorMessage("");
      }
    }
    switch (name) {
      case "name":
        dispatch(updateName(value));
        break;
      case "email":
        dispatch(updateEmail(value));
        break;
      case "age":
        dispatch(updateAge(value));
        break;
      case "experience":
        dispatch(updateExperience(value));
        break;
      case "hobbies":
        dispatch(updateHobbies(value));
        break;
      case "country":
        dispatch(updateCountry(value));
        break;
      default:
        break;
    }
  };

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingCountry, setIsEditingCountry] = useState(false);
  const [isEditingAge, setIsEditingAge] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isEditingHobbies, setIsEditingHobbies] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");

  const [editingEmail, setEditingEmail] = useState(false);
  const [newUser, setNewUser] = useState({ ...user });

  const handleNameEdit = () => {
    setIsEditingName(true);
  };

  const handleCountryEdit = () => {
    setIsEditingCountry(true);
  };

  const handleAgeEdit = () => {
    setIsEditingAge(true);
  };

  const handleExperienceEdit = () => {
    setIsEditingExperience(true);
  };

  const handleHobbiesEdit = () => {
    setIsEditingHobbies(true);
  };

  const setNewData = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  async function setNewDataUser() {
    // const idLogged = localStorage.getItem('idLogged');
    // const response = await fetch(`http://localhost:3001/profile/${idLogged}`, {
    const response = await fetch(`http://localhost:3001/profile`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = response.json();
    if (result.error) {
      console.log(result.error);
    } else {
      console.log("success");
      setSuccessMessage("Sus cambios se han guardado con éxito");
      resetFields();
    }
  }

  //recomendaciones//
  console.log("user:", user);
  console.log(user.user_id);
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [recomendacionActual, setRecomendacionActual] = useState(0);
  const handlePrevRecomendacion = () => {
    setRecomendacionActual((prevIndex) =>
      prevIndex === 0 ? recomendaciones.length - 1 : prevIndex - 1
    );
  };

  const handleNextRecomendacion = () => {
    setRecomendacionActual((prevIndex) =>
      prevIndex === recomendaciones.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [newRecomendacion, setNewRecomendacion] = useState(false);

  console.log(recomendaciones);
  const user_id = followerData ? followerData.user_id : user.user_id;

  useEffect(() => {
    const obtenerRecomendaciones = async () => {
      try {
        console.log("Nocheeeeeeeeeee" + user_id);
        console.log(user_id);

        const response = await fetch(
          `http://localhost:3001/profile/recomendaciones/${user_id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();
        if (response.ok) {
          setRecomendaciones(result); // Guarda las recomendaciones en el estado
        } else {
          console.log("Error al obtener las recomendaciones:", result.error);
        }
      } catch (error) {
        console.log("Error de red:", error);
      }
    };

    obtenerRecomendaciones();
  }, [user_id, newRecomendacion]); // Agrega user_id como dependencia

  //Subir recomendacion//
  // const [contenido, setContenido] = useState('');

  // const handleContenidoChange = (event) => {
  //     setContenido(event.target.value);
  //     console.log(contenido);
  // };
  // const handleSubmitContenido = async (event) => {
  //     event.preventDefault();

  //     try {
  //         const userRec_id = user.user_id;
  //         console.log(userRec_id);
  //         console.log(followerData.user_id);
  //         const response = await fetch("http://localhost:3001/profile/recomendaciones/new", {
  //             method: 'POST',
  //             headers: {
  //                 Authorization: `Bearer ${localStorage.getItem('Token')}`,
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({ contenido: contenido, usuario_emisor_ID: userRec_id, usuario_receptor_ID: followerData.user_id }),
  //         });

  //         const result = await response.json();
  //         console.log(result);
  //         setNewRecomendacion(true);
  //         setContenido("");
  //     } catch (error) {
  //         console.log('Error de red:', error);
  //     }
  // };

  if (followerData) {
    return (
      <div>
        <Navbar2></Navbar2>
        <div className="container "> </div>

        {/* <!-------------------PERFIL de FOLLOWER-------------------------------------------------------------------------------------------> */}
        <FollowerProfile
          followerData={followerData}
          recomendaciones={recomendaciones}
          setNewRecomendacion={setNewRecomendacion}
          next={handleNextRecomendacion}
          prev={handlePrevRecomendacion}
          recomendacionActual={recomendacionActual}
          user={user}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar2></Navbar2>
        <div className="container "> </div>

        {/* <!-------------------PERFIL de Usuario-------------------------------------------------------------------------------------------> */}
        <div className="container  mothership-b">
          <h1 className="tecler-perfil-b" id="perfilDeUsuario">
            Perfil de usuario
          </h1>
          <div className="card p-0 w-100 rounded-5 bg-primary-subtle border border-primary-subtle shadow">
            <div className="row perfil-row-b">
              <div className="col-5  colum-dat-usu">
                <i className="bi bi-geo-alt-fill bs-icon-b fs-4"></i>
                {/* <!-- <p id="profileLocal" className="p-perfil">Gijón (Asturias)</p> --> */}

                {isEditingCountry ? (
                  <textarea
                    id="locationUser"
                    className="p-perfil-b textareaPerfil"
                    value={user.country}
                    name="country"
                    onChange={handleChange}
                  />
                ) : (
                  <p id="locationUser" className="p-perfil-b">
                    {user.country}
                  </p>
                )}
              </div>
              <div className="col-2">
                <button
                  className="a-perfil-b btn btn-inicio btn btn-outline-primary shadow"
                  onClick={handleCountryEdit}
                >
                  Editar localización
                </button>
              </div>
              <div className="col-5">
                <h6
                  className=" rounded-1 d-flex justify-content-center mx-auto"
                  disabled
                >
                  Mis recomendaciones:
                </h6>
              </div>
            </div>
            <div className="row perfil-row-b">
              <div className="col-5 colum-dat-usu">
                <i className="bi bi-calendar bs-icon-b fs-4"></i>
                {isEditingAge ? (
                  <textarea
                    id="profileBirth"
                    className="p-perfil-b textareaPerfil"
                    value={user.age}
                    name="age"
                    onChange={handleChange}
                  />
                ) : (
                  <p id="profileBirth" className="p-perfil-b">
                    {user.age}
                  </p>
                )}
              </div>
              <div className="col-2">
                <button
                  className="a-perfil-b btn btn-inicio btn btn-outline-primary shadow"
                  onClick={handleAgeEdit}
                >
                  Editar edad
                </button>
              </div>

              {/* <div className="col-5">
                                {recomendaciones.map((recomendacion, index) => (
                                    <div className=" text-center border-primary rounded-5 shadow recoCard" key={recomendacion.recomendacion_id}style={{ display: index === recomendacionActual ? 'block' : 'none' }}>
                                        <p className="bi bi-person-heart fw-bold"> {recomendacion.name}</p>
                                        <p className="bi bi-chat-left-quote fst-italic"> {recomendacion.contenido}</p>
                                        <button className="btn btn-outline-primary bi bi-caret-left-square-fill" onClick={handlePrevRecomendacion}></button>
                                        <button className="btn btn-outline-primary ms-5 bi bi-caret-right-square-fill"onClick={handleNextRecomendacion}></button>
                                    </div>

                                ))}
                            </div> */}
              <div className="col-5">
                {recomendaciones.length === 0 ? (
                  <p className="bi bi-emoji-frown-fill fw-bold text-center">
                    Aún no tienes recomendaciones
                  </p>
                ) : (
                  recomendaciones.map((recomendacion, index) => (
                    <div
                      className="text-center border-primary rounded-5 shadow recoCard"
                      key={recomendacion.recomendacion_ID}
                      style={{
                        display:
                          index === recomendacionActual ? "block" : "none",
                      }}
                    >
                      <p className="bi bi-person-heart fw-bold">
                        {" "}
                        {recomendacion.name}
                      </p>
                      <p className="bi bi-chat-left-quote fst-italic">
                        {" "}
                        {recomendacion.contenido}
                      </p>
                      <button
                        className="btn btn-outline-primary bi bi-caret-left-square-fill"
                        onClick={handlePrevRecomendacion}
                      ></button>
                      <button
                        className="btn btn-outline-primary ms-5 bi bi-caret-right-square-fill"
                        onClick={handleNextRecomendacion}
                      ></button>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="row perfil-row-b">
              <div className="col-5 colum-dat-usu">
                <i className="bi bi-book-fill bs-icon-b fs-4"></i>
                {isEditingExperience ? (
                  <textarea
                    id="profileStudy"
                    className="p-perfil-b textareaPerfil"
                    value={user.experience}
                    name="experience"
                    onChange={handleChange}
                  />
                ) : (
                  <p id="profileStudy" className="p-perfil-b">
                    {user.experience}
                  </p>
                )}
              </div>
              <div className="col-2">
                <button
                  className="a-perfil-b btn btn-inicio btn btn-outline-primary shadow"
                  onClick={handleExperienceEdit}
                >
                  Editar experiencia
                </button>
              </div>
              <div className="col-5"></div>
            </div>
            <div className="row perfil-row-b">
              <div className="col-5 colum-dat-usu">
                <i className="bi bi-person bs-icon-b fs-4"></i>
                {isEditingName ? (
                  <textarea
                    id="profileName"
                    className="p-perfil-b textareaPerfil"
                    value={user.name}
                    name="name"
                    onChange={handleChange}
                    required
                    minLength={8}
                    maxLength={50}
                  />
                ) : (
                  <p id="profileName" className="p-perfil-b">
                    {user.name}
                  </p>
                )}
              </div>
              <div className="col-2">
                <button
                  className="btn-inicio btn btn-inicio btn btn-outline-primary shadow"
                  onClick={handleNameEdit}
                >
                  Editar nombre
                </button>
              </div>
              <div className="col-5"></div>
            </div>
            <div className="row perfil-row-b">
              <div className="col-5 colum-dat-usu">
                <i className="bi bi-bicycle bs-icon-b fs-3"></i>
                {isEditingHobbies ? (
                  <textarea
                    id="profileHobbies"
                    className="p-perfil-b textareaPerfil"
                    value={user.hobbies}
                    name="hobbies"
                    onChange={handleChange}
                  />
                ) : (
                  <p id="profileHobbies" className="p-perfil-b">
                    {user.hobbies}
                  </p>
                )}
              </div>
              <div className="col-2">
                <button
                  className="a-perfil-b btn btn-inicio btn btn-outline-primary shadow"
                  onClick={handleHobbiesEdit}
                >
                  Editar hobbies
                </button>
              </div>
              <div className="col-5"></div>
            </div>
            <div className="row perfil-row-b justify-content-between">
              <div className="col-5 colum-dat-usu">
                <i className="bi bi bi-envelope bs-icon-b fs-4"></i>
                {editingEmail ? (
                  <textarea
                    id="mailUser"
                    className="p-perfil-b textareaPerfil"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                  ></textarea>
                ) : (
                  <p id="mailUser" className="p-perfil-b">
                    {user.email}
                  </p>
                )}
              </div>
              <div className="col-2">
                <button
                  className="a-perfil-b btn btn-inicio btn btn-outline-primary shadow"
                  onClick={() => setEditingEmail(true)}
                >
                  Editar correo
                </button>
              </div>
              <div className="col-5"></div>
            </div>
          </div>
          <div className="row">
            {errorMessageEmail && (
              <h6 className="warningPerfil text-center mt-2">
                {errorMessageEmail}
              </h6>
            )}
            {errorMessage && (
              <h6 className="warningPerfil text-center mt-2">{errorMessage}</h6>
            )}
          </div>
          <button
            className="a-perfil-b btn btn-outline-info"
            id="guardar-Cancelar-Cambios"
            onClick={setNewDataUser}
            disabled={errorMessage || errorMessageEmail}
          >
            Guardar cambios
          </button>
          {successMessage && <p className="warningMensaje">{successMessage}</p>}
          <button
            onClick={handleCancel}
            className="a-perfil-b btn btn-outline-secondary cancelar-Cambios "
            id="boton-cancelar-cambios"
          >
            Cancelar cambios
          </button>
        </div>
      </div>
    );
  }
}
