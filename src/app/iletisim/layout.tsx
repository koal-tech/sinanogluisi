import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Sinanoğlu Isı Sanayi",
  description: "Sinanoğlu Isı Sanayi ile iletişime geçin. Teklif talebi, teknik destek veya bayilik başvurusu için bize ulaşın.",
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
