"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Split text reveal
      const titleSplit = new SplitType(".cta-title", { types: "words" });

      gsap.from(titleSplit.words, {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Buttons pop in
      gsap.from(".cta-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    const text = "Halo Ruangweb, saya tertarik untuk mendiskusikan proyek pembuatan digital.";
    window.open(`https://wa.me/6285162590414?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0C0C0A] overflow-hidden">
      {/* Background Grid & Ghost Glow */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />
      <div className="absolute -top-1/2 -right-1/4 w-[60vw] h-[60vw] bg-[#0057FF] rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
      <div className="absolute -bottom-1/2 -left-1/4 w-[50vw] h-[50vw] bg-[#FF4D00] rounded-full blur-[120px] opacity-[0.05] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="cta-title font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
          Siap membangun produk digital <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#00A3FF]">yang benar-benar bekerja?</span>
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Konsultasi pertama gratis, tanpa komitmen. Mari diskusikan bagaimana kami bisa mengeskalasi bisnis Anda melalui teknologi presisi.
        </p>

        <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#0F0F0E] font-bold rounded-[8px] hover:bg-gray-100 shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group transition-all"
          >
            <span>Mulai Sekarang</span>
            <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-[8px] hover:bg-white/10 hover:border-white/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <MessageSquare size={18} className="text-[#FF4D00]" />
            <span>WhatsApp Kami</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 font-mono">
          <a href="mailto:hello@ruangweb.studio" className="flex items-center space-x-2 hover:text-white transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#0057FF]"></span>
            <span>hello@ruangweb.studio</span>
          </a>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]"></span>
            <span>Respon dalam 2–4 jam kerja</span>
          </div>
        </div>
      </div>
    </section>
  );
}
