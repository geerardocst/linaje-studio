import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";

// Quitamos la variable y cargamos la fuente directa
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linaje Studio | Diseño y Tecnología",
  description: "Estudio creativo premium y consultora estratégica.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white antialiased overflow-x-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}