import React, { useEffect } from "react";
import Typed from "typed.js";
import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const typed = new Typed(".typed-element", {
      strings: [t('intro.greeting')],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: false,
      showCursor: false,
      html: true,
    });
    return () => {
      typed.destroy();
    };
  }, [t]);
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col-reverse min-[833px]:flex-row items-center gap-12 min-[833px]:gap-20">
          {/* Left Column: Info */}
          <div className="flex-1 text-center min-[833px]:text-left">

            <h1 className="text-4xl min-[833px]:text-6xl font-bold text-gray-900 leading-tight mb-4">
              <span className="typed-element"></span>
            </h1>

            <h2 className="text-xl min-[833px]:text-2xl text-gray-600 font-medium mb-6">
              {t('intro.subtitle')}
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto min-[833px]:mx-0">
              {t('intro.description')}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center min-[833px]:justify-start gap-4 mb-10">
              <a
                href="#contact"
                className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-black hover:scale-105 transition-all duration-300"
              >
                {t('intro.contactMe')}
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold shadow hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center gap-2"
              >
                {t('intro.viewProjects')} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="flex justify-center min-[833px]:justify-start gap-8 text-gray-600 items-center">
              <a
                href="https://github.com/devcarlosperez"
                target="_blank"
                rel="noreferrer"
                className="text-4xl hover:text-black transition-colors"
                aria-label="GitHub de Carlos Pérez"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-p%C3%A9rez-santana-3967a83a5/"
                target="_blank"
                rel="noreferrer"
                className="text-4xl hover:text-blue-700 transition-colors"
                aria-label="LinkedIn de Carlos Pérez"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="mailto:carlosperezsantana04@gmail.com"
                className="text-4xl hover:text-red-500 transition-colors"
                aria-label="Enviar email a Carlos Pérez"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a
                href="/cv.pdf"
                download="cv.pdf"
                target="_blank"
                className="text-lg font-medium hover:text-black underline underline-offset-4 flex items-center"
              >
                {t('intro.downloadCV')}
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 flex justify-center min-[833px]:justify-end relative">
            <div className="relative w-72 h-72 min-[833px]:w-100 min-[833px]:h-100">
              {/* Blob background */}
              <div className="absolute inset-0 bg-gray-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob_7s_infinite] opacity-50"></div>

              {/* Image container */}
              <div className="absolute inset-2 bg-white rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
                <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="Coding animation" className="w-full h-full object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
