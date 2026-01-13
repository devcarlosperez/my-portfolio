import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Contacto</h2>
        
        <div className="flex flex-col min-[833px]:flex-row items-center gap-20 max-w-4xl mx-auto">
          {/* Left: Contact Info */}
          <div className="flex-1">
            <div className="bg-white rounded-[2rem] border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm md:text-base">carlosperezsantana04@gmail.com</p>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Ubicación</h3>
                  <p className="text-gray-600 text-sm md:text-base">Las Palmas de Gran Canaria, Gran Canaria</p>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Disponibilidad</h3>
                  <p className="text-gray-600 text-sm md:text-base">Abierto a oportunidades de trabajo</p>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Redes Sociales</h3>
                  <div className="flex justify-center md:justify-start gap-6">
                    <a 
                      href="https://github.com/devcarlosperez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors text-2xl"
                      aria-label="GitHub de Carlos Pérez"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/carlos-p%C3%A9rez-santana-3967a83a5/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-700 transition-colors text-2xl"
                      aria-label="LinkedIn de Carlos Pérez"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: GIF */}
          <div className="flex-1 max-w-full">
            <div className="bg-white rounded-full overflow-hidden shadow-2xl border-4 border-white h-96 aspect-square max-w-full">
              <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWM0bmJod282eWZ5N3E3ZnM3bzVrcTl1bHRhd29ubW4ydm83aDh2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ptqAPgghLtHOa0SLJS/giphy.gif" alt="Contact animation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;