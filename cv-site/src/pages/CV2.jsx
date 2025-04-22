import React from 'react';
import '../styles/CV1.css';
import avatar from '../assets/avatar.jpg';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';

function CV1() {
    const { t } = useTranslation();

    return (
        <main className="cv1-container">
            {/* INTRO */}
            <section className="cv1-section" data-aos="fade-up">
                <h1>Technical CV</h1>
                <p className="cv1-intro">
                    As a second-year Computer Science student, I am always
                    seeking opportunities to expand my knowledge and skill set.
                    With extensive volunteering experience, I am passionate about
                    teamwork, problem-solving, and continuous learning. I thrive in
                    multicultural environments, enjoy tackling challenges, and love
                    using creativity to drive impactful projects.
                </p>

            </section>

            <div className="cv1-profile-header">
                <img
                    src={avatar}  // asigură-te că e pus în public/ sau src/assets și corectează path-ul
                    alt="Malina Dumitrescu"
                    className="cv1-profile-pic"
                />
                <div className="cv1-profile-name">
                    <h2> Mălina-Teodora Dumitrescu</h2>
                </div>
            </div>

            {/* CONTACT & SKILLS */}
            <section className="cv1-section" data-aos="fade-up">
                <h2>📬 Contact & Skills</h2>

                <div className="cv1-contact-skills">
                    <div className="cv1-contact-info">
                        <h4>📇 Contact</h4>
                        <ul>
                            <li>📧 malina.dumitrescu24@gmail.com</li>
                            <li>📞 +40 771 545 730</li>
                            <li>📍 Cluj-Napoca</li>
                            <li>💻 <a href="https://github.com/MalinaDumitrescu" target="_blank" rel="noreferrer">GitHub</a></li>
                            <li>🔗 <a href="https://linkedin.com/in/mălina-dumitrescu217a36287" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className="cv1-skill-block">
                        <h4>🧠 Soft Skills</h4>
                        <ul>
                            <li>Strong communication skills</li>
                            <li>Good logical thinking</li>
                            <li>Fast learning capacity</li>
                            <li>Analytical & result-oriented thinking</li>
                            <li>Eagerness to learn anytime</li>
                            <li>Resilience and patience</li>
                            <li>Flexibility & adaptability</li>
                        </ul>
                    </div>


                    <div className="cv1-skill-block">
                        <h4>🛠 Hard Skills</h4>
                        <ul>
                            <li>English: C1-C2 • German: C1</li>
                            <li>Google Docs, Sheets, Slides</li>
                            <li>Microsoft Office (Outlook, Word, Excel, etc.)</li>
                            <li>Git, GitHub, GitLab</li>
                            <li>Figma, Canva</li>
                            <li>ChatGPT, Copilot</li>
                            <li>Photoshop, Lightroom</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* EDUCAȚIE */}
            <section className="cv1-section" data-aos="fade-up">
                <h2>🎓 Education</h2>
                <ul className="cv1-list">
                    <li>

                        <strong>Babeș-Bolyai University
                        </strong> – Faculty of Mathematics and Computer Science<br />
                        <em>2023 - 2026 • Computer Science, German- language program</em>
                    </li>

                    <li>
                        <strong>Highschool </strong> – National College ”Elena Cuza”, Craiova<br />
                        <em>2019 – 2023 • Natural Sciences-German Bilingual Class</em>
                    </li>
                </ul>
            </section>


            {/* EXPERIENȚĂ */}
            <section className="cv1-section" data-aos="fade-up">
                <h2>🧑‍💻 Experience </h2>
                <ul className="cv1-list">
                    <li>
                        <strong>Univeristy Networks Intership</strong> – Department of Information Technology and Communication<br />
                        <em>April - June 2024 </em><br /><br />

                        During my 3-month internship at the Department of Information
                        Technology and Communication (DTIC) at UBB, I worked with
                        both hardware and software components in networking. Driven
                        by curiosity and interest in this field, I gained hands-on
                        experience in network setup, troubleshooting, and
                        infrastructure management, expanding my understanding of IT
                        systems beyond software development.
                    </li>
                </ul>

                <ul className="cv1-list">
                    <li>
                        <strong>Volunteer</strong> – National Organization of Scouts<br />
                        <em>2019 - present </em><br /><br />

                        - Member of the Romanian Contingent Management
                        - Team for Roverway 2024, Norway (international event)
                        - Nocrich International Scout Center- volunteer
                        - Project coordinator, leading roles in Human Resources
                        (HR), Logistics, Image and Communication (PR),
                        Program Planning and Team Management in various
                        projects.
                    </li>
                </ul>

                <ul className="cv1-list">
                    <li>
                        <strong>Volunteer</strong> – Gutenberg Studentenverein<br />
                        <em>2021 - 2023 </em><br /><br />
                        - President of Gutenberg Jugendverein, Dolj branchlearning how to manage an organization based on
                        German language and German work ethics.
                        -- leadership, teamwork, solving conflicts, critical
                        thinking, meeting deadlines, organizational skills.
                    </li>
                </ul>
            </section>

            {/* CERTIFICĂRI */}
            <section className="cv1-section" data-aos="fade-up">
                <h2>📜 Certifications </h2>
                <ul className="cv1-list">
                    <li>
                        <strong>German Language Certification – Deutsches Sprachdiplom Stufe II (C1)</strong><br />
                        Kultusministerkonferenz (KMK) • 2023<br />
                        <a
                            href="/Deutsches_Sprachdiplom_Stufe_II_Mălina-Teodora Dumitrescu.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cv1-cert-link"
                        >
                            📎 check out the certificate
                        </a>
                    </li>

                </ul>
            </section>







            {/* PDF */}
            <section className="cv1-section" data-aos="fade-up">


                <iframe
                    src="/CV-%20Mălina-Teodora%20Dumitrescu%20(11).pdf"
                    title="CV PDF"
                    className="cv1-pdf-preview"
                />
            </section>

            <p className="cv1-note-lang" data-aos="fade-in">
                {t('cv1_note_lang')}
            </p>
        </main>
    );
}

export default CV1;
