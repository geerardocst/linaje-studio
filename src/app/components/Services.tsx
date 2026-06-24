"use client";

import { motion } from "framer-motion";
import { Layout, Cpu, RefreshCw, PlaySquare, Target } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Creatividades para Ads",
    desc: "Diseñamos, producimos y optimizamos piezas para campañas en Meta y Google. Múltiples versiones listas para testear, escalar y mejorar el rendimiento.",
    icon: <Target className="w-8 h-8 text-[#CCFF00]" />
  },
  {
    num: "02",
    title: "Sistemas con IA",
    desc: "Flujos de producción que generan más contenido en menos tiempo. Aumentamos la capacidad de tu equipo sin aumentar la complejidad operativa.",
    icon: <Cpu className="w-8 h-8 text-[#CCFF00]" />
  },
  {
    num: "03",
    title: "Producción Continua",
    desc: "Adaptamos contenido constantemente, ya sea para campañas activas o para construir una presencia digital sólida. Diseño funcional.",
    icon: <RefreshCw className="w-8 h-8 text-[#CCFF00]" />
  },
  {
    num: "04",
    title: "Motion & Performance",
    desc: "Piezas en movimiento optimizadas para destacar en el feed, retener usuarios y generar interacción real y medible.",
    icon: <PlaySquare className="w-8 h-8 text-[#CCFF00]" />
  },
  {
    num: "05",
    title: "Estrategia Digital",
    desc: "Analizamos tu negocio para definir el mejor enfoque. Con datos cuando existen, o construyendo una base clara para diseñar con intención.",
    icon: <Layout className="w-8 h-8 text-[#CCFF00]" />
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-[40px] md:text-[64px] font-bold leading-none tracking-tighter mb-4">
            Nuestros <span className="text-white/40">Servicios.</span>
          </h2>
          <p className="text-[#EAEAEA]/60 text-lg max-w-md">
            No diseñamos piezas aisladas. Construimos sistemas completos para escalar tus resultados.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((srv, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-[#111] border border-white/5 rounded-[2rem] p-8 md:p-10 hover:bg-[#151515] hover:border-[#CCFF00]/30 transition-all ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-white/20 font-mono text-xl">{srv.num}</span>
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-white/10">
                {srv.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
            <p className="text-white/50 leading-relaxed text-sm md:text-base">{srv.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}