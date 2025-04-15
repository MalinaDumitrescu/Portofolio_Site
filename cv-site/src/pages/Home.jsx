import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Bine ai venit!</h1>
            <p>Aici poți vizualiza CV-ul meu profesional și creativ.</p>

            <div className="button-group">
                <Link to="/cv1" className="cv-button">CV Profesional</Link>
                <Link to="/cv2" className="cv-button">CV Creativ</Link>
            </div>
        </div>
    );
}

export default Home;
