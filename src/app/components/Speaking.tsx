const TOPICS = [
  "IoT & LoRaWAN for Environmental Monitoring",
  "Building Digital Products for Emerging Markets",
  "Community-Driven Developer Ecosystems",
  "Blockchain, Data Science & Cybersecurity",
];

export function Speaking() {
  return (
    <section
      id="speaking"
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
          // speaking
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
          {/* Left */}
          <div>
            <h2
              data-animate=""
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4vw, 50px)",
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Community &amp;
              <br />
              <em style={{ color: "var(--accent)" }}>Public Presence</em>
            </h2>
            <p
              data-animate=""
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--dim)",
                fontWeight: 300,
                marginBottom: 36,
              }}
            >
              IEEE PES Chapter Chair, GDG organiser, and Millennium Fellow —
              Arthur speaks on engineering for emerging markets, IoT, and
              community-driven development.
            </p>
            <a
              href="https://sessionize.com/asasira-arthur/"
              target="_blank"
              rel="noopener noreferrer"
              data-animate=""
              className="hbg"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                padding: "12px 28px",
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                borderRadius: 6,
                letterSpacing: "0.02em",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              ↗ View Sessionize profile
            </a>
          </div>

          {/* Right */}
          <div
            data-animate=""
            data-delay="100"
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--dim)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Delivered Talks
            </div>

            <a
              href="https://sessionize.com/s/asasira-arthur/connecting-the-unconnectable-exploring-lorawan-for/163824"
              target="_blank"
              rel="noopener noreferrer"
              className="hc"
              style={{
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 32,
                background: "var(--surface)",
                display: "block",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  marginBottom: 18,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "#000",
                      background: "var(--accent)",
                      padding: "3px 10px",
                      borderRadius: 3,
                      letterSpacing: "0.06em",
                      fontWeight: 600,
                    }}
                  >
                    DELIVERED
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--dim)",
                    }}
                  >
                    DevFest Mbarara 2025
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--dim)",
                  }}
                >
                  Nov 2025 · Mbarara, Uganda
                </span>
              </div>

              <h4
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 22,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  marginBottom: 14,
                }}
              >
                Connecting the Unconnectable: Exploring LoRaWAN for IoT
              </h4>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--dim)",
                  fontWeight: 300,
                }}
              >
                How LoRaWAN enables low-power, long-range connectivity for IoT
                devices in areas where traditional networks fall short — with
                real-world use cases in smart farming, environmental monitoring,
                and rural IoT.
              </p>
            </a>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--dim)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: 8,
                marginBottom: 8,
              }}
            >
              Available to Speak On
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {TOPICS.map((topic) => (
                <div
                  key={topic}
                  className="hborder"
                  style={{
                    padding: "14px 20px",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    background: "var(--surface)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: 14 }}>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
