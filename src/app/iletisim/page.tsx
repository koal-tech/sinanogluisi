"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">İletişim</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sorularınız, teklif talepleriniz veya teknik destek için bize ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy-900 mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <MapPin className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Adres</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      İkitelli OSB Mahallesi, Metal İş Sanayi Sitesi, 12. Blok No:45<br />
                      Başakşehir / İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy-50 p-3 rounded-lg">
                    <Phone className="text-navy-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Telefon</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      0212 123 45 67<br />
                      0532 987 65 43
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <Mail className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">E-posta</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      info@sinanogluisi.com.tr<br />
                      satis@sinanogluisi.com.tr
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy-50 p-3 rounded-lg">
                    <Clock className="text-navy-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Çalışma Saatleri</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Pzt - Cuma: 08:30 - 18:30<br />
                      Cmt: 08:30 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Bize Mesaj Gönderin</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-colors outline-none" placeholder="Örn: Ahmet Yılmaz" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon Numaranız</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-colors outline-none" placeholder="Örn: 0532 555 55 55" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-posta Adresiniz</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-colors outline-none" placeholder="ornek@sirket.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-colors outline-none bg-white">
                    <option>Genel Bilgi</option>
                    <option>Ürün Fiyat Teklifi</option>
                    <option>Teknik Servis / Arıza</option>
                    <option>Bayilik Başvurusu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-colors outline-none" placeholder="Mesajınızı buraya yazınız..."></textarea>
                </div>
                <button type="button" className="w-full md:w-auto px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-transform active:scale-95 flex items-center justify-center gap-2">
                  <Send size={18} />
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 bg-gray-200 rounded-2xl h-96 w-full overflow-hidden relative">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12030.123456789!2d28.8!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiAyOMKwNDgnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
      </div>
    </div>
  );
}
