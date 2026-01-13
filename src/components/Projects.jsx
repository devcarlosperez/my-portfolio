import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CanAccesible",
      image: "/canaccesible.webp", 
      github: "https://github.com/devcarlosperez/CanAccesible",
      live: "https://canaccesible.es/"
    },
    {
      id: 2,
      title: "The Lord Of The Rings Wiki",
      image: "/lord-of-the-rings.webp",
      github: "https://github.com/devcarlosperez/the-lord-of-the-rings-project",
      live: "https://lord-of-the-rings-4444a.web.app/characters"
    },
    {
      id: 3,
      title: "HelloJapan",
      image: "/hello-japan.webp",
      github: "https://github.com/devcarlosperez/japan-project",
      live: "https://hellojapan-3523b.web.app/index.html"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Mis Proyectos</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div key={project.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-white rounded-[2rem] border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="rounded-[1.5rem] overflow-hidden mb-6 aspect-square bg-gray-100 relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 text-center mb-6">{project.title}</h3>
              
              <div className="flex justify-center gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  Github
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
