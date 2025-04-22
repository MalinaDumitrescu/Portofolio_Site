import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';
import '../styles/Home.css';

import MessageBox from '../components/MessageBox';
import StatusBadge from '../components/StatusBadge';
import Timeline from '../components/Timeline';
import FunFacts from '../components/FunFacts';

import { Code, Atom, Server, Paintbrush } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home-container">

            {/* ▶️ Intro Section */}
            <div className="home-intro">
                <img src={avatar} alt="Profil" className="avatar" data-aos="zoom-in" />

                <h1 data-aos="fade-up">
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

                <hr className="section-divider" />

                <p className="intro-text">{t('intro')}</p>
                <p className="about-text" data-aos="fade-up">{t('aboutMe')}</p>
            </div>

            {/* ▶️ Timeline */}
            <Timeline />

            {/* ▶️ Fun Facts */}
            <FunFacts />

            {/* ▶️ Skills Section */}
            <section className="skills-section">
                <h2>{t('skillSection')}</h2>

                {[
                    { label: 'Soft Skills & Agile', percent: 95 },
                    { label: 'Programming & OOP', percent: 80 },
                    { label: 'Software Dev & Management', percent: 80 },
                    { label: 'Testing & Debugging', percent: 75 },
                    { label: 'Databases & SQL', percent: 80 },
                    { label: 'OS & SysAdmin', percent: 70 },
                    { label: 'Web Development', percent: 50 },
                    { label: 'Networking & Security', percent: 65 },
                    { label: 'DevOps & Tools', percent: 60 },
                    { label: 'Scientific Computing & AI', percent: 50 },
                ].map((skill, index) => (
                    <div className="skill" data-aos="fade-up" data-aos-delay={index * 100} key={skill.label}>
                        <div className="label">
                            <span>{skill.label}</span>
                        </div>
                        <div className="bar">
                            <div className="fill" style={{ width: `${skill.percent}%` }}></div>
                        </div>
                    </div>
                ))}
            </section>


            {/* ▶️ CV Buttons */}
            <div className="button-group">
                <Link to="/cv1" className="cv-button">{t('cv1')}</Link>
                <Link to="/cv2" className="cv-button">{t('cv2')}</Link>
            </div>

            {/* ▶️ Badge + Message */}
            <StatusBadge />
            <MessageBox />
        </div>
    );
}

export default Home;
