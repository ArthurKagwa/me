import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for asasira.dev.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="page-intro section-shell max-w-3xl py-16 sm:py-24">
      <p className="technical-label mb-6 text-signal">Privacy</p>
      <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">A small site with a small data footprint.</h1>
      <div className="mt-10 space-y-8 text-base leading-8 text-ink-soft">
        <section><h2 className="text-xl font-semibold text-ink">Analytics</h2><p className="mt-3">This site uses Vercel Analytics to understand aggregate page traffic and site performance. It does not use advertising trackers or create a portfolio account for you.</p></section>
        <section><h2 className="text-xl font-semibold text-ink">Contact</h2><p className="mt-3">There is no contact form and this site does not store messages. Choosing the email link opens your email provider, whose privacy practices apply.</p></section>
        <section><h2 className="text-xl font-semibold text-ink">External links</h2><p className="mt-3">Links to deployed products, GitHub, LinkedIn, and other external services leave this site and are governed by those services.</p></section>
        <section><h2 className="text-xl font-semibold text-ink">Questions</h2><p className="mt-3">Email <a className="text-link" href="mailto:arthurasasira1@gmail.com">arthurasasira1@gmail.com</a> with a privacy question.</p></section>
      </div>
      <Link className="button-secondary mt-10" href="/">← Return home</Link>
    </article>
  );
}
