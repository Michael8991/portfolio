import CatalogCaseStudy from "@/components/CatalogCaseStudy";
import { useTranslations } from "next-intl";

interface ProjectSectionProps {
  locale: string;
}

export default function ProjectsSection({ locale }: ProjectSectionProps) {
  const t = useTranslations("catalogCaseStudy");

  return (
    <section
      id="projects-section"
      aria-labelledby="projects-heading"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[var(--hero-background)] px-4 py-24 text-[var(--hero-ink)] sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <span className="absolute -right-36 top-[5%] size-[clamp(20rem,38vw,35rem)] rounded-full bg-[rgba(183,255,56,0.13)] blur-[clamp(70px,8vw,110px)] sm:-right-44" />
        <span className="absolute -left-40 top-[43%] size-[clamp(18rem,34vw,30rem)] rounded-full bg-[rgba(183,255,56,0.09)] blur-[clamp(75px,8vw,115px)] sm:-left-52" />
        <span className="absolute -right-36 bottom-[3%] size-[clamp(19rem,36vw,33rem)] rounded-full bg-[rgba(183,255,56,0.11)] blur-[clamp(75px,8vw,120px)] sm:-right-44" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <header>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] sm:text-[13px]">
            <span className="rounded-md bg-[var(--hero-lime)] px-1.5 py-1 text-[var(--hero-forest)]">
              {t("eyebrowNumber")}
            </span>
            <span className="text-[var(--hero-forest)]">
              / {t("eyebrowLabel")}
            </span>
          </p>
          <div className="mt-8 grid gap-7 md:grid-cols-[1.05fr_.75fr] md:items-end md:gap-16 lg:gap-24">
            <h2
              id="projects-heading"
              className="max-w-2xl text-balance text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--hero-ink)]"
            >
              {t("heading")}
            </h2>
            <p className="max-w-[27rem] text-base leading-relaxed text-[var(--hero-muted)] sm:text-lg">
              {t("intro")}
            </p>
          </div>
        </header>

        <CatalogCaseStudy locale={locale} />
      </div>
    </section>
  );
}
