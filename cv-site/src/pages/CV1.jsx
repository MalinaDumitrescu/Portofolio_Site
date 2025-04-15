import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CV.css';

function CV1() {
    const { t } = useTranslation();

    return (
        <div className="cv-container">
            <h1>{t('cv1')}</h1>

            {/* Despre mine */}
            <section>
                <h2>{t('about')}</h2>
                <p>
                    {t('name')} – {t('about')} text exemplu: Sunt un profesionist pasionat de tehnologie cu experiență în dezvoltare web și aplicații moderne.
                </p>
            </section>

            {/* Skills */}
            <section>
                <h2>{t('skills')}</h2>
                <ul>
                    <li>{t('skill1')}</li>
                    <li>{t('skill2')}</li>
                    <li>{t('skill3')}</li>
                </ul>
            </section>

            {/* Contact */}
            <section>
                <h2>{t('contact')}</h2>
                <ul>
                    <li>Email: {t('email')}</li>
                    <li>Telefon: {t('phone')}</li>
                </ul>
            </section>

            {/* Rețele sociale */}
            <section>
                <h2>{t('social')}</h2>
                <ul>
                    <li>
                        <a href="https://github.com/username" target="_blank" rel="noreferrer">
                            {t('github')}
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
                            {t('linkedin')}
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default CV1;
