import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürün Kataloğu | Sinanoğlu Isı Sanayi",
  description: "Sanayi tipi sobalar, buhar kazanları, sıcak su kazanları ve brülör sistemleri. İhtiyacınıza uygun endüstriyel ısıtma çözümlerini keşfedin.",
};

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
