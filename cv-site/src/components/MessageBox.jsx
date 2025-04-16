import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import '../styles/MessageBox.css';

function MessageBox() {
    const { t } = useTranslation();
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        setSending(true);

        emailjs.send(
            'service_ntaubki',          // 🟦 Înlocuiește cu Service ID-ul tău
            'template_nrt6yah',         // 🟨 Înlocuiește cu Template ID-ul tău
            {
                name: 'Vizitator',       // Sau poți adăuga un câmp pt nume
                title: 'Mesaj nou',
                message: message
            },
            'ZnyBjzBNidCbUlU4c'          // 🟧 Înlocuiește cu Public Key-ul din EmailJS
        )
            .then(() => {
                setSent(true);
                setMessage('');
            })
            .catch(err => console.error(err))
            .finally(() => setSending(false));
    };

    return (
        <section className="message-box" data-aos="fade-up">
            <h2>📬 {t('leaveMessage')}</h2>

            <form onSubmit={sendEmail}>
    <textarea
        placeholder={t('writeMessage')}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
    />

                <button type="submit" disabled={sending || sent}>
                    {sending ? t('sending') + '...' : sent ? t('sent') : t('send') + ' 💌'}
                </button>

                {sent && (
                    <div className="success-message">
                        <span>🎉</span> {t('message_sent')}
                    </div>
                )}
            </form>

        </section>
    );
}

export default MessageBox;
