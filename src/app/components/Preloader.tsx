"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // El preloader durará 2.5 segundos antes de revelar el sitio
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          // Animación de salida: se desliza hacia arriba y se desvanece
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center"
        >
          <motion.img
            src="/LOGO-OFICIAL.png"
            alt="Linaje Studio"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-48 md:w-72 object-contain"
          />
          {/* Barra de carga sutil */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-[2px] bg-[#CCFF00] mt-8 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}