import React from "react";
import "./Navbar2.css";

export function Navbar2(props) {
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">

                <a class="navbar-brand" href="#"><img class="12-sm img-fluid" src="https://lh6.googleusercontent.com/KW0D-P_DNR2finWvJg-gr0sodT3i1jmcPs5TQ8MfwVZXtWLd19KBAz51BwVBpM34VTs=w2400" alt="" width="170" /></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse flex-row justify-content-end" id="navbarSupportedContent">

                    <ul class="navbar-nav">
                        <form id="search" class="d-flex" role="search">
                            <input class="form-control me-4" type="search" placeholder="nombre, especialidad ..." aria-label="Search" />
                            <button class="btn btn-outline-primary me-2" type="submit">Buscar</button>
                        </form>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mis amigos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mensajes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Notificaciones</a>
                        </li>


                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mi cuenta
                            </a>
                            <ul class="dropdown-menu">

                                <li class="dropdown-item">Mi cuenta</li>
                                <li><hr class="dropdown-divider" />
                                    <li><a class="dropdown-item " href="#">Ajustes y preferencias</a></li>
                                    <li><a class="dropdown-item " href="#">Idioma</a></li>
                                </li>
                                <li><hr class="dropdown-divider" />
                                    <li><a class="dropdown-item" href="#">Publicaciones</a></li>
                                </li>
                                <li><hr class="dropdown-divider" />
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
}

