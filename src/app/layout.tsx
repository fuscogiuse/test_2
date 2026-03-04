import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Officine Italia - Directory Lavorazioni Meccaniche",
    template: "%s | Officine Italia",
  },
  description:
    "Directory B2B italiana per lavorazioni meccaniche e officine CNC. Trova aziende di lavorazioni meccaniche, CNC e tornerie in tutta Italia.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Officine Italia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
