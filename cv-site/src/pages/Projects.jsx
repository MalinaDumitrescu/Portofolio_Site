// src/pages/Projects.jsx
import React from 'react';
import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();

    return (
        <div className="projects-page">
            <h1>{t('projectsTitle')}</h1>
            <p>{t('projectsIntro')}</p>

            {/* Exemplu de proiect */}
            <div className="project-card">
                <h3>📱 App-ul meu pentru cupluri</h3>
                <p>O aplicație creată în React Native pentru conectare la distanță.</p>
                <a href="https://link-proiect.com" target="_blank" rel="noopener noreferrer">
                    Vizitează
                </a>
            </div>

            {/* Adaugă mai multe proiecte aici */}
        </div>
    );
}

export default Projects;
