"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "Auditoría + mejoras rápidas. Para ordenar y detectar oportunidades.",
    features: [
      "Análisis UX de tu sitio",
      "Revisión de creatividades",
      "Diagnóstico de campañas",
      "Benchmark de competencia",
      "Plan de acción priorizado"
    ],
    cta: "Quiero asesoría",
    highlight: false,
  },
  {
    name: "Growth",
    desc: "Sistema de ads + creatividades + optimización continua. Para escalar mes a mes.",
    features: [
      "Producción mensual de creatividades",
      "Múltiples variaciones por campaña",
      "Adaptación a todos los formatos",
      "Piezas para feed, stories y video",
      "Iteración continua basada en datos"
    ],
    cta: "Quiero escalar mis campañas",
    highlight: true,
  },
  {
    name: "Partner",
    desc: "Todo + web + estrategia ejecución continua. Para equipos que necesitan crecer.",
    features: [
      "Sistema de ads + creatividades",
      "Optimización de sitio web",
      "Desarrollo de landing pages",
      "Producción constante de contenido",
      "Soporte estratégico"
    ],
    cta: "Quiero trabajar con ustedes",
    highlight: false,
  }
];

export default function Pricing() {
  return (
    <section id="planes" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-[40px] md:text-[64px] font-bold leading-none tracking-tighter mb-4">Planes.</h2>
        <p className="text-[#EAEAEA]/60 text-lg max-w-2xl mx-auto">
          Elige cómo quieres trabajar con nosotros. Desde un diagnóstico inicial hasta un sistema completo de producción y optimización.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-8 rounded-[2rem] border flex flex-col h-full ${
              plan.highlight 
                ? "bg-[#CCFF00] border-[#CCFF00] text-black shadow-2xl md:scale-105 z-10" 
                : "bg-[#111] border-white/5 text-white hover:border-[#CCFF00]/30 transition-colors"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-[#CCFF00] text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full border border-[#CCFF00]">
                Recomendado
              </span>
            )}
            
            <h3 className={`text-3xl font-bold mb-2 ${plan.highlight ? "text-black" : "text-white"}`}>
              {plan.name}
            </h3>
            <p className={`text-sm mb-8 min-h-[40px] ${plan.highlight ? "text-black/70" : "text-white/50"}`}>
              {plan.desc}
            </p>

            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-black" : "text-[#CCFF00]"}`} />
                  <span className={`text-sm ${plan.highlight ? "text-black/80 font-medium" : "text-white/80"}`}>{feat}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-full font-bold transition-transform hover:scale-105 ${
              plan.highlight 
                ? "bg-black text-[#CCFF00]" 
                : "bg-[#1A1A1A] text-white border border-white/10 hover:bg-white/5"
            }`}>
              {plan.cta} →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}