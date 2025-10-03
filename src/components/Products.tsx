import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const products = [
  { name: 'Stent Vascular', desc: 'Alta performance e segurança.' },
  { name: 'Cateter de Endoscopia', desc: 'Precisão e confiabilidade.' },
  { name: 'Kit Cirúrgico', desc: 'Completo para procedimentos avançados.' }
];

export const Products = () => {
  const { t } = useTranslation();

  return (
    <section className="products" id="products">
      <h2>{t('products.title')}</h2>
      <p>{t('products.desc')}</p>
      <div className="product-list">
        {products.map((prod, idx) => (
          <motion.div
            className="product-card"
            key={prod.name}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{prod.name}</h3>
            <p>{prod.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
