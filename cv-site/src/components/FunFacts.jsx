import React, { useRef } from 'react';
import '../styles/FunFacts.css';

import macarons from '../assets/funfacts/macarons.jpg';
import jazzVideo from '../assets/funfacts/jazz.mp4';
import alps from '../assets/funfacts/alps.jpg';

function FunFacts() {
    const videoRef = useRef(null);

    const mediaItems = [
        { type: 'image', src: macarons, alt: 'Macarons' },
        { type: 'image', src: alps, alt: 'Alps' },       // acum poza cu Alpii e pe poziția 2
        { type: 'video', src: jazzVideo, alt: 'Jazz Video' }  // iar videoclipul trece jos
    ];

    return (
        <section className="fun-facts" data-aos="fade-up">
            <div className="funfacts-images-only">
                {mediaItems.map((item, i) => (
                    <div className="image-card" key={i}>
                        {item.type === 'image' ? (
                            <img src={item.src} alt={item.alt} />
                        ) : (
                            <video
                                ref={videoRef}
                                src={item.src}
                                muted
                                loop
                                playsInline
                                className="video-content"
                                onMouseEnter={() => videoRef.current && videoRef.current.play()}
                                onMouseLeave={() => videoRef.current && videoRef.current.pause()}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FunFacts;
