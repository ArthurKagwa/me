const EDUCATION = [
  {
    period: "2026–May 2028",
    title: "A.S. Engineering Science — Electrical & Computer Engineering",
    org: "Middlesex Community College",
    sub: "Bedford, Massachusetts · Expected May 2028",
  },
  {
    period: "2023–2026",
    title: "Software Engineering coursework",
    org: "Makerere University",
    sub: "108 U.S.-equivalent credits · GPA 3.53 · WES evaluation · Transferred to MCC",
  },
];

const EXPERIENCE = [
  {
    period: "Mar 2026–Present",
    title: "Founder & Software Developer",
    org: "Asasira.dev · Remote",
    desc: "Build Yoshule (school management) and TundaMate (inventory and POS), live products shaped by user feedback.",
  },
  {
    period: "Apr 2026–Present",
    title: "Medical Device Assembler",
    org: "Jabil · Eastridge contract · Clinton, MA",
    desc: "Assemble and inspect medical device components in a regulated cleanroom on 12-hour shifts, with defect escalation and documented work.",
  },
  {
    period: "Jun 2025–Mar 2026",
    title: "IoT Research and Development Intern",
    org: "IoT Research & Application Lab (IoT-ra) · Kampala",
    desc: "Built and tested Raspberry Pi and sensor prototypes across LoRaWAN, GSM, and Wi-Fi, including beehive monitoring and automated mushroom environments; created tools that replaced manual test logs.",
  },
];

const LEADERSHIP = [
  {
    org: "Google Developer Groups on Campus · Makerere University",
    roles: [
      {
        title: "Co-Lead",
        period: "Aug 2025–Feb 2026",
        points: [
          "Ran the chapter with the Lead and core team, coordinating weekly meetups and workshops for 1,214 members.",
          "Hosted 15+ events averaging 30 attendees, collecting feedback to shape future sessions.",
        ],
      },
      {
        title: "Media Lead",
        period: "Oct 2024–Jul 2025",
        points: [
          "Designed Canva posters, carousels, and highlight reels for workshops including Build with AI.",
          "Managed the chapter's LinkedIn, X, and WhatsApp channels to drive event registrations.",
        ],
      },
    ],
  },
  {
    org: "IEEE Makerere University Student Branch",
    roles: [
      {
        title: "Chair, IEEE PES Student Chapter",
        period: "2025–Feb 2026",
        points: [
          "Led the chapter's executive team and set its program of technical talks and events.",
        ],
      },
      {
        title: "Treasurer, Student Branch",
        period: "Apr 2025–Feb 2026",
        points: [
          "Managed branch finances across all events and activities, keeping all funding fully accounted for.",
        ],
      },
    ],
  },
  {
    org: "Millennium Fellowship · UN Academic Impact & Millennium Campus Network",
    roles: [
      {
        title: "Millennium Fellow, Class of 2025",
        period: "2025",
        points: [
          "Selected from 60,000+ applicants; led ECO-COPS, a youth environmental advocacy project (SDGs 6 and 13).",
        ],
      },
    ],
  },
  {
    org: "Additional roles & speaking · Uganda",
    roles: [
      { title: "Speaker, DevFest Mbarara 2025 — Exploring LoRaWAN for IoT", period: "Nov 2025", points: [] },
      { title: "Web Master, AWS Cloud Club", period: "Aug 2025–Feb 2026", points: [] },
      { title: "Organizing Secretary, Student Energy at Makerere", period: "Aug 2025–Feb 2026", points: [] },
      { title: "Ambassador, IEEE AESS-SYP 2025", period: "Jun–Jul 2025", points: [] },
    ],
  },
];

const SKILLS = [
  { label: "support", value: "Windows · Linux · Troubleshooting · Device Setup · Logs" },
  { label: "networks", value: "TCP/IP · DNS · DHCP · Wi-Fi · IP Addressing" },
  { label: "software", value: "Python · Java · PHP · C · SQL · APIs · Git · Testing" },
  { label: "systems", value: "LoRaWAN · GSM · Sensors · Raspberry Pi · ESP32 / Arduino-class Devices" },
  { label: "platforms", value: "Next.js · Django · FastAPI · Flutter · Firebase · PostgreSQL · Docker" },
  { label: "ai", value: "Gemini · Generative AI Tools" },
  { label: "community", value: "Event Planning · Workshops · Public Speaking · Peer Mentoring" },
  { label: "media", value: "Social Media Strategy · Content Creation · Canva Design" },
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
          {"// cv.json"}
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

        {/* Leadership & Community */}
        <div data-animate="" style={{ marginBottom: 80 }}>
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
            Leadership &amp; Community
          </div>
          <div
            className="cv-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              alignItems: "start",
            }}
          >
            {LEADERSHIP.map((group) => (
              <div
                key={group.org}
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
                    fontSize: 12,
                    color: "var(--accent)",
                    marginBottom: 16,
                    lineHeight: 1.5,
                  }}
                >
                  {group.org}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {group.roles.map((role) => (
                    <div key={role.title}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          gap: 12,
                          marginBottom: role.points.length ? 6 : 0,
                        }}
                      >
                        <div style={{ fontSize: 15, fontWeight: 500 }}>
                          {role.title}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            color: "var(--dim)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {role.period}
                        </div>
                      </div>
                      {role.points.map((point) => (
                        <div
                          key={point}
                          style={{
                            fontSize: 14,
                            color: "var(--dim)",
                            lineHeight: 1.6,
                          }}
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
