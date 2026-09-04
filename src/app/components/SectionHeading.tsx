interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[0.7fr_1.3fr] md:items-end">
      <p className="technical-label rule-title">{label}</p>
      <div>
        <h2 className="balanced text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl">{title}</h2>
        {description && <p className="pretty mt-5 max-w-2xl leading-7 text-ink-soft">{description}</p>}
      </div>
    </header>
  );
}
