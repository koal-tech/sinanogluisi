"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Hangi bölgelere hizmet veriyorsunuz?",
      answer: "Tüm Türkiye geneline ürün gönderimi ve kurulum hizmeti sağlamaktayız. Başta Marmara Bölgesi olmak üzere, geniş servis ağımızla yanınızdayız."
    },
    {
      question: "Garanti süresi ne kadar?",
      answer: "Sanayi tipi ürünlerimizde üretim hatalarına karşı 2 yıl tam garanti sunuyoruz. Ayrıca 10 yıl yedek parça temin garantimiz bulunmaktadır."
    },
    {
      question: "Özel ölçü üretim yapıyor musunuz?",
      answer: "Evet, işletmenizin ihtiyacına ve alanına göre özel ölçü ve kapasitelerde projelendirme ve üretim yapmaktayız."
    },
    {
      question: "Kurulum hizmeti fiyata dahil mi?",
      answer: "Kurulum hizmeti, proje kapsamına ve lokasyona göre değişiklik gösterebilir. Detaylı teklifimizde kurulum ve nakliye koşulları açıkça belirtilmektedir."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-semibold tracking-wide uppercase mb-2">MERAK EDİLENLER</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900">
            Sıkça Sorulan Sorular
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-navy-900">{faq.question}</span>
                <span className="text-red-600">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
