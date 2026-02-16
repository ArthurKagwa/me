import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../lib/data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Featured Projects
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          A collection of my work spanning web applications, farm management, business solutions,
          and community-driven initiatives. Each project represents a unique challenge
          and learning opportunity.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
