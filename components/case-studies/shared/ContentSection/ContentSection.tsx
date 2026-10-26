import type { ReactNode } from "react";

export interface ContentSectionProps {
  id: string;
  title: ReactNode;
  eyebrow?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  headingLevel?: 2 | 3;
  className?: string;
  contentClassName?: string;
}

export default function ContentSection({
  id,
  title,
  eyebrow,
  intro,
  children,
  headingLevel = 2,
  className = "",
  contentClassName = "",
}: ContentSectionProps) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`case-study-section-anchor border-t border-[var(--hero-border)] py-[clamp(3.5rem,7vw,6rem)] first:pt-0 ${className}`}
    >
      <header className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--hero-forest)]/70 sm:text-xs">
            {eyebrow}
          </p>
        ) : null}

        <Heading
          id={headingId}
          className="text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[var(--hero-ink)]"
        >
          {title}
        </Heading>

        {intro ? (
          <div className="mt-5 max-w-[45rem] text-pretty text-base leading-[1.75] text-[var(--hero-muted)] sm:text-lg">
            {intro}
          </div>
        ) : null}
      </header>

      {children ? (
        <div className={`mt-8 min-w-0 sm:mt-10 ${contentClassName}`}>
          {children}
        </div>
      ) : null}
    </section>
  );
}
