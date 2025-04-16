import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import '../styles/BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <button
            className={`back-to-top ${visible ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </button>
    );
}

export default BackToTop;
