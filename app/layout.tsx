import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://themuslimwill.com'),
  title: "Islamic Will Canada | Family Planning With Clarity | Muslim Will",
  description:
    "A guided pathway for Muslim families in Canada to prepare wills with legal structure, Islamic inheritance guidance, and clear next steps.",
  icons: {
    icon: "/Images/09.png",
    apple: "/Images/09.png",
  },
  openGraph: {
    title: "Protect Your Family With Legal & Islamic Clarity | Muslim Will",
    description:
      "A guided pathway for Muslim families in Canada to prepare wills with legal structure, Islamic inheritance guidance, and clear next steps.",
    url: "https://themuslimwill.com",
    siteName: "Muslim Will",
    images: [
      {
        url: "/Images/08.jpeg",
        width: 1200,
        height: 630,
        alt: "Muslim Will Guided Pathway",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
