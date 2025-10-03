import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <a href="#contact" className="btn-primary">{t('hero.cta')}</a>
      </motion.div>
    </section>
  );
};
