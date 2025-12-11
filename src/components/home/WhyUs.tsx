"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, ShieldCheck, Users } from "lucide-react";

export function WhyUs() {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-red-600" />,
      title: "İhtiyaç Analizi ve Danışmanlık",
      description: "İşletmenizin gereksinimlerini yerinde inceliyor, size özel en verimli ısıtma çözümlerini projelendiriyoruz."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-red-600" />,
      title: "Ürün Seçimi ve Teklif",
      description: "Geniş ürün yelpazemizden bütçenize ve ihtiyacınıza uygun en doğru ürünleri seçip sunuyoruz."
    },
    {
      icon: <Clock className="w-10 h-10 text-red-600" />,
      title: "Hızlı Teslimat ve Kurulum",
      description: "Üretim ve tedarik sürecini hızla tamamlayıp, uzman ekibimizle kurulumu gerçekleştiriyoruz."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
      title: "Destek, Güvence ve Takip",
      description: "Satış sonrası teknik destek ve bakım hizmetlerimizle her zaman yanınızdayız."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-semibold tracking-wide uppercase mb-2">NEDEN BİZ?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Sinanoğlu Isı Sanayi Nasıl Çalışır?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Süreçlerimizi şeffaflık ve kalite üzerine kurduk. İşte bizi tercih etmeniz için nedenler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-red-600 group"
            >
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
