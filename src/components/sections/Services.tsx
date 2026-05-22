"use client";

import React from "react";
import { Zap, Building2, Code2, Newspaper } from "lucide-react";

export const Services: React.FC = () => {

  const services = [
    {
      icon: <Zap size={32} />,
      title: "Starter Landing Page",
      desc: "Solusi instan untuk personal branding, portofolio, atau promosi UMKM mikro. Tampil profesional secara digital dengan budget minimal.",
      badge: "Mulai 500rb",
      accentColor: "text-emerald-500",
      bgHover: "group-hover:bg-emerald-500/10",
      borderHover: "hover:border-emerald-500",
      textHover: "group-hover:text-emerald-500",
      linkColor: "text-emerald-500 hover:text-emerald-400",
    },
    {
      icon: <Building2 size={32} />,
      title: "Web Instansi & Sekolah (Full CMS)",
      desc: "Solusi digitalisasi formal untuk Sekolah, Pemerintah Desa, atau Yayasan yang membutuhkan portal informasi dinamis yang dapat dikelola mandiri.",
      badge: "Mulai 2 Juta",
      accentColor: "text-brandBlue",
      bgHover: "group-hover:bg-brandBlue/10",
      borderHover: "hover:border-brandBlue",
      textHover: "group-hover:text-brandBlue",
      linkColor: "text-brandBlue hover:text-[#0048D8]",
    },
    {
      icon: <Code2 size={32} />,
      title: "Sistem Custom & SaaS",
      desc: "Pembangunan aplikasi berbasis web dari nol untuk menyelesaikan masalah alur kerja spesifik. Cocok untuk startup, kasir, hingga platform manajemen internal.",
      badge: "Mulai 5 Juta",
      accentColor: "text-brandOrange",
      bgHover: "group-hover:bg-brandOrange/10",
      borderHover: "hover:border-brandOrange",
      textHover: "group-hover:text-brandOrange",
      linkColor: "text-brandOrange hover:text-[#E05200]",
    },
    {
      icon: <Newspaper size={32} />,
      title: "Portal Berita Full CMS",
      desc: "Website berita profesional lengkap dengan panel manajemen konten (CMS). Cocok untuk media online, portal kampus, hingga lembaga pemerintah.",
      badge: "✨ Gratis Logo",
      accentColor: "text-violet-500",
      bgHover: "group-hover:bg-violet-500/10",
      borderHover: "hover:border-violet-500",
      textHover: "group-hover:text-violet-500",
      linkColor: "text-violet-500 hover:text-violet-400",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 transition-colors duration-300">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-textPrimary transition-colors">
          Layanan Kami
        </h2>
        <p className="text-textSecondary text-base sm:text-lg transition-colors">
          Solusi digital komprehensif untuk mengembangkan bisnis Anda di era modern.
        </p>
      </div>

      <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 items-stretch overflow-x-auto pt-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center group relative bg-surface border border-borderLight p-8 rounded-[12px] ${service.borderHover} transition-all duration-300 hover:shadow-xl flex flex-col justify-between`}
          >
            <div>
              {/* Badge */}
              <span className="absolute top-4 right-4 text-[10px] font-bold font-mono tracking-wider text-textSecondary uppercase bg-background px-2.5 py-1 rounded-full border border-borderLight transition-colors">
                {service.badge}
              </span>

              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-[4px] bg-background flex items-center justify-center mb-6 ${service.bgHover} transition-colors ${service.accentColor}`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`font-display text-lg font-bold mb-3 text-textPrimary ${service.textHover} transition-colors duration-300`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-textSecondary text-sm leading-relaxed mb-6 transition-colors">
                {service.desc}
              </p>
            </div>

            <a href="#contact" className={`inline-flex items-center text-xs font-bold uppercase tracking-wider ${service.linkColor} transition-colors mt-auto`}>
              Konsultasi Gratis &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
