"use client";
import React from "react";
export default function HeroText() {

  return (
    <div className="flex flex-col items-start pt-24 md:pt-0">
      {/* Pill Badge */}
      <div className="hero-badge mb-6 inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-borderLight bg-surface/50 backdrop-blur-md transition-colors">
        <span className="w-2 h-2 rounded-full bg-brandOrange animate-pulse" />
        <span className="text-[10px] font-mono font-bold tracking-widest text-textPrimary uppercase transition-colors">
          ✦ Web & App Studio
        </span>
      </div>

      <h1 className="hero-headline font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-textPrimary leading-[1.1] tracking-tight mb-6 transition-colors">
        Wujudkan Website & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange to-[#FF8C00]">
          Sistem Digital
        </span> Anda <br />
        Tanpa Ribet!
      </h1>

      {/* Subheadline */}
      <p className="hero-sub text-base sm:text-lg text-textSecondary max-w-[480px] leading-relaxed mb-10 transition-colors">
        Tingkatkan kepercayaan pelanggan dengan website responsif dan cepat. RuangWeb: Solusi Logis, Eksekusi Praktis.
      </p>

      {/* CTA Buttons */}
      <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-4 rounded-[8px] bg-brandOrange text-white font-semibold text-sm transition-all duration-300 hover:bg-[#E05200] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,77,0,0.3)] flex justify-center cursor-pointer"
        >
          Konsultasi Kebutuhan Anda Sekarang -&gt;
        </a>
        <a
          href="#services"
          className="w-full sm:w-auto px-8 py-4 rounded-[8px] bg-surface border border-borderLight text-textSecondary font-medium text-sm transition-all duration-300 hover:bg-borderLight hover:text-textPrimary flex justify-center cursor-pointer"
        >
          Lihat Layanan
        </a>
      </div>

      {/* Social Proof Mikro */}
      <div className="hero-cta mt-8 flex items-center space-x-3 opacity-80">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map(i => (
            <svg key={i} className="w-3.5 h-3.5 text-brandOrange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-textSecondary font-mono transition-colors">Dipercaya 30+ Klien · Rating 4.9/5</span>
      </div>
    </div>
  );
}
