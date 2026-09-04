import { featuredProjects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function SelectedWork() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading label="Selected engineering work" title="Working systems, shown with their evidence." description="Deployed products come first. Each case study separates what the public system proves from what still needs a sanitized technical note." />
        <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
          {featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} lead={index === 0} />)}
        </div>
      </div>
    </section>
  );
}
