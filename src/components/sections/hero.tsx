import type { ReactNode } from "react";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
  meta?: string;
  actions?: ReactNode;
}

export function Hero({ name, title, summary, meta, actions }: HeroProps) {
  return (
    <section className="hero">
      <h1>{name}</h1>
      <p className="hero-title">{title}</p>
      <p className="hero-summary">{summary}</p>
      {meta ? <p className="hero-meta">{meta}</p> : null}
      {actions ? <div className="cta-row">{actions}</div> : null}
    </section>
  );
}
