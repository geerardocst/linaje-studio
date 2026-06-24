"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Menú Flotante - Más abajo (top-12) y proporciones más grandes */}
      <div className="fixed top-12 left-0 w-full z-50 flex justify-center px-4">
        <nav className="bg-black/80 backdrop-blur-md border border-white/10 px-10 py-4 md:py-5 rounded-full flex items-center gap-8 md:gap-12 shadow-2xl">
          <a href="#" className="text-white font-bold tracking-tighter text-xl md:text-2xl">
            LINAJE<span className="text-[#CCFF00]">.</span>
          </a>
          
          {/* Enlaces más grandes y espaciados */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-300">
            <a href="#" className="hover:text-[#CCFF00] transition-colors">Expertise</a>
            <a href="#" className="hover:text-[#CCFF00] transition-colors">Trabajo</a>
            <a href="#" className="hover:text-[#CCFF00] transition-colors">El Estudio</a>
          </div>
          
          {/* Botón más grande y clickeable */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#CCFF00] text-black px-6 py-3 md:px-8 md:py-3.5 rounded-full text-sm md:text-base font-bold hover:scale-105 transition-transform"
          >
            Asesoría gratis
          </button>
        </nav>
      </div>

      {/* --- EL MODAL (Popup) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Fondo oscuro con Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            {/* Cuadro del Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#EAEAEA] rounded-[2rem] p-8 md:p-12 text-center text-black shadow-2xl z-10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                Empecemos tu proyecto
              </h3>
              <p className="text-black/60 text-sm mb-8 font-medium">
                Contáctanos por el medio que prefieras :)
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:hola@linaje.studio" 
                  className="w-full sm:w-auto bg-[#CCFF00] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                >
                  hola@linaje.studio
                </a>
                <a 
                  href="https://wa.me/5211234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}