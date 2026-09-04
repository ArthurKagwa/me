import { education, experience } from "../data/resume";
import { SectionHeading } from "./SectionHeading";

export function Snapshot() {
  return (
    <section className="border-t border-line bg-canvas-raised py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading label="Experience and education" title="Software context. Manufacturing discipline. Engineering depth." />
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <h3 className="technical-label rule-title mb-2">Experience</h3>
            <div className="divide-y divide-line">
              {experience.map((item) => (
                <article key={item.organization} className="py-7">
                  <p className="font-mono text-xs text-signal">{item.period}</p>
                  <h4 className="mt-3 text-xl font-semibold">{item.role}</h4>
                  <p className="mt-1 text-sm text-ink-muted">{item.organization} · {item.location}</p>
                  <p className="pretty mt-4 max-w-2xl leading-7 text-ink-soft">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3 className="technical-label rule-title mb-2">Education</h3>
            <div className="divide-y divide-line">
              {education.map((item) => (
                <article key={item.institution} className="py-7">
                  <p className="font-mono text-xs text-signal">{item.period}</p>
                  <h4 className="mt-3 text-xl font-semibold">{item.institution}</h4>
                  <p className="mt-2 leading-6 text-ink-soft">{item.program}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
