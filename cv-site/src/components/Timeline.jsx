import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Timeline.css';

function Timeline() {
    const { t } = useTranslation();

    const items = [
        { year: '2021', title: t('t1_title'), description: t('t1_desc') },
        { year: '2022', title: t('t2_title'), description: t('t2_desc') },
        { year: '2023', title: t('t3_title'), description: t('t3_desc') },
        { year: '2024', title: t('t4_title'), description: t('t4_desc') }
    ];

    return (
        <section className="timeline-section" id="timeline">
            <h2 data-aos="fade-up">{t('timeline')}</h2>
            <div className="timeline">
                {items.map((item, index) => (
                    <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <h3>{item.year}</h3>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Timeline;
