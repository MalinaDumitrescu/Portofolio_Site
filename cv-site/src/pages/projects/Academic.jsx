import React from 'react';
import '../../styles/Academic.css'; // Optional: Create this if you'd like separate styling

function Academic() {
    const academicProjects = [

        {
            id: "it-company-dbms",
            title: "IT Company DBMS – Distributed Data Meets Full-Stack Power 🧩",
            description: (
                <>
                    <p>This project is a fully-fledged Distributed Database Management System (DBMS) tailored to simulate a real-world IT company infrastructure. It brings together every major concept of database systems into one powerful and elegant solution.</p>

                    <h4>💡 Why This Project?</h4>
                    <p>I wanted to build more than just another database app — I wanted a hands-on lab where I could apply everything I’ve learned about DBMS: concurrency, distribution, consistency, CRUD, transactions, and Docker deployment.</p>

                    <h4>🚀 Project Highlights</h4>
                    <ul>
                        <li>🗃️ Dual DB support: MySQL + PostgreSQL in separate Docker containers</li>
                        <li>💻 Java GUI using Swing – desktop-based CRUD app</li>
                        <li>🧠 Python backend for concurrency and DB sync</li>
                        <li>🐳 Docker-managed environments with clean communication</li>
                        <li>☁️ Azure-compatible and cloud-ready architecture</li>
                    </ul>

                    <h4>🛠️ Tech Stack</h4>
                    <ul>
                        <li><strong>Languages:</strong> Java (Swing), Python</li>
                        <li><strong>Databases:</strong> MySQL, PostgreSQL</li>
                        <li><strong>Dev Tools:</strong> IntelliJ IDEA, PyCharm, Azure Data Studio</li>
                        <li><strong>Connectivity:</strong> JDBC, psycopg2, mysql-connector-python</li>
                        <li><strong>DevOps:</strong> Docker, Docker Compose</li>
                    </ul>

                    <h4>📦 Setup</h4>
                    <pre>
git clone https://github.com/&lt;your-username&gt;/it-company-dbms.git<br />
cd it-company-dbms<br />
# Follow the README for Docker setup & run
      </pre>

                    <p>This isn’t just a database project — it’s an architecture. It proves that I don’t just write code — I build systems that work and scale.</p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/ITCompanyTransactionsDBMS"
        },

        {
            id: "carsharing-app",
            title: "CarSharingApp – Real Code, Real Team, Real Lessons 🚗",
            description: (
                <>
                    <p>
                        <strong>CarSharingApp</strong> isn’t just a project — it was our first real team challenge in university.
                        Built in C++ using structured class hierarchies and design patterns, this app simulates a functional car-sharing system — just like you'd expect from a real startup.
                        <br />
                        But behind the scenes? It was 13 first-year students, one surprise doc file, and zero hand-holding.
                    </p>

                    <h4>🤝 The Team, The Task, The Chaos</h4>
                    <p>
                        We were dropped into this during a lab session with a simple brief:<br />
                        <em>“Here’s the documentation. Build the app. Figure out your team, your structure, and your workflow.”</em><br />
                        That’s how 13 of us came together to organize, design, and implement the full application — from scratch, no roadmap.
                        No Jira boards. Just GitHub (which, let's be honest, we barely knew how to use at the time 😅).
                    </p>

                    <h4>🔧 What We Built</h4>
                    <ul>
                        <li>✅ Manage users, cars, reservations, and availability</li>
                        <li>✅ Data stored and processed via CSV files</li>
                        <li>✅ Modular and extensible OOP design in C++</li>
                        <li>✅ Clean structure using design principles</li>
                    </ul>

                    <h4>🧠 What I Really Learned</h4>
                    <p>While I improved technically in:</p>
                    <ul>
                        <li>✔ OOP and C++ on a larger scale</li>
                        <li>✔ Reading and writing structured CSV data</li>
                        <li>✔ Implementing class hierarchies and clean design</li>
                    </ul>
                    <p>The true value was in the soft skills:</p>
                    <ul>
                        <li>✔ Team collaboration with real deadlines</li>
                        <li>✔ Using Git and understanding merge conflicts</li>
                        <li>✔ Delegating, organizing, communicating like a team</li>
                    </ul>

                    <h4>🧩 Tech Summary</h4>
                    <ul>
                        <li>💻 <strong>Language:</strong> C++</li>
                        <li>🗂️ <strong>Storage:</strong> CSV files (no database)</li>
                        <li>🧱 <strong>Design:</strong> OOP, class hierarchies</li>
                        <li>🔄 <strong>Git:</strong> Branch-based team collaboration</li>
                    </ul>

                    <h4>🚀 Looking Back</h4>
                    <p>
                        This project taught me more about <strong>communication, ownership, and workflows</strong> than most tutorials ever could.
                        <br />
                        It wasn’t just about code — it was the first time we truly built something together. And honestly? It was kind of awesome.
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/CarSharingApp"
        },

        {
            id: "restaurant-app",
            title: "RestaurantApp – From Chaos to Code 🍽️",
            description: (
                <>
                    <p>This project? Let's just say it was my Python-powered personal boss battle.
                        I didn’t come from a high school with solid programming classes, so when I first sat down to build a restaurant management system…
                        it felt like trying to cook a five-course meal with a toaster.</p>

                    <p><strong>But that’s exactly why this project means so much.</strong></p>

                    <h4>💡 What It Does</h4>
                    <p>
                        <strong>RestaurantApp</strong> is a full-featured restaurant management system built with Python and structured using JSON for data persistence.
                        It helps restaurant owners handle everything from menu updates to billing, customer records, and order histories — all in a clean, object-oriented structure.
                    </p>

                    <h4>📌 Core Features</h4>
                    <ul>
                        <li>🧾 Manage Menu Items – Add, update, or remove dishes</li>
                        <li>🍽️ Take Orders – Process and store customer orders</li>
                        <li>🕓 Order History – Retrieve all past orders from JSON</li>
                        <li>👤 Customer Management – Track orders by user</li>
                        <li>💰 Bill Calculation – Auto-calculate order totals</li>
                        <li>💾 Persistent Data – Everything stored in JSON format</li>
                    </ul>

                    <h4>🔄 The Journey</h4>
                    <p>
                        I first tried using <code>Pickle</code> for data persistence — and it got messy.
                        Corrupted files = not fun. 😵
                        Switching to JSON changed everything: readable, debuggable, lightweight — perfect.
                    </p>
                    <p>
                        This project also taught me the power of Object-Oriented Programming: building my own <code>Menu</code>, <code>Order</code>, and <code>Customer</code> classes gave me hands-on understanding that no tutorial could.
                    </p>

                    <h4>🛠️ Tech Stack</h4>
                    <ul>
                        <li>🐍 <strong>Python</strong> – Main language</li>
                        <li>🗂️ <strong>JSON</strong> – Data persistence</li>
                        <li>📦 <strong>Pickle</strong> – (Attempted, then ditched 😅)</li>
                        <li>🧱 <strong>OOP</strong> – Modular architecture</li>
                    </ul>

                    <h4>🎯 Why I Built It</h4>
                    <ul>
                        <li>Challenge myself without formal CS training</li>
                        <li>Practice working with JSON in real apps</li>
                        <li>Improve my understanding of clean app structure</li>
                    </ul>

                    <h4>🚀 Getting Started</h4>
                    <pre>
git clone https://github.com/your-username/restaurant-app.git<br />
cd restaurant-app<br />
python main.py
      </pre>

                    <p>
                        This project took a lot of trial, error, and caffeine — but it paid off.
                        Not just in code, but in confidence.
                        Now taking orders — digitally. 🍽️
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/RestaurantApp"
        },



        {
            id: "rps-multiplayer",
            title: "Multiplayer Rock-Paper-Scissors ✊🖐️✌️",
            description: (
                <>
                    <p>
                        <strong>Multiplayer Rock-Paper-Scissors</strong> — because even simple games deserve full stack drama.
                        What started as a “simple” game quickly became a cross-language, multithreaded, terminal-powered challenge built with a full client-server architecture.
                    </p>

                    <h4>🖥️ How It Worked</h4>
                    <ul>
                        <li>🧠 <strong>Server:</strong> PHP-based, hosted on a virtual machine</li>
                        <li>🎮 <strong>Client:</strong> Python with multithreading for concurrent play</li>
                        <li>🔄 <strong>Communication:</strong> Socket programming for real-time exchange</li>
                        <li>🧵 <strong>Threading:</strong> Multiple players could play simultaneously</li>
                    </ul>

                    <h4>🙏 A Prayer to SSH</h4>
                    <p>
                        Debugging over nano on a VM nearly broke me — but then I discovered SSH. Once connected from PyCharm, life got better. SSH truly is love. SSH is life. 😌
                    </p>

                    <h4>🎯 Why It Was Cool</h4>
                    <ul>
                        <li>Built a networked multiplayer game from scratch</li>
                        <li>Bridged <strong>Python</strong> and <strong>PHP</strong> in one ecosystem</li>
                        <li>Learned real-time communication & concurrency</li>
                        <li>Practiced debugging, deployment, and remote server control</li>
                    </ul>

                    <h4>🧩 Project Overview</h4>
                    <ul>
                        <li>💻 <strong>Server:</strong> PHP (on virtual machine)</li>
                        <li>🐍 <strong>Client:</strong> Python (threaded, in PyCharm)</li>
                        <li>🌐 <strong>Comm:</strong> Socket programming</li>
                        <li>🔧 <strong>Bonus:</strong> SSH for deployment & sanity</li>
                    </ul>

                    <p>
                        This wasn’t just a game — it was a full-stack networking challenge, a debugging nightmare, and a personal win. And honestly? It was actually fun to play — especially once it worked 😅
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/Multiplayer-Rock-Paper-Scissors-Game\n" // replace with your actual repo link
        },

        {
            id: "pharmacy-system",
            title: "Pharmacy Management System 💊",
            description: (
                <>
                    <p>
                        <strong>Because even virtual pharmacies need good inventory control.</strong><br />
                        This project is a sleek, console-based Pharmacy Management System, fully built using Object-Oriented Programming in C++.<br />
                        It may not dispense real medicine, but it’s got the logic and structure to manage a real-world pharmacy’s digital shelves.
                    </p>

                    <h4>🧠 Why I Built It</h4>
                    <p>
                        I wanted to move beyond just writing classes in C++ — I wanted to build something useful that would:
                    </p>
                    <ul>
                        <li>✅ Apply OOP in a meaningful way</li>
                        <li>✅ Simulate a real-world scenario</li>
                        <li>✅ Let me practice data organization, filtering, and stock tracking</li>
                    </ul>
                    <p><em>Spoiler alert: I now know a lot about structuring medicine records in memory 🧠💊</em></p>

                    <h4>📌 Features – It’s Like a Console App with a White Coat</h4>
                    <ul>
                        <li>➕ Add Medicine – Register new drugs with all the necessary info</li>
                        <li>➖ Remove Medicine – Easily delete any entry</li>
                        <li>✏️ Modify Medicine – Update name, quantity, expiration — anything</li>
                        <li>📋 List All Medicines – View the full digital inventory</li>
                        <li>🔍 Search by Name – Quickly locate any specific medicine</li>
                        <li>📉 Low Stock Warning – Find which medicines need urgent restocking</li>
                        <li>⏳ Sort by Expiration Date – Stay ahead of soon-to-expire meds</li>
                        <li>🔟 View Top 10 – Quick snapshot of first 10 entries</li>
                        <li>❌ Exit – Graceful shutdown</li>
                    </ul>

                    <h4>🧱 Tech Stack</h4>
                    <ul>
                        <li>💻 <strong>C++</strong> – Core programming & OOP structure</li>
                        <li>🧠 <strong>OOP</strong> – Encapsulation, inheritance, modularity</li>
                        <li>🖥️ <strong>CLI</strong> – Console-based user interface</li>
                    </ul>

                    <h4>🎯 Goals & Takeaways</h4>
                    <ul>
                        <li>✔ Strengthened my C++ OOP design skills</li>
                        <li>✔ Practiced writing efficient, readable, modular code</li>
                        <li>✔ Built a real-world system without a database</li>
                        <li>✔ Realized that even pharmacy stock logic can be kind of… fun?</li>
                    </ul>

                    <h4>🚀 Getting Started</h4>
                    <pre>
git clone https://github.com/your-username/pharmacy-management.git<br />
cd pharmacy-management<br />
# Compile and run using your favorite C++ environment
      </pre>

                    <p><strong>It’s simple. It’s smart. It’s stocked.<br />
                        And best of all — it was built with purpose.</strong></p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/PharmacyApp"
        },

        {
            id: "it-relational-db",
            title: "IT Company Database – Relational Chaos, Structured Elegance 🗃️",
            description: (
                <>
                    <p>
                        This was my deep dive into the world of advanced relational databases —
                        a fully normalized system for managing <strong>employees, projects, clients, and financials</strong> for a fictional IT company.
                    </p>

                    <h4>🧠 What I Built</h4>
                    <ul>
                        <li>👥 <strong>Employee Management</strong> – Contracts, roles, work hours, and hierarchy</li>
                        <li>💼 <strong>Projects & Assignments</strong> – Task tracking by team and timeline</li>
                        <li>💸 <strong>Financials</strong> – Invoices, billing, and payment control</li>
                        <li>📊 <strong>Reports</strong> – Budgets, performance, and cross-team analytics</li>
                    </ul>

                    <h4>🛠️ Key Features</h4>
                    <ul>
                        <li>✅ <strong>Stored Procedures</strong> for centralized business logic</li>
                        <li>🔥 <strong>Triggers</strong> for auto-updates and constraints</li>
                        <li>🕵️ <strong>Views & Indexes</strong> for performance and reporting</li>
                        <li>🔄 <strong>Cursors</strong> — used sparingly, cursed frequently</li>
                    </ul>

                    <h4>😩 The Emotional Rollercoaster</h4>
                    <p>
                        I genuinely love databases… but nothing hurts quite like debugging a rollback inside a trigger
                        wrapped in a stored procedure guarded by 3 constraints and 2 inner joins. <br />
                        Did I learn? Yes. Would I do it again? Probably. Will I cry if I see another cursor? Absolutely.
                    </p>

                    <h4>📌 Key Concepts Practiced</h4>
                    <table className="cv2-table">
                        <thead>
                        <tr><th>Concept</th><th>Application</th></tr>
                        </thead>
                        <tbody>
                        <tr><td>🔁 Transactions</td><td>Rollback, Savepoints, Regret</td></tr>
                        <tr><td>🧠 Stored Procedures</td><td>Reusable, centralized DB logic</td></tr>
                        <tr><td>🔥 Triggers</td><td>Consistency (and chaos)</td></tr>
                        <tr><td>🕵️ Views & Indexes</td><td>Performance, readability</td></tr>
                        <tr><td>🔄 Cursors</td><td>Used as needed (painfully)</td></tr>
                        </tbody>
                    </table>

                    <h4>🧰 Tech Summary</h4>
                    <ul>
                        <li><strong>DBMS:</strong> Microsoft SQL Server</li>
                        <li><strong>Tools:</strong> SQL Server Management Studio (SSMS)</li>
                        <li><strong>Language:</strong> SQL (T-SQL dialect)</li>
                        <li><strong>Extras:</strong> Debugging, grit, sarcasm, and a mild existential crisis</li>
                    </ul>

                    <p>
                        In the end, I gained a real appreciation for the power (and fragility) of relational databases —
                        and the wisdom to avoid triggers that trigger my inner developer trauma 😅
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/ITCompany-Database" // Replace with real link
        },

        {
            id: "dsa-containers",
            title: "DSA Containers in C++ – Fear, Loops & Linked Lists 🧠",
            description: (
                <>
                    <p>
                        This repo is a custom-built collection of core <strong>data structures and algorithms</strong>, fully implemented in C++ from scratch — no STL, just raw logic and pointer magic.
                        Think of it as a DIY STL rebuilt through sleepless nights and segmentation faults.
                    </p>

                    <h4>🛠️ What I Built (By Hand. From Scratch.)</h4>
                    <table className="cv2-table">
                        <thead>
                        <tr>
                            <th>Container</th>
                            <th>Underlying Representation</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>🗺️ Map</td><td>Dynamic arrays, SLLA</td></tr>
                        <tr><td>🧮 Matrix</td><td>2D array / sparse matrix with SLLA</td></tr>
                        <tr><td>🔢 Set</td><td>Hashed lists or pointer lists</td></tr>
                        <tr><td>🌲 Tree</td><td>Pointer-based node systems</td></tr>
                        <tr><td>…and more</td><td>All with custom internal logic</td></tr>
                        </tbody>
                    </table>

                    <ul>
                        <li>⚙️ Implemented using: dynamic arrays, singly linked lists (SLL), SLLA, and manual memory allocation</li>
                        <li>🧠 Real pointer arithmetic to understand how memory models behave</li>
                        <li>😅 Hands-on debugging of the dreaded segmentation faults</li>
                    </ul>

                    <h4>🎯 Purpose & Goals</h4>
                    <ul>
                        <li>🔍 Demystify standard containers by implementing them manually</li>
                        <li>⚙️ Practice memory management, pointer logic, and data operations</li>
                        <li>📈 Build confidence in working low-level with C++</li>
                        <li>💡 Prepare for exams, interviews, and your own mental breakdowns 😅</li>
                    </ul>

                    <h4>😱 The Experience in One Sentence</h4>
                    <p>
                        A traumatizing, terrifying, yet strangely satisfying journey into the guts of data structures.
                    </p>

                    <p>
                        I finally understood the elegance behind the chaos — and the purpose of learning how containers really work at the core.
                    </p>

                    <h4>🚀 Getting Started</h4>
                    <pre>
git clone https://github.com/your-username/dsa-containers.git<br />
# Compile with g++ and run any of the main test files
      </pre>

                    <p>
                        Would I do it again? I am already retaking the class :')
                        Am I proud of it? Absolutely.
                        <em>And now I flinch less when I see <code>*ptr++</code>.</em>
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/DSA"
        },

        {
            id: "cisco-simulation",
            title: "Cisco Packet Tracer Network Simulation 🌐",
            description: (
                <>
                    <p>
                        This project was all about turning theory into a fully functional, visual, and structured network using <strong>Cisco Packet Tracer</strong>. I recreated a real-world topology with precision — implementing routing, VLANs, ACLs, and more.
                    </p>

                    <h4>🛠️ What I Built</h4>
                    <ul>
                        <li>🧭 <strong>Routing Protocols</strong> – Static + Dynamic routing across routers</li>
                        <li>🔄 <strong>VLAN Configuration</strong> – Separated traffic and managed segments securely</li>
                        <li>🔐 <strong>Security Rules</strong> – Applied ACLs to control traffic and simulate firewall behavior</li>
                        <li>🧱 <strong>Network Topology</strong> – Switches, routers, PCs, and servers — connected like the real design</li>
                        <li>📋 <strong>IP Scheme & Subnetting</strong> – Fully mapped addressing with subnet logic</li>
                    </ul>

                    <h4>🎯 What Made It Special</h4>
                    <p>
                        I wasn’t just connecting devices — I was designing a functioning system. This simulation taught me to think like a <strong>network architect</strong>, planning ahead and troubleshooting just like in a real-world setup.
                    </p>

                    <h4>🧠 Lessons Learned</h4>
                    <ul>
                        <li>From paper to simulation — understanding full project flow</li>
                        <li>How VLANs, routing, and subnetting interact</li>
                        <li>How ACLs affect accessibility and security</li>
                        <li>How to troubleshoot broken links and misconfigurations (because yes, I made plenty 😅)</li>
                    </ul>

                    <h4>💻 Bonus</h4>
                    <p>
                        Want to see what I recreated?<br />
                        Here's a snapshot of the original network I simulated:
                    </p>

                    <img
                        src="/topology-image.png" // Make sure you place the image in `public/` and rename accordingly
                        alt="Cisco Network Topology"
                        className="project-image"
                        style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    />

                    <p>
                        And in the repo, you’ll also find the original <code>.pkt</code> simulation file and configuration notes.
                    </p>
                </>
            ),
            github: "https://github.com/MalinaDumitrescu/NetworkSimulation" // Replace with actual repo
        }





    ];

    return (
        <main className="web-projects-container">
            <h1>🎓 Academic Projects</h1>
            <p className="intro-text">These are some of the projects I created during academic work or for university courses:</p>

            <nav className="project-toc">
                <h3>📋 Table of Contents</h3>
                <ul>
                    {academicProjects.map((project) => (
                        <li key={project.id}>
                            <a href={`#${project.id}`}>{project.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="project-list">
                {academicProjects.map((project) => (
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

export default Academic;
