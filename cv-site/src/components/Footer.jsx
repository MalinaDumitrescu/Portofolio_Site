import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Footer.css';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Mălina Dumitrescu. {t('copyright')}</p>

            <div className="footer-social">
                <p>{t('contactMe')}:</p>

                <a
                    href="mailto:malina.dumitrescu24@gmail.com"
                    className="icon-link"
                    title={t('email_mes')}
                >
                    <Mail size={20} />
                </a>


                <a
                    href="https://github.com/MalinaDumitrescu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/m%C4%83lina-dumitrescu-217a36287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <Linkedin size={20} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
