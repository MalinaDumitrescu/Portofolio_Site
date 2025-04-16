import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';
import '../styles/Home.css';

import { Code, Atom, Server, Paintbrush } from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { Typewriter } from 'react-simple-typewriter';

function Home() {
    const { t } = useTranslation();
    return (
        <div className="home-container">
            <h1>Bine ai venit!</h1>
            <p>Aici poți vizualiza CV-ul meu profesional și creativ.</p>

            <img src={avatar} alt="Profil" className="avatar" />

            <h1>
                <Typewriter
                    words={['Bun venit!', 'Welcome!', 'Willkommen!']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </h1>

            <p>{t('intro')}</p>

            <p className="about-text">{t('aboutMe')}</p>

            <section className="skills-section">
                <h2>{t('skillSection')}</h2>

                <div className="skill">
                    <div className="label">
                        <Atom size={20} />
                        <span>{t('skillReact')}</span>
                    </div>
                    <div className="bar">
                        <div className="fill" style={{ width: '90%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="label">
                        <Code size={20} />
                        <span>{t('skillJS')}</span>
                    </div>
                    <div className="bar">
                        <div className="fill" style={{ width: '80%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="label">
                        <Server size={20} />
                        <span>{t('skillNode')}</span>
                    </div>
                    <div className="bar">
                        <div className="fill" style={{ width: '75%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="label">
                        <Paintbrush size={20} />
                        <span>{t('skillCSS')}</span>
                    </div>
                    <div className="bar">
                        <div className="fill" style={{ width: '70%' }}></div>
                    </div>
                </div>
            </section>




            <div className="button-group">
                <Link to="/cv1" className="cv-button">{t('cv1')}</Link>
                <Link to="/cv2" className="cv-button">{t('cv2')}</Link>
            </div>
        </div>

    );
}

export default Home;
