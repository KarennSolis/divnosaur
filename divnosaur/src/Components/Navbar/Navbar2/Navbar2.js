import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

export function Navbar2(props) {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">

                <a className="navbar-brand" href="#"><img className="12-sm img-fluid" src="https://lh6.googleusercontent.com/KW0D-P_DNR2finWvJg-gr0sodT3i1jmcPs5TQ8MfwVZXtWLd19KBAz51BwVBpM34VTs=w2400" alt="" width="170" /></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse flex-row justify-content-end" id="navbarSupportedContent">

                    <ul className="navbar-nav">
                        <form id="search" className="d-flex" role="search">
                            <input className="form-control me-4" type="search" placeholder="nombre, especialidad ..." aria-label="Search" />
                            <button className="btn btn-outline-primary me-2" type="submit">Buscar</button>
                        </form>
                        <li className="nav-item">
                            <Link to=" "><a className="nav-link" aria-current="page" href="#">Inicio</a></Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/followers"><a className="nav-link" href="#">Mis amigos</a></Link> 
                        </li>
                        
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mi cuenta
                            </a>
                            <ul className="dropdown-menu">

                                {/* <li className="dropdown-item">Mi cuenta</li> */}
                                {/* <li><hr className="dropdown-divider" />
                                    <li><a className="dropdown-item " href="#">Ajustes y preferencias</a></li>
                                    <li><a className="dropdown-item " href="#">Idioma</a></li>
                                </li> */}
                                <li><hr className="dropdown-divider" />
                                    <Link to="/perfil" ><li><a className="dropdown-item" href="#">Mi Perfil</a></li></Link>
                                </li>
                                <li><hr className="dropdown-divider" />
                                    <Link to="/"><li><a className="dropdown-item" href="#">Cerrar sesión</a></li></Link> 
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
}

