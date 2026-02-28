import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maestro - Software Engineering Student & Community Leader",
  description: "Portfolio of Arthur Asasira - Software Engineering Student at Makerere University and Community Leader building impactful digital solutions.",
  keywords: ["Software Engineering Student", "Makerere University", "Full Stack Developer", "Community Leader"],
  authors: [{ name: "Arthur Asasira" }],

  openGraph: {
    title: "Arthur Asasira - Software Engineering Student",
    description: "Building impactful digital solutions and fostering tech communities",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-black text-gray-100 font-sans`}
      >
        <Analytics />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
