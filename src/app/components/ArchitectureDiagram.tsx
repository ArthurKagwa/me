import type { ArchitectureNode } from "../types/content";

export function ArchitectureDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch" role="img" aria-label="High-level project architecture">
      {nodes.map((node, index) => (
        <div key={node.label} className="contents">
          <div className="border border-line bg-surface p-5">
            <p className="font-semibold">{node.label}</p>
            <p className="mt-2 text-sm leading-6 text-ink-muted">{node.detail}</p>
          </div>
          {index < nodes.length - 1 && <span className="grid place-items-center font-mono text-signal" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}
