import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import CV1 from './pages/CV1';
import CV2 from './pages/CV2';
import Projects from './pages/Projects';

import WebProjects from './pages/projects/WebProjects';
import MobileProjects from './pages/projects/MobileProjects';
import AcademicProjects from './pages/projects/AcademicProjects';
import FunProjects from './pages/projects/FunProjects';


import './styles/App.css';

import BackToTop from './components/BackToTop';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cv1" element={<CV1 />} />
                        <Route path="/cv2" element={<CV2 />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/web" element={<WebProjects />} />
                        <Route path="/projects/mobile" element={<MobileProjects />} />
                        <Route path="/projects/academic" element={<AcademicProjects />} />
                        <Route path="/projects/fun" element={<FunProjects />} />
                    </Routes>
                </main>
                <Footer />
                <BackToTop />
            </div>
        </Router>
    );
}

export default App;
