import React from 'react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <h2>{t('about.title')}</h2>
      <p>{t('about.desc')}</p>
    </section>
  );
};
