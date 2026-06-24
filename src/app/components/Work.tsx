"use client";

import { motion } from "framer-motion";

export default function Work() {
  // Aquí definimos tus proyectos usando tus imágenes reales
  const projects = [
    {
      id: 1,
      client: "KONABIL",
      service: "Estrategia & Diseño de Producto",
      image: "/Konabil-mockup-1080x1080.jpg",
      color: "bg-[#0a0a0a]", // Fondo casi negro
    },
    {
      id: 2,
      client: "KONABIL WEB",
      service: "Desarrollo High-End",
      image: "/Konabil-mockup-1080x1080-4.jpg",
      color: "bg-[#111111]", // Un gris un poco más claro para contraste
    },
    {
      id: 3,
      client: "KONABIL APP",
      service: "UX/UI & Optimización",
      image: "/Konabil-mockup-1080x1080-5.jpg",
      color: "bg-[#1a1a1a]", // Un poco más claro
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 md:py-40 z-20">
      
      {/* Cabecera de la sección */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center md:text-left">
        <h2 className="text-[12vw] md:text-[120px] font-bold uppercase tracking-tighter leading-none text-white">
          Trabajo <br />
          <span className="text-white/30">Selecto</span>
        </h2>
      </div>

      {/* Contenedor de las Tarjetas Acordeón */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-0">
        {projects.map((project, index) => (
          <div
            key={project.id}
            // La magia está en 'sticky' y el 'top' dinámico
            className="md:sticky flex flex-col md:flex-row items-center justify-between w-full min-h-[80vh] md:h-[90vh] rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
            style={{ 
              // --- EFECTO ACORDEÓN ---
              // Cada tarjeta se detiene un poco más abajo que la anterior, creando el efecto de capas visibles.
              // top: '10vh' es el punto de partida (la primera tarjeta).
              // 'index * 30' (o 'index * 35') es el espaciado dinámico.
              top: `calc(10vh + ${index * 35}px)`,
              backgroundColor: project.color,
              // Añadimos z-index para asegurar el orden de apilamiento
              zIndex: projects.length + index, 
            }}
          >
            
            {/* Texto del Proyecto */}
            <div className="w-full md:w-1/3 flex flex-col justify-between h-full z-10 mb-12 md:mb-0">
              <div>
                <p className="text-[#CCFF00] font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
                  0{project.id} — {project.service}
                </p>
                <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                  {project.client}
                </h3>
              </div>
              
              <button className="w-fit mt-12 md:mt-0 border border-white/20 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide">
                Ver Caso de Estudio
              </button>
            </div>

            {/* Imagen del Proyecto */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full relative rounded-2xl overflow-hidden border border-white/5 bg-black">
              <img 
                src={project.image} 
                alt={project.client} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}