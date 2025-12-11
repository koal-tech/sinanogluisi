"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, History } from "lucide-react";

export default function AboutPage() {
  const history = [
    { year: "1995", title: "Kuruluş", description: "Sinanoğlu Isı Sanayi, küçük bir atölyede ısıtma sistemleri üretimine başladı." },
    { year: "2005", title: "Fabrikalaşma", description: "Artan talep ile birlikte 2000m²'lik yeni fabrikamıza taşındık." },
    { year: "2010", title: "İhracat", description: "İlk yurt dışı ihracatımızı gerçekleştirerek uluslararası pazara açıldık." },
    { year: "2023", title: "Dijital Dönüşüm", description: "Üretim hattımızı endüstri 4.0 standartlarına uygun hale getirdik." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(45,74,124,0.4),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Hakkımızda
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Çeyrek asrı aşkın tecrübemizle sanayi ısıtma sistemlerinde güvenin adresi.
          </p>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-2xl border-l-4 border-red-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="text-red-600 w-10 h-10" />
                <h2 className="text-2xl font-bold text-navy-900">Misyonumuz</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Müşterilerimize en yüksek verimli, çevre dostu ve ekonomik ısıtma çözümleri sunarak, işletmelerin enerji maliyetlerini düşürmek ve sürdürülebilir üretime katkı sağlamak.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-2xl border-l-4 border-navy-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-navy-600 w-10 h-10" />
                <h2 className="text-2xl font-bold text-navy-900">Vizyonumuz</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Türkiye&apos;nin lider endüstriyel ısıtma sistemleri üreticisi olarak, teknolojiyi yakından takip eden, global pazarda rekabet edebilen bir dünya markası olmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-navy-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-semibold uppercase mb-2">TARİHÇEMİZ</h2>
            <h3 className="text-3xl font-bold text-navy-900">Başarı Yolculuğumuz</h3>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block" />

            <div className="space-y-12">
              {history.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 text-center md:text-left">
                     <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${index % 2 === 0 ? "border-red-600" : "border-navy-600"}`}>
                       <h4 className="text-2xl font-bold text-navy-900 mb-2">{item.year}</h4>
                       <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                       <p className="text-gray-600">{item.description}</p>
                     </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-navy-900 z-10 flex items-center justify-center shrink-0">
                    <History size={20} className="text-navy-900" />
                  </div>
                  
                  <div className="flex-1 hidden md:block" /> {/* Spacer */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
           <h3 className="text-3xl font-bold text-navy-900 mb-12">Değerlerimiz</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-6">
               <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Users className="text-red-600 w-10 h-10" />
               </div>
               <h4 className="text-xl font-bold mb-3">Müşteri Odaklılık</h4>
               <p className="text-gray-600">Müşterilerimizi iş ortağımız olarak görür, onların başarısı için çalışırız.</p>
             </div>
             <div className="p-6">
               <div className="bg-navy-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Award className="text-navy-600 w-10 h-10" />
               </div>
               <h4 className="text-xl font-bold mb-3">Kalite</h4>
               <p className="text-gray-600">Üretimin her aşamasında kalite standartlarından ödün vermeyiz.</p>
             </div>
             <div className="p-6">
               <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Target className="text-green-600 w-10 h-10" />
               </div>
               <h4 className="text-xl font-bold mb-3">Sürdürülebilirlik</h4>
               <p className="text-gray-600">Gelecek nesillere yaşanabilir bir dünya bırakmak için çevre dostu üretim yaparız.</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
