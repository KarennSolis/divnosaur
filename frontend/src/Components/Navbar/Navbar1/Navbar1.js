import React from "react";
import "./Navbar1.css";

export  function Navbar1(props) {

    return (

        <nav className="navbar-1 navbar-expand-lg bg-info bg-opacity-50 sticky-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-xs-2 col-sm-2" id="iconDivnosaur">
                        <a className="navbar-brand" href="#"><img className="img-fluid" src="https://lh6.googleusercontent.com/KW0D-P_DNR2finWvJg-gr0sodT3i1jmcPs5TQ8MfwVZXtWLd19KBAz51BwVBpM34VTs=w2400" alt="" width="170"/></a>
                    </div>

                    <div className="col-md-8 col-sm-4 col-xs-4 float-end">
                        <div id="start-button" >

                            <a href="/register"><button className="btn-inicio btn btn-outline-primary">Unirse ahora</button></a>
                            <a href="/login"><button className="btn-inicio btn btn-primary">Iniciar sesión</button></a>

                        </div>
                    </div>
                </div>

            </div>
        </nav>

    );
}

