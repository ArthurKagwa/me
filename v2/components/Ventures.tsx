const VENTURES = [
  {
    num: "01",
    title: "Itungo",
    link: "https://itungo.com",
    est: "Est. 2024 · Live",
    quote: "\u201cFarming the smart way.\u201d",
    desc: "Having grown up on a farm, Arthur understood the chaos of manual record keeping across cattle, sheep, and goat operations. Itungo is the system that didn\u2019t exist \u2014 a comprehensive farm management platform built specifically for smallholder farmers in East Africa.",
    tech: ["TypeScript", "Next.js", "Microservices", "PostgreSQL", "Docker", "AWS"],
    delay: "0",
  },
  {
    num: "02",
    title: "TundaMate",
    link: "https://tundamate.xyz",
    est: "Est. 2024 · Live",
    quote: "\u201cBuilt for small businesses that mean business.\u201d",
    desc: "Small businesses in Uganda run on low resources without access to infrastructure-intensive systems. TundaMate is a lightweight, smart inventory management and POS tool that lives in the business owner\u2019s palm \u2014 no enterprise bloat, no heavy setup.",
    tech: ["FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Python"],
    delay: "100",
  },
];

export function Ventures() {
  return (
    <section
      id="ventures"
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
          // ventures
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {VENTURES.map((v) => (
            <div
              key={v.num}
              data-animate=""
              data-delay={v.delay}
              className="venture-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                border: "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
                background: "var(--surface)",
              }}
            >
              {/* Left panel */}
              <div
                className="venture-inner venture-border"
                style={{
                  padding: "56px 48px",
                  borderRight: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--accent)",
                      letterSpacing: "0.08em",
                      marginBottom: 20,
                    }}
                  >
                    {v.num} / VENTURE
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 52,
                      fontWeight: 400,
                      lineHeight: 1,
                      marginBottom: 16,
                    }}
                  >
                    {v.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--dim)",
                    }}
                  >
                    {v.est}
                  </div>
                </div>

                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hbg"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    border: "1px solid var(--aborder)",
                    padding: "10px 20px",
                    borderRadius: 6,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 40,
                    width: "fit-content",
                  }}
                >
                  ↗ {v.link.replace("https://", "")}
                </a>
              </div>

              {/* Right panel */}
              <div className="venture-inner" style={{ padding: "56px 48px" }}>
                <p
                  style={{
                    fontSize: 22,
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "var(--dim)",
                    marginBottom: 28,
                    lineHeight: 1.4,
                  }}
                >
                  {v.quote}
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "var(--dim)",
                    fontWeight: 300,
                    marginBottom: 36,
                  }}
                >
                  {v.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {v.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--dim)",
                        border: "1px solid var(--muted)",
                        padding: "5px 12px",
                        borderRadius: 4,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
