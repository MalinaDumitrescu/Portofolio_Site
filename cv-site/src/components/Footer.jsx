import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Numele Tău. Toate drepturile rezervate.</p>
        </footer>
    );
}

export default Footer;
