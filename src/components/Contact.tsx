import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <h2>{t('contact.title')}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={t('contact.name')}
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t('contact.email')}
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder={t('contact.message')}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-primary">{t('contact.send')}</button>
      </form>
    </section>
  );
};
