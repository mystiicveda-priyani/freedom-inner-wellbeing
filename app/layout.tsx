import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freedom Inner Wellbeing | Where Psychology Meets Inner Awareness",
  description:
    "Helping working professionals overcome anxiety, overthinking, and emotional triggers through psychology-based emotional healing. Book your Clarity Call with Omkar Pawar today.",
  keywords: [
    "emotional healing",
    "anxiety help",
    "overthinking",
    "psychology",
    "inner awareness",
    "emotional wellness",
    "working professionals",
    "Omkar Pawar",
  ],
  authors: [{ name: "Omkar Pawar" }],
  openGraph: {
    title: "Freedom Inner Wellbeing | Where Psychology Meets Inner Awareness",
    description:
      "Helping working professionals heal unresolved emotional patterns through psychology-based emotional healing.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a2744",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
