import { SectionHeading } from "./SectionHeading";

const principles = [
  { title: "Build across boundaries", body: "Connect software, sensors, communications, interfaces, and the people operating them.", proof: "Deployed web systems and connected-device prototypes" },
  { title: "Verify the system", body: "Use tests, measurements, failure cases, and logs as the source of truth.", proof: "Current focus on Python test automation and failure injection" },
  { title: "Design for the real environment", body: "Treat reliability, maintainability, documentation, and operating constraints as part of the build.", proof: "Medical-device manufacturing and production discipline" },
];

export function Principles() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading label="Operating principles" title="The demo is only the beginning." />
        <div className="ml-auto max-w-4xl divide-y divide-line border-y border-line">
          {principles.map((principle, index) => (
            <article key={principle.title} className={`grid gap-4 py-8 sm:grid-cols-[1fr_1.3fr] sm:py-10 ${index === 1 ? "sm:translate-x-8" : ""}`}>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{principle.title}</h3>
              <div>
                <p className="leading-7 text-ink-soft">{principle.body}</p>
                <p className="technical-label mt-4 text-signal">Evidence: {principle.proof}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
