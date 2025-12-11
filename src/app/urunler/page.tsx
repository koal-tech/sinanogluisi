"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const categories = ["Tümü", "Sanayi Sobaları", "Buhar Kazanları", "Sıcak Su Kazanları", "Brülörler", "Yedek Parça"];

  const products = [
    {
      id: 1,
      title: "Katı Yakıtlı Sanayi Sobası",
      category: "Sanayi Sobaları",
      image: "https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=600",
      description: "1000m²'ye kadar ısıtma kapasitesi, otomatik yüklemeli."
    },
    {
      id: 2,
      title: "Tam Otomatik Buhar Kazanı",
      category: "Buhar Kazanları",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
      description: "Yüksek basınçlı, PLC kontrollü endüstriyel buhar kazanı."
    },
    {
      id: 3,
      title: "Sıcak Su Kazanı Eko Serisi",
      category: "Sıcak Su Kazanları",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600",
      description: "Ekonomik ve çevre dostu, apartman ve site kullanımı için uygun."
    },
    {
      id: 4,
      title: "Gaz Yakıtlı Brülör",
      category: "Brülörler",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
      description: "Yüksek yanma verimliliği, düşük emisyon değerleri."
    },
    {
      id: 5,
      title: "Fan Motoru",
      category: "Yedek Parça",
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=600",
      description: "Sanayi tipi ısıtıcılar için yüksek devirli fan motoru."
    },
    {
      id: 6,
      title: "Otomatik Yükleme Helezonu",
      category: "Yedek Parça",
      image: "https://images.unsplash.com/photo-1531297461136-82lwDe43?auto=format&fit=crop&q=80&w=600",
      description: "Kömür ve pelet yakıtlı sistemler için otomatik besleme ünitesi."
    }
  ];

  const filteredProducts = activeCategory === "Tümü" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Ürün Katalogu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza en uygun sanayi tipi ısıtma çözümlerini inceleyin.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat 
                    ? "bg-red-600 text-white" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Ürün ara..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layout
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="h-64 overflow-hidden relative">
                 <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors z-10" />
                 <img 
                   src={product.image} 
                   alt={product.title} 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy-900 text-xs font-bold px-3 py-1 rounded-full z-20">
                   {product.category}
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-red-600 transition-colors">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <button className="w-full bg-navy-50 text-navy-900 font-semibold py-3 rounded-lg hover:bg-navy-900 hover:text-white transition-colors">
                  Detayları Gör
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
