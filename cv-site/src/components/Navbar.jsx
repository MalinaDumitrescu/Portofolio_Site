import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

function Navbar() {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState(() =>
        localStorage.getItem('language') || 'ro'
    );

    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    }, [language, i18n]);

    const toggleLanguage = () =>
        setLanguage(prev => (prev === 'ro' ? 'en' : 'ro'));

    const toggleTheme = () => setDarkMode(prev => !prev);

    return (
        <header className="navbar">
            <div className="nav-links">
                <Link className={location.pathname === '/' ? 'active' : ''} to="/">
                    {t('home')}
                </Link>
                <Link className={location.pathname === '/cv1' ? 'active' : ''} to="/cv1">
                    {t('cv1')}
                </Link>
                <Link className={location.pathname === '/cv2' ? 'active' : ''} to="/cv2">
                    {t('cv2')}
                </Link>
            </div>

            <div className="nav-buttons">
                <button onClick={toggleLanguage}>
                    {language === 'ro' ? 'EN' : 'RO'}
                </button>
                <button onClick={toggleTheme}>
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    );
}

export default Navbar;
