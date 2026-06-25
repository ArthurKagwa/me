import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollAnimations } from "./components/ScrollAnimations";
import { Analytics } from "@vercel/analytics/next";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Arthur Asasira — Software Engineer",
  description:
    "Building digital tools for emerging markets. IoT Researcher. Community Leader. Kampala, Uganda.",
  keywords: [
    "Software Engineer",
    "Makerere University",
    "IoT",
    "Next.js",
    "Community Leader",
    "Uganda",
    "Arthur Asasira",
  ],
  authors: [{ name: "Arthur Asasira" }],
  openGraph: {
    title: "Arthur Asasira — Software Engineer",
    description: "Building digital tools for emerging markets",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${mono.variable} ${sans.variable} ${serif.variable} antialiased`}
      >
        <Analytics />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
