/* import React from "react"; */
import React, { useState, useEffect, useRef } from 'react';
import "./PostWall.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from "react-router-dom";


export function PostWall(props) {


    return (

        <div>
            <Navbar2></Navbar2>

            {/* <!-- ------Ver Detalles de Proyectos------------------------------------  --> */}

            <div id="projectBox1" class="projBox divBox">
                <button class="closeBox" id="closeBox1"><img class="xClose"
                    src="data:image/png;base64,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"
                    alt="close" /></button>
                <p><u>Objetivo</u>: Desarollo de software para empresa de logística<br /><u>Puesto</u>: Desarrollador
                    Devops<br /><u>Inicio</u>: 13-06-2023<br /><u>Contacto</u><a href="">: alinkaasociados@gmail.com</a>
                </p>
                <div id="map" class="map"></div>
            </div>

            <div id="projectBox2" class="projBox divBox">
                <button class="closeBox" id="closeBox2"><img class="xClose"
                    src="data:image/png;base64,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"
                    alt="close" /></button>
                <p><u>Objetivo</u>: Desarrollo de página web empresa hotelera<br /><u>Puesto</u>: Fullstack
                    Developer<br /><u>Inicio</u>: 22-07-2023<br /><u>Contacto</u><a href="">: quintanocompany@gmail.com</a>
                </p>
                <div id="map" class="map"></div>
            </div>

            <div id="projectBox3" class="projBox divBox">
                <button class="closeBox" id="closeBox3"><img class="xClose"
                    src="data:image/png;base64,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"
                    alt="close" /></button>
                <p><u>Objetivo</u>: Implementación de app de aqruitectura<br /><u>Puesto</u>: Desarrollador Frontend
                    Junior<br /><u>Inicio</u>: 02-09-2023<br /><u>Contacto</u><a href="">: csugarconsultores@gmail.com</a>
                </p>
                <div id="map" class="map"></div>
            </div>


            <div id="sidebar" class="container-fluid">
                <div class="row">
                    <div class="col-3">
                        <div class="columnaA">
                            <div id="miusuario">

                                <h3 class="text-center">Puedes unirte a esto:</h3>
                                <div class="proyect_text">
                                    <img class=" fotoUsuario profile rounded-circle mx-auto d-block"
                                        src="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2019/02/globalizacion-600x400.jpg"
                                        alt="proyecto ingenieria" />
                                    <div>
                                        <p class="projTitle">Proyecto ingeniería</p>
                                        <button id="proIngen" class="detailBut">ver detalles</button>
                                        <Link to="ingproject"><button id="masIng" class="detailBut">más detalles</button></Link>
                                        {/* <!-- //boton agregado --> */}
                                    </div>
                                </div>
                                <div class="proyect_text">
                                    <img class=" fotoUsuario profile rounded-circle mx-auto d-block"
                                        src="https://www.fonvirtual.com/blog/wp-content/uploads/globalizacion-internet.jpg"
                                        alt="proyecto turismo" />
                                    <div>
                                        <p class="projTitle">Proyecto turismo</p>
                                        <button id="proTuris" class="detailBut">ver detalles</button>
                                        <Link to="turisproject"><button id="masTur" class="detailBut">más detalles</button></Link>
                                    </div>
                                </div>
                                <div class="proyect_text">
                                    <img class=" fotoUsuario profile rounded-circle mx-auto d-block"
                                        src="https://www.economiasimple.net/wp-content/uploads/2019/01/indicadores-de-la-globalizacion-economica.jpg"
                                        alt="proyecto inmobiliaria" />
                                    <div>
                                        <p class="projTitle">Proyecto inmobiliaria</p>
                                        <button id="proBuild" class="detailBut">ver detalles</button>
                                        <Link to="inmoproject"><button id="masInmo" class="detailBut">más detalles</button></Link>
                                    </div>
                                </div>

                            </div>
                            <div class="solicitud">
                                {/* <!--corrousel de ejemplo bootstrap, esta bien pero no se ven los iconos para mover de un sitio para otro--> */}

                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="columnaB">
                            <div class="muro1">
                                <div class="continer">
                                    <div class="row">
                                        <div class="col-2">
                                            <img class="friends rounded-circle mx-auto d-block comentaUsuario"
                                                src="https://www.soy502.com/sites/default/files/styles/full_node/public/2023/Feb/05/dinosaurios_profesiones_viral.png"
                                                alt="" />
                                        </div>
                                        <div class="col-10">
                                            <form action="/createPublications" method="post" id="publiForm">
                                                <textarea class="form-control" type="text" rows="3" name="saludo"
                                                    id="myPublications" placeholder="Hola, ¿qué tal ha ido tu día?"></textarea>
                                                <div id="buttonAndPubli">
                                                    <p id="parrafoPubli"></p>
                                                    <button id="publication" type="submit"
                                                        class="btn btn-primary float-right">Publicar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="space"></div>
                            </div>


                            <div id="publiContainer"></div>

                            <div class="muro2" id="muroPubli">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-2">
                                            {/* <!-- <img class="friends rounded-circle mx-auto d-block"
                                        src="https://pbs.twimg.com/media/FoP9W1BXkAAUC4o?format=jpg&name=small"
                                        class="comentaAmigo" alt=""> --> */}
                                        </div>

                                        <div class="col-10" id="commentFather">
                                            {/* <!-- <p class="comentAmigo alert alert-light">Qué bien lo pasamos en la parrillada el
                                        otro día, para cuando la próxima??</p> --> */}
                                            <div class="float-right" id="div">
                                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                    <div id="reactions" class="btn-group mr-2" role="group"
                                                        aria-label="First group">
                                                        <div id="likeAnch" class="butonDiv">
                                                            <div id="totalLikes" class="totalLikes"></div><button type="button"
                                                                id="likeButton" class="btn btn-primary likeButton"><img
                                                                    class="img-fluid"
                                                                    src="https://cdn-icons-png.flaticon.com/512/9970/9970200.png"
                                                                    alt="" /></button>
                                                        </div>
                                                        {/* <!-- <div><button type="button" class="btn btn-primary "><img
                                                            class="img-fluid"
                                                            src="https://cdn-icons-png.flaticon.com/512/9975/9975907.png"
                                                            alt=""></button></div> --> */}
                                                        <div><button type="button" id="commentButton"
                                                            class="btn btn-primary commentButton butonDiv"><img
                                                                class="img-fluid"
                                                                src="https://cdn-icons-png.flaticon.com/512/7198/7198933.png"
                                                                alt="" /></button></div>
                                                        {/* <!-- <a href=""><button type="button" class="btn btn-primary "><img
                                                            class="img-fluid"
                                                            src="https://cdn-icons-png.flaticon.com/512/1828/1828954.png"
                                                            alt=""></button></a> --> */}
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>


                    {/* <!-- /carrosel actual/ --> */}
                    <div class="col-3">
                        <div class="columnaA">
                            <div id="miusuario">
                                <ul>
                                    <li class="listaPerfil">
                                        <img id="divnosaurImg" class=" fotoUsuario profile rounded-circle mx-auto d-block"
                                            src="https://www.soy502.com/sites/default/files/styles/full_node/public/2023/Feb/05/dinosaurios_profesiones_viral.png"
                                            alt="usuario" />
                                        {/* <!-- <h3 class="text-center">Rodri Rex</h3> --> */}
                                        <h3 class="text-center" id="idNameMuro"></h3>
                                        <p class="text-center">developer in progress</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="solicitud">
                                {/* <!--corrousel de ejemplo bootstrap, esta bien pero no se ven los iconos para mover de un sitio para otro--> */}
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="profile rounded-circle mx-auto d-block d-block w-10 fotoSolicitud"
                                                src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/S5LQCBTWCJFDPBUKQAOR76IDW4.webp"
                                                alt="fotoSolicitud" />
                                            <p class="text-center d-block w-10">Consti Docus</p>
                                            <div class="d-flex justify-content-center aceptar-rechazar d-block w-10">
                                                <button class="btn btn-info d-block w-5" id="ace-button">Aceptar</button>
                                                <button class="btn btn-info d-block w-5" id="rech-button">Rechazar</button>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <img class="profile rounded-circle mx-auto d-block d-block w-10 fotoSolicitud"
                                                src="https://www.semana.com/resizer/qWFDUVTE6z9xLi4bBwv1pcDvG-U=/fit-in/768x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JWYU7BYMDNGKBMYPCOLVFUX4M4.png"
                                                alt="fotoSolicitud" />
                                            <p class="text-center d-block w-10">Drew Saurio </p>
                                            <div class="d-flex justify-content-center aceptar-rechazar d-block w-10">
                                                <button class="btn btn-info d-block w-5" id="ace-button">Aceptar</button>
                                                <button class="btn btn-info d-block w-5" id="rech-button">Rechazar</button>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <img class="profile rounded-circle mx-auto d-block d-block w-10 fotoSolicitud"
                                                src="https://eje360.co/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-9.28.29-AM.jpeg"
                                                alt="fotoSolicitud" />
                                            <p class="text-center d-block w-10">Rex Purple</p>
                                            <div class="d-flex justify-content-center aceptar-rechazar d-block w-10">
                                                <button class="btn btn-info d-block w-5" id="ace-button">Aceptar</button>
                                                <button class="btn btn-info d-block w-5" id="rech-button">Rechazar</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!--posible funcionalidad que visualice solo tres posibilidades de pestaña, más pestañas al futuro segun se vaya descartando o no--> */}

                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                                        data-slide="prev">
                                        <span class="carousel-control-prev-icon dark" aria-hidden="true"></span>
                                        <span class="sr-only">Anterior</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                                        data-slide="next">
                                        <span class="carousel-control-next-icon dark" aria-hidden="true"></span>
                                        <span class="sr-only">Siguiente</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-3"></div>
                    <div id="footer" class="col-6">
                        <div class="conectados">
                            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/S5LQCBTWCJFDPBUKQAOR76IDW4.webp"
                                class="dinosConct" alt="dino" />
                            <img src="https://www.semana.com/resizer/qWFDUVTE6z9xLi4bBwv1pcDvG-U=/fit-in/768x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JWYU7BYMDNGKBMYPCOLVFUX4M4.png"
                                class="dinosConct" alt="dino" />
                            <img src="https://www.soy502.com/sites/default/files/styles/full_node/public/2023/Feb/05/dinosaurios_profesiones_viral.png"
                                class="dinosConct" alt="dino" />
                            <img src="https://eje360.co/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-9.28.29-AM.jpeg"
                                class="dinosConct" alt="dino" />
                            <img src="http://elvigilanteweb.com/wp-content/uploads/2023/02/Dinoprofesiones.jpg"
                                class="dinosConct " alt="dino" />
                            <img src="https://cdn-icons-png.flaticon.com/512/40/40358.png" class="signoMas" alt="mas" />
                        </div>
                    </div>
                    <div class="col-3"></div>

                </div>

            </div>
            {/* <!--JS de bootstrap 5.0--> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                crossorigin="anonymous"></script>

            {/* <!-- ----API DE GOOGLE MAPS------------------------------------------------ --> */}
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap"></script>

            <script src="index.js"></script>
            <script src="inicio.js"></script>

        </div>

    );
}

