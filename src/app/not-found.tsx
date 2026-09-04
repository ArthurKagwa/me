import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell grid min-h-[calc(100dvh-9rem)] content-center py-20">
      <p className="font-mono text-sm text-signal">404 / open circuit</p>
      <h1 className="balanced mt-5 max-w-4xl text-6xl font-semibold leading-[0.86] tracking-[-0.065em] sm:text-8xl">This path does not connect.</h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-ink-soft">The page may have moved, or the project is not ready to publish. Return to the verified work.</p>
      <Link className="button-primary mt-8 w-fit" href="/#projects">View selected projects</Link>
    </section>
  );
}
