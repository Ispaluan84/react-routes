import React from 'react';
import {studies, experiences} from '../data/resume';
import styles from './Resume.module.css'

function Resume() {
    return (
        <div className='container'>
            <h1>Currículum</h1>
            <section className='styles-section'>
                <h2>Experiencia Laboral</h2>
                <ul>
                    {experiences.map(e => (
                        <li key={e.id} className={styles['list-item']}>
                            <strong>{e.title}</strong> en {e.company} - {e.date}
                        </li>
                    ))}
                </ul>
            </section>
            <section className='styles-section'>
                <h2>Educación</h2>
                <ul>{studies.map(s => (
                    <li key={s.id} className={styles['list-item']}>
                        <strong>{s.title}</strong> en {s.institution} - {s.date}
                    </li>
                ))}
                </ul>
            </section>
        </div>
    )

}

export default Resume;