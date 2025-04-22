import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/FunFacts.css';

function FunFacts() {
    const { t } = useTranslation();

    const facts = [
        { emoji: '🏔️', text: t('fact1') },
        { emoji: '🇩🇪', text: t('fact2') },
        { emoji: '⚜️', text: t('fact3') }
    ];

    return (
        <section className="fun-facts" data-aos="fade-up">
            <h2>{t('funFacts')}</h2>
            <div className="facts-container">
                {facts.map((fact, index) => (
                    <div className="fact-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                        <p>
                            {fact.emoji} {fact.text.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < fact.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                        </p>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default FunFacts;
