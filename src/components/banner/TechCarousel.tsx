"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function TechCarousel() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Daftar logo sesuai file SVG yang tersedia di /public/logos/
  const logos = [
    { name: "HTML5",          file: "html5.svg",                          invert: false },
    { name: "CSS",            file: "css_old.svg",                        invert: false },
    { name: "JavaScript",     file: "javascript.svg",                     invert: false },
    { name: "TypeScript",     file: "typescript.svg",                     invert: false },
    { name: "React",          file: isDark ? "react_wordmark_dark.svg"  : "react_wordmark_light.svg",  invert: false },
    { name: "Next.js",        file: isDark ? "nextjs_logo_dark.svg"     : "nextjs_logo_light.svg",     invert: false },
    { name: "Vue.js",         file: "vue.svg",                            invert: false },
    { name: "Node.js",        file: "nodejs.svg",                         invert: false },
    { name: "Laravel",        file: "laravel.svg",                        invert: false },
    { name: "PHP",            file: isDark ? "php_dark.svg"             : "php.svg",                   invert: false },
    { name: "Tailwind",       file: isDark ? "tailwindcss-wordmark-dark.svg" : "tailwindcss-wordmark.svg", invert: false },
    { name: "Flutter",        file: "flutter.svg",                        invert: false },
    { name: "MySQL",          file: isDark ? "mysql-wordmark-dark.svg"  : "mysql-wordmark-light.svg",  invert: false },
    { name: "PostgreSQL",     file: isDark ? "postgresql-wordmark-dark.svg" : "postgresql-wordmark-light.svg", invert: false },
    { name: "MongoDB",        file: isDark ? "mongodb-wordmark-dark.svg": "mongodb-wordmark-light.svg",invert: false },
    { name: "Figma",          file: "figma.svg",                          invert: false },
    { name: "GitHub",         file: isDark ? "github_dark.svg"          : "github_light.svg",          invert: false },
    { name: "Git",            file: "git.svg",                            invert: false },
    { name: "VS Code",        file: "vscode.svg",                         invert: false },
    { name: "Canva",          file: "canva.svg",                          invert: false },
    { name: "Illustrator",    file: "illustrator.svg",                    invert: false },
    { name: "Photoshop",      file: "photoshop.svg",                      invert: false },
    { name: "Go",             file: isDark ? "golang_dark.svg"          : "golang.svg",                invert: false },
    { name: "C++",            file: "c-plusplus.svg",                     invert: false },
    { name: "Vite",           file: "vite.svg",                           invert: false },
    { name: "WordPress",      file: "wordpress.svg",                      invert: false },
    { name: "Nginx",          file: "nginx.svg",                          invert: false },
    { name: "Django",         file: "django.svg",                         invert: false },
  ];

  // Duplikasi agar looping seamless
  const track = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-10 bg-surface border-y border-borderLight overflow-hidden relative z-10 transition-colors duration-300 select-none">
      {/* Header label */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center gap-4">
        <span className="text-xs font-mono font-bold tracking-widest text-textSecondary uppercase whitespace-nowrap">
          ✦ Tools Yang Kami Pakai
        </span>
        <span className="h-[1px] flex-1 bg-borderLight" />
      </div>

      {/* Carousel Track */}
      <div className="w-full relative flex overflow-x-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="flex animate-infinite-scroll gap-10 sm:gap-14 items-center py-1">
          {track.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 group cursor-default"
              title={logo.name}
            >
              <div className="h-9 w-auto flex items-center justify-center transition-all duration-300 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110">
                <Image
                  src={`/logos/${logo.file}`}
                  alt={logo.name}
                  height={36}
                  width={72}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
