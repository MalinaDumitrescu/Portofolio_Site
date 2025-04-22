import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import CV1 from './pages/CV1';
import CV2 from './pages/CV2';
import Projects from './pages/Projects';

import Personal from './pages/projects/Personal.jsx';
import Academic from './pages/projects/Academic.jsx';


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
                        <Route path="/projects/personal" element={<Personal />} />
                        <Route path="/projects/academic" element={<Academic />} />
                    </Routes>
                </main>
                <Footer />
                <BackToTop />
            </div>
        </Router>
    );
}

export default App;
