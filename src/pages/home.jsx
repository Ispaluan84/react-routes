import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Bienvenidos a mi Portfolio</h1>
            <p>Soy Desarrollador Web apasionado por este mundo</p>
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