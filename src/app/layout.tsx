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
  metadataBase: new URL("https://asasira.dev"),
  title: "Arthur Asasira — Software, embedded systems, and IoT builder",
  description:
    "Arthur Asasira builds software and connected systems across devices, networks, backend services, testing, and real-world operations.",
  alternates: { canonical: "/" },
  keywords: [
    "Software Engineer",
    "Embedded Systems",
    "IoT",
    "Next.js",
    "Technical Support",
    "Greater Boston",
    "Arthur Asasira",
  ],
  authors: [{ name: "Arthur Asasira" }],
  openGraph: {
    title: "Arthur Asasira — Software, embedded systems, and IoT builder",
    description: "Connected systems, deployed software, test automation, and hands-on manufacturing experience.",
    url: "https://asasira.dev",
    siteName: "Arthur Asasira",
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
