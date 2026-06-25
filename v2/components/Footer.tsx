export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 48px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--accent)",
          }}
        >
          asasira.dev
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--dim)",
          }}
        >
          © 2026 Arthur Asasira · Kampala, Uganda
        </span>
        <a
          href="#top"
          className="ht"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--dim)",
            border: "1px solid var(--border)",
            padding: "6px 14px",
            borderRadius: 4,
          }}
        >
          ↑ top
        </a>
      </div>
    </footer>
  );
}
