"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Sanayi Tipi Soba",
      category: "Isıtma Sistemleri",
      image: "https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=600",
      description: "Geniş alanlar için yüksek verimli katı yakıtlı sanayi sobaları."
    },
    {
      id: 2,
      title: "Sıcak Su Kazanı",
      category: "Kazan Sistemleri",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600",
      description: "Endüstriyel tesisler için tam otomatik sıcak su kazanları."
    },
    {
      id: 3,
      title: "Buhar Jeneratörü",
      category: "Buhar Sistemleri",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
      description: "Hızlı buhar üretimi sağlayan kompakt ve güvenli jeneratörler."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-red-600 font-semibold tracking-wide uppercase mb-2">ÜRÜNLERİMİZ</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900">
              Öne Çıkan Ürünler
            </h3>
          </div>
          <Link 
            href="/urunler" 
            className="hidden md:flex items-center gap-2 text-navy-600 hover:text-red-600 font-medium transition-colors"
          >
            Tüm Ürünleri Gör
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors z-10" />
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <span className="text-red-600 text-sm font-semibold mb-2 block">{product.category}</span>
                <h4 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-red-600 transition-colors">
                  {product.title}
                </h4>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                <Link 
                  href="/urunler" 
                  className="inline-flex items-center gap-2 text-navy-800 font-semibold hover:translate-x-2 transition-transform"
                >
                  Detaylı İncele <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/urunler" 
            className="inline-flex items-center gap-2 text-red-600 font-medium"
          >
            Tüm Ürünleri Gör
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
