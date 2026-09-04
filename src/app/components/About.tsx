import Image from "next/image";

const CARDS = [
  {
    icon: "◉",
    title: "Middlesex Community College",
    sub: "Electrical & Computer Engineering · In progress",
  },
  {
    icon: "◈",
    title: "Medical-device manufacturing",
    sub: "Jabil · Procedure, quality & traceability",
  },
  {
    icon: "◇",
    title: "Connected-systems research",
    sub: "IoT-ra · Sensors & adaptive communications",
  },
  {
    icon: "◆",
    title: "Deployed software",
    sub: "Yoshule · TundaMate · Qreze",
  },
];

export function About() {
  return (
    <section
      id="about"
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
          {"// about"}
        </div>

        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Left — bio */}
          <div>
            <div data-animate="" style={{ marginBottom: 32 }}>
              <Image
                src="/gallery/pic.png"
                alt="Arthur Asasira"
                width={140}
                height={140}
                style={{
                  objectFit: "cover",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  filter: "grayscale(10%)",
                  display: "block",
                }}
              />
            </div>

            <h2
              data-animate=""
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 4vw, 54px)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: 10,
              }}
            >
              Arthur Asasira
            </h2>

            <div
              data-animate=""
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "var(--accent)",
                marginBottom: 32,
                letterSpacing: "0.04em",
              }}
            >
              Maestro · @kagwa_arthur
            </div>

            <p
              data-animate=""
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--dim)",
                marginBottom: 20,
                fontWeight: 300,
              }}
            >
              I build connected systems across software, devices, networks, and
              real-world operations. I am based in Acton, Massachusetts, and open
              to technical opportunities across Greater Boston.
            </p>

            <p
              data-animate=""
              style={{ fontSize: 17, lineHeight: 1.8, color: "var(--dim)", fontWeight: 300 }}
            >
              I am studying Electrical &amp; Computer Engineering at Middlesex after
              completing 108 U.S.-equivalent semester credits in Software Engineering
              at Makerere. My experience spans deployed web products, IoT research,
              technical troubleshooting, and regulated medical-device manufacturing.
            </p>
          </div>

          {/* Right — info cards */}
          <div data-animate="" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="hc"
                style={{
                  padding: "20px 22px",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: "var(--surface)",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 2 }}>
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--dim)",
                    }}
                  >
                    {card.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
