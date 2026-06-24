"use client";

import { motion } from "framer-motion";

export default function Metrics() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Caja 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#111] border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between hover:border-[#CCFF00]/30 transition-colors"
        >
          <h3 className="text-[64px] font-bold text-[#CCFF00] leading-none mb-4">+30</h3>
          <p className="text-xl font-medium text-white mb-2">Piezas / mes</p>
          <p className="text-white/50 text-sm">Contenido continuo listo para testear y lanzar a producción semanalmente.</p>
        </motion.div>

        {/* Caja 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="bg-[#111] border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between hover:border-[#CCFF00]/30 transition-colors"
        >
          <h3 className="text-[64px] font-bold text-white leading-none mb-4">94<span className="text-[#CCFF00]">%</span></h3>
          <p className="text-xl font-medium text-white mb-2">Depende de la creatividad</p>
          <p className="text-white/50 text-sm">Ese es el impacto real que tiene el diseño visual sobre el rendimiento de un anuncio.</p>
        </motion.div>

        {/* Caja 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="bg-[#111] border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between hover:border-[#CCFF00]/30 transition-colors"
        >
          <h3 className="text-[64px] font-bold text-white leading-none mb-4">3<span className="text-[#CCFF00]">s</span></h3>
          <p className="text-xl font-medium text-white mb-2">Para captar atención</p>
          <p className="text-white/50 text-sm">El tiempo exacto que tienes para detener el scroll de tu usuario antes de que te ignore.</p>
        </motion.div>
      </div>
    </section>
  );
}