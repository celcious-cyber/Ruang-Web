"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import IconCard from "./IconCard";

export default function FloatingIcons() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const iconData = [
    {
      id: "react",
      name: "React",
      file: isDark ? "react_wordmark_dark.svg" : "react_wordmark_light.svg",
      color: "#61DAFB",
      size: 100, x: 65, y: 10
    },
    {
      id: "nextjs",
      name: "Next.js",
      file: isDark ? "nextjs_logo_dark.svg" : "nextjs_logo_light.svg",
      color: isDark ? "#FFFFFF" : "#000000",
      size: 85, x: 18, y: 22
    },
    {
      id: "flutter",
      name: "Flutter",
      file: "flutter.svg",
      color: "#42A5F5",
      size: 90, x: 80, y: 40
    },
    {
      id: "figma",
      name: "Figma",
      file: "figma.svg",
      color: "#A259FF",
      size: 75, x: 33, y: 55
    },
    {
      id: "laravel",
      name: "Laravel",
      file: "laravel.svg",
      color: "#FF2D20",
      size: 72, x: 10, y: 70
    },
    {
      id: "typescript",
      name: "TypeScript",
      file: "typescript.svg",
      color: "#3178C6",
      size: 65, x: 73, y: 72
    },
    {
      id: "tailwind",
      name: "Tailwind",
      file: isDark ? "tailwindcss-wordmark-dark.svg" : "tailwindcss-wordmark.svg",
      color: "#06B6D4",
      size: 60, x: 48, y: 84
    },
  ];

  return (
    <div className="absolute inset-0 hidden md:block">
      {iconData.map((item) => (
        <IconCard
          key={item.id}
          icon={
            <Image
              src={`/logos/${item.file}`}
              alt={item.name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          }
          name={item.name}
          color={item.color}
          size={item.size}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
        />
      ))}
    </div>
  );
}
