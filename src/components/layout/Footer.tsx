import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              SİNANOĞLU<span className="text-red-500">ISI</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Yılların verdiği tecrübe ile sanayi tipi ısıtma sistemlerinde öncü çözüm ortağınız. Kalite, güven ve müşteri memnuniyeti odaklı hizmet anlayışı.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-navy-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/905321234567" target="_blank" rel="noopener noreferrer" className="bg-navy-800 p-2 rounded-full hover:bg-green-600 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-navy-800 pb-2 inline-block">Hızlı Erişim</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-400 hover:text-red-500 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/urunler" className="text-gray-400 hover:text-red-500 transition-colors">Ürünlerimiz</Link></li>
              <li><Link href="/iletisim" className="text-gray-400 hover:text-red-500 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-navy-800 pb-2 inline-block">Ürün Grupları</h4>
            <ul className="space-y-3">
              <li><Link href="/urunler" className="text-gray-400 hover:text-red-500 transition-colors">Sanayi Tipi Isıtıcılar</Link></li>
              <li><Link href="/urunler" className="text-gray-400 hover:text-red-500 transition-colors">Buhar Kazanları</Link></li>
              <li><Link href="/urunler" className="text-gray-400 hover:text-red-500 transition-colors">Sıcak Su Kazanları</Link></li>
              <li><Link href="/urunler" className="text-gray-400 hover:text-red-500 transition-colors">Brülör Sistemleri</Link></li>
              <li><Link href="/urunler" className="text-gray-400 hover:text-red-500 transition-colors">Yedek Parça</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-navy-800 pb-2 inline-block">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin className="text-red-500 shrink-0" size={20} />
                <span>İkitelli OSB Mahallesi, Metal İş Sanayi Sitesi, Başakşehir/İstanbul</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone className="text-red-500 shrink-0" size={20} />
                <span>0212 123 45 67</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="text-red-500 shrink-0" size={20} />
                <span>info@sinanogluisi.com.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Sinanoğlu Isı Sanayi. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link href="/gizlilik" className="hover:text-white">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="hover:text-white">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
