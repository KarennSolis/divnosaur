import React from "react";
import "./Navbar1.css";

export function Navbar1(props) {
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-xs-2 col-sm-2">
                        <a class="navbar-brand" href="#"><img class="img-fluid" src="https://lh6.googleusercontent.com/KW0D-P_DNR2finWvJg-gr0sodT3i1jmcPs5TQ8MfwVZXtWLd19KBAz51BwVBpM34VTs=w2400" alt="" width="170"/></a>
                    </div>

                    <div class="col-md-8 col-sm-4 col-xs-4 float-end">
                        <div id="start-button" >

                            <a href=""><button class="btn-inicio btn btn-outline-primary">Unirse ahora</button></a>
                            <a href=""><button class="btn-inicio btn btn-primary">Iniciar sesión</button></a>

                        </div>
                    </div>
                </div>

            </div>
        </nav>

    );
}

