import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
const editorial = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], style: ["normal", "italic"], variable: "--font-editorial-family", display: "swap" });
const body = Nunito({ subsets: ["latin"], variable: "--font-body-family", display: "swap" });
export const metadata: Metadata = {
  title: { default: "Musée de Bondoukou & Bibliothèque", template: "%s | Musée de Bondoukou" },
  description: "Socle du Design System du Musée de Bondoukou et de sa Bibliothèque.",
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={`${editorial.variable} ${body.variable}`}>
    <body><a href="#main" className="skip-link">Aller au contenu</a>{children}</body>
  </html>;
}
