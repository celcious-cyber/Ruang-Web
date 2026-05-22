"use client";

import React from "react";

export const Process: React.FC = () => {

  const steps = [
    {
      num: "01",
      title: "Diskusi & Strategi",
      desc: "Konsultasi mendalam untuk memahami kebutuhan, visi, dan audiens target Anda."
    },
    {
      num: "02",
      title: "Desain & Prototyping",
      desc: "Pembuatan wireframe dan desain visual (UI/UX) untuk Anda setujui."
    },
    {
      num: "03",
      title: "Pengembangan Web",
      desc: "Proses coding dengan teknologi modern yang bersih, cepat, dan aman."
    },
    {
      num: "04",
      title: "Testing & Peluncuran",
      desc: "Pemeriksaan kualitas menyeluruh sebelum website resmi diluncurkan (Go Live)."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 transition-colors duration-300">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-textPrimary transition-colors">
          Bagaimana Kami Bekerja
        </h2>
        <p className="text-textSecondary text-base sm:text-lg transition-colors">
          Proses transparan dan terstruktur untuk memastikan hasil yang memuaskan dan tepat waktu.
        </p>
      </div>

      <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch overflow-x-auto pt-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center relative bg-surface p-8 rounded-[12px] border border-borderLight overflow-hidden transition-all duration-300 hover:border-brandBlue hover:shadow-lg group"
          >
            {/* background decorative phase number */}
            <div className="absolute top-4 right-4 text-6xl font-display font-extrabold text-brandBlue/5 dark:text-white/5 select-none transition-colors group-hover:text-brandBlue/10">
              {step.num}
            </div>
            
            <div className="font-mono text-xs font-bold text-brandBlue dark:text-white transition-colors uppercase tracking-wider mb-6">
              Phase {step.num}
            </div>
            
            <h3 className="font-display text-lg font-bold mb-3 text-textPrimary transition-colors">
              {step.title}
            </h3>
            
            <p className="text-textSecondary text-sm leading-relaxed transition-colors">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
