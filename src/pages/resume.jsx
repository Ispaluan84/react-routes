import React from 'react';
import {studies, experiences} from '../data/resume';

function Resume() {
    return (
        <>
            <h1>Currículum</h1>
            <section>
                <h2>Experiencia Laboral</h2>
                <ul>
                    {experiences.map(e => (
                        <li key={e.id}>
                            <strong>{e.title}</strong> en {e.company} - {e.date}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Educación</h2>
                <ul>{studies.map(s => (
                    <li key={s.id}>
                        <strong>{s.title}</strong> en {s.institution} - {s.date}
                    </li>
                ))}
                </ul>
            </section>
        </>
    )

}

export default Resume;