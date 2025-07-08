import React from 'react';
import projects from '../data/projects';
import styles from './Projects.module.css'


function Projects() {
    return (
        <div className='container'>
            <h1 className={styles.title}>Proyectos</h1>
            <ul className={styles.grid}>
                {projects.map(p => (
                    <li key={p.id} className={styles.card}>
                        <img src={p.image} alt={p.name} style={{width: 200}}></img>
                        <div className={styles['card-content']}>
                            <h2>{p.name}</h2>
                            <p>{p.description}</p>
                            <a href={p.url} target={'_blank'}>Ver Proyecto</a>
                        </div>
                    </li>
                ))} 
            </ul>
        </div>
    )
}

export default Projects;