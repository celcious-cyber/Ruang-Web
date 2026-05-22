"use client";
import React, { useRef } from "react";
import FloatingIcons from "./FloatingIcons";
import HeroText from "./HeroText";
import BannerBackground from "./BannerBackground";
import { useBannerAnimation } from "./useBannerAnimation";

export default function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  // Jalankan animasi entrance teks & ikon
  useBannerAnimation({ containerRef, iconsRef });

  return (
    <section
      ref={containerRef}
      className="hero-section relative w-full min-h-[85vh] md:min-h-screen overflow-hidden bg-background transition-colors duration-300 flex flex-col justify-center"
    >
      {/* Layer 1: Background effects */}
      <BannerBackground />

      {/* Layer 2: Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:grid md:grid-cols-[55fr_45fr] items-center gap-12 py-20 md:py-0">
        {/* Kolom kiri: Teks + CTA */}
        <HeroText />

        {/* Kolom kanan: Ikon Scattered */}
        <div ref={iconsRef} className="relative w-full h-full md:block">
          <FloatingIcons />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 select-none">
        <span className="text-[10px] text-textSecondary tracking-widest uppercase font-mono transition-colors">
          Scroll
        </span>
        <div className="w-px h-12 bg-textSecondary/40 animate-pulse transition-colors" />
      </div>
    </section>
  );
}
