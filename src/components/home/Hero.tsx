"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-navy-900 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-navy-900 via-navy-800 to-red-900 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 border border-red-500/30 text-red-50 text-sm font-medium mb-6">
            Endüstriyel Isıtma Çözümlerinde Lider
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Güçlü Isı, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              Güvenilir Gelecek
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Sinanoğlu Isı Sanayi olarak, yılların tecrübesiyle sanayi tipi sobalar, kazanlar ve ısıtma sistemleri üretiyoruz. İşletmeniz için en verimli çözümler burada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/urunler" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              Ürünleri İncele
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/iletisim" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Bize Ulaşın
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 -left-24 w-96 h-96 bg-navy-600/30 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
