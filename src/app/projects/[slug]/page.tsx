import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "../../components/ArchitectureDiagram";
import { ProjectEvidence } from "../../components/ProjectEvidence";
import { getProject, publishedProjects } from "../../data/projects";
import { siteProfile } from "../../lib/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Arthur Asasira`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: project.screenshot, alt: project.screenshotAlt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteProfile.canonicalUrl}/projects/${project.slug}`,
    author: { "@type": "Person", name: siteProfile.name, url: siteProfile.canonicalUrl },
    dateModified: "2026-09",
  };

  return (
    <article className="page-intro pb-24 pt-14 sm:pb-32 sm:pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork).replace(/</g, "\\u003c") }} />
      <header className="section-shell">
        <Link className="text-link text-sm" href="/#projects">← Back to selected work</Link>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="technical-label text-signal">{project.status} / {project.date}</p>
            <h1 className="balanced mt-5 text-6xl font-semibold leading-[0.84] tracking-[-0.065em] sm:text-8xl">{project.title}</h1>
            <p className="pretty mt-7 max-w-3xl text-xl leading-8 text-ink-soft">{project.summary}</p>
          </div>
          <div className="border-l border-line pl-6">
            <p className="technical-label mb-3">Built for</p>
            <p className="leading-7 text-ink-soft">{project.audience}</p>
            <a className="button-primary mt-6" href={project.externalUrl} target="_blank" rel="noreferrer">Open live system <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </header>

      <div className="section-shell mt-16">
        <div className="project-frame relative aspect-[16/9]">
          <Image className="object-cover object-top" src={project.screenshot} alt={project.screenshotAlt} fill priority sizes="(min-width: 1280px) 1248px, 100vw" />
        </div>
      </div>

      <div className="section-shell mt-20 grid gap-x-16 gap-y-20 lg:grid-cols-[0.7fr_1.3fr]">
        <aside>
          <p className="technical-label rule-title mb-5">Project record</p>
          <dl className="space-y-6 text-sm">
            <div><dt className="text-ink-muted">Status</dt><dd className="mt-1 text-ink">{project.status}</dd></div>
            <div><dt className="text-ink-muted">Verified</dt><dd className="mt-1 text-ink">{project.date}</dd></div>
            <div><dt className="text-ink-muted">Capabilities</dt><dd className="mt-2 flex flex-wrap gap-2">{project.technologies.map((item) => <span key={item} className="border border-line px-2 py-1 font-mono text-xs text-ink-soft">{item}</span>)}</dd></div>
          </dl>
        </aside>
        <div className="space-y-14">
          <section>
            <p className="technical-label mb-4 text-signal">Problem</p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em]">What the system needed to solve</h2>
            <p className="pretty mt-5 text-lg leading-8 text-ink-soft">{project.problem}</p>
          </section>
          <section>
            <p className="technical-label mb-4 text-signal">Ownership</p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em]">What I owned</h2>
            <p className="pretty mt-5 text-lg leading-8 text-ink-soft">{project.ownership}</p>
          </section>
        </div>
      </div>

      <section className="mt-24 border-y border-line bg-canvas-raised py-20">
        <div className="section-shell">
          <p className="technical-label mb-4 text-signal">Architecture</p>
          <h2 className="mb-9 text-3xl font-semibold tracking-[-0.035em]">Public system view</h2>
          <ArchitectureDiagram nodes={project.architecture} />
          <p className="mt-5 max-w-3xl text-sm leading-6 text-ink-muted">This diagram stays at product level. It documents the visible flow without exposing private infrastructure, customer data, credentials, or production internals.</p>
        </div>
      </section>

      <section className="section-shell py-24">
        <p className="technical-label mb-4 text-signal">Walkthrough</p>
        <h2 className="text-3xl font-semibold tracking-[-0.035em]">Follow the working path</h2>
        <ol className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
          {project.architecture.map((node, index) => (
            <li key={node.label} className="bg-canvas p-6">
              <p className="font-mono text-xs text-signal">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold">{node.label}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{node.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="section-shell grid gap-x-16 gap-y-20 pb-24 lg:grid-cols-2">
        <section>
          <p className="technical-label mb-4 text-signal">Constraints</p>
          <h2 className="text-3xl font-semibold tracking-[-0.035em]">What shaped the build</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {project.constraints.map((constraint) => <li key={constraint} className="py-4 leading-7 text-ink-soft">{constraint}</li>)}
          </ul>
        </section>
        <section>
          <p className="technical-label mb-4 text-signal">Failure record</p>
          <h2 className="text-3xl font-semibold tracking-[-0.035em]">What is documented now</h2>
          <p className="pretty mt-6 leading-7 text-ink-soft">{project.diagnosis}</p>
        </section>
      </div>

      <section className="section-shell pb-24">
        <p className="technical-label mb-4 text-signal">Measured and verified</p>
        <h2 className="mb-8 text-3xl font-semibold tracking-[-0.035em]">Evidence, not invented metrics</h2>
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <thead className="bg-surface"><tr><th className="p-4 font-medium">Check</th><th className="p-4 font-medium">Result</th><th className="p-4 font-medium">Source</th></tr></thead>
            <tbody className="divide-y divide-line">{project.verification.map((result) => <tr key={result.measure}><td className="p-4 text-ink-soft">{result.measure}</td><td className="p-4 font-mono text-signal">{result.result}</td><td className="p-4 text-ink-muted">{result.source}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-line bg-canvas-raised py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div><p className="technical-label mb-4 text-signal">Version two</p><h2 className="text-3xl font-semibold tracking-[-0.035em]">The next useful proof</h2><p className="pretty mt-5 leading-7 text-ink-soft">{project.nextVersion}</p></div>
          <div><p className="technical-label mb-4 text-signal">AI boundary</p><h2 className="text-3xl font-semibold tracking-[-0.035em]">Assistance is not verification</h2><p className="pretty mt-5 leading-7 text-ink-soft">{project.aiUse}</p></div>
        </div>
      </section>

      <section className="section-shell py-24">
        <p className="technical-label mb-4 text-signal">Evidence index</p>
        <h2 className="mb-8 text-3xl font-semibold tracking-[-0.035em]">What you can inspect</h2>
        <ProjectEvidence items={project.evidence} />
      </section>
    </article>
  );
}
