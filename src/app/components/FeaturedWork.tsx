import Link from "next/link";

const featuredProjects = [
  {
    id: "1",
    title: "Itungo",
    description: "tungo is a simple, practical animal farm management tool for farmers. ",
    tech: ["Next.js", "microservices", "PostgreSQL"],
    impact: "Farming the smart way.",
    link: "https://itungo.com",
  },
  {
    id: "2",
    title: "Tundamate",
    description: "Track inventory, process sales, manage your team, and grow your business with TundaMate.",
    tech: ["FastApi", "Next.js"],
    impact: "Built for small businesses.",
    link: "https://tundamate.xyz",
  },
];

export function FeaturedWork() {
  return (
    <section id="featured-work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Featured Work
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          Selected projects that showcase my commitment to building impactful solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] block"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
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
              <p className="text-sm text-purple-400 font-semibold">
                {project.impact}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-lg font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
