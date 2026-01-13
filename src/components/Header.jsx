import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-neutral-50/90 backdrop-blur-sm shadow-sm transition-all duration-300">
      <nav className="container mx-auto px-6 h-16 flex justify-between items-center relative">
        <a href="#home" className="text-neutral-800 font-semibold text-xl">devcarlosperez</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            <li className="nav-item">
              <a href="#home" className="text-neutral-800 font-medium hover:text-neutral-500 transition-colors">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="text-neutral-800 font-medium hover:text-neutral-500 transition-colors">Mi Perfil</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="text-neutral-800 font-medium hover:text-neutral-500 transition-colors">Proyectos</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="text-neutral-800 font-medium hover:text-neutral-500 transition-colors">Contacto</a>
            </li>
          </ul>
        </div>
        
        {/* Mobile Menu Button - Hamburger */}
        <div className="md:hidden text-neutral-800">
           <button onClick={() => setIsOpen(true)} className="focus:outline-none">
             <i className="fa-solid fa-bars text-2xl"></i>
           </button>
        </div>

        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile Menu Sidebar */}
        <div className={`
          fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
           <div className="flex justify-end p-6">
             <button onClick={() => setIsOpen(false)} className="focus:outline-none">
               <i className="fa-solid fa-xmark text-2xl text-neutral-800 hover:text-red-500 transition-colors"></i>
             </button>
           </div>
           
           <ul className="flex flex-col px-8 gap-6 mt-2">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)} className="block text-lg text-neutral-800 font-medium hover:text-neutral-500 transition-colors border-b border-gray-100 pb-2">Inicio</a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg text-neutral-800 font-medium hover:text-neutral-500 transition-colors border-b border-gray-100 pb-2">Mi Perfil</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsOpen(false)} className="block text-lg text-neutral-800 font-medium hover:text-neutral-500 transition-colors border-b border-gray-100 pb-2">Proyectos</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg text-neutral-800 font-medium hover:text-neutral-500 transition-colors border-b border-gray-100 pb-2">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header