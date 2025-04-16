import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/StatusBadge.css';

function StatusBadge() {
    const { t } = useTranslation();

    return (
        <div className="status-badge" title={t('status')}>
            <span className="dot" />
            <span className="text">{t('status')}</span>
        </div>
    );
}

export default StatusBadge;
