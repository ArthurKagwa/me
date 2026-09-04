import Image from "next/image";
import Link from "next/link";
import type { ProjectCaseStudy } from "../types/content";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  lead?: boolean;
}

export function ProjectCard({ project, lead = false }: ProjectCardProps) {
  return (
    <article className={`project-frame group ${lead ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}`}>
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className={`relative overflow-hidden border-b border-line ${lead ? "aspect-[16/10]" : "aspect-[16/8]"}`}>
          <Image className="project-image object-cover object-top" src={project.screenshot} alt={project.screenshotAlt} fill sizes={lead ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"} />
          <div className="absolute left-4 top-4 bg-canvas px-3 py-2 font-mono text-[0.68rem] text-signal shadow-lg">{project.status}</div>
        </div>
        <div className={lead ? "p-7 sm:p-10" : "p-6 sm:p-8"}>
          <div className="flex items-start justify-between gap-5">
            <h3 className={`${lead ? "text-4xl sm:text-5xl" : "text-3xl"} font-semibold tracking-[-0.04em]`}>{project.title}</h3>
            <span className="mt-1 font-mono text-signal transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">↗</span>
          </div>
          <p className="pretty mt-4 max-w-[58ch] leading-7 text-ink-soft">{project.summary}</p>
          <dl className={`mt-7 grid gap-5 border-t border-line pt-6 text-sm ${lead ? "sm:grid-cols-2" : ""}`}>
            <div>
              <dt className="technical-label mb-2">My role</dt>
              <dd className="leading-6 text-ink-soft">{project.ownership}</dd>
            </div>
            <div>
              <dt className="technical-label mb-2">Evidence</dt>
              <dd className="leading-6 text-ink-soft">Live interface, system view, and endpoint verification</dd>
            </div>
          </dl>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies and capabilities">
            {project.technologies.map((technology) => <li key={technology} className="border border-line px-2.5 py-1.5 font-mono text-[0.66rem] text-ink-muted">{technology}</li>)}
          </ul>
        </div>
      </Link>
    </article>
  );
}
