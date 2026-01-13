import React from "react";

const MyProfile = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Mi Perfil
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Technologies */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-300 ring-1 ring-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-gray-800 font-bold text-xl mb-6 text-center">
              Tecnologías
            </h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 w-fit mx-auto">
              <article className="flex gap-3 justify-start">
                <i className="fa-solid fa-circle-check text-black mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">React</h4>
                  <span className="text-xs text-gray-500 block">
                    Intermedio
                  </span>
                </div>
              </article>
              <article className="flex gap-3 justify-start">
                <i className="fa-solid fa-circle-check text-black mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Node.js
                  </h4>
                  <span className="text-xs text-gray-500 block">Básico</span>
                </div>
              </article>
              <article className="flex gap-3 justify-start">
                <i className="fa-solid fa-circle-check text-black mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Express
                  </h4>
                  <span className="text-xs text-gray-500 block">
                    Intermedio
                  </span>
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
                  <h4 className="font-semibold text-gray-800 text-sm">
                    SQL/Oracle
                  </h4>
                  <span className="text-xs text-gray-500 block">Básico</span>
                </div>
              </article>
              <article className="flex gap-3 justify-start">
                <i className="fa-solid fa-circle-check text-black mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Firebase
                  </h4>
                  <span className="text-xs text-gray-500 block">Básico</span>
                </div>
              </article>
              <article className="flex gap-3 justify-start">
                <i className="fa-solid fa-circle-check text-black mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Postman
                  </h4>
                  <span className="text-xs text-gray-500 block">Básico</span>
                </div>
              </article>
              <article className="flex gap-3 justify-start">
                <i className="fa-solid fa-circle-check text-black mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Figma</h4>
                  <span className="text-xs text-gray-500 block">Básico</span>
                </div>
              </article>
              <article className="flex gap-3 justify-start">
                <i className="fa-solid fa-circle-check text-black mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Git/GitHub
                  </h4>
                  <span className="text-xs text-gray-500 block">
                    Intermedio
                  </span>
                </div>
              </article>
              <article className="flex gap-3 justify-start">
                <i className="fa-solid fa-circle-check text-black mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Docker
                  </h4>
                  <span className="text-xs text-gray-500 block">Básico</span>
                </div>
              </article>
            </div>
          </div>

          {/* Card 2: Strengths */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-300 ring-1 ring-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-gray-800 font-bold text-xl mb-6 text-center">
              Fortalezas
            </h3>
            <div className="grid grid-cols-1 gap-4 w-fit mx-auto">
              <article className="flex gap-3 items-center">
                <i className="fa-solid fa-circle-check text-black"></i>
                <h4 className="font-semibold text-gray-700 text-sm word-spacing-[0.25rem]">
                  Proactividad
                </h4>
              </article>
              <article className="flex gap-3 items-center">
                <i className="fa-solid fa-circle-check text-black"></i>
                <h4 className="font-semibold text-gray-700 text-sm word-spacing-[0.25rem]">
                  Trabajo en equipo
                </h4>
              </article>
              <article className="flex gap-3 items-center">
                <i className="fa-solid fa-circle-check text-black"></i>
                <h4 className="font-semibold text-gray-700 text-sm word-spacing-[0.25rem]">
                  Adaptabilidad
                </h4>
              </article>
              <article className="flex gap-3 items-center">
                <i className="fa-solid fa-circle-check text-black"></i>
                <h4 className="font-semibold text-gray-700 text-sm word-spacing-[0.25rem]">
                  Creatividad
                </h4>
              </article>
              <article className="flex gap-3 items-center">
                <i className="fa-solid fa-circle-check text-black"></i>
                <h4 className="font-semibold text-gray-700 text-sm word-spacing-[0.25rem]">
                  Persistencia
                </h4>
              </article>
            </div>
          </div>

          {/* Card 3: Objective */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-300 ring-1 ring-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-gray-800 font-bold text-xl mb-6 text-center">
              Objetivo
            </h3>
            <div className="space-y-6 text-center">
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-1">
                  Puesto Buscado
                </h4>
                <p className="text-gray-500 text-sm">
                  Desarrollador Junior / Prácticas
                </p>
              </div>
              <div className="w-16 h-[1px] bg-gray-200 mx-auto"></div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-1">
                  Modalidad
                </h4>
                <p className="text-gray-500 text-sm">
                  Remoto / Híbrido / Presencial
                </p>
              </div>
              <div className="w-16 h-[1px] bg-gray-200 mx-auto"></div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-1">
                  Enfoque
                </h4>
                <p className="text-gray-500 text-sm">
                  Full Stack Web Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;