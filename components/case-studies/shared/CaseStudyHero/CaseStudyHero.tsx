import Link from "next/link";
import type { ReactNode } from "react";

import { ProjectMeta, type ProjectMetaItem } from "../ProjectMeta";

export interface CaseStudyHeroLink {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
}

export interface CaseStudyHeroProps {
  category: ReactNode;
  title: ReactNode;
  summary: ReactNode;
  status?: ReactNode;
  meta?: readonly ProjectMetaItem[];
  links?: readonly CaseStudyHeroLink[];
  media?: ReactNode;
  className?: string;
}

const linkBaseClassName =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] px-5 py-3 text-center text-sm font-semibold transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hero-forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-background)] motion-reduce:transform-none sm:w-auto";

export default function CaseStudyHero({
  category,
  title,
  summary,
  status,
  meta = [],
  links = [],
  media,
  className = "",
}: CaseStudyHeroProps) {
  const hasSupportingContent = meta.length > 0 || links.length > 0;

  return (
    <header
      data-case-study-hero
      className={`relative isolate overflow-hidden rounded-[clamp(1.5rem,4vw,2.5rem)] border border-[var(--hero-border)] bg-[var(--hero-surface-strong)] shadow-[0_24px_70px_rgba(23,59,46,0.08)] ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[var(--hero-lime)]"
      />

      <div
        className={`grid min-w-0 gap-8 p-5 sm:p-8 lg:p-10 min-[1280px]:p-12 ${
          media
            ? "lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,1.05fr)] lg:items-center lg:gap-12"
            : ""
        }`}
      >
        <div className={`min-w-0 ${media ? "" : "max-w-4xl"}`}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--hero-forest)] sm:text-[13px]">
              {category}
            </p>
            {status ? (
              <p className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--hero-forest)]">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-[var(--hero-lime)] shadow-[0_0_0_4px_var(--hero-lime-subtle)]"
                />
                {status}
              </p>
            ) : null}
          </div>

          <h1 className="mt-5 max-w-[14ch] text-balance text-[clamp(2.5rem,7vw,5.75rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[var(--hero-ink)]">
            {title}
          </h1>
          <div className="mt-6 max-w-[43rem] text-pretty text-base font-medium leading-[1.7] text-[var(--hero-muted)] sm:text-lg">
            {summary}
          </div>

          {hasSupportingContent ? (
            <div className="mt-8 sm:mt-10">
              <ProjectMeta items={meta} />

              {links.length ? (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {links.map((link) => {
                    const isPrimary = link.variant === "primary";

                    return (
                      <Link
                        key={`${link.href}-${link.label}`}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={`${linkBaseClassName} ${
                          isPrimary
                            ? "bg-[var(--hero-forest)] text-white shadow-[0_8px_24px_rgba(23,59,46,0.16)] hover:bg-[#204d3c]"
                            : "border border-[var(--hero-border)] bg-white/75 text-[var(--hero-forest)] hover:border-[rgba(23,59,46,0.2)] hover:bg-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        {link.external ? (
                          <span aria-hidden="true">↗</span>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        {media ? (
          <div
            data-case-study-hero-media
            className="min-w-0 overflow-hidden rounded-[clamp(1.25rem,3vw,2rem)] border border-[var(--hero-border)] bg-[var(--hero-background)]"
          >
            {media}
          </div>
        ) : null}
      </div>
    </header>
  );
}
