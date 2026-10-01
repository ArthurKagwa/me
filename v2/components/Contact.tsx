const SOCIALS = [
  {
    label: "GitHub",
    handle: "ArthurKagwa",
    href: "https://github.com/ArthurKagwa",
  },
  {
    label: "X / Twitter",
    handle: "@kagwa_arthur",
    href: "https://x.com/kagwa_arthur",
  },
  {
    label: "LinkedIn",
    handle: "asasira-arthur",
    href: "https://linkedin.com/in/asasira-arthur-602a131ab/",
  },
  {
    label: "Speaking",
    handle: "Sessionize",
    href: "https://sessionize.com/Arthur_Asasira/",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
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
          // contact
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
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Let&apos;s build
              <br />
              <em style={{ color: "var(--accent)" }}>something great.</em>
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
              Open to collaboration, internships, and technical conversations.
              Always interested in projects at the intersection of technology and
              real-world impact.
            </p>
            <a
              href="mailto:arthurasasira1@gmail.com"
              data-animate=""
              className="he"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                color: "var(--accent)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                paddingBottom: 3,
                borderBottom: "1px solid var(--aborder)",
              }}
            >
              arthurasasira1@gmail.com
            </a>
          </div>

          {/* Right — social grid */}
          <div
            data-animate=""
            data-delay="80"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hc"
                style={{
                  padding: "22px 24px",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  background: "var(--surface)",
                  display: "block",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--dim)",
                    letterSpacing: "0.06em",
                    marginBottom: 8,
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{s.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
