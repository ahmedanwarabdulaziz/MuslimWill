import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrackingScripts } from "@/components/analytics/TrackingScripts";
import { AppChrome } from "@/components/layout/AppChrome";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.themuslimwill.com'),
  title: "Islamic Will Canada | Family Planning With Clarity | Muslim Will",
  description:
    "A guided pathway for Muslim families in Canada to prepare wills with legal structure, Islamic inheritance guidance, and clear next steps.",
  openGraph: {
    title: "Protect Your Family With Legal & Islamic Clarity | Muslim Will",
    description:
      "A guided pathway for Muslim families in Canada to prepare wills with legal structure, Islamic inheritance guidance, and clear next steps.",
    url: "https://www.themuslimwill.com",
    siteName: "Muslim Will",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protect Your Family With Legal & Islamic Clarity | Muslim Will",
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
        <AppChrome>{children}</AppChrome>
        <TrackingScripts />
      </body>
    </html>
  );
}
