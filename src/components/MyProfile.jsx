import React from "react";

const MyProfile = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 border-gray-200 border-2">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Mi Perfil
        </h2>
        
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 2. Technologies and Hard Skills */}
                <div className="flex flex-col gap-8">
                   <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <i className="fa-solid fa-laptop-code text-gray-700"></i> Tecnologías
                        </h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-4">
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" className="h-8"/>
                            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" className="h-8"/>
                            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" className="h-8"/>
                            <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" className="h-8"/>
                            <img src="https://img.shields.io/badge/oracle-%23F80000.svg?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle" className="h-8"/>
                            <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" alt="Firebase" className="h-8"/>
                            <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" className="h-8"/>
                            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" className="h-8"/>
                            <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" className="h-8"/>
                            <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" className="h-8"/>
                            <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" className="h-8"/>
                            <img src="https://img.shields.io/badge/odoo-%232E7D32.svg?style=for-the-badge&logo=odoo&logoColor=white" alt="Odoo" className="h-8"/>
                        </div>
                   </div>
                   
                   <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <i className="fa-solid fa-graduation-cap text-gray-700"></i> Habilidades Duras
                        </h3>
                        
                        <div className="space-y-6">
                             <div>
                                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Idiomas</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className="font-semibold text-gray-800">Español</div>
                                        <div className="text-sm text-gray-500">Nativo</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className="font-semibold text-gray-800">Inglés</div>
                                        <div className="text-sm text-gray-500">Básico (A2)</div>
                                    </div>
                                </div>
                             </div>
                             
                             <div>
                                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Conocimientos</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <i className="fa-solid fa-check text-green-500 text-sm"></i> Desarrollo APIs REST
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <i className="fa-solid fa-check text-green-500 text-sm"></i> Programación Orientada a Objetos
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <i className="fa-solid fa-check text-green-500 text-sm"></i> Bases de Datos SQL
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <i className="fa-solid fa-check text-green-500 text-sm"></i> Diseño Responsive
                                    </li>
                                </ul>
                             </div>
                        </div>
                   </div>
                </div>

                {/* 3. Soft Skills */}
                <div className="flex flex-col h-full">
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <i className="fa-solid fa-users text-gray-700"></i> Habilidades Blandas
                        </h3>
                        
                        <div className="space-y-6">
                            <p className="text-gray-600 mb-6">
                                Mis fortalezas personales que aporto al equipo de trabajo para fomentar un ambiente productivo y colaborativo.
                            </p>
                            
                            <div className="grid grid-cols-1 gap-4">
                               {[
                                 { icon: "fa-lightbulb", title: "Proactividad", desc: "Iniciativa para anticipar necesidades y proponer soluciones." },
                                 { icon: "fa-people-group", title: "Trabajo en Equipo", desc: "Colaboración efectiva y comunicación transparente." },
                                 { icon: "fa-rotate", title: "Adaptabilidad", desc: "Flexibilidad ante cambios y nuevos desafíos." },
                                 { icon: "fa-puzzle-piece", title: "Resolución de Problemas", desc: "Enfoque analítico para superar obstáculos técnicos." }
                               ].map((skill, index) => (
                                   <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                                       <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 text-gray-700">
                                           <i className={`fa-solid ${skill.icon}`}></i>
                                       </div>
                                       <div>
                                           <h4 className="font-bold text-gray-800">{skill.title}</h4>
                                           <p className="text-sm text-gray-500 mt-1">{skill.desc}</p>
                                       </div>
                                   </div>
                               ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 1. Work Experience */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                   <i className="fa-solid fa-briefcase text-gray-700"></i> Experiencia Laboral
                </h3>
                <div className="relative pl-8 border-l-2 border-gray-200 space-y-10">
                    <div className="relative group">
                        {/* Dot */}
                        <span className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-gray-900 group-hover:scale-110 transition-transform"></span>
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                           <h4 className="text-xl font-bold text-gray-800">Prácticas / Desarrollador Junior</h4>
                           <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">05/2025 – 09/2025</span>
                        </div>
                        
                        <div className="text-base text-gray-700 font-semibold mb-3">
                            Centro de Estudios KUMA
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed max-w-3xl">
                             Desarrollo de aplicación en Odoo. Apoyo en tareas de desarrollo y mantenimiento de sistemas ERP. Colaboración con el equipo técnico para la implementación de nuevas funcionalidades.
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