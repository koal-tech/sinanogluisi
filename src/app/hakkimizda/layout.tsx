import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Sinanoğlu Isı Sanayi",
  description: "1995'ten bu yana endüstriyel ısıtma sistemlerinde güvenilir çözüm ortağınız. Tarihçemiz, misyonumuz ve vizyonumuz hakkında bilgi edinin.",
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
