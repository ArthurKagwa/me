import { SectionHeading } from "./SectionHeading";

const steps = [
  { title: "Software engineering", detail: "Three years of Makerere coursework" },
  { title: "IoT research", detail: "Sensors and adaptive communications" },
  { title: "Medical manufacturing", detail: "Quality, procedure, and traceability at Jabil" },
  { title: "Electrical & computer engineering", detail: "Current study at Middlesex" },
  { title: "Connected systems", detail: "Test automation, embedded systems, and support" },
];

export function CareerBridge() {
  return (
    <section className="border-t border-line bg-canvas-raised py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading label="Career bridge" title="One direction, closer to the machine." description="The work has moved from software into the physical systems, networks, and verification practices that make products reliable." />
        <ol className="system-trace grid gap-10 lg:grid-cols-5 lg:gap-5">
          {steps.map((step) => (
            <li key={step.title} className="trace-node lg:border-t lg:border-line lg:pt-6">
              <h3 className="text-lg font-semibold leading-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
