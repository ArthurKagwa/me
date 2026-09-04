const PROJECTS = [
  {
    num: "01",
    title: "Yoshule",
    link: "https://yoshule.com",
    linkLabel: "↗ yoshule.com",
    desc: "A school operations platform connecting admissions, fees, payroll, timetabling, and assessment in one working system.",
    tech: ["Web Application", "APIs", "Data Workflows", "Deployment"],
    delay: "0",
  },
  {
    num: "02",
    title: "TundaMate",
    link: "https://tundamate.xyz",
    linkLabel: "↗ tundamate.xyz",
    desc: "A lightweight inventory and sales system for small businesses that need a practical view of stock and daily activity.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "TypeScript"],
    delay: "80",
  },
  {
    num: "03",
    title: "Qreze",
    link: "https://app.qreze.com",
    linkLabel: "↗ app.qreze.com",
    desc: "A planning product for setting out the month, recording activity as it happens, and reducing guesswork later.",
    tech: ["Web Application", "Workflow Design", "Data Storage", "Deployment"],
    delay: "160",
  },
  {
    num: "04",
    title: "Itungo",
    link: "https://itungo.com",
    linkLabel: "↗ itungo.com",
    desc: "A practical farm-management platform for livestock records, health, nutrition, and day-to-day operations.",
    tech: ["Next.js", "Microservices", "PostgreSQL", "Docker"],
    delay: "240",
  },
];

export function Work() {
  return (
    <section
      id="work"
      style={{ borderTop: "1px solid var(--border)", scrollMarginTop: 56 }}
    >
      <div
        className="section-inner"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 48px" }}
      >
        <div
          data-animate=""
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--accent)",
            letterSpacing: "0.06em",
            marginBottom: 60,
          }}
        >
          {"// work"}
        </div>

        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              data-animate=""
              data-delay={p.delay}
              className="hc"
              style={{
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 36,
                background: "var(--surface)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {p.num}
                </span>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ht"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--dim)",
                      border: "1px solid var(--border)",
                      padding: "4px 10px",
                      borderRadius: 4,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.linkLabel}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--dim)",
                      border: "1px solid var(--muted)",
                      padding: "4px 10px",
                      borderRadius: 4,
                    }}
                  >
                    {p.linkLabel}
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 32,
                  fontWeight: 400,
                  marginBottom: 12,
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--dim)",
                  marginBottom: 28,
                  fontWeight: 300,
                }}
              >
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--dim)",
                      border: "1px solid var(--muted)",
                      padding: "4px 10px",
                      borderRadius: 4,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
