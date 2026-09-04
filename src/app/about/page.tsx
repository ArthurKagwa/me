import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { education, experience } from "../data/resume";

export const metadata: Metadata = {
  title: "About",
  description: "Arthur Asasira's path from software engineering and IoT research to medical-device manufacturing and electrical and computer engineering.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="page-intro pb-24 pt-14 sm:pb-32 sm:pt-20">
      <header className="section-shell grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <p className="technical-label mb-6 text-signal">About Arthur</p>
          <h1 className="balanced text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl">Software moving closer to the physical system.</h1>
          <p className="pretty mt-8 max-w-[65ch] text-lg leading-8 text-ink-soft">
            My background spans deployed software, connected devices, community leadership, and hands-on medical-device manufacturing. I am most interested in work that requires both code and an understanding of the system around it: test equipment, sensors, communications, automation, and technical support.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
          <Image src="/gallery/pic.png" alt="Arthur Asasira in formal attire" fill priority sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover grayscale-[18%]" />
        </div>
      </header>

      <section className="section-shell mt-24 grid gap-12 border-t border-line pt-16 lg:grid-cols-[0.65fr_1.35fr]">
        <h2 className="text-3xl font-semibold tracking-[-0.035em]">A continuous engineering path</h2>
        <div className="space-y-6 text-lg leading-8 text-ink-soft">
          <p>I completed three years of Software Engineering coursework at Makerere University, evaluated by WES as 108 U.S.-equivalent semester credits with a 3.53 GPA. That foundation led into deployed products and connected-device work using sensors, LoRaWAN, GSM, and Wi-Fi.</p>
          <p>At Jabil, working close to a medical-device production process has made reliability concrete: instructions, inspection, traceability, and escalation matter as much as whether a system works in a demo.</p>
          <p>I now study Electrical &amp; Computer Engineering at Middlesex Community College while building deeper hands-on capability in test automation, embedded systems, networking, and troubleshooting.</p>
        </div>
      </section>

      <section className="mt-24 border-y border-line bg-canvas-raised py-20">
        <div className="section-shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="technical-label rule-title mb-2">Experience</p>
            <div className="divide-y divide-line">
              {experience.map((item) => (
                <section key={item.organization} className="py-7">
                  <p className="font-mono text-xs text-signal">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.organization} · {item.location}</p>
                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((highlight) => <li key={highlight} className="border-l border-line pl-4 leading-7 text-ink-soft">{highlight}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </div>
          <div>
            <p className="technical-label rule-title mb-2">Education</p>
            <div className="divide-y divide-line">
              {education.map((item) => (
                <section key={item.institution} className="py-7">
                  <p className="font-mono text-xs text-signal">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.institution}</h3>
                  <p className="mt-2 leading-7 text-ink-soft">{item.program}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">{item.detail}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-24 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="relative aspect-[3/2] overflow-hidden border border-line bg-surface">
          <Image src="/gallery/talk.jpeg" alt="Arthur Asasira presenting a technical talk" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover grayscale-[18%]" />
        </div>
        <div>
          <p className="technical-label mb-5 text-signal">Communication is part of engineering</p>
          <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Explain the system so other people can use it.</h2>
          <p className="pretty mt-5 max-w-2xl leading-7 text-ink-soft">Technical speaking and community work strengthened the same skill needed on a support desk, production floor, or engineering team: make the problem legible, document what matters, and help the group move.</p>
          <a className="text-link mt-7" href="https://sessionize.com/asasira-arthur/" target="_blank" rel="noreferrer">View speaking record <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <div className="section-shell mt-24 border-t border-line pt-12">
        <Link className="button-primary" href="/contact">Start a conversation</Link>
      </div>
    </article>
  );
}
