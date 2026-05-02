import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freedom Inner Wellbeing | Emotional Healing & Psychology Coaching",
  description:
    "Help for professionals struggling with anxiety, overthinking, and emotional triggers. Structured emotional healing through psychology + inner awareness.",
  keywords: [
    "emotional healing",
    "anxiety support",
    "psychology coaching",
    "emotional intelligence",
    "Omkar Pawar",
    "inner wellbeing",
    "emotional triggers",
    "overthinking help",
  ],
  authors: [{ name: "Omkar Pawar" }],
  creator: "Omkar Pawar",
  metadataBase: new URL("https://freedominnerwellbeing.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freedominnerwellbeing.com",
    title: "Freedom Inner Wellbeing | Emotional Healing & Psychology Coaching",
    description:
      "Premium emotional healing for professionals. Overcome anxiety, overthinking, and emotional triggers.",
    siteName: "Freedom Inner Wellbeing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freedom Inner Wellbeing",
    description:
      "Premium emotional healing for professionals. Overcome anxiety, overthinking, and emotional triggers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ivory text-charcoal">
        <Navbar />
        <WhatsAppWidget />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
