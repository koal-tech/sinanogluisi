import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Changed to Outfit as secondary font for headings
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sinanoğlu Isı Sanayi | Güvenilir Isıtma Çözümleri",
  description: "Endüstriyel ısıtma sistemleri, buhar kazanları ve sanayi tipi soba üretiminde öncü firma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="grow pt-[104px] md:pt-[112px]"> {/* Adjust padding for fixed header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
