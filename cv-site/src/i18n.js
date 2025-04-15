import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ro: {
        translation: {
            home: "Acasă",
            cv1: "CV Profesional",
            cv2: "CV Creativ",

            about: "Despre mine",
            skills: "Competențe",
            contact: "Contact",
            social: "Rețele sociale",

            name: "Numele Tău",
            email: "email@example.com",
            phone: "07xxxxxxxx",
            github: "Profil GitHub",
            linkedin: "Profil LinkedIn",

            skill1: "Dezvoltare web",
            skill2: "React",
            skill3: "Node.js",
        }
    },
    en: {
        translation: {
            home: "Home",
            cv1: "Professional CV",
            cv2: "Creative CV",

            about: "About me",
            skills: "Skills",
            contact: "Contact",
            social: "Social links",

            name: "Your Name",
            email: "email@example.com",
            phone: "+40 7xxxxxxxx",
            github: "GitHub Profile",
            linkedin: "LinkedIn Profile",

            skill1: "Web Development",
            skill2: "React",
            skill3: "Node.js",
        }
    },
    de: {
        translation: {
            home: "Startseite",
            cv1: "Professioneller Lebenslauf",
            cv2: "Kreativer Lebenslauf",

            about: "Über mich",
            skills: "Fähigkeiten",
            contact: "Kontakt",
            social: "Soziale Netzwerke",

            name: "Dein Name",
            email: "email@example.com",
            phone: "+40 7xxxxxxxx",
            github: "GitHub Profil",
            linkedin: "LinkedIn Profil",

            skill1: "Webentwicklung",
            skill2: "React",
            skill3: "Node.js",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'ro',
        fallbackLng: 'ro',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
