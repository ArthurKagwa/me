import Link from "next/link";
import { siteProfile } from "../lib/site";

export function ContactCta() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div>
          <p className="technical-label mb-6 text-signal">Available in Greater Boston</p>
          <h2 className="balanced max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl">
            I am looking for technical work where I can troubleshoot systems, build useful tools, and keep growing toward embedded and connected products.
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4 border-l border-line pl-6">
          <a className="button-primary" href={`mailto:${siteProfile.email}`}>Email Arthur</a>
          <Link className="button-secondary" href="/contact">Contact and profiles</Link>
          <a className="text-link text-sm" href={siteProfile.linkedIn} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a className="text-link text-sm" href={siteProfile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
