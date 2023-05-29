import { useState, useRef } from 'react';
import { Navbar1 } from '../Navbar/Navbar1/Navbar1';
import { useNavigate, Link } from 'react-router-dom';
/* import jwt from 'jsonwebtoken'; */
import "./Login.css";

/* const jwt = require('jsonwebtoken'); */


export function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        warnings: '',
        parrafo: '',
        email: '',
        password: '',
        entrar: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, warnings } = formData;

        setFormData(prevData => {
            return { ...prevData, parrafo: '', entrar: false };
        });


        const expRegEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        let entrar = false;

        if (!expRegEmail.test(email)) {
            setFormData(prevData => ({
                ...prevData,
                warnings: 'El correo no es valido.',
            }));
            entrar = true;
        }

        if (password.length < 8) {
            setFormData(prevData => ({
                ...prevData,
                warnings: prevData.warnings + ' La contraseña no es valida.',
            }));
            entrar = true;
        }

        if (entrar) {
            setFormData(prevData => ({ ...prevData, parrafo: warnings }));
        } else {
            try {
                const response = await fetch('http://localhost:3001/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                const data = await response.json();
                const { result, message } = data;

                if (!result) {
                    alert(message);
                } else {
                    const userId = result['user_id'];
                    /* const token = jwt.sign({ user_id: userId }, 'your-secret-key'); */
                    /* localStorage.setItem('idLogged', result['user_id']); */
                    localStorage.setItem('idLogged', userId);
                    /* localStorage.setItem('token', token); */
                    emailRef.current.value = '';
                    passwordRef.current.value = '';
                    navigate('/postwall');
                    setFormData((prevData) => ({
                        ...prevData,
                        parrafo: 'Usuario logueado con éxito',
                    }));
                    alert(message);
                }
            } catch (error) {
                console.error('Error al enviar la solicitud: ', error);
            }
        }

        emailRef.current.value = '';
        passwordRef.current.value = '';

    };


    /* -------------generar el token------------------------------ */
/* 
    function generateToken(payload, secretKey, expiresIn) {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, secretKey, { expiresIn }, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    } */


    /* ------------------verificar el token------------------- */

    /* function verifyToken(token, secretKey) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secretKey, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });
    } */


    // Generar un token

    /* const userId = localStorage.getItem('idLogged');
    const payload = { userId: userId };

    const secretKey = 'your-secret-key';
    const expiresIn = '300s';

    generateToken(payload, secretKey, expiresIn)
        .then(token => {
            console.log('Token generado:', token);
            localStorage.setItem('token', token);
        })
        .catch(err => {
            console.error('Error al generar el token:', err);
        }); */

    // Verificar un token
   /*  const token = localStorage.getItem('token');

    if (token) {
        verifyToken(token, secretKey)
            .then(decoded => {
                console.log('Datos decodificados:', decoded);
            })
            .catch(err => {
                console.error('Error al verificar el token:', err);
            });
    } else {
        console.warn('No hay token almacenado en el localStorage.');
    }
     */










    return (
        <>
            <Navbar1></Navbar1>

            <div id="section-start">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1632594737623-bea601083890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div id="" className="col-7">
                            <h1>Mensaje de bienvenida</h1>
                            <form onSubmit={handleSubmit} id="form" className="loginForm" >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' ref={emailRef} placeholder="Enter email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' ref={passwordRef} placeholder="Password" value={formData.password} onChange={handleChange} />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Recordarme más tarde</label>
                                </div>
                                <div className="col-lg-10">
                                    <a href="#">¿Has olvidado la contraseña?</a>
                                </div>
                                <div id="buttonSession">
                                    <button type="submit" className="btn btn-primary butSession" >Iniciar sesión</button>
                                    <p id="warnings" className="warnings">{formData.warnings}</p>
                                    <p id="warnings" className="warnings">{formData.parrafo}</p>
                                    {/* <p id="warnings" className="warnings"></p> */}
                                    {/* {warnings && <p id="warnings">{warnings}</p>}
                                    {parrafo && <p id="warnings">{parrafo}</p>} */}
                                    {/* <!-- <a href="./inicio.html"><button type="" className="btn btn-primary butSession">Entra a Divnosaur</button></a> --> */}
                                    {/* <!-- <a href="./registro.html"><button className="btn-inicio btn btn-outline-primary">Unirse ahora</button></a> --> */}

                                </div>
                            </form>

                            <div className="divider"></div>
                            {/* <div>
                                <div className="col-12 d-inline "> */}
                            {/* <!-- <a className="d-inline" href=""><button className="btn btn-outline-info d-inline"id="buttonDiv"><h4><img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt=""> Iniciar sesión con google</h4></button></a> */}
                            {/* </div>  */}
                            {/* <div id="butGoogle" className="butGoogle"></div> */}
                            <div className="col-12" id="homeRegBot">
                                <Link to="register"><a href="./registro.html"><button className="btn btn-outline-info" id="regBot"><h4>Regístrate ahora</h4></button></a></Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="footer-start">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <ul className="d-flex justify-content-between">
                                    <li><img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/1903/1903496.png" alt="" /></li>
                                    <li><a href=""> <h5>Acerca de</h5></a></li>
                                    <li><a href=""> <h5>Accesibilidad</h5></a></li>
                                    <li><a href=""> <h5>Condiciones de uso</h5></a></li>
                                    <li><a href=""> <h5>Política de privacidad</h5></a></li>
                                    <li><a href=""> <h5>Política de cookies</h5></a></li>
                                    <li><a href=""> <h5>Política de copyright</h5></a></li>
                                    <li><a href=""> <h5>Política de marca</h5></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="g_id_onload"
                    data-client_id="950930800316-89b2reruqh07kqvv975hjabjmaq0egrt.apps.googleusercontent.com"
                    data-auto_select="true"
                    data-login_uri="http://127.0.0.1:5500/team-8/index.html">
                </div>

            </div>

        </>

    );
}




