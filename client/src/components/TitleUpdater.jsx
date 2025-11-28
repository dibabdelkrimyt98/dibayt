// src/components/TitleUpdater.jsx
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

// This component is designed to run once and update the title on every route change
const TitleUpdater = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Define a map to link route paths to translation keys
  // This allows the title to be correctly translated (e.g., "Works" -> "Projets")
  const titleMap = {
    '/': 'nav_welcome',
    '/works': 'nav_works',
    '/academic_career': 'nav_academic',
    '/blog': 'nav_blog',
    '/contact': 'nav_contact',
  };

  useEffect(() => {
    // 1. Get the current path (e.g., /works)
    const path = location.pathname;
    
    // 2. Look up the translation key
    const titleKey = titleMap[path] || 'Dib-Dev'; // Default to a general title key

    // 3. Get the translated name and construct the final title
    const translatedTitle = t(titleKey);
    
    // 4. Set the browser document title
    document.title = `${translatedTitle} | ${t('Dib-Dev')}`; 
    
    // Cleanup: This effect runs whenever location or language changes
  }, [location, t]); // The 't' dependency ensures the title updates when language changes

  return null; // This component doesn't render anything visible
};

export default TitleUpdater;