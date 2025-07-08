import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Bienvenidos a mi Portfolio</h1>
            <p>Bienvenidos, os contaré un poco sobre mí. Soy un profesional con más de 25 años de experiencia en el sector Hospitality,
             liderando equipos, gestionando negocios y ofreciendo un servicio execpcional centrado en el cliente. Actualmente en proceso 
             de transición al sector tecnológico, cursando un Bootcamp de Full Stack Web Developer, con certificaciones ya adquiridas HTML,
             CSS, JavaScript, GitHub, Node.js y Express. 
            </p>
            <nav>
                <ul>
                    <li><Link to="/projects">Proyectos</Link></li>
                    <li><Link to="/resume">Currículum</Link></li>
                </ul>
            </nav>
        </>

    )
}


export default Home;