import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getLinkClasses = (section) => `text-base font-medium transition-colors ${
    activeSection === section ? 'text-blue-600 font-bold' : 'text-neutral-800 hover:text-neutral-500 dark:text-gray-200 dark:hover:text-blue-400'
  }`;

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-neutral-50/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm transition-all duration-300">
      <nav className="container mx-auto px-6 h-16 flex justify-between items-center relative">
        <a href="#home" className="text-neutral-800 dark:text-white font-semibold text-xl">devcarlosperez</a>
        
        {/* Desktop Menu */}
        <div className="hidden min-[833px]:flex items-center gap-8">
          <ul className="flex gap-8">
            <li className="nav-item">
              <a href="#home" className={getLinkClasses('home')}>{t('nav.home')}</a>
            </li>
            <li className="nav-item">
              <a href="#about" className={getLinkClasses('about')}>{t('nav.about')}</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className={getLinkClasses('projects')}>{t('nav.projects')}</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={getLinkClasses('contact')}>{t('nav.contact')}</a>
            </li>
          </ul>
          <button 
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')} 
            className="text-neutral-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-2 cursor-pointer"
            aria-label="Cambiar idioma"
          >
            <i className="fa-solid fa-globe text-lg"></i>
            <span>{i18n.language === 'es' ? 'EN' : 'ES'}</span>
          </button>
          
          <button
            onClick={toggleTheme}
            className="text-neutral-800 dark:text-yellow-400 hover:text-blue-600 dark:hover:text-yellow-300 transition-colors cursor-pointer"
            aria-label="Alternar tema"
          >
             {theme === 'light' ? (
                <i className="fa-solid fa-moon text-lg"></i>
             ) : (
                <i className="fa-solid fa-sun text-lg"></i>
             )}
          </button>
        </div>
        
        {/* Mobile Menu Button - Hamburger */}
        <div className="min-[833px]:hidden text-neutral-800 dark:text-white">
           <button onClick={() => setIsOpen(true)} className="focus:outline-none cursor-pointer" aria-label="Abrir menú">
             <i className="fa-solid fa-bars text-2xl"></i>
           </button>
        </div>

        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 min-[833px]:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile Menu Sidebar */}
        <div className={`
          fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out min-[833px]:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
           <div className="flex justify-end p-6">
             <button onClick={() => setIsOpen(false)} className="focus:outline-none cursor-pointer" aria-label="Cerrar menú">
               <i className="fa-solid fa-xmark text-2xl text-neutral-800 hover:text-red-500 transition-colors"></i>
             </button>
           </div>
           
           <ul className="flex flex-col px-8 gap-6 mt-2">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)} className={`block text-lg font-medium transition-colors border-b border-gray-100 pb-2 ${activeSection === 'home' ? 'text-blue-600 font-bold' : 'text-neutral-800 hover:text-neutral-500'}`}>{t('nav.home')}</a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)} className={`block text-lg font-medium transition-colors border-b border-gray-100 pb-2 ${activeSection === 'about' ? 'text-blue-600 font-bold' : 'text-neutral-800 hover:text-neutral-500'}`}>{t('nav.about')}</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)} className={`block text-lg font-medium transition-colors border-b border-gray-100 pb-2 ${activeSection === 'projects' ? 'text-blue-600 font-bold' : 'text-neutral-800 hover:text-neutral-500'}`}>{t('nav.projects')}</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)} className={`block text-lg font-medium transition-colors border-b border-gray-100 pb-2 ${activeSection === 'contact' ? 'text-blue-600 font-bold' : 'text-neutral-800 hover:text-neutral-500'}`}>{t('nav.contact')}</a>
            </li>
            <li>
              <button 
                onClick={() => { changeLanguage(i18n.language === 'es' ? 'en' : 'es'); setIsOpen(false); }} 
                className="w-full text-left flex items-center gap-3 text-lg font-medium text-neutral-800 hover:text-neutral-500 border-b border-gray-100 pb-2 cursor-pointer"
              >
                <i className="fa-solid fa-globe text-xl"></i>
                <span>{i18n.language === 'es' ? 'English' : 'Español'}</span>
              </button>
            </li>
            
            <li>
              <button 
                onClick={() => { toggleTheme(); setIsOpen(false); }} 
                className="w-full text-left flex items-center gap-3 text-lg font-medium text-neutral-800 hover:text-neutral-500 pb-2 cursor-pointer"
              >
                {theme === 'light' ? (
                    <>
                        <i className="fa-solid fa-moon text-xl"></i>
                        <span>{t('theme.darkMode')}</span>
                    </>
                ) : (
                    <>
                        <i className="fa-solid fa-sun text-xl text-yellow-500"></i>
                         <span>{t('theme.lightMode')}</span>
                    </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header