"use client";

import { motion } from "framer-motion";

export function Partners() {
  // Mock partners for display
  const partners = Array(6).fill("Partner Firma");

  return (
    <section className="py-16 bg-navy-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h3 className="text-xl md:text-2xl font-semibold opacity-80">
          Güçlü İş Ortaklarımız ile Büyüyoruz
        </h3>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-12 items-center justify-center flex-wrap opacity-60">
           {/* Placeholder Logos */}
           {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="text-2xl font-bold bg-white/10 px-8 py-4 rounded-lg hover:bg-white/20 transition-colors cursor-default">
               PARTNER LOGO {i}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
