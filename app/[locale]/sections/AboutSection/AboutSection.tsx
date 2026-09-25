"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

type Translation = ReturnType<typeof useTranslations>;

type CareerItem = {
  period?: string;
  title: string;
  organization: string;
  subtitle?: string;
  descriptions: string[];
};

const reveal = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const labelClassName =
  "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--hero-forest)] sm:text-[13px]";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className={labelClassName}>
      <span
        className="size-2 shrink-0 rounded-full bg-[var(--hero-lime)]"
        aria-hidden="true"
      />
      {children}
    </p>
  );
}

function CareerColumn({
  title,
  headingId,
  items,
}: {
  title: string;
  headingId: string;
  items: CareerItem[];
}) {
  return (
    <section aria-labelledby={headingId}>
      <h3
        id={headingId}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--hero-forest)]"
      >
        {title}
      </h3>
      <ol className="mt-7 space-y-9">
        {items.map((item) => (
          <li
            key={`${item.period ?? "current"}-${item.title}`}
            className="grid gap-3 border-t border-[var(--hero-border)] pt-5 sm:grid-cols-[8.25rem_1fr] sm:gap-6"
          >
            {item.period ? (
              <p className="pt-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--hero-muted)]/80">
                {item.period}
              </p>
            ) : (
              <span aria-hidden="true" className="hidden sm:block" />
            )}
            <div>
              <h4 className="text-lg font-semibold leading-snug text-[var(--hero-ink)] sm:text-xl">
                {item.title}
              </h4>
              <p className="mt-1 text-sm font-semibold text-[var(--hero-forest)] sm:text-base">
                {item.organization}
              </p>
              {item.subtitle ? (
                <p className="mt-1 text-sm leading-relaxed text-[var(--hero-muted)]">
                  {item.subtitle}
                </p>
              ) : null}
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--hero-muted)] sm:text-[15px]">
                {item.descriptions.map((description) => (
                  <p key={description}>{description}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function buildContent(t: Translation) {
  const technicalAreas = [
    { key: "frontend", count: 4 },
    { key: "backend", count: 4 },
    { key: "data", count: 3 },
    { key: "delivery", count: 4 },
  ];

  return {
    approach: [0, 1, 2].map((index) => ({
      title: t(`approach.items.${index}.title`),
      description: t(`approach.items.${index}.description`),
    })),
    technicalAreas: technicalAreas.map(({ key, count }) => ({
      title: t(`technicalAreas.${key}.title`),
      items: Array.from({ length: count }, (_, index) =>
        t(`technicalAreas.${key}.items.${index}`),
      ),
    })),
    experience: [
      {
        period: t("experience.items.0.period"),
        title: t("experience.items.0.title"),
        organization: t("experience.items.0.organization"),
        subtitle: t("experience.items.0.subtitle"),
        descriptions: [
          t("experience.items.0.description1"),
          t("experience.items.0.description2"),
        ],
      },
      {
        period: t("experience.items.1.period"),
        title: t("experience.items.1.title"),
        organization: t("experience.items.1.organization"),
        descriptions: [
          t("experience.items.1.description1"),
          t("experience.items.1.description2"),
        ],
      },
    ],
    education: [
      {
        title: t("education.items.0.title"),
        organization: t("education.items.0.organization"),
        descriptions: [t("education.items.0.detail")],
      },
      {
        period: t("education.items.1.period"),
        title: t("education.items.1.title"),
        organization: t("education.items.1.organization"),
        descriptions: [t("education.items.1.detail")],
      },
    ],
    currentFocus: [0, 1, 2].map((index) => ({
      label: t(`currentFocus.items.${index}.label`),
      value: t(`currentFocus.items.${index}.value`),
      secondary: index === 1 ? t("currentFocus.items.1.secondary") : undefined,
    })),
  };
}

export default function AboutSection() {
  const t = useTranslations("aboutMe");
  const prefersReducedMotion = useReducedMotion();
  const content = buildContent(t);
  const motionProps = prefersReducedMotion
    ? { initial: false as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.45, ease: "easeOut" as const },
      };

  return (
    <section
      id="about-section"
      aria-labelledby="about-heading"
      className="scroll-mt-20 bg-[var(--hero-background)] px-4 py-[clamp(4.5rem,8vw,7rem)] text-[var(--hero-ink)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.header variants={reveal} {...motionProps}>
          <SectionLabel>{t("eyebrow")}</SectionLabel>
          <div className="mt-8 grid items-start gap-[clamp(2.5rem,7vw,6rem)] md:grid-cols-[minmax(0,1fr)_minmax(360px,.9fr)]">
            <h2
              id="about-heading"
              className="text-balance text-[clamp(2.15rem,5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--hero-ink)]"
            >
              <span className="block">{t("headline.line1")}</span>
              <span className="block">{t("headline.line2")}</span>
              <span className="block">{t("headline.line3")}</span>
            </h2>
            <div className="max-w-[36rem] text-base leading-[1.75] text-[var(--hero-muted)] sm:text-lg">
              <p>{t("intro.paragraph1")}</p>
              <p className="mt-5">{t("intro.paragraph2")}</p>
            </div>
          </div>
        </motion.header>

        <motion.section
          aria-labelledby="technical-areas-heading"
          variants={reveal}
          {...motionProps}
          className="mt-[clamp(4rem,6vw,5rem)] border-t border-[var(--hero-border)] pt-[clamp(2rem,3vw,2.75rem)]"
        >
          <h3 id="technical-areas-heading" className={labelClassName}>
            <span
              className="size-2 shrink-0 rounded-full bg-[var(--hero-lime)]"
              aria-hidden="true"
            />
            {t("technicalAreas.sectionLabel")}
          </h3>
          <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
            {content.technicalAreas.map((area) => (
              <div key={area.title}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--hero-forest)]/75">
                  {area.title}
                </h4>
                <ul className="mt-4 space-y-2 text-base font-medium text-[var(--hero-ink)] sm:text-lg">
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          variants={reveal}
          {...motionProps}
          className="mt-[clamp(4rem,6vw,5rem)] grid gap-14 border-t border-[var(--hero-border)] pt-[clamp(2rem,3vw,2.75rem)] lg:grid-cols-2 lg:gap-20"
        >
          <CareerColumn
            title={t("experience.title")}
            headingId="experience-heading"
            items={content.experience}
          />
          <CareerColumn
            title={t("education.title")}
            headingId="education-heading"
            items={content.education}
          />
        </motion.div>

        <motion.section
          aria-labelledby="current-focus-heading"
          variants={reveal}
          {...motionProps}
          className="mt-[clamp(3.5rem,5vw,4.5rem)] border-t border-[var(--hero-border)] pt-[clamp(2rem,3vw,2.5rem)]"
        >
          <h3 id="current-focus-heading" className={labelClassName}>
            <span
              className="size-2 shrink-0 rounded-full bg-[var(--hero-lime)]"
              aria-hidden="true"
            />
            {t("currentFocus.title")}
          </h3>
          <dl className="mt-7 grid gap-7 sm:grid-cols-3 sm:gap-10">
            {content.currentFocus.map((item) => (
              <div key={item.label}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--hero-muted)]/80">
                  {item.label}
                </dt>
                <dd className="mt-2 text-base font-semibold text-[var(--hero-ink)] sm:text-lg">
                  {item.value}
                </dd>
                {item.secondary ? (
                  <p className="mt-1 text-sm leading-relaxed text-[var(--hero-muted)]">
                    {item.secondary}
                  </p>
                ) : null}
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section
          aria-labelledby="approach-heading"
          variants={reveal}
          {...motionProps}
          className="mt-[clamp(4rem,6vw,5rem)] border-y border-[var(--hero-border)] bg-[var(--hero-lime-subtle)] px-4 py-[clamp(2rem,3vw,2.75rem)] sm:px-6 lg:px-8"
        >
          <h3 id="approach-heading" className={labelClassName}>
            <span
              className="size-2 shrink-0 rounded-full bg-[var(--hero-lime)]"
              aria-hidden="true"
            />
            {t("approach.title")}
          </h3>
          <ol className="mt-7 grid gap-7 md:grid-cols-3 md:gap-10">
            {content.approach.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[2rem_1fr] gap-3 border-t border-[var(--hero-forest)]/15 pt-5"
              >
                <span
                  className="font-mono text-[11px] font-semibold text-[var(--hero-forest)]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--hero-ink)]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--hero-muted)] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>
      </div>
    </section>
  );
}
