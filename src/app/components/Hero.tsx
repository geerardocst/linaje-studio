"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const panelVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden flex flex-col pt-24 md:pt-32 pb-12 bg-transparent z-10">
      
      {/* Contenedor Principal */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        
        {/* Tipografía LINAJE STUDIO (Alineada a la izquierda, alto contraste) */}
        <div className="relative z-30 flex flex-col tracking-tighter leading-[0.85] md:leading-[0.8] mt-8 md:mt-0 drop-shadow-2xl">
          <h1 className="text-[26vw] md:text-[210px] font-bold uppercase ml-[-1vw] text-white">
            LINAJE
          </h1>
          <h1 className="text-[26vw] md:text-[210px] font-bold uppercase ml-[-1vw] text-[#CCFF00]">
            STUDIO
          </h1>
        </div>

        {/* Texto pequeño */}
        <div className="mt-12 md:mt-16 max-w-[250px] md:max-w-xs relative z-30 text-white/90 drop-shadow-md">
          <p className="font-bold text-xs md:text-sm leading-tight uppercase tracking-wide">
            Diseñamos <br /> sistemas digitales <br /> que las personas recuerdan. <br /> No solo hacemos scroll.
          </p>
        </div>

        {/* ─── IMÁGENES FLOTANTES LIMPIAS (Sin marcos molestos) ─── */}
        
        {/* Mockup 1 (Arriba Derecha) */}
        <motion.div 
          variants={panelVariants} initial="initial" animate="animate" transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -top-[5%] md:top-[2%] right-[-5%] md:right-[4%] w-[50vw] md:w-[22vw] aspect-[4/3] z-10 rotate-[8deg] rounded-2xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm border border-white/5"
        >
          <img src="/Konabil-mockup-1080x1080.jpg" alt="Proyecto 1" className="w-full h-full object-cover" />
        </motion.div>

        {/* Mockup 2 (Centro Izquierda) */}
        <motion.div 
          variants={panelVariants} initial="initial" animate="animate" transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute top-[55%] md:top-[50%] left-[5%] md:left-[10%] w-[45vw] md:w-[18vw] aspect-[3/4] z-20 rotate-[-5deg] rounded-2xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm border border-white/5"
        >
          <img src="/Konabil-mockup-1080x1080-4.jpg" alt="Proyecto 2" className="w-full h-full object-cover" />
        </motion.div>

        {/* Mockup 3 (Abajo Derecha) */}
        <motion.div 
          variants={panelVariants} initial="initial" animate="animate" transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-[2%] md:-bottom-[5%] right-[5%] md:right-[10%] w-[40vw] md:w-[19vw] aspect-[3/4] z-20 rotate-[5deg] rounded-2xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm border border-white/5 hidden md:block"
        >
          <img src="/Konabil-mockup-1080x1080-5.jpg" alt="Proyecto 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </motion.div>

        {/* Globo Neón */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.5, delay: 0.8 }}
          className="absolute bottom-[5%] left-[8%] md:left-[45%] w-28 h-28 md:w-48 md:h-48 z-40 pointer-events-none drop-shadow-[0_0_30px_rgba(204,255,0,0.4)]"
        >
          <img src="/mundointernet.png" alt="Mundo Internet Neón" className="w-full h-full object-contain" />
        </motion.div>

      </div>
    </section>
  );
}