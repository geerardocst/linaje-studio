import Preloader from "./components/Preloader";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-black min-h-screen overflow-hidden">
      {/* Aquí inyectamos la pantalla de carga inicial */}
      <Preloader />
      
      {/* Aquí inyectamos el aura neón que sigue al mouse */}
      <CursorGlow />
      
      {/* El resto de tu página */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Aquí insertamos la nueva sección de Portafolio (Stacking Cards) */}
        <Work />
        
        <Metrics />
        <Services />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}