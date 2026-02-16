import Link from "next/link";
import { Project } from "../lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group p-8 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-all duration-300"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        )}
      </div>

      <p className="text-gray-400 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-800 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.impact && (
        <p className="text-sm text-purple-400 font-semibold">
          {project.impact}
        </p>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-6 space-y-2">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-gray-400 flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
