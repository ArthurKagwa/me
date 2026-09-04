"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Software Builder",
  "Embedded Systems Builder",
  "IoT Builder",
  "Technical Problem-Solver",
];

export function Hero() {
  const [typed, setTyped]       = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  const roleIdx   = useRef(0);
  const charIdx   = useRef(0);
  const typeRef   = useRef<ReturnType<typeof setInterval>  | null>(null);
  const pauseRef  = useRef<ReturnType<typeof setTimeout>   | null>(null);
  const cursorRef = useRef<ReturnType<typeof setInterval>  | null>(null);

  function startTypewriter() {
    typeRef.current = setInterval(() => {
      const role = ROLES[roleIdx.current];
      if (charIdx.current < role.length) {
        charIdx.current++;
        setTyped(role.slice(0, charIdx.current));
      } else {
        clearInterval(typeRef.current!);
        pauseRef.current = setTimeout(() => {
          typeRef.current = setInterval(() => {
            if (charIdx.current > 0) {
              charIdx.current--;
              setTyped(ROLES[roleIdx.current].slice(0, charIdx.current));
            } else {
              clearInterval(typeRef.current!);
              roleIdx.current = (roleIdx.current + 1) % ROLES.length;
              setTimeout(startTypewriter, 350);
            }
          }, 38);
        }, 2200);
      }
    }, 78);
  }

  useEffect(() => {
    startTypewriter();
    cursorRef.current = setInterval(() => setCursorOn((v) => !v), 530);
    return () => {
      if (typeRef.current)   clearInterval(typeRef.current);
      if (pauseRef.current)  clearTimeout(pauseRef.current);
      if (cursorRef.current) clearInterval(cursorRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const display = typed + (cursorOn ? "█" : "\u00a0");
  const cursor  = cursorOn ? "█" : "\u00a0";

  return (
    <section
      id="top"
      style={{ minHeight: "100vh", paddingTop: 56, display: "flex", flexDirection: "column" }}
    >
      <div
        className="hero-grid"
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "calc(100vh - 56px)",
        }}
      >
        {/* ── LEFT — Editorial ── */}
        <div
          className="hero-left"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 64px 80px 80px",
            borderRight: "1px solid var(--border)",
          }}
        >
          <div
            data-animate=""
            data-delay="0"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Software · Embedded Systems · IoT · Technical Support
          </div>

          <h1
            data-animate=""
            data-delay="60"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(64px, 7.5vw, 112px)",
              lineHeight: 0.88,
              fontWeight: 400,
              letterSpacing: "-0.025em",
              marginBottom: 32,
            }}
          >
            Arthur
            <br />
            <em style={{ color: "var(--accent)" }}>Asasira</em>
          </h1>

          <div
            style={{
              height: 1,
              background: "var(--border)",
              position: "relative",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: -1,
                height: 2,
                width: 120,
                background: "var(--accent)",
              }}
            />
          </div>

          <p
            data-animate=""
            data-delay="140"
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--dim)",
              maxWidth: 440,
              fontWeight: 300,
              marginBottom: 40,
            }}
          >
            I build connected systems across the stack—from sensors and
            communications to backend services and usable products. Based in
            Acton and open to opportunities across Greater Boston.
          </p>

          <div
            data-animate=""
            data-delay="200"
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}
          >
            <a
              href="#work"
              className="hbo"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                padding: "12px 28px",
                background: "var(--accent)",
                color: "#000",
                borderRadius: 6,
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Explore work →
            </a>
            <a
              href="#contact"
              className="ht"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                padding: "12px 28px",
                border: "1px solid var(--border)",
                color: "var(--dim)",
                borderRadius: 6,
              }}
            >
              Get in touch
            </a>
          </div>

          <div
            data-animate=""
            data-delay="260"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--dim)",
              lineHeight: 2,
              borderTop: "1px solid var(--border)",
              paddingTop: 32,
              display: "flex",
              gap: 48,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div>Python · TypeScript · C · SQL</div>
              <div>Next.js · APIs · Test Automation</div>
              <div>ESP32 · LoRaWAN · TCP/IP</div>
            </div>
            <div>
              <div style={{ color: "var(--accent)" }}>yoshule.com</div>
              <div style={{ color: "var(--accent)" }}>tundamate.xyz</div>
              <div style={{ color: "var(--accent)" }}>app.qreze.com</div>
              <div style={{ marginTop: 8 }}>Middlesex ECE</div>
              <div>Medical-device manufacturing</div>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Terminal ── */}
        <div
          className="hero-right"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 56px 60px 40px",
            background: "var(--s2)",
          }}
        >
          <div style={{ width: "100%", maxWidth: 520 }}>
            <div
              data-animate=""
              data-delay="100"
              style={{
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid #1c1c1c",
                boxShadow: "0 32px 80px rgba(0,0,0,.7)",
              }}
            >
              {/* Window chrome */}
              <div
                style={{
                  background: "#161616",
                  padding: "13px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  borderBottom: "1px solid #0f0f0f",
                }}
              >
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", flexShrink: 0, display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", flexShrink: 0, display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", flexShrink: 0, display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#383838", marginLeft: 16 }}>
                  bash — asasira.dev
                </span>
              </div>

              {/* Terminal body — always dark */}
              <div
                style={{
                  background: "#050505",
                  padding: "36px 40px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13.5,
                  lineHeight: 1.95,
                }}
              >
                <div>
                  <span style={{ color: "var(--accent)" }}>asasira.dev</span>
                  <span style={{ color: "#909090" }}>:~$</span>
                  <span style={{ color: "#e2e2e2" }}> whoami</span>
                </div>
                <div style={{ paddingLeft: 14, color: "#e2e2e2", marginBottom: 18 }}>
                  Arthur Asasira{" "}
                  <span style={{ color: "#909090", fontSize: 12 }}>{"// Maestro"}</span>
                </div>

                <div>
                  <span style={{ color: "var(--accent)" }}>asasira.dev</span>
                  <span style={{ color: "#909090" }}>:~$</span>
                  <span style={{ color: "#e2e2e2" }}> cat .role</span>
                </div>
                <div style={{ paddingLeft: 14, marginBottom: 18 }}>
                  <span style={{ color: "#93c5fd" }}>current</span>
                  <span style={{ color: "#909090" }}> = </span>
                  <span style={{ color: "#fcd34d" }}>&quot;{display}&quot;</span>
                </div>

                <div>
                  <span style={{ color: "var(--accent)" }}>asasira.dev</span>
                  <span style={{ color: "#909090" }}>:~$</span>
                  <span style={{ color: "#e2e2e2" }}> ls projects/</span>
                </div>
                <div style={{ paddingLeft: 14, marginBottom: 18, display: "flex", gap: 28 }}>
                  <span style={{ color: "#60a5fa" }}>yoshule/</span>
                  <span style={{ color: "#60a5fa" }}>tundamate/</span>
                  <span style={{ color: "#60a5fa" }}>qreze/</span>
                </div>

                <div>
                  <span style={{ color: "var(--accent)" }}>asasira.dev</span>
                  <span style={{ color: "#909090" }}>:~$</span>
                  <span style={{ color: "#e2e2e2" }}> locate --current</span>
                </div>
                <div style={{ paddingLeft: 14, marginBottom: 18, color: "#909090" }}>
                  /acton/greater-boston/connected-systems
                </div>

                <div>
                  <span style={{ color: "var(--accent)" }}>asasira.dev</span>
                  <span style={{ color: "#909090" }}>:~$</span>{" "}
                  <span style={{ color: "#e2e2e2" }}>{cursor}</span>
                </div>
              </div>
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                color: "var(--dim)",
                textAlign: "center",
                marginTop: 20,
                letterSpacing: "0.04em",
              }}
            >
              <b>ACTON, MASSACHUSETTS · GREATER BOSTON</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
