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
                            <li>🔗 <a href="https://www.linkedin.com/in/m%C4%83lina-dumitrescu-217a36287/" target="_blank" rel="noreferrer">LinkedIn</a></li>
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

            {/* PROIECTE */}
            <section className="cv1-section" data-aos="fade-up">
                <h2>💼 Technical Projects</h2>
                <p className="cv1-projects-text">
                    You can explore my work across different categories:
                </p>
                <ul className="cv1-projects-list">

                    <li><a href="/Portofolio_Site/Academic">🎓 Academic Projects</a></li>
                    <li><a href="/Portofolio_Site/Personal">🎨 Personal Projects</a></li>
                </ul>
                <p className="cv1-projects-text">
                    Or browse everything on my
                    <a href="https://github.com/malinadumitrescu" target="_blank" rel="noreferrer"> GitHub profile</a>.
                </p>
            </section>



            {/* SKILLURI */}
            <section className="cv1-section" data-aos="fade-up">
                <h2>🧰 Technical Skills</h2>

                <div className="cv1-skills-bars">
                    {[
                        { name: 'Programming & OOP', level: 80 },
                        { name: 'Software Dev & Management', level: 80 },
                        { name: 'Web Development', level: 50 },
                        { name: 'Testing & Debugging', level: 60 },
                        { name: 'Databases & SQL', level: 80 },
                        { name: 'OS & SysAdmin', level: 70 },
                        { name: 'Networking & Security', level: 65 },
                        { name: 'DevOps & Tools', level: 60 },
                        { name: 'Scientific Computing & AI', level: 40 },
                        { name: 'Soft Skills & Agile', level: 95 },
                    ].map((skill, i) => (
                        <div className="cv1-skill" key={i}>
                            <div className="cv1-skill-name">{skill.name}</div>
                            <div className="cv1-skill-bar">
                                <div className="cv1-skill-fill" style={{ width: `${skill.level}%` }} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cv1-skills-columns">
                    {/* 🔹 COL LEFT */}
                    <div className="cv1-skill-col">
                        <h4>🧠 Programming Languages</h4>
                        <ul>
                            <li>Python, Java, C++, C, PHP, Shell, Assembly</li>
                        </ul>

                        <h4>🌐 Web Development</h4>
                        <ul>
                            <li>HTML, CSS, React</li>
                        </ul>

                        <h4>🗄 Databases & SQL</h4>
                        <ul>
                            <li>SQL, PostgreSQL, Microsoft SQL Server</li>
                            <li>MongoDB, MySQL (via Azure Data Studio)</li>
                        </ul>

                        <h4>🧮 Scientific Computing</h4>
                        <ul>
                            <li>SageMath, Pandas, TensorFlow</li>
                        </ul>
                    </div>

                    {/* 🔸 COL RIGHT */}
                    <div className="cv1-skills-intro" data-aos="fade-up">
                        <p>
                            <strong>🛠 Languages & Tools I’ve worked with</strong>
                        </p>
                    </div>

                    <div className="cv1-skill-col">
                        <h4>🖥 OS & System Administration</h4>
                        <ul>
                            <li>Linux (Ubuntu), Windows</li>
                            <li>General sysadmin experience</li>
                        </ul>

                        <h4>🔐 Networking & Cybersecurity</h4>
                        <ul>
                            <li>Cisco Packet Tracer, Wireshark</li>
                            <li>Firewall Management (nftables)</li>
                        </ul>

                        <h4>⚙️ DevOps & Tools</h4>
                        <ul>
                            <li>Docker, VirtualBox, Git</li>
                        </ul>

                        <h4>🧩 Software & Agile Tools</h4>
                        <ul>
                            <li>MagicDraw (UML), Scrum, Taiga</li>
                        </ul>
                    </div>
                </div>

            </section>

            {/* PDF */}
            <section className="cv1-section" data-aos="fade-up">
                <div className="cv1-download-wrapper">
                    <div className="cv1-download-info">
                        <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF icon" className="cv1-pdf-icon" />
                        <div>
                            <h3>Download CV PDF</h3>
                            <p className="cv1-subtext">Latest version updated • Professional PDF</p>
                        </div>
                    </div>

                    <a
                        className="cv1-download-button"
                        href="/Portofolio_Site/cv-malina-dumitrescu.pdf"
                        download
                    >
                        <Download size={18} />
                        Download PDF
                    </a>
                </div>

                <iframe
                    src="https://malinadumitrescu.github.io/Portofolio_Site/"
                    title="Site Frame"
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
