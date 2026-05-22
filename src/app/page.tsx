import { Navbar } from "@/components/layout/Navbar";
import HeroBanner from "@/components/banner/HeroBanner";
import TechCarousel from "@/components/banner/TechCarousel";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import CtaSection from "@/components/cta/CtaSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <section id="home">
          <HeroBanner />
        </section>
        
        {/* Infinite Tech Stack Carousel */}
        <TechCarousel />

        <section id="services" className="relative py-24 md:py-32 bg-background transition-colors duration-300">
          <Services />
        </section>
        
        <section id="process" className="relative py-24 md:py-32 bg-surface transition-colors duration-300">
          <Process />
        </section>
        
        <section id="pricing" className="relative py-24 md:py-32 bg-background transition-colors duration-300">
          <Pricing />
        </section>
        
        <CtaSection />
        
        <section id="contact" className="relative py-24 md:py-32 bg-surface text-textPrimary transition-colors duration-300">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
