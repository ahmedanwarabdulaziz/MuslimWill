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
  title: "Islamic Will Canada | Family Planning With Clarity | Muslim Will",
  description:
    "Create an Islamic will for Ontario with lawyer review, Islamic inheritance guidance, and a clear pathway to protect your family and document intentions.",
  openGraph: {
    title: "Protect Your Family With Legal and Islamic Clarity | Muslim Will",
    description:
      "A guided pathway for Muslim families in Canada to prepare wills with legal structure, Islamic inheritance guidance, and clear next steps.",
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
