import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RuangWeb | Jasa Pembuatan Website & Aplikasi Premium",
  description: "RuangWeb melayani pembuatan Landing Page, Web Profil Perusahaan (CMS), Sistem Custom (SaaS), Toko Online, dan Portal Berita. Kami merancang website modern yang cepat, elegan, dan dioptimalkan untuk SEO guna meningkatkan bisnis Anda.",
  keywords: [
    "jasa pembuatan website",
    "bikin web murah",
    "web development indonesia",
    "jasa web instansi",
    "buat aplikasi mobile",
    "jasa landing page",
    "sistem custom saas",
    "web portal berita",
    "jasa web profesional",
    "ruangweb studio"
  ],
  authors: [{ name: "RuangWeb Studio", url: "https://ruangweb.studio" }],
  creator: "RuangWeb Studio",
  publisher: "RuangWeb Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "RuangWeb | Jasa Pembuatan Website & Aplikasi Premium",
    description: "Tingkatkan kredibilitas dan penjualan dengan website responsif dan cepat dari RuangWeb. Solusi Logis, Eksekusi Praktis.",
    url: "https://ruangweb.studio",
    siteName: "RuangWeb Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RuangWeb Studio Banner",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RuangWeb | Jasa Pembuatan Website & Aplikasi Premium",
    description: "Tingkatkan kredibilitas dan penjualan dengan website responsif dan cepat dari RuangWeb.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/ruangweb.svg",
    apple: "/ruangweb.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased selection:bg-[#0057FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
