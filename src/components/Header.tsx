import React from 'react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <div className="logo">Rio Médica</div>
      <nav>
        <a href="#home">{t('nav.home')}</a>
        <a href="#products">{t('nav.products')}</a>
        <a href="#about">{t('nav.about')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </nav>
      <div className="lang-switch">
        <button onClick={() => i18n.changeLanguage('pt')}>PT</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>
    </header>
  );
};
