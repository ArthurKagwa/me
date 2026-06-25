const EDUCATION = [
  {
    period: "2023–2026",
    title: "BSc Software Engineering",
    org: "Makerere University",
    sub: "Kampala, Uganda · 3rd Year",
  },
  {
    period: "2020–2022",
    title: "A Level",
    org: "Ntare School, Mbarara",
    sub: null,
  },
  {
    period: "2016–2019",
    title: "O Level",
    org: "Kitabi Seminary, Bushenyi",
    sub: null,
  },
];

const EXPERIENCE = [
  {
    period: "2025–2026",
    title: "IoT Intern",
    org: "IoT Research & Application Lab (IoT-ra)",
    desc: "Enhanced Power Management in IoT Environmental Monitoring · Bee hive IoT monitoring · Mushroom growth automation",
  },
  {
    period: "2025–Now",
    title: "IEEE PES Chapter Chair",
    org: "IEEE Makerere University Student Branch",
    desc: "Coordinating chapter activities, partnerships & technical events",
  },
  {
    period: "2025–Now",
    title: "Co-Lead",
    org: "Google Developer Groups on Campus, Makerere",
    desc: "Coordinating core team, event organisation & developer outreach",
  },
  {
    period: "2025",
    title: "Millennium Fellow",
    org: "Millennium Campus Network · Class of 2025",
    desc: "Civic leadership & global development program",
  },
  {
    period: "2025–Now",
    title: "AWS Club Webmaster",
    org: "AWS Cloud Club, Makerere University",
    desc: "Managing student club website & digital presence",
  },
  {
    period: "2024–2025",
    title: "Media Lead",
    org: "Google Developer Groups on Campus, Makerere",
    desc: "Branding, visual design & social media management",
  },
];

const SKILLS = [
  { label: "languages", value: "TypeScript · Python · PHP" },
  { label: "frontend",  value: "React · Next.js" },
  { label: "backend",   value: "Django · FastAPI · Laravel" },
  { label: "cloud",     value: "AWS · GCP · Azure · Docker" },
  { label: "research",  value: "IoT · LoRaWAN · Environmental Sensing" },
  { label: "data",      value: "Pandas · NumPy · Scikit-learn · TensorFlow" },
  { label: "tools",     value: "Git / GitHub · PostgreSQL · Canva" },
];

export function Resume() {
  return (
    <section
      id="resume"
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
          // cv.json
        </div>

        {/* Education + Experience */}
        <div
          className="cv-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: 80,
            marginBottom: 80,
            alignItems: "start",
          }}
        >
          {/* Education */}
          <div data-animate="">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--dim)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              Education
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {EDUCATION.map((e) => (
                <div
                  key={e.period}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: 24,
                    background: "var(--surface)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--accent)",
                      marginBottom: 10,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {e.period}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>
                    {e.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--dim)",
                    }}
                  >
                    {e.org}
                  </div>
                  {e.sub && (
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--dim)",
                        marginTop: 2,
                      }}
                    >
                      {e.sub}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div data-animate="" data-delay="80">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--dim)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              Experience
            </div>
            <div>
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "110px 1fr",
                    padding: "24px 0",
                    borderBottom:
                      i < EXPERIENCE.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--dim)",
                      paddingTop: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {exp.period}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 3 }}>
                      {exp.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: "var(--accent)",
                        marginBottom: 8,
                      }}
                    >
                      {exp.org}
                    </div>
                    <div
                      style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.6 }}
                    >
                      {exp.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills terminal */}
        <div
          data-animate=""
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            background: "var(--surface)",
          }}
        >
          <div
            style={{
              background: "var(--s2)",
              padding: "12px 20px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#ff5f57",
                display: "inline-block",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#febc2e",
                display: "inline-block",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#28c840",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--dim)",
                marginLeft: 16,
              }}
            >
              skills.sh
            </span>
          </div>
          <div
            style={{
              padding: "36px 40px",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              lineHeight: 2.2,
              background: "#050505",
            }}
          >
            <div style={{ color: "#909090", marginBottom: 8 }}>
              <span style={{ color: "var(--accent)" }}>$</span>
              {" skills --list --grouped"}
            </div>
            {SKILLS.map((s) => (
              <div key={s.label} style={{ display: "flex" }}>
                <span style={{ color: "#909090", minWidth: 140 }}>
                  &nbsp;&nbsp;{s.label}
                </span>
                <span style={{ color: "#e2e2e2" }}>{s.value}</span>
              </div>
            ))}
            <div style={{ color: "#909090", marginTop: 8 }}>
              <span style={{ color: "var(--accent)" }}>$</span>{" "}
              <span style={{ color: "#e2e2e2" }}>█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
