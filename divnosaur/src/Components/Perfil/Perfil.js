import React from "react";
import "./Perfil.css";
import "./Modal.css";
import "./Cv.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changefields } from "../../redux/userSlice";


export function Perfil(props) {
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.user)
    const handleChange = (e) => {
        dispatch(changefields(e.target.value));
    }
    return (
        <div>
            <Navbar2></Navbar2>
            {/* <button className="btn-warning btn">
                Prueba
            </button> */}
            {/* <!-- <div className="photo-container"> --> */}
            <div className="photo-container-b" id="fotoCont">
                {/* <!-- <img src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-dinosaurio-traje-trabajando-computadora_49924-196.jpg?w=2000"
                className="perfil-img" id="dinoFoto" alt=""> --> */}
                <div>
                    <a href="" className="a-perfil-b" id="enlaceFoto">Editar foto de perfil </a>
                </div>
                <div id="foto-b"></div>

                {/* <!-------------------MODAL que muestra el CV al pulsar el botón "VER CV"---------------------------------------------------------> */}
                <div className="section full-height" id="modal-section">
                    <input className="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
                    <label for="modal-btn">VER CV<i className="uil uil-expand-arrows"></i></label>
                    <div className="modal">
                        <div className="modal-wrap">
                            <div className="cv-main">
                                <div className="container cabecera" id="cv-container">
                                    <div className="row cv-row">
                                        <div className="col-12 tecler-cv">
                                            <img src="https://img.freepik.com/fotos-premium/diversion-trex-ilustracion-3d_183364-111286.jpg"
                                                className="fotoTecler" alt="fotoTecler" />
                                            <div className="divCabecera">
                                                <h1 id="h1-cabecera">Tiranius <br /> Rexis</h1>
                                                <p id="p-cabecera">FULLSTACK DEVELOPER</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container" id="cv-container">
                                    <div className="row cv-row">
                                        <div className="col-4 par">
                                            <h4 className="cv-h4"><u>CONT</u>ACTO</h4>
                                            <div className="cv-contacto">
                                                <img src="https://w7.pngwing.com/pngs/581/810/png-transparent-graphy-a-large-collection-of-small-telephone-icon-photography-logo-black.png"
                                                    className="cv-icono" alt="phone" />
                                                <p>(+34) 666777888</p>
                                            </div>
                                            <div className="cv-contacto">
                                                <img src="https://w7.pngwing.com/pngs/333/868/png-transparent-mail-computer-icons-email-graphy-e-mail-miscellaneous-angle-rectangle-thumbnail.png"
                                                    className="cv-icono" alt="mail" />
                                                <p>tiranius@gmail.com</p>
                                            </div>
                                            <div className="cv-contacto">
                                                <img src="https://w7.pngwing.com/pngs/555/1002/png-transparent-computer-icons-linkedin-resume-curriculum-vitae-social-media-social-media-template-text-rectangle.png"
                                                    className="cv-icono" alt="linkedin" />
                                                <p>tiraniusrex</p>
                                            </div>
                                            <div className="cv-contacto">
                                                <img src="https://img2.freepng.es/20180716/tza/kisspng-github-computer-icons-clip-art-gits-5b4d20ab1f4131.145288281531781291128.jpg"
                                                    className="cv-icono" alt="github" />
                                                <p>rextex</p>
                                            </div>
                                        </div>
                                        <div className="col-8 impar">
                                            <h4 className="cv-h4"><u>ACER</u>CA DE MI</h4>
                                            <p>Soy Ingeniero Informático desde hace 6 años. He trabajado en
                                                diferentes campos, como desarrollo web, analítica digital, ciencia
                                                de datos... Me gusta trabajar en ambientes que supongan un desafío
                                                intelectual, no tengo miedo a los retos y me adapto bien a los
                                                cambios y a las situaciones nuevas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row cv-row">
                                        <div className="col-4 par">
                                            <h4 className="cv-h4"><u>HABI</u>LIDADES</h4>
                                            <ul>
                                                <li>Liderazgo</li>
                                                <li>Comunicación asertiva</li>
                                                <li>Resolución de problemas</li>
                                                <li>Elaboración de informes</li>
                                                <li>Trabajo en equipo</li>
                                            </ul>
                                        </div>
                                        <div className="col-8 impar">
                                            <h4 className="cv-h4"><u>EXPE</u>RIENCIA LABORAL</h4>
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
                                    <div className="row cv-row">
                                        <div className="col-4 par">
                                            <h4 className="cv-h4"><u>EDUC</u>ACIÓN</h4>
                                            <ul>
                                                <li>
                                                    <p><strong>Ingeniería en Informática</strong><br />Universidad de
                                                        Oviedo<br />2012-2016</p>
                                                </li>
                                                <li>
                                                    <p><strong>Bootcamp de Programación</strong><br />Tecla Coding
                                                        Academy<br />2018-2019</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-8 impar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-------------------PERFIL de Usuario-------------------------------------------------------------------------------------------> */}
            <div className=" mothership-b">
                <h1 className="tecler-perfil-b">Perfil de usuario</h1>
                <div className="row perfil-row-b">
                    <div className="col-5 exception colum-dat-usu">
                        <div className="name-usu-b">
                            <i className="bi bi-person-fill bs-icon-b"></i>
                            {/* <!-- <p id="profileName" className="p-perfil">Tiranius Rexis</p> --> */}
                            <p id="profileName" className="p-perfil-b">{user.name}</p>
                            {/* <!-- <textarea id="profileName" className="p-perfil"></textarea> //KAREN 1.2// --> */}
                        </div>
                    </div>
                    <div className="col-2 col-central-b">
                    </div>
                    <div className="col-5 exception-b">
                        {/* <a href="" id="nameChange" className="a-perfil-b">Editar Nombre de Usuario</a> */}
                        <a href="" id="nameChange" className="a-perfil-b" type="name" value={user.name} onSubmit={handleChange}>Editar Nombre de Usuario</a>
                        <div id="profileInput" className="d-none-b" type="text"></div>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-geo-alt-fill bs-icon-b"></i>
                        {/* <!-- <p id="profileLocal" className="p-perfil">Gijón (Asturias)</p> --> */}
                        <p id="locationUser" className="p-perfil-b">{user.country}</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <a href="" className="a-perfil-b" type="country" value={user.country} onSubmit={handleChange}>Editar localización</a>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-calendar bs-icon-b"></i>
                        <p id="profileBirth" className="p-perfil-b">{user.age}</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <a href="" className="a-perfil-b" type="age" value={user.age} onSubmit={handleChange}>Editar edad</a>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-book-fill bs-icon-b"></i>
                        <p id="profileStudy" className="p-perfil-b">{user.experience}</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <a href="" className="a-perfil-b" type="experience" value={user.experience} onSubmit={handleChange}>Editar experiencia </a>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-translate bs-icon-b"></i>
                        <p id="profileLang" className="p-perfil-b">B1 Inglés</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <a href="" className="a-perfil-b">Editar idiomas</a>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-bicycle bs-icon-b"></i>
                        <p id="profileHobbies" className="p-perfil-b">{user.hobbies}</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <a href="" className="a-perfil-b" type="hobbies" value={user.hobbies} onSubmit={handleChange}>Editar hobbies</a>
                    </div>
                </div>
                <div className="row perfil-row-b">
                    <div className="col-5 colum-dat-usu">
                        <i className="bi bi-linkedin bs-icon-b"></i>
                        {/* <!-- <p id="profileLinkedin" className="p-perfil">/in/tiraniusrex</p> --> */}
                        <p id="mailUser" className="p-perfil-b">{user.email}</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <a href="" className="a-perfil-b" type="email" value={user.email} onSubmit={handleChange}>Editar correo</a>
                    </div>
                </div>
            </div>
        </div>


    );
}

