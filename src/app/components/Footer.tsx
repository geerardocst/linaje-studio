"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111] pt-32 pb-12 px-4 md:px-8 border-t border-white/5 rounded-t-[3rem] mt-24">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Llamado a la acción principal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] md:text-[120px] leading-[0.85] font-bold tracking-tighter uppercase"
          >
            Hablemos <br />
            <span className="text-[#CCFF00]">Ahora.</span>
          </motion.h2>
          
          <motion.a 
            href="mailto:hola@linaje.studio"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 md:w-40 md:h-40 bg-[#CCFF00] rounded-full flex flex-col items-center justify-center text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Agendar <ArrowUpRight className="w-6 h-6 mt-1" />
          </motion.a>
        </div>

        {/* Links y Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/50 text-sm gap-4">
          <p>© {new Date().getFullYear()} LINAJE Studio. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#CCFF00] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#CCFF00] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#CCFF00] transition-colors">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}