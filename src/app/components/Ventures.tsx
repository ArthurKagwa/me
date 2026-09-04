const VENTURES = [
  {
    num: "01",
    title: "Mini Manufacturing Test Station",
    link: "mailto:arthurasasira1@gmail.com",
    est: "Building · Test automation",
    quote: "\u201cMake the result repeatable.\u201d",
    desc: "A compact station for exercising hardware, collecting results, and turning test outcomes into a clear manufacturing record. It remains a build-in-progress until the measurements and failure cases are ready to publish.",
    tech: ["Python", "Hardware Test", "Automation", "Logging"],
    delay: "0",
  },
  {
    num: "02",
    title: "Adaptive Connectivity Lab",
    link: "mailto:arthurasasira1@gmail.com",
    est: "Building · Connected systems",
    quote: "\u201cKeep the system connected when conditions change.\u201d",
    desc: "An ESP32-based lab for comparing Wi-Fi, GSM, and LoRaWAN behavior under changing conditions, with deliberate failure injection and documented recovery paths.",
    tech: ["ESP32", "LoRaWAN", "GSM", "Wi-Fi", "Python"],
    delay: "100",
  },
  {
    num: "03",
    title: "Connected Equipment Monitor",
    link: "mailto:arthurasasira1@gmail.com",
    est: "Building · Monitoring",
    quote: "\u201cMake machine state visible.\u201d",
    desc: "A connected monitoring concept for collecting equipment signals, surfacing useful status, and documenting the checks needed before a technician trusts the reading.",
    tech: ["Sensors", "Embedded Systems", "APIs", "Diagnostics"],
    delay: "200",
  },
];

export function Ventures() {
  return (
    <section
      id="building"
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
          {"// building"}
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
                    {v.num} / BUILDING
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
                  ↗ Discuss this build
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
