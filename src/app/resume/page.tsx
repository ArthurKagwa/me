import type { Metadata } from "next";
import { education, experience, skills } from "../data/resume";
import { siteProfile } from "../lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Arthur Asasira's IT support, connected-systems, software, manufacturing, and education résumé.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <article className="resume-page page-intro py-14 sm:py-20">
      <div className="section-shell print-hidden mb-8 flex flex-wrap items-center justify-between gap-4">
        <div><p className="technical-label text-signal">Public résumé</p><p className="mt-2 text-sm text-ink-muted">The downloadable copy is generated from this content.</p></div>
        <a className="button-primary" href="/Arthur_Asasira_Resume.pdf" download>Download PDF</a>
      </div>

      <div className="resume-sheet section-shell p-7 sm:p-10 lg:p-12">
        <header className="grid gap-6 border-b border-canvas/20 pb-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <h1 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Arthur Asasira</h1>
            <p className="mt-2 text-base font-semibold">IT support technician</p>
            <p className="mt-1 text-sm">Windows · Networking · Technical troubleshooting</p>
          </div>
          <address className="not-italic text-sm leading-6 sm:text-right">
            <p>Acton, Massachusetts</p>
            <a href={`mailto:${siteProfile.email}`}>{siteProfile.email}</a><br />
            <a href={siteProfile.canonicalUrl}>asasira.dev</a> · <a href={siteProfile.github}>GitHub</a> · <a href={siteProfile.linkedIn}>LinkedIn</a>
          </address>
        </header>

        <section className="resume-profile border-b border-canvas/20 py-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.14em]">Profile</h2>
          <p className="max-w-[90ch] text-[0.94rem] leading-6">Technical problem-solver with a software engineering background, connected-device troubleshooting experience, and current medical-device manufacturing experience. Studying Electrical &amp; Computer Engineering while building knowledge of Windows and Linux support, networking, hardware, and issue documentation. Known for following procedures carefully, identifying problems, and communicating technical information clearly.</p>
        </section>

        <div className="resume-columns grid gap-8 py-6 md:grid-cols-[0.68fr_1.32fr]">
          <aside className="space-y-7">
            <section>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.14em]">Technical skills</h2>
              <dl className="space-y-4">
                {skills.map((skill) => <div key={skill.group}><dt className="text-sm font-bold">{skill.group}</dt><dd className="mt-1 text-[0.82rem] leading-5">{skill.items}</dd></div>)}
              </dl>
            </section>
            <section>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.14em]">Education</h2>
              <div className="space-y-5">
                {education.map((item) => <div key={item.institution}><h3 className="text-sm font-bold">{item.program}</h3><p className="mt-1 text-[0.82rem] leading-5">{item.institution}<br />{item.period}<br />{item.detail}</p></div>)}
              </div>
            </section>
          </aside>

          <div>
            <section>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.14em]">Professional experience</h2>
              <div className="space-y-6">
                {experience.map((item) => (
                  <div key={item.organization}>
                    <div className="flex flex-wrap justify-between gap-x-4"><h3 className="text-base font-bold">{item.role}</h3><p className="text-sm">{item.period}</p></div>
                    <p className="mt-1 text-sm font-semibold">{item.organization} · {item.location}</p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.82rem] leading-5">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  </div>
                ))}
              </div>
            </section>
            <section className="resume-section mt-7">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.14em]">Selected projects</h2>
              <h3 className="text-base font-bold">Deployed web platforms</h3>
              <p className="mt-1 text-sm font-semibold">Yoshule · TundaMate · Qreze</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.82rem] leading-5">
                <li>Built and deployed user-facing applications using web frameworks, APIs, databases, and cloud services.</li>
                <li>Translated user and business requirements into working interfaces and backend workflows, then diagnosed issues across application components.</li>
                <li>Live work: yoshule.com, tundamate.xyz, and app.qreze.com.</li>
              </ul>
            </section>
            <section className="resume-leadership mt-7">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.14em]">Leadership</h2>
              <p className="text-[0.82rem] leading-5">Former IEEE student branch chair and Google Developer Groups on Campus co-lead; organized technical activities, collaborated with student teams, and communicated technical topics to community audiences.</p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
