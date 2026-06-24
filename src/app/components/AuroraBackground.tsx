"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
      
      {/* ─── CAPA 1: PILARES DE LUZ VERTICALES (AKIS STYLE) ─── */}
      <div className="absolute inset-0 flex justify-center items-center opacity-90 mix-blend-screen">
        
        {/* Pilar 1 (Izquierda, ancho y lento) */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [1, 1.2, 1], x: ["-10%", "5%", "-10%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] w-[20vw] h-[150vh] bg-[#CCFF00] blur-[120px]"
        />
        
        {/* Pilar 2 (Centro-Izquierda, brillante y rápido) */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.8, 1.5, 0.8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[30%] w-[10vw] h-[150vh] bg-[#CCFF00] blur-[90px]"
        />
        
        {/* Pilar 3 (Centro-Derecha, masivo) */}
        <motion.div
          animate={{ opacity: [0.2, 0.6, 0.2], x: ["0%", "10%", "0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-[50%] w-[25vw] h-[150vh] bg-[#CCFF00] blur-[140px]"
        />
        
        {/* Pilar 4 (Derecha, fino y sutil) */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4], scaleX: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-[75%] w-[8vw] h-[150vh] bg-[#CCFF00] blur-[100px]"
        />
      </div>

      {/* ─── CAPA 2: RUIDO FRACTAL EXTREMO (El grano de película) ─── */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── CAPA 3: DOBLE VIÑETA CINEMÁTICA (Oscurece bordes) ─── */}
      {/* Viñeta Radial (Centro iluminado, esquinas negras) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#000000_100%)] opacity-95" />
      
      {/* Viñeta Lineal (Apaga el techo y el piso para que la luz no toque los bordes) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
      
    </div>
  );
}