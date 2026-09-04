import type { EvidenceItem } from "../types/content";

export function ProjectEvidence({ items }: { items: EvidenceItem[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <li key={`${item.type}-${item.label}`} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-center">
          <span className="technical-label text-signal">{item.type}</span>
          <span className="text-sm text-ink-soft"><strong className="font-semibold text-ink">{item.label}:</strong> {item.detail}</span>
          {item.href && <a className="text-link w-fit text-sm" href={item.href} target="_blank" rel="noreferrer">Open <span aria-hidden="true">↗</span></a>}
        </li>
      ))}
    </ul>
  );
}
