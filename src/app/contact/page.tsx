import type { Metadata } from "next";
import { siteProfile } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Arthur Asasira about technical support, test, engineering technician, embedded systems, and IoT opportunities in Greater Boston.",
  alternates: { canonical: "/contact" },
};

const links = [
  { label: "Email", value: "arthurasasira1@gmail.com", href: "mailto:arthurasasira1@gmail.com" },
  { label: "LinkedIn", value: "Asasira Arthur", href: siteProfile.linkedIn },
  { label: "GitHub", value: "ArthurKagwa", href: siteProfile.github },
  { label: "Résumé", value: "View or download", href: "/resume" },
];

export default function ContactPage() {
  return (
    <article className="page-intro min-h-[calc(100dvh-9rem)] py-16 sm:py-24">
      <div className="section-shell grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="technical-label mb-6 text-signal">Acton / Greater Boston</p>
          <h1 className="balanced max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl">Bring me a system that needs to work in the real world.</h1>
          <p className="pretty mt-8 max-w-[62ch] text-lg leading-8 text-ink-soft">I am open to manufacturing and electronics test, engineering technician, IT support, technical support, embedded-systems, and IoT opportunities across Greater Boston.</p>
          <a className="button-primary mt-8" href={`mailto:${siteProfile.email}`}>Email Arthur</a>
        </div>
        <address className="divide-y divide-line border-y border-line not-italic">
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="group flex items-center justify-between gap-6 py-5">
              <span><span className="technical-label block">{link.label}</span><span className="mt-1 block text-ink-soft">{link.value}</span></span>
              <span className="font-mono text-signal transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
          ))}
        </address>
      </div>
    </article>
  );
}
