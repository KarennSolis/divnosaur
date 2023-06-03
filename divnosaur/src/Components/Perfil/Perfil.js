import React from "react";
import "./Perfil.css";
import "./Modal.css";
import "./Cv.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changefields, updateAge, updateCountry, updateEmail, updateExperience, updateHobbies, updateName } from "../../redux/userSlice";
import { useState } from "react";
import validator from "validator";

export function Perfil() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    // const { name, email, age, experience, country, hobbies} = useSelector((state) => state.user);

    // const handleChange = (event) => {
    //     // event.preventDefault()
    //     const {name, value}= event.target

    //     // const fieldName = event.target.name; // Obtener el nombre del campo actualizado

    //     // const fieldValue = event.target.value; // Obtener el valor del campo actualizado
    //     dispatch(changefields({ field:name,value })); // Despachar la acción correspondiente para actualizar el campo
    // }
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
        // if (name === "email") {
        //     if (!value) {
        //         // Mostrar mensaje de error si el campo está vacío
        //         alert("El correo electrónico es requerido");
        //         return;
        //     }

        //     if (!validator.isEmail(value)) {
        //         // Mostrar mensaje de error si el correo electrónico no cumple el formato esperado
        //         alert("El correo electrónico no es válido");
        //         return;
        //     }
        // }
        // if (name === "name") {
        //     if (value.length < 8) {
        //         // Mostrar mensaje de error
        //         alert("El campo de nombre debe tener mínimo 8 caracteres");
        //         return;
        //     }
        //     if (value.length > 50) {
        //         // Mostrar mensaje de error
        //         console.log("El campo de nombre debe tener máximo 50 caracteres");
        //         return;
        //     }
        // }

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
                setErrorMessageEmail("")
            };
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
                setErrorMessage("")
            };
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
    // const [isEditingEmail, setIsEditingEmail] = useState(false);

    const [editingEmail, setEditingEmail] = useState(false);
    const [newUser, setNewUser] = useState({ ...user })
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

        const { name, value } = e.target
        setNewUser({ ...newUser, [name]: value })
    }

    async function setNewDataUser() {
        const idLogged = localStorage.getItem('idLogged');
        const response = await fetch(`http://localhost:3001/profile/${idLogged}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        const result = response.json()
        if (result.error) {
            console.log(result.error)
        } else {
            console.log("success");
            setSuccessMessage("Sus cambios se han guardado con éxito");
            resetFields();
        }



    }


    return (
        <div>
            <Navbar2></Navbar2>

            {/* <!-------------------PERFIL de Usuario-------------------------------------------------------------------------------------------> */}
            <div className="container mothership-b">
                <h1 className="tecler-perfil-b" id="perfilDeUsuario">Perfil de usuario</h1>

                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-geo-alt-fill bs-icon-b"></i>
                        {/* <!-- <p id="profileLocal" className="p-perfil">Gijón (Asturias)</p> --> */}

                        {isEditingCountry ? (
                            <textarea
                                id="locationUser"
                                className="p-perfil-b"
                                value={user.country}
                                name="country"
                                onChange={handleChange}
                            />
                        ) : (
                            <p id="locationUser" className="p-perfil-b">{user.country}</p>
                        )}
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        {/* <a href="" className="a-perfil-b" type="country" value={user.country} onSubmit={handleChange}>Editar localización</a> */}
                        <button
                            className="a-perfil-b btn btn-inicio btn btn-outline-primary"
                            onClick={handleCountryEdit}
                        >
                            Editar localización
                        </button>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-calendar bs-icon-b"></i>
                        {/* <p id="profileBirth" className="p-perfil-b">{user.age}</p> */}
                        {isEditingAge ? (
                            <textarea
                                id="profileBirth"
                                className="p-perfil-b"
                                value={user.age}
                                name="age"
                                onChange={handleChange}
                            />
                        ) : (
                            <p id="profileBirth" className="p-perfil-b">{user.age}</p>
                        )}
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        {/* <a href="" className="a-perfil-b" type="age" value={user.age} onSubmit={handleChange}>Editar edad</a> */}
                        <button
                            className="a-perfil-b btn btn-inicio btn btn-outline-primary"
                            onClick={handleAgeEdit}
                        >
                            Editar edad
                        </button>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-book-fill bs-icon-b"></i>
                        {/* <p id="profileStudy" className="p-perfil-b">{user.experience}</p> */}
                        {isEditingExperience ? (
                            <textarea
                                id="profileStudy"
                                className="p-perfil-b"
                                value={user.experience}
                                name="experience"
                                onChange={handleChange}
                            />
                        ) : (
                            <p id="profileStudy" className="p-perfil-b">{user.experience}</p>
                        )}
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        {/* <a href="" className="a-perfil-b" type="experience" value={user.experience} onSubmit={handleChange}>Editar experiencia </a> */}
                        <button
                            className="a-perfil-b btn btn-inicio btn btn-outline-primary"
                            onClick={handleExperienceEdit}
                        >
                            Editar experiencia
                        </button>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-translate bs-icon-b"></i>
                        {/* <p id="profileLang" className="p-perfil-b">B1 Inglés</p> */}
                        {isEditingName ? (
                            <textarea
                                id="profileName"
                                className="p-perfil-b"
                                value={user.name}
                                name="name"
                                onChange={handleChange}
                                required
                                minLength={8}
                                maxLength={50}

                            />
                        ) : (
                            <p id="profileName" className="p-perfil-b">{user.name}</p>
                        )}
                        {errorMessage && <p className="warnings-z" >{errorMessage}</p>}
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        {/* <a href="" className="a-perfil-b">Editar idiomas</a> */}
                        <button
                            className="btn-inicio btn btn-inicio btn btn-outline-primary"
                            onClick={handleNameEdit}
                        >
                            Editar Nombre de Usuario
                        </button>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-bicycle bs-icon-b"></i>
                        {/* <p id="profileHobbies" className="p-perfil-b">{user.hobbies}</p> */}
                        {isEditingHobbies ? (
                            <textarea
                                id="profileHobbies"
                                className="p-perfil-b"
                                value={user.hobbies}
                                name="hobbies"
                                onChange={handleChange}
                            />
                        ) : (
                            <p id="profileHobbies" className="p-perfil-b">{user.hobbies}</p>
                        )}
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        {/* <a href="" className="a-perfil-b" type="hobbies" value={user.hobbies} onSubmit={handleChange}>Editar hobbies</a> */}
                        <button
                            className="a-perfil-b btn btn-inicio btn btn-outline-primary"
                            onClick={handleHobbiesEdit}
                        >
                            Editar hobbies
                        </button>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-linkedin bs-icon-b"></i>
                        {/* <!-- <p id="profileLinkedin" className="p-perfil">/in/tiraniusrex</p> --> */}
                        {/* <p id="mailUser" className="p-perfil-b">{user.email}</p> */}
                        {editingEmail ? (
                            <textarea
                                id="mailUser"
                                className="p-perfil-b"
                                value={user.email}
                                name="email"
                                onChange={handleChange}
                            ></textarea>
                        ) : (
                            <p id="mailUser" className="p-perfil-b">
                                {user.email}
                            </p>
                        )}
                        {errorMessageEmail && <p className="warnings-z">{errorMessageEmail}</p>}
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        {/* <a href="" className="a-perfil-b" type="email" value={user.email} onSubmit={handleChange}>Editar correo</a> */}
                        {/* <button href="" className="a-perfil-b btn" type="email" value={user.email} onSubmit={handleChange}>Editar correo</button> */}
                        <button
                            className="a-perfil-b btn btn-inicio btn btn-outline-primary"
                            onClick={() => setEditingEmail(true)}
                        >
                            Editar correo
                        </button>
                    </div>




                </div>
                <button className="a-perfil-b btn btn-outline-info" id="guardar-Cancelar-Cambios" onClick={setNewDataUser} disabled={errorMessage || errorMessageEmail}>Guardar cambios</button>
                {successMessage && <p className="warningMensaje">{successMessage}</p>}

                <button onClick={handleCancel} className="a-perfil-b btn cancelar-Cambios" id="rech-button" >Cancelar cambios</button>

            </div>
        </div>


    );
}

