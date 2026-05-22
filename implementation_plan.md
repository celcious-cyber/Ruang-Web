# 🎯 Celcious Studio — Banner & CTA Plan
> Spesifikasi teknis & visual untuk Hero Banner dan Call-to-Action  
> Fokus: **3D Floating Icons + Parallax + Animasi Scroll**

---

## 📋 Daftar Isi
1. [Nama & Identifikasi Style](#1-nama--identifikasi-style)
2. [Konsep Visual Banner](#2-konsep-visual-banner)
3. [3D Floating Icons — Detail Teknis](#3-3d-floating-icons--detail-teknis)
4. [Pilihan Library & Perbandingan](#4-pilihan-library--perbandingan)
5. [Layout & Komposisi Banner](#5-layout--komposisi-banner)
6. [Animasi — Spesifikasi Lengkap](#6-animasi--spesifikasi-lengkap)
7. [CTA Section Plan](#7-cta-section-plan)
8. [Kode Implementasi](#8-kode-implementasi)
9. [Responsive & Performance](#9-responsive--performance)
10. [Checklist Banner](#10-checklist-banner)

---

## 1. Nama & Identifikasi Style

Kamu mungkin mencari style yang dikenal dengan beberapa nama ini — semuanya mirip tapi punya nuansa berbeda:

| Nama Style | Deskripsi | Contoh Referensi |
|---|---|---|
| **Floating 3D Icons** | Icon tech berputar/melayang bebas di sekitar hero | Stripe, Linear |
| **3D Icon Cloud / Tag Cloud** | Bola/sphere yang dipenuhi icon berputar | GitHub star pages |
| **Isometric Floating Elements** | Objek 3D dengan sudut iso 45°, melayang dengan stagger | Notion, Figma landing |
| **Glassmorphism 3D Cards** | Card transparan dengan depth, shadow, dan blur melayang | iOS-style web |
| **Spline 3D Scene** | Scene 3D interaktif penuh di background | Vercel, Luma |
| **CSS 3D Perspective Float** | Pure CSS transform: rotateX/Y/Z + floating keyframe | Minimalis, ringan |
| **Lottie 3D Icon Animation** | File animasi JSON yang dirender sebagai animated icon | LottieFiles.com |

### ✅ Rekomendasi untuk Celcious Studio

Untuk web agency yang **minimalis modern**, kombinasi terbaik adalah:

> **"Floating 3D Tech Icons"** — icon teknologi (React, Flutter, Next.js, dll) berbentuk 3D (bukan flat), melayang di sekitar hero dengan gerakan lambat **up-down + rotasi ringan**, ditambah efek **depth/parallax** saat mouse bergerak.

Style ini dipakai oleh: **Vercel, Resend, Supabase, Linear, Raycast**.

---

## 2. Konsep Visual Banner

### 🖼️ Layout Keseluruhan

```
┌──────────────────────────────────────────────────────────────┐
│  [NAVBAR — Frosted Glass, sticky]                            │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌─────────────────────┐    ┌──────────────────────────┐   │
│   │                     │    │  ○  [React 3D Icon]      │   │
│   │  We Build What      │    │        ↕ float           │   │
│   │  You Imagine.       │    │  [Next.js 3D]  [Flutter] │   │
│   │                     │    │     ↕              ↕     │   │
│   │  [Tagline]          │    │  [Node]    [Figma 3D]    │   │
│   │                     │    │        [Supabase 3D]     │   │
│   │  [CTA Button]       │    │                          │   │
│   │  [Secondary CTA]    │    │                          │   │
│   └─────────────────────┘    └──────────────────────────┘   │
│                                                              │
│   ── ── ── ── ── [Stats Bar] ── ── ── ── ──                  │
└──────────────────────────────────────────────────────────────┘
```

### 🎨 Atmosphere Banner

```
Background    : #0C0C0A (dark near-black) ATAU #F8F8F6 (off-white)
               → Rekomendasi: DARK untuk banner pertama, dramatic
Noise Texture : Grain overlay ringan, opacity 3–5% (subtle depth)
Gradient Mesh : Radial glow blur biru/oranye di area icon (sangat subtle)
Grid Lines    : Dot grid / line grid tipis di background, opacity 8%
```

**Kenapa dark untuk banner?**
- Icon 3D jauh lebih terlihat di background gelap
- Kontras tinggi = kesan premium
- Section setelah banner bisa light → visual ritme yang bagus

---

## 3. 3D Floating Icons — Detail Teknis

### 📦 Icon yang Akan Ditampilkan

Pilih **6–8 icon** teknologi yang paling relevan dengan layanan Celcious Studio:

| Icon | Teknologi | Relevansi Layanan |
|---|---|---|
| ⚛️ React | Frontend web | Website, Web App |
| 🔺 Next.js | SSR Framework | Website, Web App |
| 🐦 Flutter | Mobile | Aplikasi Mobile |
| 🟢 Node.js | Backend | Web App, API |
| 🎨 Figma | UI/UX Design | Semua layanan |
| 🔷 TypeScript | Language | Website, Web App |
| 🗄️ Supabase | Database | Web App, E-Commerce |
| 🛍️ Shopify/Cart | E-Commerce | Toko Online |

### 🏗️ Struktur 3D Icon

Setiap icon terdiri dari **3 layer**:

```
Layer 1 (Bottom/Shadow)  : Blur shadow ellipse, opacity 30–40%
Layer 2 (Body/Card)      : Rounded square, glass effect atau solid
                           background gradient sesuai warna brand icon
Layer 3 (Top/Icon Image) : SVG icon dari Simple Icons atau Devicons
                           + slight top lighting (pseudo-element)
```

**Efek visual per icon:**
```css
.icon-3d {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.05),   /* inner rim */
    0 8px 32px rgba(0,0,0,0.4),          /* depth shadow */
    0 2px 8px rgba(0,87,255,0.2);        /* blue glow */
  transform: perspective(800px) rotateX(10deg) rotateY(-10deg);
  backdrop-filter: blur(12px);
}
```

---

## 4. Pilihan Library & Perbandingan

### 🔬 Opsi A — CSS Pure (Ringan, Zero Dependency)

```
Pros  : Tidak ada library tambahan, sangat ringan, mudah dikontrol
Cons  : Animasi terbatas, tidak ada interaksi mouse 3D
Score : ⭐⭐⭐ (Cukup bagus untuk mobile)
```

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50%       { transform: translateY(-20px) rotate(3deg); }
}
```

---

### 🔬 Opsi B — GSAP + Custom JS (Rekomendasi Utama) ✅

```
Pros  : Performa terbaik, kontrol penuh, mouse parallax,
        stagger timing sempurna, bisa di-disable mobile
Cons  : Perlu install GSAP (~$0, ada free tier)
Score : ⭐⭐⭐⭐⭐ (Best choice untuk studio profesional)
```

Fitur yang bisa diimplementasikan:
- Floating animasi stagger (setiap icon dengan delay berbeda)
- **Mouse parallax** — icon bergerak saat kursor berpindah (depth illusion)
- Scroll-triggered fade out saat user scroll ke bawah
- Hover state: icon sedikit membesar + glow meningkat

---

### 🔬 Opsi C — Three.js (Full 3D Scene)

```
Pros  : Benar-benar 3D, bisa rotate on drag, sangat impressive
Cons  : Bundle size besar (~600KB), kompleks, bisa ganggu performance
Score : ⭐⭐⭐ (Overkill untuk icon, cocok kalau mau scene penuh)
```

> Rekomendasi: Gunakan Three.js hanya jika ingin membuat **globe/sphere dari icon** (seperti iconfont cloud). Untuk floating icon biasa, GSAP sudah lebih dari cukup.

---

### 🔬 Opsi D — Spline (3D Scene Embed)

```
Pros  : Visual paling wow, drag & physics, mudah dibuat di editor visual
Cons  : iframe embed berat, less control via code, butuh Spline account
Score : ⭐⭐⭐⭐ (Bagus untuk hero statement, tapi bukan untuk icon grid)
```

> Gunakan Spline jika kamu ingin **satu objek 3D besar** (logo Celcious dalam 3D, atau abstract shape) sebagai hero visual — bukan floating icon grid.

---

### 📊 Decision Matrix

```
Kebutuhan                            | Pilihan
-------------------------------------|----------
Icon melayang ringan, performa baik  | GSAP ✅ (Rekomendasi)
Sangat ringan, no lib               | CSS Pure
Icon sphere / cloud berputar         | Three.js
Satu objek 3D besar & interaktif    | Spline
```

---

## 5. Layout & Komposisi Banner

### 📐 Grid Layout (Desktop)

```
Banner height  : 100vh (min 700px)
Layout         : CSS Grid, 2 kolom (55% teks / 45% icons)
Padding        : 0 80px
Vertical center: align-items: center

Kolom kiri (teks):
  - Badge/pill kecil di atas ("✦ Web & App Studio")
  - H1 headline besar (fluid: clamp 3rem–5.5rem)
  - Paragraf subheadline (max-width: 480px)
  - CTA buttons (primary + secondary)
  - Social proof micro (bintang rating / klien count)

Kolom kanan (icons):
  - Posisi: relative container, overflow: visible
  - 6–8 icon cards, positioned absolutely
  - Setiap icon: ukuran bervariasi (60px–100px)
  - Tata letak: scattered, tidak grid-based (lebih organik)
```

### 📐 Posisi Icon (Scattered Layout)

```javascript
// Posisi relatif dalam container (%)
const iconPositions = [
  { icon: "react",      x: 65,  y: 10,  size: 90, delay: 0    },
  { icon: "nextjs",     x: 20,  y: 20,  size: 75, delay: 0.3  },
  { icon: "flutter",    x: 80,  y: 38,  size: 85, delay: 0.6  },
  { icon: "figma",      x: 40,  y: 55,  size: 70, delay: 0.9  },
  { icon: "nodejs",     x: 10,  y: 65,  size: 65, delay: 1.1  },
  { icon: "typescript", x: 72,  y: 70,  size: 60, delay: 1.4  },
  { icon: "supabase",   x: 50,  y: 85,  size: 55, delay: 1.7  },
]
// x, y = posisi left/top dalam % dari container
// size = ukuran card dalam px
// delay = GSAP stagger delay masuk animasi awal
```

### 📱 Layout Mobile

```
Layout       : Single column, stacked
Icon section : SEMBUNYIKAN atau tampilkan hanya 3 icon kecil
               sebagai decorative strip (tidak full scattered)
Hero height  : auto (tidak 100vh, cukup 85vh)
```

---

## 6. Animasi — Spesifikasi Lengkap

### 🎬 Fase 1 — Page Load Entrance Animation

Urutan animasi saat halaman pertama kali dibuka:

```
Timeline (total ~1.5 detik):

t=0.0s  : Navbar fade in dari atas
t=0.2s  : Badge/pill slide in dari kiri
t=0.4s  : H1 headline — word by word reveal (split text)
t=0.7s  : Subheadline fade + slide up
t=0.9s  : CTA buttons scale in (spring easing)
t=1.0s  : Icon pertama muncul (scale 0→1, blur clear)
t=1.1s  : Icon kedua muncul (stagger +0.1s per icon)
t=1.2s  : Icon ketiga, keempat, dst...
t=1.5s  : Semua icon mulai animasi float continuous
```

### 🎬 Fase 2 — Continuous Float Animation

Setelah entrance selesai, setiap icon berjalan animasi loop:

```javascript
// GSAP floating untuk setiap icon
icons.forEach((icon, i) => {
  gsap.to(icon, {
    y: "random(-25, 25)",       // Naik turun acak
    x: "random(-8, 8)",         // Gerak horizontal ringan
    rotation: "random(-8, 8)",  // Rotasi ringan
    duration: "random(3, 5)",   // Durasi berbeda tiap icon
    ease: "sine.inOut",         // Smooth sinusoidal
    repeat: -1,                 // Loop tak terbatas
    yoyo: true,                 // Bolak-balik
    delay: i * 0.3              // Stagger agar tidak sync
  });
});
```

### 🎬 Fase 3 — Mouse Parallax (Desktop Only)

Icon bergerak mengikuti posisi kursor dengan **depth factor** berbeda:

```javascript
// Depth factor: icon lebih besar = lebih "dekat" = gerak lebih banyak
const depthFactors = [0.03, 0.05, 0.08, 0.04, 0.06, 0.07, 0.05];

document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = (e.clientX - centerX);
  const moveY = (e.clientY - centerY);

  icons.forEach((icon, i) => {
    gsap.to(icon, {
      x: moveX * depthFactors[i],
      y: moveY * depthFactors[i],
      duration: 1.2,
      ease: "power2.out",
      overwrite: "auto"          // Tidak bentrok dengan float animation
    });
  });
});
```

### 🎬 Fase 4 — Scroll Out Animation

Saat user mulai scroll ke bawah, icons fade + move up:

```javascript
gsap.to(".icon-container", {
  opacity: 0,
  y: -60,
  scale: 0.9,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "40% top",
    scrub: 1.5,              // Smooth mengikuti scroll
  }
});
```

### 🎬 Fase 5 — Icon Hover State

```javascript
icons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      scale: 1.15,
      boxShadow: "0 12px 40px rgba(0,87,255,0.4)",
      duration: 0.3,
      ease: "back.out(2)"
    });
  });

  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, {
      scale: 1,
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      duration: 0.4,
      ease: "power2.out"
    });
  });
});
```

---

## 7. CTA Section Plan

### CTA Section 1 — Di dalam Banner (Primary CTA)

```
Posisi : Kolom kiri, setelah subheadline
Layout : Flex row, gap 16px
```

**Button Primary — "Mulai Proyek"**
```css
.btn-primary {
  background    : #0057FF;
  color         : #ffffff;
  padding       : 14px 32px;
  border-radius : 8px;
  font-weight   : 600;
  font-size     : 15px;
  border        : none;
  cursor        : pointer;

  /* Hover state */
  transition    : all 0.25s cubic-bezier(0.16,1,0.3,1);
}

.btn-primary:hover {
  background    : #0048D8;
  transform     : translateY(-2px);
  box-shadow    : 0 8px 24px rgba(0,87,255,0.4);
}

/* Magnetic effect — JS diperlukan */
/* Icon arrow bergerak ke kanan saat hover */
```

**Button Secondary — "Lihat Portofolio"**
```css
.btn-secondary {
  background    : transparent;
  color         : rgba(255,255,255,0.8);
  padding       : 14px 32px;
  border-radius : 8px;
  font-weight   : 500;
  border        : 1px solid rgba(255,255,255,0.2);
  cursor        : pointer;
  transition    : all 0.25s ease;
}

.btn-secondary:hover {
  background    : rgba(255,255,255,0.08);
  border-color  : rgba(255,255,255,0.4);
  color         : #ffffff;
}
```

**Social Proof Mikro** (di bawah tombol):
```
★ ★ ★ ★ ★  Dipercaya 30+ klien · Rating 4.9/5
```

---

### CTA Section 2 — Bottom CTA (End of Page)

Section khusus di bagian bawah sebelum footer. Ini adalah **conversion section** yang paling penting.

#### Layout

```
┌────────────────────────────────────────────────────┐
│                                                    │
│   [Background: Dark #0C0C0A + subtle grid]         │
│   [Accent: 1–2 floating icon blur ghost di pojok]  │
│                                                    │
│          Siap membangun produk digital             │
│            yang benar-benar bekerja?               │
│                                                    │
│      Konsultasi pertama gratis, tanpa komitmen.    │
│                                                    │
│        [Mulai Sekarang]   [WhatsApp Kami]          │
│                                                    │
│    📧 hello@celciousstudio.com                     │
│    🕐 Respon dalam 2–4 jam kerja                   │
│                                                    │
└────────────────────────────────────────────────────┘
```

#### Animasi CTA Bottom

```javascript
// Teks split reveal saat masuk viewport
gsap.from(".cta-title .word", {
  opacity: 0,
  y: 40,
  stagger: 0.08,
  duration: 0.7,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top 75%",
  }
});

// Buttons pop in
gsap.from(".cta-buttons > *", {
  opacity: 0,
  scale: 0.9,
  y: 20,
  stagger: 0.15,
  duration: 0.5,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top 65%",
  }
});
```

#### Magnetic Button Effect (CTA Bottom)

```javascript
// Tombol "menarik" kursor saat hover di sekitarnya (< 100px)
const magneticBtn = document.querySelector(".btn-magnetic");

magneticBtn.addEventListener("mousemove", (e) => {
  const rect = magneticBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distX = (e.clientX - centerX) * 0.3;
  const distY = (e.clientY - centerY) * 0.3;

  gsap.to(magneticBtn, {
    x: distX,
    y: distY,
    duration: 0.4,
    ease: "power2.out"
  });
});

magneticBtn.addEventListener("mouseleave", () => {
  gsap.to(magneticBtn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
});
```

---

## 8. Kode Implementasi

### 📁 Struktur File

```
components/
├── banner/
│   ├── HeroBanner.tsx          ← Komponen utama banner
│   ├── FloatingIcons.tsx       ← Container + logic 3D icons
│   ├── IconCard.tsx            ← Single icon card component
│   ├── HeroText.tsx            ← Teks + CTA kiri
│   ├── BannerBackground.tsx    ← Grid, noise, glow background
│   └── useBannerAnimation.ts   ← Custom hook semua GSAP logic
│
├── cta/
│   ├── CtaSection.tsx          ← Bottom CTA section
│   ├── MagneticButton.tsx      ← Tombol dengan magnetic effect
│   └── useCtaAnimation.ts      ← GSAP untuk CTA reveal
│
└── shared/
    ├── icons/                  ← SVG icons teknologi
    │   ├── ReactIcon.tsx
    │   ├── NextjsIcon.tsx
    │   └── ...
    └── AnimatedText.tsx        ← Reusable split text component
```

---

### 🧩 HeroBanner.tsx — Struktur Dasar

```tsx
"use client";
import { useRef } from "react";
import FloatingIcons from "./FloatingIcons";
import HeroText from "./HeroText";
import BannerBackground from "./BannerBackground";
import { useBannerAnimation } from "./useBannerAnimation";

export default function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useBannerAnimation({ containerRef, iconsRef });

  return (
    <section
      ref={containerRef}
      className="hero-section relative w-full min-h-screen overflow-hidden bg-[#0C0C0A]"
    >
      {/* Layer 1: Background effects */}
      <BannerBackground />

      {/* Layer 2: Content grid */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-20 h-screen
                      grid grid-cols-[55fr_45fr] items-center gap-12">

        {/* Kolom kiri: Teks + CTA */}
        <HeroText />

        {/* Kolom kanan: 3D Floating Icons */}
        <div ref={iconsRef} className="relative h-full">
          <FloatingIcons />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                      flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-white tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
```

---

### 🧩 IconCard.tsx — Single 3D Icon Card

```tsx
interface IconCardProps {
  icon: React.ReactNode;    // SVG icon
  name: string;             // Nama teknologi
  color: string;            // Warna accent icon
  size?: number;            // Ukuran card (px)
  style?: React.CSSProperties;
}

export default function IconCard({ icon, name, color, size = 80, style }: IconCardProps) {
  return (
    <div
      className="icon-card absolute select-none cursor-default"
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      {/* Card body */}
      <div
        className="w-full h-full rounded-[18px] flex items-center justify-center
                   relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg,
            color-mix(in srgb, ${color} 15%, #1a1a2e),
            #0f0f1a
          )`,
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.04),
            0 8px 32px rgba(0,0,0,0.5),
            0 2px 8px ${color}33
          `,
        }}
      >
        {/* Top-left light reflection */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 rounded-t-[18px]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)"
          }}
        />

        {/* Icon */}
        <div className="relative z-10" style={{ width: size * 0.48, height: size * 0.48 }}>
          {icon}
        </div>
      </div>

      {/* Shadow ellipse di bawah */}
      <div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full blur-md"
        style={{
          width: size * 0.7,
          height: 12,
          background: `${color}50`,
        }}
      />
    </div>
  );
}
```

---

### 🧩 useBannerAnimation.ts — GSAP Hook

```typescript
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  containerRef: React.RefObject<HTMLElement>;
  iconsRef: React.RefObject<HTMLElement>;
}

export function useBannerAnimation({ containerRef, iconsRef }: Props) {

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ─── 1. ENTRANCE ANIMATION ─────────────────────────────

      // Split headline text
      const headline = new SplitType(".hero-headline", { types: "words" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, x: -20, duration: 0.5 })
        .from(headline.words, {
          opacity: 0, y: 40, stagger: 0.05, duration: 0.7
        }, "-=0.2")
        .from(".hero-sub", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".hero-cta > *", {
          opacity: 0, y: 16, scale: 0.95,
          stagger: 0.1, duration: 0.4, ease: "back.out(1.5)"
        }, "-=0.2")
        .from(".icon-card", {
          opacity: 0, scale: 0.7, y: 30,
          stagger: 0.1, duration: 0.5, ease: "back.out(2)"
        }, "-=0.4");


      // ─── 2. CONTINUOUS FLOAT ───────────────────────────────

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".icon-card");

        cards.forEach((card) => {
          gsap.to(card, {
            y: `random(-28, 28)`,
            x: `random(-8, 8)`,
            rotation: `random(-8, 8)`,
            duration: `random(3.5, 5.5)`,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: gsap.utils.random(0, 2),
          });
        });


        // ─── 3. MOUSE PARALLAX ─────────────────────────────

        const depthMap = [0.025, 0.045, 0.07, 0.035, 0.055, 0.065, 0.04];

        const handleMouseMove = (e: MouseEvent) => {
          const cx = window.innerWidth / 2;
          const cy = window.innerHeight / 2;

          cards.forEach((card, i) => {
            const depth = depthMap[i] ?? 0.04;
            gsap.to(card, {
              x: `+=${(e.clientX - cx) * depth}`,
              y: `+=${(e.clientY - cy) * depth}`,
              duration: 1.4,
              ease: "power2.out",
              overwrite: "auto",
            });
          });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      });


      // ─── 4. SCROLL OUT ─────────────────────────────────────

      gsap.to(iconsRef.current, {
        opacity: 0,
        y: -50,
        scale: 0.92,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "35% top",
          scrub: 1.5,
        },
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup saat unmount

  }, []);
}
```

---

## 9. Responsive & Performance

### 📱 Behavior per Breakpoint

| Breakpoint | Banner Layout | Icons | Animasi |
|---|---|---|---|
| Mobile (< 768px) | Single column | Sembunyikan (display: none) atau 3 icon kecil dekoratif di bawah teks | CSS fade saja, NO GSAP float |
| Tablet (768–1023px) | Single column, lebih lega | 4 icon, ukuran lebih kecil (60px), float CSS | Entrance GSAP + CSS float |
| Desktop (≥ 1024px) | 2 kolom (55/45) | 6–8 icon full scattered | Full GSAP (float + mouse parallax) |

### ⚡ Performance Targets

```
Lighthouse Performance  : > 90
LCP (banner image)      : < 1.5s
CLS                     : 0 (tidak ada layout shift)
Bundle size tambahan    : GSAP ~30KB gzip (acceptable)
                          SplitType ~4KB gzip
```

### ✅ Performance Rules

```
[ ] Icon SVG diinline (bukan <img>), tidak ada HTTP request tambahan
[ ] GSAP di-import dynamic: import('gsap').then(...)
[ ] will-change: transform hanya pada icon-card (bukan semua elemen)
[ ] Matikan mouse parallax di touchscreen (pointer: coarse media query)
[ ] prefers-reduced-motion: matikan semua float, gunakan opacity saja
[ ] Background noise texture: CSS / SVG filter, bukan PNG besar
```

```css
/* Accessibility: Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  .icon-card {
    animation: none !important;
    transform: none !important;
  }
}
```

---

## 10. Checklist Banner

### ✅ Visual

- [ ] Background dark dengan grid dan noise texture
- [ ] H1 menggunakan font Bricolage Grotesque, fluid sizing
- [ ] Badge/pill kecil di atas headline ("✦ Buka untuk proyek baru")
- [ ] 6–8 icon 3D card tersebar di kolom kanan
- [ ] Setiap icon ada shadow ellipse di bawahnya
- [ ] Glow accent biru/oranye halus di background area icon
- [ ] Scroll indicator di bottom center

### ✅ Animasi

- [ ] Entrance stagger semua elemen (teks + icon)
- [ ] Float continuous loop setiap icon
- [ ] Mouse parallax aktif di desktop
- [ ] Hover: icon scale + glow
- [ ] Scroll: icon fade out mengikuti scroll

### ✅ CTA

- [ ] Primary button (biru, hover: lift + shadow)
- [ ] Secondary button (ghost, hover: subtle fill)
- [ ] Social proof mikro di bawah buttons
- [ ] Bottom CTA section dengan teks besar + magnetic button
- [ ] WhatsApp CTA button dengan icon

### ✅ Responsive

- [ ] Mobile: single column, icon disembunyikan
- [ ] Tablet: single column, 4 icon kecil
- [ ] Desktop: 2 kolom, full 3D float
- [ ] prefers-reduced-motion dihandle

### ✅ Technical

- [ ] GSAP cleanup (ctx.revert) di useEffect
- [ ] matchMedia untuk disable mobile animation
- [ ] will-change: transform pada icon cards
- [ ] Zero layout shift (CLS = 0)

---

*Banner & CTA Plan v1.0 — Celcious Studio*  
*Referensi visual: linear.app, resend.com, supabase.com hero sections*