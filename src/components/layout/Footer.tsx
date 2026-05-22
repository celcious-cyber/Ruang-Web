"use client";

import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-borderLight py-12 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand - Inline SVG Logo terpusat */}
        <div className="flex items-center font-display text-lg font-bold tracking-tight text-textPrimary select-none">
          <img 
            src="/ruangweb.svg" 
            className="h-10 w-auto transition-all duration-300" 
            alt="Ruangweb Studio" 
          />
        </div>

        {/* Copy */}
        <p className="text-xs text-textSecondary text-center md:text-left transition-colors">
          &copy; {currentYear} Ruangweb. All rights reserved. Precision-crafted in Indonesia.
        </p>

        {/* Social Link */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <a href="https://github.com/celcious-cyber" target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-textSecondary hover:text-brandBlue transition-colors duration-200">
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/muhammad-akmal-8b0b19228/" target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-textSecondary hover:text-brandBlue transition-colors duration-200">
            LINKEDIN
          </a>
          <a href="https://www.instagram.com/call.me_celcious/" target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-textSecondary hover:text-brandOrange transition-colors duration-200">
            INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  );
};
