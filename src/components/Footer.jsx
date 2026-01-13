import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-8 bg-gray-900 text-white text-center">
      <p>{t('footer')}</p>
    </footer>
  );
};

export default Footer;