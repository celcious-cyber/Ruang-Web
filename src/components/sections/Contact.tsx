"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MessageSquare } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export const Contact: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    // Draft WhatsApp Direct dengan detail data
    const messageText = `Halo Ruangweb, Saya ${data.name} (${data.email}). Ingin memesan layanan: *${data.service}*. Detail proyek: ${data.message}`;
    
    const waUrl = `https://wa.me/6285162590414?text=${encodeURIComponent(messageText)}`;
    
    window.open(waUrl, "_blank");
    setSuccess(true);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Info Column */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-brandBlue/10 text-brandBlue text-xs font-mono font-bold uppercase tracking-wider mb-6 transition-colors">
            Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-textPrimary transition-colors">
            Mari Berkolaborasi
          </h2>
          <p className="text-textSecondary text-base sm:text-lg mb-8 leading-relaxed transition-colors">
            Punya ide brilian atau masalah yang perlu dipecahkan? Tim kami siap mendengar dan memberikan solusi teknis terbaik.
          </p>

          <div className="space-y-6">
            {/* Email item */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-background border border-borderLight rounded-[4px] flex items-center justify-center transition-colors">
                <Mail className="text-brandBlue" size={20} />
              </div>
              <div>
                <div className="text-xs text-textSecondary font-mono transition-colors">EMAIL DIRECT</div>
                <a href="mailto:hello@ruangweb.studio" className="text-textPrimary hover:text-brandBlue font-medium transition-colors">
                  hello@ruangweb.studio
                </a>
              </div>
            </div>

            {/* WA item */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-background border border-borderLight rounded-[4px] flex items-center justify-center transition-colors">
                <MessageSquare className="text-brandOrange" size={20} />
              </div>
              <div>
                <div className="text-xs text-textSecondary font-mono transition-colors">WHATSAPP CHAT</div>
                <a href="https://wa.me/6285162590414" target="_blank" rel="noreferrer" className="text-textPrimary hover:text-brandOrange font-medium transition-colors">
                  0851-6259-0414
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-surface border border-borderLight p-8 rounded-[12px] shadow-sm transition-colors">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-textSecondary uppercase tracking-wider mb-2 transition-colors">Nama Lengkap</label>
              <input 
                {...register("name", { required: true })}
                type="text" 
                className="w-full bg-background border border-borderLight rounded-[4px] px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-brandBlue transition-all"
                placeholder="Ex. Muhammad Akmal"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-textSecondary uppercase tracking-wider mb-2 transition-colors">Email</label>
              <input 
                {...register("email", { required: true })}
                type="email" 
                className="w-full bg-background border border-borderLight rounded-[4px] px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-brandBlue transition-all"
                placeholder="Ex. akmal@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-textSecondary uppercase tracking-wider mb-2 transition-colors">Layanan</label>
              <select 
                {...register("service")}
                className="w-full bg-background border border-borderLight rounded-[4px] px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-brandBlue transition-all cursor-pointer"
              >
                <option value="Landing Page">Landing Page</option>
                <option value="Company Profile">Company Profile Premium</option>
                <option value="E-Commerce">E-Commerce System</option>
                <option value="Mobile Application">Mobile Application (Flutter)</option>
                <option value="Web App / SaaS">SaaS Dashboard Custom</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-textSecondary uppercase tracking-wider mb-2 transition-colors">Pesan Tambahan</label>
              <textarea 
                {...register("message", { required: true })}
                rows={4}
                className="w-full bg-background border border-borderLight rounded-[4px] px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-brandBlue transition-all resize-none"
                placeholder="Briefly describe details..."
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-brandBlue hover:bg-[#0048D8] text-white font-bold text-sm rounded-[4px] transition-all duration-300 uppercase tracking-wider shadow-lg shadow-brandBlue/10 cursor-pointer"
            >
              Kirim Pesan Sekarang
            </button>

            {success && (
              <p className="text-xs text-brandBlue font-semibold text-center mt-3 animate-pulse">
                Membuka WhatsApp...
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
