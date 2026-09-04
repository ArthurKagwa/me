"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "../lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  const isActive = (match: string) => match === "/projects" ? pathname.startsWith(match) : pathname === match;

  return (
    <header className="site-header sticky top-0 z-50 border-b border-line bg-[var(--nav-surface)] backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3 font-semibold">
          <span className="grid size-8 place-items-center border border-line-strong font-mono text-xs text-signal transition-colors group-hover:bg-signal group-hover:text-signal-ink">AA</span>
          <span>Arthur Asasira</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isActive(link.match) ? "page" : undefined} className="border-b border-transparent py-2 text-sm text-ink-soft transition-colors hover:border-line-strong hover:text-ink aria-[current=page]:border-signal aria-[current=page]:text-ink">
              {link.label}
            </Link>
          ))}
        </div>

        <button ref={menuButton} type="button" className="grid size-11 place-items-center border border-line text-sm text-ink md:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
          <span aria-hidden="true" className="font-mono">{open ? "×" : "menu"}</span>
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-line bg-canvas-raised md:hidden">
          <div className="section-shell grid py-4">
            {navLinks.map((link, index) => (
              <Link ref={index === 0 ? firstLink : undefined} key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={isActive(link.match) ? "page" : undefined} className="border-b border-line py-4 text-lg text-ink-soft last:border-none aria-[current=page]:text-signal">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
