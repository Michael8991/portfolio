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
      className="scroll-mt-20 bg-[#FAF9F6] px-4 py-20 text-[#151515] sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f36b2b] sm:text-[13px]">
            {t("eyebrow")}
          </p>
          <div className="mt-8 grid gap-7 md:grid-cols-[1.05fr_.75fr] md:items-end md:gap-16 lg:gap-24">
            <h2
              id="projects-heading"
              className="max-w-2xl text-balance text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.03] tracking-[-0.04em]"
            >
              {t("heading")}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-[#625F59] sm:text-lg">
              {t("intro")}
            </p>
          </div>
        </header>

        <CatalogCaseStudy locale={locale} />
      </div>
    </section>
  );
}
