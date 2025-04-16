import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/FunFacts.css';

function FunFacts() {
    const { t } = useTranslation();

    const facts = [
        t('fact1'),
        t('fact2'),
        t('fact3')
    ];

    return (
        <section className="fun-facts" data-aos="fade-up">
            <h2>{t('funFacts')}</h2>
            <div className="facts-container">
                {facts.map((fact, index) => (
                    <div className="fact-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                        <p>{fact}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FunFacts;
