"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Ürünler", href: "/urunler" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="bg-navy-900 text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> 0212 123 45 67</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@sinanogluisi.com.tr</span>
          </div>
          <div className="flex gap-4">
            <span>Isıtma Sistemlerinde Güvenilir Çözüm Ortağınız</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-navy-900">
          SİNANOĞLU<span className="text-red-600">ISI</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-navy-800 hover:text-red-600 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/iletisim"
            className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            Teklif Al
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-navy-800 hover:text-red-600 font-medium py-2 border-b border-gray-50 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/iletisim"
                onClick={() => setIsOpen(false)}
                className="bg-red-600 text-white text-center py-3 rounded-lg font-medium hover:bg-red-700"
              >
                Teklif Al
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
