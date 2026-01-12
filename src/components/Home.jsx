import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          
          {/* Columna Izquierda: Información */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
               <span className="w-7 h-px bg-gray-400"></span>
               <span className="font-medium text-gray-500 uppercase tracking-widest text-sm">Estudiante de Desarrollo Web</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              ¡Hola! Soy <br/>
              <span className="text-black">Carlos</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
              Desarrollador Junior | React + Node.js | APIs REST
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              Soy estudiante de Desarrollo de Aplicaciones Web, apasionado por la tecnología y la innovación. Me especializo en crear aplicaciones web funcionales, robustas y escalables. Busco mi primera oportunidad para aportar valor y seguir creciendo profesionalmente.
            </p>

            {/* Accesos rápidos */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
              <a href="#contact" className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-black hover:scale-105 transition-all duration-300">
                Contacto
              </a>
              <a href="#projects" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold shadow hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center gap-2">
                Ver Proyectos <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-8 text-gray-600 items-center">
               <a href="https://github.com" target="_blank" rel="noreferrer" className="text-4xl hover:text-black transition-colors"><i className="fa-brands fa-github"></i></a>
               <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-4xl hover:text-blue-700 transition-colors"><i className="fa-brands fa-linkedin"></i></a>
               <a href="/cv.pdf" target="_blank" className="text-lg font-medium hover:text-black underline underline-offset-4 flex items-center">Descargar CV</a>
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-72 h-72 md:w-100 md:h-100">
              {/* Forma orgánica de fondo similar a la referencia */}
              <div className="absolute inset-0 bg-gray-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob_7s_infinite] opacity-50"></div>
              
              {/* Contenedor de imagen con borde suave */}
              <div className="absolute inset-2 bg-white rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
                 {/* <img src="/tu-foto.jpg" alt="Perfil" className="w-full h-full object-cover" /> */}
                 <span className="text-gray-400 font-medium">Tu Foto</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Bloques de Valor - Estilo "Stats" minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform border border-gray-100/50">
            <h3 className="text-gray-900 font-bold text-lg mb-2 flex items-center gap-2">
              <i className="fa-solid fa-code text-xl"></i> Tecnologías
            </h3>
            <p className="text-gray-500 text-sm">React, JavaScript, Node.js, Java, MySQL, Tailwind.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform border border-gray-100/50">
             <h3 className="text-gray-900 font-bold text-lg mb-2 flex items-center gap-2">
              <i className="fa-solid fa-shield-halved text-xl"></i> Fortalezas
            </h3>
            <p className="text-gray-500 text-sm">Código limpio, adaptabilidad y resolución proactiva.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform border border-gray-100/50">
             <h3 className="text-gray-900 font-bold text-lg mb-2 flex items-center gap-2">
              <i className="fa-solid fa-briefcase text-xl"></i> Objetivo
            </h3>
            <p className="text-gray-500 text-sm">Prácticas o Junior Full Stack (Remoto/Híbrido).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
