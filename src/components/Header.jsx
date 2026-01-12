import React from 'react';

function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-neutral-50/90 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#home" className="text-neutral-800 font-semibold text-xl">Portafolio</a>
        
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            <li className="nav-item">
              <a href="#home" className="text-neutral-800 font-medium hover:text-neutral-500 transition-colors">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="text-neutral-800 font-medium hover:text-neutral-500 transition-colors">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="text-neutral-800 font-medium hover:text-neutral-500 transition-colors">Competencias</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="text-neutral-800 font-medium hover:text-neutral-500 transition-colors">Contacto</a>
            </li>
          </ul>
        </div>
        
        {/* Mobile menu placeholder */}
        <div className="md:hidden text-neutral-800">
           <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header