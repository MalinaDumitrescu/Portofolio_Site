import React from 'react';
import '../styles/CV2.css';
import avatar from '../assets/avatar.jpg';
import {useTranslation} from 'react-i18next';
import {Download} from 'lucide-react';

function CV2() {
    const {t} = useTranslation();

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
                    src={avatar}
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
                            <li>💻 <a href="https://github.com/MalinaDumitrescu" target="_blank"
                                     rel="noreferrer">GitHub</a></li>
                            <li>🔗 <a href="https://www.linkedin.com/in/m%C4%83lina-dumitrescu-217a36287/" target="_blank"
                                     rel="noreferrer">LinkedIn</a></li>
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
                        </strong> – Faculty of Mathematics and Computer Science<br/>
                        <em>2023 - 2026 • Computer Science, German- language program</em>
                    </li>

                    <li>
                        <strong>Highschool </strong> – National College ”Elena Cuza”, Craiova<br/>
                        <em>2019 – 2023 • Natural Sciences-German Bilingual Class</em>
                    </li>
                </ul>
            </section>


            {/* EXPERIENȚĂ */}
            <section className="cv1-section" data-aos="fade-up">
                <h2>🧑‍💻 Volunteer & Leadership Experience </h2>


                <p className="cv2-story">
                    I began my journey in the National Organization of Romanian Scouts in 2019. Over the years, I
                    evolved from a passionate participant into a proactive coordinator, driven by values such as
                    solidarity, community, and adventure.
                    <br/><br/>
                    My involvement in scouting taught me how to organize large events, communicate clearly within
                    multicultural teams, and take initiative while also supporting others. From tent pitching to
                    fundraising, from logistics to public speaking, scouting has shaped my resilience, leadership, and
                    love for service.
                </p>

                <p className="cv2-scout-quote" data-aos="fade-in">
                    🏕️ <em>Once a Scout, always a Scout!</em>
                </p>

                <section className="cv2-section" data-aos="fade-up">
                    <div className="cv2-gallery-container">
                        <div className="cv2-gallery-center">
                            <img src="src/assets/wosm.jpg" className="cv2-gallery-center-logo" alt="Gutenberg Logo" />
                        </div>

                        <div className="cv2-gallery-orbit">
                            <img src="src/assets/rov.jpg" className="cv2-orbit-image orbit1" alt="Event 1" />
                            <img src="src/assets/nocrich.jpg" className="cv2-orbit-image orbit2" alt="Event 2" />
                            <img src="src/assets/ocg.jpg" className="cv2-orbit-image orbit3" alt="Workshop" />
                            <img src="src/assets/gulgute.jpg" className="cv2-orbit-image orbit4" alt="Filmabend" />
                            <img src="src/assets/fl22.jpg" className="cv2-orbit-image orbit5" alt="Outdoor" />
                            <img src="src/assets/ffl.jpg" className="cv2-orbit-image orbit6" alt="Craiova Logo" />

                        </div>
                    </div>
                </section>

                {/* ROLES & PROJECTS */}
                <section className="cv2-section" data-aos="fade-up">
                    <h2>🌱 Scouting Roles & Projects</h2>
                    <ul className="cv2-list highlight">
                        <li><strong> Member of the Romanian Contingent Management Team</strong> – Roverway 2024, Norway
                            (International Event)
                        </li>
                        <li><strong>Volunteer</strong> – Nocrich International Scout Center (2021-2023)</li>
                        <li><strong>Project Coordinator</strong> – HR, Logistics, PR & Program Management on diverse
                            smaller projects(2019-present)
                        </li>
                        <li><strong>Organizer</strong> – Festival of Light - 2022 & 2023 Editions</li>
                        <li><strong>Organizer</strong> – Order of the Enchanted Gift - Fundraising (2022)</li>
                        <li><strong>Organizer</strong> – National Scout Camp "Festivalul de Festivalul Luminii" (2023)
                        </li>

                    </ul>
                </section>

                {/* Gutenberg Involvement */}
                <section className="cv2-section" data-aos="fade-up">
                    <h2>📚 Gutenberg Experience</h2>
                    <p className="cv2-story">
                        My journey with the Gutenberg Jugendverein began in 2021, after participating in an inspiring online summer camp organized by the association. Shortly after, I was contacted by the former president of the Dolj branch — a student in Cluj and an active member of the Studentenverein — who asked me if I would be open to reviving the local branch.
                        <br /><br />
                        She forwarded me the official email invitation from the board, and less than a day later, we had built a motivated local team and created our new board. What followed was an intense and fulfilling period of re-establishing the Dolj branch.
                        <br /><br />
                        As branch president (of course, not alone, but with a wonderful team), I navigated the challenges of post-pandemic organizing and restrictions — rebuilding community spirit, launching cultural and educational events, and staying rooted in German values, leadership, and collaboration. This experience taught me how to empower others, make thoughtful decisions, and remain resilient through uncertainty.
                    </p>
                </section>

                <section className="cv2-section" data-aos="fade-up">
                    <h3 className="cv2-gallery-title">📸 Snapshots from my Gutenberg Journey</h3>
                    <div className="cv2-gallery-container">
                        <div className="cv2-gallery-center">
                            <img src="src/assets/gverein.jpg" className="cv2-gallery-center-logo" alt="Gutenberg Logo" />
                        </div>

                        <div className="cv2-gallery-orbit">
                            <img src="src/assets/gtog.jpg" className="cv2-orbit-image orbit1" alt="Event 1" />
                            <img src="src/assets/gultim.jpg" className="cv2-orbit-image orbit2" alt="Event 2" />
                            <img src="src/assets/gws.jpg" className="cv2-orbit-image orbit3" alt="Workshop" />
                            <img src="src/assets/gfilm.jpg" className="cv2-orbit-image orbit4" alt="Filmabend" />
                            <img src="src/assets/gprima.jpg" className="cv2-orbit-image orbit5" alt="Outdoor" />
                            <img src="src/assets/gcraiova.jpg" className="cv2-orbit-image orbit6" alt="Craiova Logo" />

                        </div>
                    </div>
                </section>




                <section className="cv2-section" data-aos="fade-up">
                    <h2>🎓 Roles & Skills – Gutenberg</h2>
                    <ul className="cv2-list highlight">
                        <li><strong>President of Dolj Branch</strong> – Gutenberg Jugendverein (2021–2022)</li>
                        <li><strong>Volunteer</strong> – Gutenberg Jugendverein (2021–2023)</li>
                        <li>Led team meetings and managed cross-functional projects</li>
                        <li>Applied German work ethic principles: structure, discipline, initiative</li>
                        <li>Oversaw the creation of project reports, feedback forms, and planning documentation</li>
                        <li>Strengthened skills in leadership, teamwork, conflict resolution, and strategic planning</li>
                    </ul>
                </section>

            </section>

            {/* ALTE EXPERIENȚE / MENȚIUNI */}
            <section className="cv2-section" data-aos="fade-up">
                <h2>🌟 Other Notable Experiences & Achievements</h2>
                <ul className="cv2-list">
                    <li><strong>German Language Competitions</strong> – National & Regional Results</li>
                    <li><strong>Mathematics Competitions</strong> – Regional Distinctions</li>
                    <li><strong>JCI (Junior Chamber International)</strong> – Volunteer</li>
                    <li><strong>European Solidarity Corps</strong> – Project Participant</li>
                    <li><strong>Red Cross</strong> – Active Volunteer</li>
                    <li><strong>Simbio</strong> – Community Volunteer</li>
                    <li><strong>Eco-Fest International Festival</strong> – Jury Member (Ecology Film Edition)</li>
                    <li><strong>German Certification Thesis</strong> – Topic: "Pfadfindertum" (Scouting)</li>
                    <li><strong>Literary Publication</strong> – Contributor in *Irizări* Magazine</li>
                    <li><strong>DiscoverEU</strong> – Certificate of Participation</li>

                </ul>
            </section>


            {/* CERTIFICĂRI */}
            <section className="cv1-section" data-aos="fade-up">
                <h2>📜 Certifications </h2>
                <ul className="cv2-list achievements">
                    <li>
                        <strong>German Language Certification – Deutsches Sprachdiplom Stufe II (C1)</strong><br/>
                        Kultusministerkonferenz (KMK) • 2023<br/>
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

            <section className="cv2-section" data-aos="fade-up">
                <h2>🌟 Personal Motto</h2>
                <p className="cv2-motto">
                    <em>"You can be stupid, as long as you're lucky."</em><br/>
                    <span style={{fontSize: '0.95rem', color: '#666'}}>
      And because I truly live by this, I’ll leave the original too: <strong>„Prost să fii, noroc să ai :') ”</strong>
    </span>
                </p>
            </section>


            {/* PDF */}
            <section className="cv1-section" data-aos="fade-up">


                <iframe
                    src={`${import.meta.env.BASE_URL}CV- Mălina-Teodora Dumitrescu (11)(3)u.pdf`}
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

export default CV2;
