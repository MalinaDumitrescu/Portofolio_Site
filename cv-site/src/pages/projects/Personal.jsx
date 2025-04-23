import React from 'react';
import '../../styles/Personal.css';
import { useTranslation } from 'react-i18next';
function Personal() {
    const projects = [
        {
            id: "portfolio",
            title: "Portfolio Website 🌐",
            description: (
                <>
                    <p>
                        👋 Hey there, welcome to my digital corner!<br />
                        This personal portfolio site is more than just a showcase — it’s my creative playground, technical résumé, and a reflection of who I am. Built with React + Vite, powered by pure CSS, and brought to life with scroll animations, interactive elements, and multilingual support, this project was born from both curiosity and ambition.
                    </p>
                    <p>
                        I created this space not only to learn and experiment with new technologies, but also to craft a meaningful way to present myself as a candidate — blending technical depth with personality, storytelling, and a few surprises along the way.
                    </p>
                    <p>
                        Every detail, from the animated skills section to the orbiting image galleries, is hand-coded with care to represent me authentically — a developer, a learner, a creative thinker.
                    </p>
                    <p>
                        Oh, and a special thanks to my tireless collaborator ChatGPT for offering both technical and moral support throughout the process. Couldn't have done it without you, AI pal. 🤝
                    </p>

                    <h4>🔧 Tech Stack</h4>
                    <ul>
                        <li><strong>Framework:</strong> React 18 + Vite</li>
                        <li><strong>Routing:</strong> React Router DOM</li>
                        <li><strong>Internationalization:</strong> react-i18next</li>
                        <li><strong>Animations:</strong> AOS (Animate on Scroll)</li>
                        <li><strong>UI Tools:</strong> lucide-react (icons), react-simple-typewriter</li>
                        <li><strong>Contact:</strong> EmailJS</li>
                        <li><strong>Styling:</strong> Pure handcrafted CSS (no frameworks)</li>
                    </ul>

                    <h4>🌍 Languages Supported</h4>
                    <ul>
                        <li>🇷🇴 Romanian (ro)</li>
                        <li>🇬🇧 English (en)</li>
                        <li>🇩🇪 German (de)</li>
                    </ul>
                    <p>The selected language is saved in localStorage and can be switched using the toggle in the navbar.</p>

                    <h4>📂 Pages Overview</h4>
                    <ul>
                        <li><strong>/</strong> Home – Animated intro, Fun Facts, Timeline, CV links, Recruiter message</li>
                        <li><strong>/cv1</strong> – Technical CV – PDF preview, education, skills, categorized tech stack</li>
                        <li><strong>/cv2</strong> – Creative CV – Volunteering, storytelling, achievements, image gallery</li>
                        <li><strong>/projects</strong> – Web, Mobile, Academic, and Fun projects</li>
                    </ul>

                    <h4>📷 Main Features</h4>
                    <ul>
                        <li>🌗 Auto-switching Dark/Light mode</li>
                        <li>🌐 Multilingual support (RO/EN/DE)</li>
                        <li>💬 Recruiter MessageBox with animation</li>
                        <li>📜 Embedded PDF preview (iframe)</li>
                        <li>📸 Orbit-style circular image galleries</li>
                        <li>✨ AOS scroll animations</li>
                    </ul>

                    <h4>🏁 How to Run Locally</h4>
                    <pre>
        git clone https://github.com/yourusername/your-portfolio.git<br />
        npm install<br />
        npm run dev
      </pre>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/Portofolio_Site"
        },

        {
            id: "ticketsalesapp",
            title: "TicketSalesApp – Full-Cycle Event Ticketing Platform 🎟️ ",
            description: (
                <>
                    <p>
                        <strong>TicketSalesApp</strong> is an all-in-one event ticketing system designed for both music and sports lovers. Whether you’re managing a concert as an admin or booking a seat as a customer, this platform delivers a smooth, intuitive, and complete experience.
                    </p>
                    <h4>🤝 Teamwork Makes the Dream Work</h4>
                    <p>
                        Developed in collaboration with my teammate <a href="https://www.linkedin.com/in/arthur-horeanu-03625a2b7/" target="_blank" rel="noreferrer"><strong>Arthur Horeanu</strong></a>, this project taught us how to work effectively in a real dev team. From Git branching to strategic commits (yes, even “Merry Christmas” messages 🎄), we grew a lot together.
                    </p>

                    <h4>💡 Project Evolution – From Idea to Full Stack</h4>
                    <ul>
                        <li>1. In-Memory Storage</li>
                        <li>2. CSV File-Based Repositories</li>
                        <li>3. PostgreSQL Database with Hibernate ORM</li>
                        <li>4. Ongoing Spring Frontend Development</li>
                    </ul>

                    <h4>🔥 Key Features</h4>
                    <ul>
                        <li>👤 Admin & Customer Account Management (based on email domain)</li>
                        <li>🎤 Concerts and 🏟️ Sports Event Creation (with lineup)</li>
                        <li>🪑 Venue Setup: Sections, Rows, and Seats</li>
                        <li>🎫 Ticket Types: EARLY_BIRD, VIP, STANDARD + seat recommendation</li>
                        <li>🛒 Shopping Cart with checkout flow</li>
                        <li>📜 Order History</li>
                        <li>⭐ Favourites & Personalized Recommendations</li>
                        <li>🔍 Smart Search & Filters</li>
                    </ul>

                    <h4>🧠 Technical Architecture</h4>
                    <ul>
                        <li>Console UI with clean routing</li>
                        <li>Controller-Service-Repository Architecture</li>
                        <li>Flexible data layers (InMemory, CSV, Database)</li>
                        <li>Hibernate + PostgreSQL integration</li>
                    </ul>

                    <p>
                        This project is still evolving — the frontend is under development! 🎨💻
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/TicketSalesCompany"
        },


        {
            id: "tictactoe-ai",
            title: "Tic Tac Toe – React Frontend meets AI Strategy 🎮",
            description: (
                <>
                    <p>
                        This isn’t just another 3x3 board game — it’s where classic gameplay meets modern AI!
                        Built with <strong>React + Vite</strong>, this frontend connects to a smart <strong>Q-Learning-based AI</strong> opponent, giving the game an exciting twist where the machine actually learns to play better over time.
                    </p>

                    <h4>🧠 Why I Built This</h4>
                    <p>
                        This project started with a question: <em>“How do AI models actually learn?”</em><br />
                        I wanted to compare classic hardcoded logic (like Minimax) with self-training models like Q-Learning, and wrap the whole thing in a clean and friendly UI that lets you experience the difference in real-time.
                    </p>

                    <p>
                        Along the way, I explored React’s component structure, responsive UI design, local state management, and connecting to a Python backend API.
                    </p>

                    <h4>🚀 Features</h4>
                    <ul>
                        <li>✅ Interactive 3x3 game board</li>
                        <li>🤖 AI Opponent powered by Q-Learning</li>
                        <li>📊 Local game stats: wins, draws, games played</li>
                        <li>🧩 Switch between Q-Learning and Minimax logic</li>
                        <li>💻 Fully responsive, clean UI built from scratch</li>
                    </ul>

                    <h4>🎥 Demo Video</h4>
                    <video className="project-video" controls>
                        <source src="/tictactoe-demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <h4>🛠️ Run it Locally</h4>
                    <pre>
git clone https://github.com/malinadumitrescu/tictactoe-frontend.git<br />
cd tictactoe-frontend<br />
npm install<br />
npm run dev
      </pre>

                    <p>
                        This project helped me understand <strong>reinforcement learning basics</strong>, AI integration, and how to blend <strong>logic + creativity</strong> into something both fun and educational.
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/Tic-tac-toe-ai"
        }
        ,
        {
            id: "nice-day",
            title: "Nice Day For Recruiters ☀️",
            description: (
                <>
                    <p><strong>Welcome to the softest pixel in my portfolio.</strong>
                        This tiny app has one mission: ✨ <em>To brighten your day — even just a little.</em></p>

                    <p>
                        Whether you clicked the surprise QR in my CV or just stumbled in by chance:<br />
                        <strong>Hey there, I built this just for you.</strong>
                    </p>

                    <h4>💡 Why I Made This</h4>
                    <blockquote>
                        “A project without purpose is just practice. <br />
                        But a project that makes someone smile? That’s art.”
                    </blockquote>
                    <p>
                        <strong>Nice Day For Recruiters</strong> was born from a simple idea:
                        <em>✨ Let code feel human.</em>
                        It’s my little way of saying: “Thanks for being here. You matter.”
                    </p>

                    <h4>🧁 Features</h4>
                    <ul>
                        <li>🎉 <strong>Random Compliments</strong> – tap the button, get instant serotonin</li>
                        <li>🎊 <strong>Confetti Celebration</strong> – because even small joy deserves sparkle</li>
                        <li>🐾 <strong>Surprise Button</strong> – one click = one virtual <em>capybara hug</em></li>
                        <li>📱 <strong>Fully Responsive</strong> – cozy on any device</li>
                        <li>🐹 <strong>Capybara Energy</strong> – gentle, warm, and just a bit silly</li>
                    </ul>

                    <h4>🛠️ Tech Stack</h4>
                    <ul>
                        <li>🧱 <strong>HTML5</strong> – the bones</li>
                        <li>🎨 <strong>CSS3</strong> – soft & responsive styling</li>
                        <li>🧠 <strong>Vanilla JavaScript</strong> – the interactivity brain</li>
                        <li>🎊 <strong>Canvas Confetti</strong> – light, joyful animation</li>
                        <li>🚀 <strong>GitHub Pages</strong> – simple, fast, and free hosting</li>
                    </ul>

                    <h4>🌼 The Real Reason</h4>
                    <p>
                        I didn’t build this to flex. I built it to connect.<br />
                        To show that behind all the tech skills and projects,
                        there’s a person who values <em>kindness, creativity, and making your day 0.1% better</em>.
                    </p>
                    <p>
                        If this little app made you pause, smile, or even wonder <em>“Why a capybara?”</em> —
                        then it’s already done its job. 🧡
                    </p>

                    <p>
                        Made with love, confetti, and cupcakes by <strong>Mălina</strong> 🍰
                        <br />
                        🔗 <a href="https://malinadumitrescu.github.io/NiceDayForRecruiters/" target="_blank" rel="noreferrer">
                        Visit the live site
                    </a>
                        <br />
                        ✨ <em>Or scan the QR code in my CV — surprise guaranteed.</em> 👀
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/NiceDayForRecruiters"
        },

        {
            id: "vpn-firewall-ai",
            title: "AI-Powered VPN Firewall 🔒",
            description: (
                <>
                    <p><strong>Bringing AI to the Frontlines of Cybersecurity 🧠⚔️</strong></p>
                    <p>
                        This is not your average firewall. It’s a living, thinking defense system that uses machine learning to detect VPN usage in real-time and dynamically enforce firewall rules using <code>nftables</code>.
                        <br />
                        <br />
                        This project is still in progress – and will be the foundation of my <strong>Bachelor’s thesis</strong> 🎓.
                    </p>

                    <h4>🧠 Why This Project?</h4>
                    <p>
                        VPNs can offer privacy, but also introduce risks in certain networks. I wanted to explore how AI can help detect and mitigate this — faster than any static rule set.
                        <br />
                        This system learns to identify VPN traffic patterns and reacts instantly — an intelligent, adaptive cybersecurity layer.
                    </p>

                    <h4>🚀 Key Features</h4>
                    <ul>
                        <li>🤖 <strong>AI-Powered VPN Detection</strong> – Trained to spot usage via traffic patterns</li>
                        <li>🔥 <strong>Dynamic Firewall Management</strong> – Using nftables, in real-time</li>
                        <li>🛰️ <strong>Traffic Sniffing</strong> – Captures packets with <code>tcpdump</code></li>
                        <li>📊 <strong>Admin Dashboard</strong> – React/Vue frontend with real-time visibility</li>
                        <li>🔐 <strong>Secure API</strong> – JWT-protected routes for admin access</li>
                        <li>🧩 <strong>Modular Architecture</strong> – Future-proof and scalable</li>
                    </ul>

                    <h4>🛠️ How It Works</h4>
                    <ul>
                        <li><strong>📡 Traffic Capture & Feature Extraction</strong><br />
                            <code>traffic_sniffer.py</code> and <code>feature_extractor.py</code> handle live capture and transformation</li>
                        <li><strong>🧠 AI Detection Engine</strong><br />
                            <code>vpn_detector.py</code> classifies traffic and if VPN is detected → <code>firewall_manager.py</code> applies the block</li>
                        <li><strong>🔥 Firewall Control</strong><br />
                            Uses nftables via <code>vpn_signatures.py</code> and logs with <code>logger.py</code></li>
                        <li><strong>📡 Admin Dashboard & API</strong><br />
                            FastAPI backend + React/Vue dashboard for control and live monitoring</li>
                    </ul>

                    <h4>🗂️ Project Architecture</h4>
                    <pre>
📂 vpn-firewall-ai
├── backend/      ← AI logic, API, firewall control
├── frontend/     ← Admin dashboard (React/Vue)
├── database/     ← Logs & detections (PostgreSQL)
├── scripts/      ← Automation, model training
├── tests/        ← Unit testing
├── docker-compose.yml
      </pre>

                    <h4>🌟 Personal Note</h4>
                    <p>
                        This project blends my passions: cybersecurity, AI, and backend logic. It challenges me daily — from traffic analysis to building secure APIs and live dashboards.
                        <br />
                        I aim to finish this by <strong>March</strong> (for my thesis), and turn it into a polished, real-world ready security tool.
                    </p>
                    <p>
                        Made with passion for AI, curiosity for security, and a vision for a smarter, safer internet.
                        <br />
                        <strong>Stay tuned — this firewall is just getting started.</strong> 🔥🧠
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/AI-Powered-VPN-Firewall-"
        },

    ];


    return (
        <main className="web-projects-container">
            <h1>🌐 Web Projects</h1>
            <p className="intro-text">These are a few of my personal cool projects: </p>

            {/* ▶️ Table of Contents */}
            <nav className="project-toc">
                <h3>📋 Table of Contents</h3>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <a href={`#${project.id}`}>{project.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* ▶️ Project Details */}
            <div className="project-list">
                {projects.map((project) => (
                    <div className="project-card" id={project.id} key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.github} target="_blank" rel="noreferrer">View on GitHub 🚀</a>
                    </div>
                ))}
            </div>

            <p className="language-warning" data-aos="fade-in">
                ⚠️ This page is currently available in English only.
            </p>



        </main>
    );
}

export default Personal;
