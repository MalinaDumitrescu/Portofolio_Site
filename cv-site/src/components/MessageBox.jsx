import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import '../styles/MessageBox.css';

function MessageBox() {
    const { t } = useTranslation();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send('service_ntaubki', 'template_nrt6yah', {
            message,
        }, 'ZnyBjzBNidCbUlU4c')
            .then(() => {
                setLoading(false);
                setSent(true);
                setMessage('');
                setTimeout(() => setSent(false), 5000);
            })
            .catch((error) => {
                console.error('Eroare la trimitere:', error);
                setLoading(false);
            });
    };

    return (
        <div className="message-container" data-aos="fade-up">
            <h2>📬 {t('contactMe')}</h2>
            <form onSubmit={sendMessage}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('placeholder')}
                    rows="6"
                />
                <button type="submit" disabled={loading || !message}>
                    {loading ? 'Trimitere...' : t('send')} 💌
                </button>
            </form>

            {sent && <div className="thank-you-emoji">🎉 Mulțumesc! Mesajul a fost trimis!</div>}
        </div>
    );
}

export default MessageBox;
