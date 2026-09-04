import Link from "next/link";
import { siteProfile } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-line py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteProfile.name}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <Link className="hover:text-ink" href="/#projects">Projects</Link>
          <Link className="hover:text-ink" href="/resume">Résumé</Link>
          <Link className="hover:text-ink" href="/contact">Contact</Link>
          <Link className="hover:text-ink" href="/privacy">Privacy</Link>
        </div>
        <p className="font-mono text-xs">Acton / Greater Boston</p>
      </div>
    </footer>
  );
}
