import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Column: Info */}
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

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
              <a href="#contact" className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-black hover:scale-105 transition-all duration-300">
                Contacto
              </a>
              <a href="#projects" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold shadow hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center gap-2">
                Ver Proyectos <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-8 text-gray-600 items-center">
               <a href="https://github.com/devcarlosperez" target="_blank" rel="noreferrer" className="text-4xl hover:text-black transition-colors"><i className="fa-brands fa-github"></i></a>
               <a href="https://www.linkedin.com/in/carlos-p%C3%A9rez-santana-3967a83a5/" target="_blank" rel="noreferrer" className="text-4xl hover:text-blue-700 transition-colors"><i className="fa-brands fa-linkedin"></i></a>
               <a href="/cv.pdf" download="cv.pdf" target="_blank" className="text-lg font-medium hover:text-black underline underline-offset-4 flex items-center">Descargar CV</a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-72 h-72 md:w-100 md:h-100">
              {/* Blob background */}
              <div className="absolute inset-0 bg-gray-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob_7s_infinite] opacity-50"></div>
              
              {/* Image container */}
              <div className="absolute inset-2 bg-white rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
                 {/* <img src="/tu-foto.jpg" alt="Perfil" className="w-full h-full object-cover" /> */}
                 <span className="text-gray-400 font-medium">Foto</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Value Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          
          {/* Card 1: Technologies */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-300 ring-1 ring-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h3 className="text-gray-800 font-bold text-xl mb-6 text-center">Tecnologías</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 w-fit mx-auto">
               <article className="flex gap-3 justify-start">
                 <i className="fa-solid fa-circle-check text-black mt-1"></i>
                 <div>
                   <h4 className="font-semibold text-gray-800 text-sm">React</h4>
                   <span className="text-xs text-gray-500 block">Intermedio</span>
                 </div>
               </article>
               <article className="flex gap-3 justify-start">
                 <i className="fa-solid fa-circle-check text-black mt-1"></i>
                 <div>
                   <h4 className="font-semibold text-gray-800 text-sm">Node.js</h4>
                   <span className="text-xs text-gray-500 block">Básico</span>
                 </div>
               </article>
               <article className="flex gap-3 justify-start">
                 <i className="fa-solid fa-circle-check text-black mt-1"></i>
                 <div>
                   <h4 className="font-semibold text-gray-800 text-sm">Express</h4>
                   <span className="text-xs text-gray-500 block">Intermedio</span>
                 </div>
               </article>
               <article className="flex gap-3 justify-start">
                 <i className="fa-solid fa-circle-check text-black mt-1"></i>
                 <div>
                   <h4 className="font-semibold text-gray-800 text-sm">SQL/Oracle</h4>
                   <span className="text-xs text-gray-500 block">Básico</span>
                 </div>
               </article>
               <article className="flex gap-3 justify-start">
                 <i className="fa-solid fa-circle-check text-black mt-1"></i>
                 <div>
                   <h4 className="font-semibold text-gray-800 text-sm">Git/GitHub</h4>
                   <span className="text-xs text-gray-500 block">Intermedio</span>
                 </div>
               </article>
               <article className="flex gap-3 justify-start">
                 <i className="fa-solid fa-circle-check text-black mt-1"></i>
                 <div>
                   <h4 className="font-semibold text-gray-800 text-sm">Java</h4>
                   <span className="text-xs text-gray-500 block">Básico</span>
                 </div>
               </article>
               <article className="flex gap-3 justify-start">
                 <i className="fa-solid fa-circle-check text-black mt-1"></i>
                 <div>
                   <h4 className="font-semibold text-gray-800 text-sm">Postman</h4>
                   <span className="text-xs text-gray-500 block">Intermedio</span>
                 </div>
               </article>
               <article className="flex gap-3 justify-start">
                 <i className="fa-solid fa-circle-check text-black mt-1"></i>
                 <div>
                   <h4 className="font-semibold text-gray-800 text-sm">Figma</h4>
                   <span className="text-xs text-gray-500 block">Básico</span>
                 </div>
               </article>
            </div>
          </div>

          {/* Card 2: Strengths */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-300 ring-1 ring-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
             <h3 className="text-gray-800 font-bold text-xl mb-6 text-center">Fortalezas</h3>
             <div className="grid grid-cols-1 gap-4 w-fit mx-auto">
                <article className="flex gap-3 items-center">
                  <i className="fa-solid fa-circle-check text-black"></i>
                  <h4 className="font-semibold text-gray-700 text-sm">Proactividad</h4>
                </article>
                <article className="flex gap-3 items-center">
                  <i className="fa-solid fa-circle-check text-black"></i>
                  <h4 className="font-semibold text-gray-700 text-sm">Trabajo en equipo</h4>
                </article>
                <article className="flex gap-3 items-center">
                  <i className="fa-solid fa-circle-check text-black"></i>
                  <h4 className="font-semibold text-gray-700 text-sm">Adaptabilidad</h4>
                </article>
                <article className="flex gap-3 items-center">
                  <i className="fa-solid fa-circle-check text-black"></i>
                  <h4 className="font-semibold text-gray-700 text-sm">Creatividad</h4>
                </article>
                <article className="flex gap-3 items-center">
                  <i className="fa-solid fa-circle-check text-black"></i>
                  <h4 className="font-semibold text-gray-700 text-sm">Persistencia</h4>
                </article>
             </div>
          </div>

          {/* Card 3: Objective */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-300 ring-1 ring-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
             <h3 className="text-gray-800 font-bold text-xl mb-6 text-center">Objetivo</h3>
             <div className="space-y-6 text-center">
                <div>
                   <h4 className="font-bold text-gray-800 text-lg mb-1">Puesto Buscado</h4>
                   <p className="text-gray-500 text-sm">Desarrollador Junior / Prácticas</p>
                </div>
                <div className="w-16 h-[1px] bg-gray-200 mx-auto"></div>
                <div>
                   <h4 className="font-bold text-gray-800 text-lg mb-1">Modalidad</h4>
                   <p className="text-gray-500 text-sm">Remoto / Híbrido / Presencial</p>
                </div>
                <div className="w-16 h-[1px] bg-gray-200 mx-auto"></div>
                <div>
                   <h4 className="font-bold text-gray-800 text-lg mb-1">Enfoque</h4>
                   <p className="text-gray-500 text-sm">Full Stack Web Development</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
