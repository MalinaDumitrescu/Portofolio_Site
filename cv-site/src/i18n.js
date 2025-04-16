import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ro: {
        translation: {
            home: "Acasă",
            intro: "Aici poți vizualiza CV-ul meu profesional și creativ.",
            profile: "Profil",
            aboutMe: "Sunt o persoană motivată și creativă, pasionată de tehnologie, design și învățare continuă. Îmi place să combin logica programării cu estetica vizuală.",
            cv1: "CV Profesional",
            cv2: "CV Creativ",
            copyright: "Toate drepturile rezervate.",
            email_mes: "Trimite-mi un email",



            contactMe: "Contactează-mă",

            about: "Despre mine",
            skills: "Competențe",
            contact: "Contact",
            social: "Rețele sociale",

            name: "Mălina Dumitrescu",
            email: "email@example.com",
            phone: "07xxxxxxxx",
            github: "Profil GitHub",
            linkedin: "Profil LinkedIn",

            skill1: "Dezvoltare web",
            skill2: "React",
            skill3: "Node.js",

            skillSection: "Competențe",
            skillReact: "React",
            skillJS: "JavaScript",
            skillNode: "Node.js",
            skillCSS: "CSS / Sass"
        }
    },
    en: {
        translation: {
            home: "Home",
            intro: "Here you can view my professional and creative CV.",
            profile: "Profile",
            aboutMe: "I am a motivated and creative person, passionate about technology, design, and continuous learning. I enjoy combining programming logic with visual aesthetics.",
            cv1: "Professional CV",
            cv2: "Creative CV",
            copyright: "All rights reserved.",
            contactMe: "Contact me",
            email_mes: "Send me an email",



            about: "About me",
            skills: "Skills",
            contact: "Contact",
            social: "Social links",

            name: "Mălina Dumitrescu",
            email: "email@example.com",
            phone: "+40 7xxxxxxxx",
            github: "GitHub Profile",
            linkedin: "LinkedIn Profile",

            skill1: "Web Development",
            skill2: "React",
            skill3: "Node.js",

            skillSection: "Skills",
            skillReact: "React",
            skillJS: "JavaScript",
            skillNode: "Node.js",
            skillCSS: "CSS / Sass"
        }
    },
    de: {
        translation: {
            home: "Startseite",
            intro: "Hier kannst du meinen professionellen und kreativen Lebenslauf einsehen.",
            profile: "Profil",
            aboutMe: "Ich bin eine motivierte und kreative Person, die sich für Technologie, Design und kontinuierliches Lernen begeistert. Ich kombiniere gerne Programmierlogik mit visueller Ästhetik.",
            cv1: "Professioneller Lebenslauf",
            cv2: "Kreativer Lebenslauf",
            copyright: "Alle Rechte vorbehalten.",
            contactMe: "Kontakt aufnehmen",
            email_mes: "Schick mir eine E-Mail",



            about: "Über mich",
            skills: "Fähigkeiten",
            contact: "Kontakt",
            social: "Soziale Netzwerke",

            name: "Mălina Dumitrescu",
            email: "email@example.com",
            phone: "+40 7xxxxxxxx",
            github: "GitHub Profil",
            linkedin: "LinkedIn Profil",

            skill1: "Webentwicklung",
            skill2: "React",
            skill3: "Node.js",

            skillSection: "Fähigkeiten",
            skillReact: "React",
            skillJS: "JavaScript",
            skillNode: "Node.js",
            skillCSS: "CSS / Sass"
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
