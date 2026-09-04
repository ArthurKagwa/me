"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about",    label: "about"    },
  { href: "#work",     label: "work"     },
  { href: "#building", label: "building" },
  { href: "#resume",   label: "resume"   },
  { href: "#principles", label: "principles" },
  { href: "#contact",  label: "contact"  },
];

export function Navigation() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("v2-theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
      const frame = requestAnimationFrame(() => setDark(false));
      return () => cancelAnimationFrame(frame);
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("v2-theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("v2-theme", "light");
    }
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: 56,
        backdropFilter: "blur(18px) saturate(180%)",
        background: "var(--nav)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            color: "var(--accent)",
            letterSpacing: "0.02em",
            fontWeight: 500,
          }}
        >
          asasira.dev
        </a>

        <div
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hl nav-link-text"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--dim)",
                letterSpacing: "0.06em",
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="ht"
            aria-label="Toggle theme"
            style={{
              background: "none",
              border: "1px solid var(--border)",
              cursor: "pointer",
              color: "var(--dim)",
              width: 34,
              height: 34,
              borderRadius: 6,
              fontSize: 15,
              fontFamily: "var(--font-mono)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {dark ? "○" : "●"}
          </button>
        </div>
      </div>
    </nav>
  );
}
