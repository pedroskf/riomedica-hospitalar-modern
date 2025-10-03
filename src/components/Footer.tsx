import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <span>Rio Médica Hospitalar © {new Date().getFullYear()} - {t('footer.rights')}</span>
    </footer>
  );
};
