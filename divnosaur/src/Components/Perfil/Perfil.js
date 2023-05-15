import React from "react";
import "./Perfil.css";
import "./Modal.css";

import { Navbar2 } from '../Navbar/Navbar2/Navbar2';


export default function Perfil(props) {
    return (
        <div>
            <Navbar2></Navbar2>
            {/* <!-- <div class="photo-container"> --> */}
        <div class="photo-container" id="fotoCont">
            {/* <!-- <img src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-dinosaurio-traje-trabajando-computadora_49924-196.jpg?w=2000"
                class="perfil-img" id="dinoFoto" alt=""> --> */}
            <div>
                <a href="" class="a-perfil" id="enlaceFoto">Editar foto de perfil </a>
            </div>
            <div id="foto"></div>

            {/* <!-------------------MODAL que muestra el CV al pulsar el botón "VER CV"---------------------------------------------------------> */}
            <div class="section full-height" id="modal-section">
                <input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
                <label for="modal-btn">VER CV<i class="uil uil-expand-arrows"></i></label>
                <div class="modal">
                    <div class="modal-wrap">
                        <div class="cv-main">
                            <div class="container cabecera" id="cv-container">
                                <div class="row cv-row">
                                    <div class="col-12 tecler-cv">
                                        <img src="https://img.freepik.com/fotos-premium/diversion-trex-ilustracion-3d_183364-111286.jpg"
                                            class="fotoTecler" alt="fotoTecler"/>
                                        <div class="divCabecera">
                                            <h1 id="h1-cabecera">Tiranius <br/> Rexis</h1>
                                            <p id="p-cabecera">FULLSTACK DEVELOPER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container" id="cv-container">
                                <div class="row cv-row">
                                    <div class="col-4 par">
                                        <h4 class="cv-h4"><u>CONT</u>ACTO</h4>
                                        <div class="cv-contacto">
                                            <img src="https://w7.pngwing.com/pngs/581/810/png-transparent-graphy-a-large-collection-of-small-telephone-icon-photography-logo-black.png"
                                                class="cv-icono" alt="phone"/>
                                            <p>(+34) 666777888</p>
                                        </div>
                                        <div class="cv-contacto">
                                            <img src="https://w7.pngwing.com/pngs/333/868/png-transparent-mail-computer-icons-email-graphy-e-mail-miscellaneous-angle-rectangle-thumbnail.png"
                                                class="cv-icono" alt="mail"/>
                                            <p>tiranius@gmail.com</p>
                                        </div>
                                        <div class="cv-contacto">
                                            <img src="https://w7.pngwing.com/pngs/555/1002/png-transparent-computer-icons-linkedin-resume-curriculum-vitae-social-media-social-media-template-text-rectangle.png"
                                                class="cv-icono" alt="linkedin"/>
                                            <p>tiraniusrex</p>
                                        </div>
                                        <div class="cv-contacto">
                                            <img src="https://img2.freepng.es/20180716/tza/kisspng-github-computer-icons-clip-art-gits-5b4d20ab1f4131.145288281531781291128.jpg"
                                                class="cv-icono" alt="github"/>
                                            <p>rextex</p>
                                        </div>
                                    </div>
                                    <div class="col-8 impar">
                                        <h4 class="cv-h4"><u>ACER</u>CA DE MI</h4>
                                        <p>Soy Ingeniero Informático desde hace 6 años. He trabajado en
                                            diferentes campos, como desarrollo web, analítica digital, ciencia
                                            de datos... Me gusta trabajar en ambientes que supongan un desafío
                                            intelectual, no tengo miedo a los retos y me adapto bien a los
                                            cambios y a las situaciones nuevas.
                                        </p>
                                    </div>
                                </div>
                                <div class="row cv-row">
                                    <div class="col-4 par">
                                        <h4 class="cv-h4"><u>HABI</u>LIDADES</h4>
                                        <ul>
                                            <li>Liderazgo</li>
                                            <li>Comunicación asertiva</li>
                                            <li>Resolución de problemas</li>
                                            <li>Elaboración de informes</li>
                                            <li>Trabajo en equipo</li>
                                        </ul>
                                    </div>
                                    <div class="col-8 impar">
                                        <h4 class="cv-h4"><u>EXPE</u>RIENCIA LABORAL</h4>
                                        <ul>
                                            <li>
                                                <p><strong>Front-end Developer</strong></p>
                                                <p>RURTU S.A. - 2016-2017</p>
                                            </li>
                                            <li>
                                                <p><strong>Fullstack Developer</strong></p>
                                                <p>TRIADADEV - 2017-2019</p>
                                            </li>
                                            <li>
                                                <p><strong>Data Analyst</strong></p>
                                                <p>Aliada Consultores - 2019-2021</p>
                                            </li>
                                            <li>
                                                <p><strong>Data Scientist</strong></p>
                                                <p>TRIUM SOFT - 2021-2023</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row cv-row">
                                    <div class="col-4 par">
                                        <h4 class="cv-h4"><u>EDUC</u>ACIÓN</h4>
                                        <ul>
                                            <li>
                                                <p><strong>Ingeniería en Informática</strong><br/>Universidad de
                                                    Oviedo<br/>2012-2016</p>
                                            </li>
                                            <li>
                                                <p><strong>Bootcamp de Programación</strong><br/>Tecla Coding
                                                    Academy<br/>2018-2019</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-8 impar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-------------------PERFIL de Usuario-------------------------------------------------------------------------------------------> */}
        <div class="container  mothership">
            <h1 class="tecler-perfil">Perfil de usuario</h1>
            <div class="row perfil-row">
                <div class="col-5 exception colum-dat-usu">
                    <div class="name-usu">
                        <i class="bi bi-person-fill bs-icon"></i>
                        {/* <!-- <p id="profileName" class="p-perfil">Tiranius Rexis</p> --> */}
                        <p id="profileName" class="p-perfil"></p> 
                        {/* <!-- <textarea id="profileName" class="p-perfil"></textarea> //KAREN 1.2// --> */}
                    </div>
                </div>
                <div class="col-2 col-central">
                </div>
                <div class="col-5 exception">
                    <a href="" id="nameChange" class="a-perfil">Editar Nombre de Usuario</a>
                    <div id="profileInput" class="d-none" type="text"></div>
                </div>
            </div>
            <div class="row perfil-row">
                <div class="col-5 colum-dat-usu">
                    <i class="bi bi-geo-alt-fill bs-icon"></i>
                    {/* <!-- <p id="profileLocal" class="p-perfil">Gijón (Asturias)</p> --> */}
                    <p id="locationUser" class="p-perfil"></p>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <a href="" class="a-perfil">Editar localización</a>
                </div>
            </div>
            <div class="row perfil-row">
                <div class="col-5 colum-dat-usu">
                    <i class="bi bi-calendar bs-icon"></i>
                    <p id="profileBirth" class="p-perfil"></p>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <a href="" class="a-perfil">Editar fecha de nacimiento</a>
                </div>
            </div>
            <div class="row perfil-row">
                <div class="col-5 colum-dat-usu">
                    <i class="bi bi-book-fill bs-icon"></i>
                    <p id="profileStudy" class="p-perfil">Ingeniería Informática
                    </p>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <a href="" class="a-perfil">Editar estudios </a>
                </div>
            </div>
            <div class="row perfil-row">
                <div class="col-5 colum-dat-usu">
                    <i class="bi bi-translate bs-icon"></i>
                    <p id="profileLang" class="p-perfil">B1 Inglés</p>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <a href="" class="a-perfil">Editar idiomas</a>
                </div>
            </div>
            <div class="row perfil-row">
                <div class="col-5 colum-dat-usu">
                    <i class="bi bi-linkedin bs-icon"></i>
                    {/* <!-- <p id="profileLinkedin" class="p-perfil">/in/tiraniusrex</p> --> */}
                    <p id="mailUser" class="p-perfil"></p>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <a href="" class="a-perfil">Editar perfil Linkedin</a>
                </div>
            </div>
            <div class="row perfil-row">
                <div class="col-5 colum-dat-usu">
                    <i class="bi bi-bicycle bs-icon"></i>
                    <p id="profileHobbies" class="p-perfil">Patinaje,fotografía</p>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <a href="" class="a-perfil">Editar hobbies</a>
                </div>
            </div>
        </div>
        </div>
        

    );
}

