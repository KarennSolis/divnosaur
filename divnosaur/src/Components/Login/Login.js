import React from "react";
import "./Login.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';


export function Login(props) {
    return (

        <div>
            <Navbar2></Navbar2>
            <div id="section-start">
                <div class="container">
                    <div class="row">
                        <div class="col-5">
                            <img class="img-fluid" src="https://images.unsplash.com/photo-1632594737623-bea601083890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                        </div>
                        <div id="" class="col-7">
                            <h1>Mensaje de bienvenida</h1>
                            <form action="/login" method="post" id="form">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Contraseña</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">Recordarme más tarde</label>
                                </div>
                                <div class="col-lg-10">
                                    <a href="#">¿Has olvidado la contraseña?</a>
                                </div>
                                <div id="buttonSession">
                                    <button type="submit" class="btn btn-primary butSession" >Iniciar sesión</button>
                                    <p id="warnings" class="warnings"></p>
                                    {/* <!-- <a href="./inicio.html"><button type="" class="btn btn-primary butSession">Entra a Divnosaur</button></a> --> */}
                                    {/* <!-- <a href="./registro.html"><button class="btn-inicio btn btn-outline-primary">Unirse ahora</button></a> --> */}

                                </div>
                            </form>
                            <div class="divider"></div>
                            <div>
                                <div class="col-12 d-inline ">
                                    {/* <!-- <a class="d-inline" href=""><button class="btn btn-outline-info d-inline"id="buttonDiv"><h4><img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt=""> Iniciar sesión con google</h4></button></a> */}
                                </div>
                                <div id="butGoogle" class="butGoogle"></div>
                                <div class="col-12" id="homeRegBot">
                                    <a href="./registro.html"><button class="btn btn-outline-info" id="regBot"><h4>Regístrate ahora</h4></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer-start">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-sm-12">
                            <ul class="d-flex justify-content-between">
                                <li><img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/1903/1903496.png" alt=""/></li>
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

    );
}

