"use client";

import React, { useState, useEffect } from "react";
import { Check, ArrowRight, Info, PlusCircle, Server, ShieldCheck, X } from "lucide-react";

export const Pricing: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  // Mencegah scroll di background saat modal terbuka
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const openModal = (index: number) => {
    setActiveTab(index);
    setShowModal(true);
  };

  const simplePlans = [
    {
      name: "Starter Landing",
      originalPriceIdr: "1.000.000",
      priceIdr: "500.000",
      features: [
        "1 Halaman Utama (Single Page)",
        "Desain Responsif (Tailwind CSS)",
        "CTA langsung ke WhatsApp",
        "Performa Ultra Cepat",
        "Tanpa CMS (Konten Statis)"
      ],
      popular: false,
      color: "emerald-500",
      hex: "#10B981"
    },
    {
      name: "Web Instansi (CMS)",
      originalPriceIdr: "5.500.000",
      priceIdr: "2.000.000",
      features: [
        "Mulai Rp 2 Juta - 5.5 Juta",
        "Panel Admin (Filament v5)",
        "Manajemen Berita & Galeri",
        "Manajemen Multi-Role Access",
        "Gratis 1x Pelatihan & Manual"
      ],
      popular: true,
      color: "brandBlue",
      hex: "var(--brand-blue)"
    },
    {
      name: "Sistem Custom",
      originalPriceIdr: "8.500.000",
      priceIdr: "5.000.000",
      features: [
        "Mulai Rp 5 Juta (Tergantung Skala)",
        "Custom Business Logic",
        "Dashboard Analitik Real-time",
        "Audit Logs & RBAC Security",
        "Database Skalabel"
      ],
      popular: false,
      color: "brandOrange",
      hex: "var(--brand-orange)"
    },
    {
      name: "Portal Berita Full CMS",
      originalPriceIdr: "4.500.000",
      priceIdr: "2.500.000",
      features: [
        "Website Berita Profesional",
        "Manajemen Artikel & Kategori",
        "Panel Editor (CMS Filament)",
        "Komentar & Moderasi Konten",
        "✨ Gratis Desain Logo"
      ],
      popular: false,
      color: "violet",
      hex: "#7C3AED"
    }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 transition-colors duration-300">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-textPrimary transition-colors">
            Paket Harga Layanan
          </h2>
          <p className="text-textSecondary text-base sm:text-lg mb-8 transition-colors">
            Pilih paket yang paling sesuai dengan kebutuhan digital Anda. Solusi transparan tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Simple Plans Grid (Layout Asli) */}
        <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch overflow-x-auto pt-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {simplePlans.map((plan, index) => {
            
            // Generate Tailwind classes safely based on color
            const isGreen = index === 0;
            const isBlue = index === 1;
            const isOrange = index === 2;
            const isPurple = index === 3;

            return (
              <div 
                key={index}
                className={`min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center relative bg-surface border p-8 rounded-[12px] flex flex-col justify-between transition-all duration-300 
                  ${isGreen ? 'hover:border-emerald-500 hover:shadow-lg' : ''}
                  ${isBlue ? 'border-brandBlue shadow-xl ring-2 ring-brandBlue/10 md:scale-105 z-10' : ''}
                  ${isOrange ? 'hover:border-brandOrange hover:shadow-lg' : ''}
                  ${isPurple ? 'hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10' : ''}
                  ${!isBlue ? 'border-borderLight' : ''}
                `}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brandBlue text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md select-none whitespace-nowrap">
                    Paling Laris
                  </span>
                )}
                
                <div>
                  <h3 className="font-display text-xl font-bold text-textPrimary mb-2 transition-colors">{plan.name}</h3>
                  
                  {/* Original Price (Strikethrough) */}
                  <div className={`flex items-center text-sm mb-1 font-medium line-through decoration-2 
                    ${isGreen ? 'text-emerald-500/80 decoration-emerald-500/80' : ''}
                    ${isBlue ? 'text-brandBlue/80 decoration-brandBlue/80' : ''}
                    ${isOrange ? 'text-brandOrange/80 decoration-brandOrange/80' : ''}
                    ${isPurple ? 'text-violet-500/80 decoration-violet-500/80' : ''}
                  `}>
                    Rp {plan.originalPriceIdr}
                  </div>

                  {/* Current Discounted Price */}
                  <div className="flex items-baseline mb-6">
                    <span className={`text-xs mr-1.5 font-bold transition-colors
                      ${isGreen ? 'text-emerald-500' : ''}
                      ${isBlue ? 'text-brandBlue' : ''}
                      ${isOrange ? 'text-brandOrange' : ''}
                      ${isPurple ? 'text-violet-500' : ''}
                    `}>Promo</span>
                    <span className="text-2xl font-extrabold text-textPrimary font-mono transition-colors tracking-tight">
                      Rp{plan.priceIdr}
                    </span>
                  </div>
                  
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-sm text-textSecondary transition-colors">
                        <Check size={16} className={`mt-0.5 mr-2.5 flex-shrink-0
                          ${isGreen ? 'text-emerald-500' : ''}
                          ${isBlue ? 'text-brandBlue' : ''}
                          ${isOrange ? 'text-brandOrange' : ''}
                          ${isPurple ? 'text-violet-500' : ''}
                        `} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <a 
                    href="#contact"
                    className={`w-full py-3.5 rounded-[4px] font-bold text-sm text-center transition-all cursor-pointer 
                      ${isGreen ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/15' : ''}
                      ${isBlue ? 'bg-brandBlue text-white hover:bg-[#0048D8] shadow-lg shadow-brandBlue/15' : ''}
                      ${isOrange ? 'bg-brandOrange hover:bg-[#E05200] text-white shadow-lg shadow-brandOrange/15' : ''}
                      ${isPurple ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/15' : ''}
                    `}
                  >
                    Pilih Paket
                  </a>
                  <button 
                    onClick={() => openModal(index)}
                    className={`w-full py-2.5 rounded-[4px] font-bold text-sm text-center transition-all cursor-pointer flex justify-center items-center
                      ${isGreen ? 'text-textSecondary hover:text-emerald-500 hover:bg-emerald-500/5' : ''}
                      ${isBlue ? 'text-textSecondary hover:text-brandBlue hover:bg-brandBlue/5' : ''}
                      ${isOrange ? 'text-textSecondary hover:text-brandOrange hover:bg-brandOrange/5' : ''}
                      ${isPurple ? 'text-textSecondary hover:text-violet-500 hover:bg-violet-500/5' : ''}
                    `}
                  >
                    <Info size={14} className="mr-2" /> Lihat Selengkapnya
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN MODAL UNTUK DETAIL LENGKAP */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
          <div 
            className="bg-background w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-2xl border border-borderLight animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-background/90 backdrop-blur-md z-20 border-b border-borderLight p-6 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-textPrimary">Spesifikasi Detail Paket</h2>
                <p className="text-sm text-brandOrange font-bold mt-1">RuangWeb: Solusi Logis, Eksekusi Praktis.</p>
              </div>
              <button 
                onClick={() => setShowModal(false)} 
                className="p-2 bg-surface rounded-full hover:bg-borderLight text-textSecondary hover:text-textPrimary transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10 space-y-12">
              
              {/* Conditional Package Rendering */}
              
              {activeTab === 0 && (
                <div className="bg-surface border border-emerald-500/30 rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-borderLight pb-6 md:pb-0 md:pr-6">
                      <h3 className="font-display text-xl font-bold text-textPrimary mb-2">1. Paket Starter Landing Page</h3>
                      <div className="text-2xl font-extrabold text-emerald-500 font-mono mb-2">Rp 500.000</div>
                      <p className="text-sm text-textSecondary italic leading-relaxed">
                        Solusi instan untuk personal branding, portofolio, atau promosi UMKM mikro agar tampil profesional secara digital dengan budget minimal.
                      </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3">Fitur & Spesifikasi</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" /> 1 Halaman Utama (Single Page)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" /> Desain Responsif (Tailwind CSS)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" /> CTA langsung ke WhatsApp</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" /> Performa Ultra Cepat</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3">Ketentuan & Infrastruktur</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start text-sm text-textPrimary"><Info size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Tanpa CMS (Konten Statis)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Info size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Deployment Vercel/Netlify Gratis</li>
                          <li className="flex items-start text-sm text-textPrimary"><ShieldCheck size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Maks 2x Revisi Minor</li>
                          <li className="flex items-start text-sm text-textPrimary"><ShieldCheck size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> 2 Minggu Garansi Tampilan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="bg-surface border border-brandBlue/30 rounded-2xl p-6 shadow-sm relative">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-borderLight pb-6 md:pb-0 md:pr-6">
                      <h3 className="font-display text-xl font-bold text-textPrimary mb-2">2. Paket Web Instansi & Sekolah</h3>
                      <div className="text-2xl font-extrabold text-brandBlue font-mono mb-2">Rp 2 Juta - 5.5 Juta</div>
                      <p className="text-sm text-textSecondary italic leading-relaxed">
                        Solusi digitalisasi formal untuk Sekolah, Desa, atau Yayasan yang membutuhkan portal informasi dinamis ber-CMS.
                      </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3">Modul & Sistem Utama</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandBlue mt-0.5 mr-2 flex-shrink-0" /> Profil Instansi & Halaman Dinamis</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandBlue mt-0.5 mr-2 flex-shrink-0" /> Sistem Berita & Artikel Terjadwal</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandBlue mt-0.5 mr-2 flex-shrink-0" /> Galeri Foto & Video Interaktif</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandBlue mt-0.5 mr-2 flex-shrink-0" /> Portal Pengumuman & Download Dokumen</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandBlue mt-0.5 mr-2 flex-shrink-0" /> Integrasi Form PPDB / Pengaduan</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandBlue mt-0.5 mr-2 flex-shrink-0" /> Tombol Integrasi WhatsApp (CTA)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3">Teknologi & Layanan</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandBlue mt-0.5 mr-2 flex-shrink-0" /> Framework Laravel & Filament v5 CMS</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandBlue mt-0.5 mr-2 flex-shrink-0" /> Multi-Role (SuperAdmin, Editor, Staff)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandBlue mt-0.5 mr-2 flex-shrink-0" /> Optimasi Kecepatan & SEO Dasar</li>
                          <li className="flex items-start text-sm text-textPrimary"><ShieldCheck size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Maksimal 3x Revisi Mayor Desain</li>
                          <li className="flex items-start text-sm text-textPrimary"><ShieldCheck size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Garansi Error/Bug 1 Bulan Penuh</li>
                          <li className="flex items-start text-sm text-textPrimary"><Info size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Gratis 1x Pelatihan Staf + Manual PDF</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="bg-surface border border-brandOrange/30 rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-borderLight pb-6 md:pb-0 md:pr-6">
                      <h3 className="font-display text-xl font-bold text-textPrimary mb-2">3. Sistem Custom & SaaS</h3>
                      <div className="text-2xl font-extrabold text-brandOrange font-mono mb-2">Mulai Rp 5 Juta</div>
                      <p className="text-sm text-textSecondary italic leading-relaxed">
                        Aplikasi web dari nol untuk alur kerja spesifik. Cocok untuk manajemen internal, kasir, startup.
                      </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3">Arsitektur & Modul Sistem</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Fullstack Framework (Laravel/Vue 3/React)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Database Skalabel (MySQL/PostgreSQL)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Custom Dashboard & Analitik Data (Grafik)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Sistem Multi-User dengan RBAC (Akses Role)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Keamanan Ketat: Data Encryption & Audit Logs</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Fitur Integrasi API (Midtrans, Xendit, WhatsApp)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Modul Ekspor/Impor Laporan (PDF, Excel, CSV)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3">Layanan Purna Jual & Proses</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Sesi Perancangan Flowchart & Relasi Database</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Desain UI/UX Mockup Eksklusif sebelum Coding</li>
                          <li className="flex items-start text-sm text-textPrimary"><ShieldCheck size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Revisi Bertahap Berdasarkan Cek Poin (Milestone)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Server size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Setup & Optimasi VPS Linux Server (Cloud)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Pipeline CI/CD untuk Update Kode Berkelanjutan</li>
                          <li className="flex items-start text-sm text-textPrimary"><Info size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Penyerahan Dokumentasi API & Skema Teknis</li>
                          <li className="flex items-start text-sm text-textPrimary"><ShieldCheck size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Prioritas Bantuan & Garansi Penuh 3 Bulan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="bg-surface border border-violet-500/30 rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-borderLight pb-6 md:pb-0 md:pr-6">
                      <h3 className="font-display text-xl font-bold text-textPrimary mb-2">4. Portal Berita Full CMS</h3>
                      <div className="text-2xl font-extrabold text-violet-500 font-mono mb-2">Rp 2.500.000</div>
                      <p className="text-sm text-textSecondary italic leading-relaxed">
                        Website berita profesional lengkap dengan panel manajemen konten (CMS) yang mudah dikelola. Cocok untuk media online, portal kampus, hingga lembaga pemerintah.
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-500 text-xs font-bold px-3 py-1.5 rounded-full">
                        ✨ Gratis Desain Logo Brand
                      </div>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3">Modul & Fitur Portal</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Beranda Berita Dinamis & Responsif</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Manajemen Artikel dengan Editor Rich Text</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Kategori & Tag Artikel Fleksibel</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Fitur Komentar & Moderasi Konten</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Galeri Foto & Video Terintegrasi</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Penjadwalan Artikel (Publish Otomatis)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Fitur Pencarian Artikel Internal</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3">Teknologi & Layanan</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> CMS Berbasis Laravel & Filament v5</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Manajemen Pengguna Multi-Role (Admin, Editor, Jurnalis)</li>
                          <li className="flex items-start text-sm text-textPrimary"><Check size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Optimasi SEO On-Page (Meta, Sitemap, OG Tag)</li>
                          <li className="flex items-start text-sm text-textPrimary"><ShieldCheck size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> Maksimal 3x Revisi Desain</li>
                          <li className="flex items-start text-sm text-textPrimary"><ShieldCheck size={14} className="text-brandOrange mt-0.5 mr-2 flex-shrink-0" /> 1 Bulan Garansi Bug & Error</li>
                          <li className="flex items-start text-sm text-textPrimary"><Info size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> Gratis 1x Pelatihan & Manual PDF</li>
                          <li className="flex items-start text-sm text-textPrimary"><Info size={14} className="text-violet-500 mt-0.5 mr-2 flex-shrink-0" /> ✨ Gratis Desain Logo Brand Eksklusif</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Detail Matrix - Hanya Tampilkan Paket Aktif */}
              <div>
                <h3 className="font-display text-xl font-bold text-textPrimary mb-4">Detail Spesifikasi Paket</h3>
                <div className="border border-borderLight rounded-xl overflow-hidden">
                  <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-surface">
                        <tr className="border-b border-borderLight">
                          <th className="py-3 px-4 font-bold text-textSecondary uppercase tracking-wider text-xs w-[40%]">Kriteria</th>
                          
                          {activeTab === 0 && (
                            <th className="py-3 px-4 font-bold uppercase tracking-wider text-xs border-l border-borderLight text-emerald-500 bg-emerald-500/5 w-[60%]">
                              Starter Landing
                            </th>
                          )}
                          
                          {activeTab === 1 && (
                            <th className="py-3 px-4 font-bold uppercase tracking-wider text-xs border-l border-borderLight text-brandBlue bg-brandBlue/5 w-[60%]">
                              Web Instansi (CMS)
                            </th>
                          )}
                          
                          {activeTab === 2 && (
                            <th className="py-3 px-4 font-bold uppercase tracking-wider text-xs border-l border-borderLight text-brandOrange bg-brandOrange/5 w-[60%]">
                              Sistem Custom
                            </th>
                          )}

                          {activeTab === 3 && (
                            <th className="py-3 px-4 font-bold uppercase tracking-wider text-xs border-l border-borderLight text-violet-500 bg-violet-500/5 w-[60%]">
                              Portal Berita Full CMS
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody className="text-sm text-textPrimary divide-y divide-borderLight">
                        
                        <tr className="hover:bg-surface/50 transition-colors">
                          <td className="py-3 px-4 font-bold text-xs">Panel Admin</td>
                          {activeTab === 0 && <td className="py-3 px-4 border-l border-borderLight italic bg-emerald-500/5">Tidak Ada (Statis)</td>}
                          {activeTab === 1 && <td className="py-3 px-4 border-l border-borderLight bg-brandBlue/5 font-medium">Ada (Filament v5)</td>}
                          {activeTab === 2 && <td className="py-3 px-4 border-l border-borderLight bg-brandOrange/5 font-medium">Ada (Custom Dashboard)</td>}
                          {activeTab === 3 && <td className="py-3 px-4 border-l border-borderLight bg-violet-500/5 font-medium">Ada (Filament v5 CMS)</td>}
                        </tr>

                        <tr className="hover:bg-surface/50 transition-colors">
                          <td className="py-3 px-4 font-bold text-xs">Batas Revisi Mayor</td>
                          {activeTab === 0 && <td className="py-3 px-4 border-l border-borderLight bg-emerald-500/5">2x Revisi Minor</td>}
                          {activeTab === 1 && <td className="py-3 px-4 border-l border-borderLight bg-brandBlue/5">3x Revisi Mayor</td>}
                          {activeTab === 2 && <td className="py-3 px-4 border-l border-borderLight bg-brandOrange/5">Bertahap per Milestone</td>}
                          {activeTab === 3 && <td className="py-3 px-4 border-l border-borderLight bg-violet-500/5">3x Revisi Desain</td>}
                        </tr>

                        <tr className="hover:bg-surface/50 transition-colors">
                          <td className="py-3 px-4 font-bold text-xs">Garansi Perbaikan</td>
                          {activeTab === 0 && <td className="py-3 px-4 border-l border-borderLight bg-emerald-500/5">2 Minggu</td>}
                          {activeTab === 1 && <td className="py-3 px-4 border-l border-borderLight bg-brandBlue/5">1 Bulan</td>}
                          {activeTab === 2 && <td className="py-3 px-4 border-l border-borderLight font-bold text-brandOrange bg-brandOrange/5">3 Bulan</td>}
                          {activeTab === 3 && <td className="py-3 px-4 border-l border-borderLight bg-violet-500/5">1 Bulan</td>}
                        </tr>

                        <tr className="hover:bg-surface/50 transition-colors">
                          <td className="py-3 px-4 font-bold text-xs">Waktu Pengerjaan</td>
                          {activeTab === 0 && <td className="py-3 px-4 border-l border-borderLight bg-emerald-500/5">1 - 3 Hari Kerja</td>}
                          {activeTab === 1 && <td className="py-3 px-4 border-l border-borderLight bg-brandBlue/5">1 - 2 Minggu</td>}
                          {activeTab === 2 && <td className="py-3 px-4 border-l border-borderLight bg-brandOrange/5">1 Bulan++</td>}
                          {activeTab === 3 && <td className="py-3 px-4 border-l border-borderLight bg-violet-500/5">1 - 2 Minggu</td>}
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Addons & Maintenance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-borderLight p-6 rounded-xl">
                  <h3 className="font-display text-lg font-bold text-textPrimary mb-4 flex items-center">
                    <PlusCircle size={18} className="text-brandBlue mr-2" /> Layanan Tambahan
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-sm border-b border-borderLight pb-2">
                      <strong className="text-textPrimary block mb-1">SEO Booster <span className="text-brandBlue ml-1">Rp 500k - 1jt</span></strong>
                      <span className="text-textSecondary">Optimasi kata kunci, speed, dan Google Console.</span>
                    </li>
                    <li className="text-sm border-b border-borderLight pb-2">
                      <strong className="text-textPrimary block mb-1">Payment Gateway <span className="text-brandBlue ml-1">Rp 1.5jt</span></strong>
                      <span className="text-textSecondary">Midtrans/Xendit untuk E-Wallet, QRIS, & Kartu Kredit.</span>
                    </li>
                    <li className="text-sm">
                      <strong className="text-textPrimary block mb-1">Extra Admin Training <span className="text-brandBlue ml-1">Rp 300rb/Sesi</span></strong>
                      <span className="text-textSecondary">Pelatihan staf / operator baru.</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-borderLight p-6 rounded-xl">
                  <h3 className="font-display text-lg font-bold text-textPrimary mb-4 flex items-center">
                    <Server size={18} className="text-brandOrange mr-2" /> Biaya Operasional
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-sm border-b border-borderLight pb-2">
                      <strong className="text-textPrimary block mb-1">Domain & Hosting <span className="text-brandOrange ml-1">Rp 500k-1.5jt/Thn</span></strong>
                      <span className="text-textSecondary">Perpanjangan sewa ruang server dan nama domain.</span>
                    </li>
                    <li className="text-sm border-b border-borderLight pb-2">
                      <strong className="text-textPrimary block mb-1">Maintenance Kontrak <span className="text-brandOrange ml-1">Rp 1jt/Thn (Opsional)</span></strong>
                      <span className="text-textSecondary">Backup database rutin & update security patch.</span>
                    </li>
                    <li className="text-sm">
                      <strong className="text-textPrimary block mb-1">Update Konten Manual <span className="text-brandOrange ml-1">Rp 50k-100k/Aksi</span></strong>
                      <span className="text-textSecondary">Jasa input gambar/teks untuk paket non-CMS.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-4 border-t border-borderLight text-center flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => setShowModal(false)} className="px-8 py-3 bg-surface border border-borderLight hover:bg-borderLight text-textPrimary font-bold text-sm rounded-lg transition-all">
                  Tutup
                </button>
                <a onClick={() => setShowModal(false)} href="#contact" className="inline-flex items-center px-8 py-3 bg-brandBlue hover:bg-[#0048D8] text-white font-bold text-sm rounded-lg transition-all shadow-lg shadow-brandBlue/20">
                  Mulai Konsultasi Proyek Anda <ArrowRight size={16} className="ml-2" />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
