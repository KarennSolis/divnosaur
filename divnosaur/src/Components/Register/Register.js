import React from "react";
import "./Register.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from "react-router-dom";



export function Register(props) {
    return (
        <div>
            <Navbar2 />
            <div id="login" class="container-fluid">
                <div class="row">
                    <h1 class="text-center">Registrate, es muy fácil</h1>
                    <div class="contenedor-Login text-center">
                        {/* <h2 class="tituloLogin text-center">Login</h2> */}
                        <div class="contenedor-Form" id="contenedorForm">
                            <form class="form-horizontal" action="/register" method="post" id="form" >
                                <ul id="ul">
                                    <li>
                                        <label for="User" class="visually-hidden"></label>
                                        <input class="form-control" type="text" placeholder="Nombre" id="user" />
                                    </li>
                                    <li>
                                        <label for="Correo" class="visually-hidden"></label>
                                        <input type="text" placeholder="Correo" class="form-control" id="Correo" />
                                    </li>
                                    <li>
                                        {/* <!-- cajita para escribir --> */}
                                        <label for="" class="visually-hidden"></label>
                                        {/* <!-- cajita para poner contraseña oculta --> */}
                                        <input type="password" name="Contraseña" id="Contrasena" placeholder="Password" class="form-control" />
                                    </li>
                                    <li>
                                        <label for="Edad" class="visually-hidden"></label>
                                        <input type="text" placeholder="Edad" class="form-control" id="age" />
                                    </li>
                                    <li>
                                        <label for="Telefono" class="visually-hidden"></label>
                                        <input type="text" placeholder="Telefono" class="form-control" id="phone" />
                                    </li>
                                    <li>
                                        <label for="exampleDataList" class="form-label">Lugar de residencia</label>
                                        <input class="form-control" list="datalistOptions" id="town"
                                            placeholder="Ciudad" />
                                        <datalist id="datalistOptions">
                                            <option value="España" />
                                            <option value="México" />
                                            <option value="Argentina" />
                                        </datalist>
                                    </li>
                                    <li>
                                        <label for="País">Selecione su país de residencia:</label>
                                        <select name="pais" class="form-control" id="country">
                                            <option value="es" selected="selected"> España</option>
                                            <option value="mx"> México</option>
                                            <option value="co"> Colombia</option>
                                        </select>
                                    </li>
                                    <li>
                                        <label for="exampleFormControlTextareaHobbies">Hobbies</label>
                                        <textarea class="form-control" id="hobbies" rows="3"
                                            placeholder="Describa aqui sus hobbies" itemid="hobbies"></textarea>
                                    </li>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Experiencia laboral</label>
                                        <textarea class="form-control" id="experience" rows="3"
                                            placeholder="He trabajado en x empresa haciendo x labores en x año"></textarea>
                                    </div>
                                    <li>
                                        <label for="formFile" class="form-label">CV</label>
                                        <input class="form-control" type="file" id="formFile" />
                                    </li>
                                    <li>
                                        <label for="formFileimg" class="form-label">Imagen de perfil</label>
                                        <input class="form-control" type="file" id="formFileimg" />
                                    </li>
                                    <li>
                                        <a href=""><button type="submit" class="btn btn-primary" id="submit">Acceder</button></a>
                                        <a href=""><button type="reset" class="btn btn-primary">Borrar</button><br /></a>
                                        <p class="warnings" id="warnings"></p>
                                    </li>

                                </ul>
                            </form>

                        </div>

                    </div>

                </div>

            </div >
        </div >

    )
}

