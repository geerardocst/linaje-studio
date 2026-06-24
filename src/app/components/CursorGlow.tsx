"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-1000); // Empezamos fuera de pantalla
  const cursorY = useMotionValue(-1000);

  // Física "Spring" para que persiga el mouse con elegancia y suavidad
  const springConfig = { damping: 45, stiffness: 180 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Centramos el resplandor en la punta del cursor
      // (ajusta el -400 si el aura es más grande o chica)
      cursorX.set(e.clientX - 400); 
      cursorY.set(e.clientY - 400);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      // AUMENTAMOS LA OPACIDAD DE /10 A /30 PARA QUE BRILLE CON FUERZA
      className="pointer-events-none fixed top-0 left-0 w-[800px] h-[800px] bg-[#CCFF00]/30 rounded-full blur-[140px] z-0 mix-blend-screen"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    />
  );
}