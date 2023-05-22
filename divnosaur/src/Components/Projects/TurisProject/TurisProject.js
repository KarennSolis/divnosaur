import React from "react";
import { Link } from "react-router-dom";
import "./TurisProject.css";

export function TurisProject(props) {
    return (

        <div>
            <h1 class="logo">Joven <span>Turismo</span></h1>
    <ul>
        <li><a href="#" class="boton" id="inicio">INICIO</a></li>
        <li><a href="#" class="boton" id="empresa">EMPRESA</a></li>
        <li><a href="#" class="boton" id="servicios">SERVICIOS</a></li>
        <li><a href="#" class="boton" id="contacto">CONTACTO</a></li>
    </ul>

    <div class="page">
        <div id="pagina_inicio">
            <div><img src="../public/voyage-violet.png"/></div>  
        </div>
       
        <div>
            <form action="container" class="container">
            <p>¡Te ofrecemos crecer con nosotros en nuestra unidad tecnológica FullStack Development como Programador/a! Si tienes unos 6 meses de experiencia como programador/a, así como iniciativa, empatía y ganas de llegar lejos, danos la oportunidad de conocer <br/>

                ¿Qué necesitamos?  <br/>
                
                Al menos 6 meses de experiencia y/o prácticas en desarrollo y programacion. <br/>
                
                Skills tipo: Python y SQL <br/>
                
                ¿Qué te podemos ofrecer? <br/>
                • Contratación indefinida <br/>
                • Rango salarial: 17.000 / 20.000 b/a (rango orientativo, salario en función de experiencia aportada) <br/>
                • Beneficios sociales Seguro médico privado y seguro de vida <br/>
                • Retribución flexible: tickets restaurante, tickets guardería, tarjeta transporte <br/>
                • 23 días de vacaciones y el día de tu cumpleaños <br/>
                • Plan de formación personalizado. <br/>
                
                Si sientes que podrías encajar y te apetece la experiencia, ¡ponte en contacto con nosotros! Y te daremos toda la información que necesites. <br/>
                
                ¡Abre una nueva ventana a tu futuro con Second Window! ¡Envía tu CV! tecler@ejemplo.es</p>
            </form>
        </div>
    </div>
        </div>

    );
}

