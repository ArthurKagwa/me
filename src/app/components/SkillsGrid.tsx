const skillCategories = [
  {
    category: "Languages",
    color: "purple",
    skills: ["TypeScript", "Python", "PHP"]
  },
  {
    category: "Frontend",
    color: "blue",
    skills: ["Next.js"]
  },
  {
    category: "Backend",
    color: "indigo",
    skills: ["Django", "Flask", "Laravel"]
  },
  {
    category: "Data Science",
    color: "emerald",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"]
  },
  {
    category: "Database",
    color: "cyan",
    skills: ["PostgreSQL"]
  },
  {
    category: "DevOps & Cloud",
    color: "violet",
    skills: ["Docker", "AWS", "Azure"]
  },
  {
    category: "Tools",
    color: "pink",
    skills: ["Git/GitHub"]
  }
];

const colorClasses: Record<string, { border: string; text: string }> = {
  purple: { border: "group-hover:border-purple-500/50", text: "text-purple-400" },
  blue: { border: "group-hover:border-blue-500/50", text: "text-blue-400" },
  indigo: { border: "group-hover:border-indigo-500/50", text: "text-indigo-400" },
  emerald: { border: "group-hover:border-emerald-500/50", text: "text-emerald-400" },
  cyan: { border: "group-hover:border-cyan-500/50", text: "text-cyan-400" },
  violet: { border: "group-hover:border-violet-500/50", text: "text-violet-400" },
  pink: { border: "group-hover:border-pink-500/50", text: "text-pink-400" }
};

export function SkillsGrid() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Technical Skills
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          Proficient in modern web technologies and committed to continuous learning.
        </p>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className={`text-xl font-semibold mb-3 ${colorClasses[category.color].text}`}>
                {category.category}
              </h3>
              <div className="space-y-2 text-gray-300">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className={`${colorClasses[category.color].text}`}>•</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
