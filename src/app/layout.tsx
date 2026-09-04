import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { siteProfile } from "./lib/site";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteProfile.canonicalUrl),
  title: {
    default: "Arthur Asasira — Software, embedded systems, and IoT builder",
    template: "%s — Arthur Asasira",
  },
  description: "Arthur Asasira builds software and connected systems across devices, networks, backend services, testing, and real-world operations.",
  alternates: { canonical: "/" },
  authors: [{ name: siteProfile.name, url: siteProfile.canonicalUrl }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteProfile.name,
    title: "Arthur Asasira — Software, embedded systems, and IoT builder",
    description: "Connected systems, deployed software, test automation, and hands-on manufacturing experience.",
    url: "/",
    images: [{ url: "/og-card.svg", width: 1200, height: 630, alt: "Arthur Asasira portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Asasira — Software, embedded systems, and IoT builder",
    description: "Connected systems, deployed software, test automation, and hands-on manufacturing experience.",
    images: ["/og-card.svg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>
        <a className="skip-link print-hidden" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
