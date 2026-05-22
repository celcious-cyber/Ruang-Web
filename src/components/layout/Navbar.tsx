"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Sinkronisasi tema awal dari localStorage atau preferensi sistem
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const activeTheme = savedTheme || systemTheme;
    
    setTheme(activeTheme);
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Layanan", href: "#services" },
    { label: "Proses", href: "#process" },
    { label: "Harga", href: "#pricing" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <a href="#home" className="flex items-center font-display text-2xl font-bold tracking-tight text-textPrimary select-none">
          <img 
            src="/ruangweb.svg" 
            className="h-12 md:h-14 w-auto transition-all duration-300" 
            style={{ filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)' }}
            alt="Ruangweb Studio" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-textSecondary hover:text-brandBlue transition-colors duration-200">
              {item.label}
            </a>
          ))}
          
          {/* Toggle Sun/Moon Tema */}
          <button 
            onClick={toggleTheme}
            className="p-2 border border-borderLight rounded-[4px] text-textPrimary hover:bg-borderLight transition-all duration-200 cursor-pointer flex items-center justify-center group"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon size={16} className="text-brandBlue transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />
            ) : (
              <Sun size={16} className="text-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-45" />
            )}
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={toggleTheme}
            className="p-1.5 border border-borderLight rounded-[4px] text-textPrimary flex items-center justify-center group"
          >
            {theme === "light" ? (
              <Moon size={14} className="text-brandBlue transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />
            ) : (
              <Sun size={14} className="text-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-45" />
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-textPrimary hover:text-brandBlue">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-borderLight py-6 flex flex-col space-y-4 px-6 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-textPrimary hover:text-brandBlue transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
