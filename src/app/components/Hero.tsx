import Link from "next/link";

const building = ["Python test automation", "ESP32 systems", "Adaptive connectivity"];
const seeking = ["Manufacturing and electronics test", "IT and technical support", "IoT, embedded, and technician roles"];

export function Hero() {
  return (
    <section className="section-shell grid min-h-[calc(100dvh-4rem)] content-center gap-12 py-20 lg:grid-cols-[1.45fr_0.55fr] lg:gap-16 lg:py-24">
      <div className="relative">
        <p className="technical-label mb-8 max-w-xs border-l border-signal pl-4 leading-6 text-ink-soft">
          Acton, Massachusetts<br />Open to Greater Boston opportunities
        </p>
        <h1 className="balanced max-w-5xl text-[clamp(4.2rem,11vw,9.8rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
          Arthur<br />Asasira
        </h1>
        <div className="mt-10 max-w-3xl border-t border-line pt-8 sm:ml-[12%] sm:mt-12">
          <p className="balanced text-2xl font-medium leading-tight tracking-[-0.025em] text-signal sm:text-4xl">
            Software, embedded systems, and IoT builder.
          </p>
          <p className="pretty mt-6 max-w-[65ch] text-base leading-8 text-ink-soft sm:text-lg">
            I build connected systems across the stack—from sensors and communications to backend services and usable products. I am studying Electrical &amp; Computer Engineering after completing 108 U.S.-equivalent credits in Software Engineering at Makerere University.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link className="button-primary" href="#projects">View engineering projects <span aria-hidden="true">↓</span></Link>
            <a className="button-secondary" href="/Arthur_Asasira_Resume.pdf" download>Download résumé</a>
          </div>
        </div>
      </div>

      <aside className="self-end border-l border-line pl-6 lg:mb-12" aria-label="Current status">
        <div className="system-trace space-y-9">
          <div className="trace-node">
            <p className="technical-label mb-3 text-signal">Building now</p>
            <ul className="space-y-2 text-sm leading-6 text-ink-soft">
              {building.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="trace-node">
            <p className="technical-label mb-3 text-signal">Seeking next</p>
            <ul className="space-y-2 text-sm leading-6 text-ink-soft">
              {seeking.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </aside>
    </section>
  );
}
