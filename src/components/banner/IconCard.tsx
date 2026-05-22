import React from "react";

interface IconCardProps {
  icon: React.ReactNode;
  name: string;
  color: string;
  size?: number;
  style?: React.CSSProperties;
}

export default function IconCard({ icon, name, color, size = 80, style }: IconCardProps) {
  return (
    <div
      className="icon-card absolute select-none transition-all duration-300 hover:scale-115 hover:-translate-y-3 hover:rotate-3 cursor-pointer will-change-transform will-change-opacity group"
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      {/* Outer Glow Effect */}
      <div
        className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none"
        style={{ background: `${color}33` }}
      />

      {/* Card body */}
      <div
        className="w-full h-full rounded-[18px] flex items-center justify-center relative overflow-hidden transition-colors border border-borderLight"
        style={{
          background: `linear-gradient(135deg,
            color-mix(in srgb, ${color} 8%, var(--color-surface)),
            var(--color-surface)
          )`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.04), 0 2px 6px ${color}15`,
        }}
      >
        {/* Top Highlight line */}
        <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-[18px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

        {/* Icon (colored SVG inside) */}
        <div className="relative z-10 w-[45%] h-[45%] flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Mini shadow ellipse at bottom */}
      <div
        className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 rounded-full blur-sm opacity-20 transition-all duration-300 group-hover:scale-110 group-hover:opacity-30"
        style={{
          width: size * 0.6,
          height: 8,
          background: color,
        }}
      />
    </div>
  );
}
