import Link from "next/link";
import { Hero } from "./components/Hero";
import { SkillsGrid } from "./components/SkillsGrid";
import { FeaturedWork } from "./components/FeaturedWork";

export default function Home() {
  return (
    <div className="relative">
      {/* Animated background shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Hero />
      <FeaturedWork />
      <SkillsGrid />
      

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/projects"
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              My Work
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
