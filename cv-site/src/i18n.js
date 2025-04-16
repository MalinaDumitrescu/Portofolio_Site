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
            skillCSS: "CSS / Sass",

            timeline: "Timeline Profesional",
            t1_title: "Licență în Informatică",
            t1_desc: "Universitatea X - Media 9.80",
            t2_title: "Internship Frontend Developer",
            t2_desc: "Compania Y - React, Figma, Git",
            t3_title: "Proiect Freelance",
            t3_desc: "Web app pentru gestionare evenimente",
            t4_title: "În căutare de internship",
            t4_desc: "Deschisă oportunităților din domeniul tech",

            status: "Disponibilă pentru colaborări",

            funFacts: "Lucruri amuzante despre mine",
            fact1: "Am făcut peste 100 de macarons.",
            fact2: "Îmi place să codez ascultând jazz.",
            fact3: "Visez să lucrez remote din Alpi.",

            leaveMessage: "Lasă-mi un mesaj",
            writeMessage: "Scrie aici gândurile tale...",
            send: "Trimite",
            sending: "Se trimite",
            sent: "Trimis",

            message_sent: "Mesaj trimis cu succes!",



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
            skillCSS: "CSS / Sass",

            timeline: "Professional Timeline",
            t1_title: "BSc in Computer Science",
            t1_desc: "University X - GPA 9.80",
            t2_title: "Frontend Developer Internship",
            t2_desc: "Company Y - React, Figma, Git",
            t3_title: "Freelance Project",
            t3_desc: "Web app for event management",
            t4_title: "Looking for internship",
            t4_desc: "Open to tech opportunities",

            status: "Open to work",

            funFacts: "Fun facts about me",
            fact1: "I’ve baked over 100 macarons.",
            fact2: "I love coding while listening to jazz.",
            fact3: "I dream of working remotely from the Alps.",

            leaveMessage: "Leave me a message",
            writeMessage: "Write your thoughts here...",
            send: "Send",
            sending: "Sending",
            sent: "Sent",

            message_sent: "Message sent successfully!",





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
            skillCSS: "CSS / Sass",

            timeline: "Beruflicher Werdegang",
            t1_title: "Bachelor in Informatik",
            t1_desc: "Universität X - Note 9.80",
            t2_title: "Frontend Praktikum",
            t2_desc: "Firma Y - React, Figma, Git",
            t3_title: "Freelance Projekt",
            t3_desc: "Web-App zur Veranstaltungsverwaltung",
            t4_title: "Suche nach Praktikum",
            t4_desc: "Offen für Tech-Chancen",

            status: "Offen für Zusammenarbeit",

            funFacts: "Witzige Fakten über mich",
            fact1: "Ich habe über 100 Macarons gebacken.",
            fact2: "Ich liebe es, beim Programmieren Jazz zu hören.",
            fact3: "Mein Traum ist es, remote aus den Alpen zu arbeiten.",

            leaveMessage: "Hinterlasse mir eine Nachricht",
            writeMessage: "Schreibe hier deine Gedanken...",
            send: "Senden",
            sending: "Wird gesendet",
            sent: "Gesendet",

            message_sent: "Nachricht erfolgreich gesendet!",



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
