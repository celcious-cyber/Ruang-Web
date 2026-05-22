"use client";

import React from "react";

export default function BannerBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Glow / Gradient Mesh - Glowing Radial Blurs */}
      <div 
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-15 dark:opacity-20 transition-opacity"
        style={{
          background: "radial-gradient(circle, var(--color-brandBlue) 0%, transparent 60%)"
        }}
      />
      <div 
        className="absolute top-1/2 right-1/4 w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-8 dark:opacity-10 transition-opacity"
        style={{
          background: "radial-gradient(circle, var(--color-brandOrange) 0%, transparent 60%)"
        }}
      />
      
      {/* Grid Lines - Menggunakan border semantik (Eksklusif & Halus) */}
      <div 
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.4] transition-opacity"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-borderLight) 1px, transparent 1px), linear-gradient(to bottom, var(--color-borderLight) 1px, transparent 1px)`,
          backgroundSize: "48px 48px"
        }}
      />
      
      {/* Subtle Noise Texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02] mix-blend-overlay transition-opacity"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
