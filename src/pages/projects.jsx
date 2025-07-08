import React from 'react';
import projects from '../data/projects';


function Projects() {
    return (
        <>
            <h1>Proyectos</h1>
            <ul>
                {projects.map(p => (
                    <li key={p.id}>
                        <h2>{p.name}</h2>
                        <img src={p.image} alt={p.name} style={{width: 200}}></img>
                        <p>{p.description}</p>
                        <a href={p.url} target={'_blank'}>Ver Proyecto</a>
                    </li>
                ))} 
            </ul>
        </>
    )
}

export default Projects;