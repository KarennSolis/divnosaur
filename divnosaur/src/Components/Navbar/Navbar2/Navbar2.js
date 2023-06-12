import React from "react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { updateSearchTerm, filterUsers } from '../../../redux/userSlice';
import '../SearchBar/SearchBar.css';
import { FilteredUser } from '../SearchBar/FilteredUsers';
import { FollowButton } from '../../Followers/FollowButton';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Navbar2.css";
import { SearchBar } from "../SearchBar/SearchBar";



export function Navbar2(props) {

    const logout = () => {
        const user_id = localStorage.getItem('idLogged');
        localStorage.clear(user_id);
    }


    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">

                <Link to="/postWall"><a className="navbar-brand" href="#"><img className="12-sm img-fluid" src="https://lh6.googleusercontent.com/KW0D-P_DNR2finWvJg-gr0sodT3i1jmcPs5TQ8MfwVZXtWLd19KBAz51BwVBpM34VTs=w2400" alt="" width="170" /></a></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse flex-row justify-content-end" id="navbarSupportedContent">

                    <ul className="navbar-nav">
                       
                        <SearchBar />
                        <li className="nav-item">
                            <Link to="/postWall"><a className="nav-link" aria-current="page" href="#">Inicio</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/followers"><a className="nav-link" href="#">Mis amigos</a></Link>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="cuentaBoton">
                                Mi cuenta
                            </a>
                            <ul className="dropdown-menu">
                                <li><hr className="dropdown-divider" />
                                    <Link to="/profile" ><li><a className="dropdown-item" href="#">Mi Perfil</a></li></Link>
                                </li>
                                <li><hr className="dropdown-divider" />
                                    <Link to="/"><li><a className="dropdown-item" href="#" onClick={logout}>Cerrar sesión</a></li></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
}

