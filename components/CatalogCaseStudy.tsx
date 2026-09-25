import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

import academyMockup from "@/public/CostaSpanishAcademy/mockupversionmobilecostaspanishlanding.png";
import lmsMockup from "@/public/CostaSpanishAcademy/MockCostaSpanishLMS.png";

interface CatalogCaseStudyProps {
  locale: string;
}

type ProjectData = {
  number: string;
  type: string;
  status: string;
  title: string;
  subtitle: string;
  descriptions: string[];
  alt: string;
  image: StaticImageData;
  role: string;
  areas: string;
  stack: string;
  caseStudyId: string;
  github: string;
  demo?: string;
  website?: string;
  primaryLabel: string;
  imageFirstDesktop?: boolean;
};

const secondaryLinkClassName =
  "inline-flex min-h-11 items-center gap-1.5 border-b border-[var(--hero-forest)]/30 pt-0.5 text-sm font-medium text-[var(--hero-forest)] transition-[color,border-color] hover:border-[var(--hero-forest)] hover:text-[var(--hero-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hero-forest)]";

function Metadata({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--hero-muted)]/75">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm font-medium leading-relaxed text-[var(--hero-ink)] sm:text-base">
        {value}
      </dd>
    </div>
  );
}

function PrimaryAction({
  children,
  external,
  href,
}: {
  children: React.ReactNode;
  external?: boolean;
  href: string;
}) {
  const className =
    "group inline-flex min-h-11 items-center gap-3 rounded-xl bg-[var(--hero-forest)] py-2 pl-5 pr-2 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(23,59,46,0.13)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#204d3c] hover:shadow-[0_10px_26px_rgba(23,59,46,0.17)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hero-forest)] motion-reduce:transform-none";
  const icon = (
    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[var(--hero-lime)] text-[var(--hero-forest)]">
      {external ? (
        <ExternalLink size={14} aria-hidden="true" />
      ) : (
        <ArrowRight
          size={15}
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
        />
      )}
    </span>
  );

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      {icon}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
      {icon}
    </Link>
  );
}

function ProjectArticle({
  project,
  locale,
  labels,
}: {
  project: ProjectData;
  locale: string;
  labels: {
    role: string;
    areas: string;
    stack: string;
    github: string;
    demo: string;
    caseStudy: string;
  };
}) {
  const imageSide = project.imageFirstDesktop
    ? "lg:col-start-1"
    : "lg:col-start-2";
  const textSide = project.imageFirstDesktop
    ? "lg:col-start-2"
    : "lg:col-start-1";

  return (
    <article className="grid gap-x-14 gap-y-9 border-t border-[var(--hero-border)] py-[clamp(5.5rem,8vw,7.5rem)] lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] xl:gap-x-20">
      <div className={`min-w-0 lg:row-start-1 ${textSide}`}>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.14em]">
          <p className="flex items-center gap-2 text-[var(--hero-forest)]">
            <span className="rounded-md bg-[var(--hero-lime)] px-1.5 py-1 text-[var(--hero-forest)]">
              {project.number}
            </span>
            <span>/ {project.type}</span>
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-border)] bg-[rgba(183,255,56,0.18)] px-2.5 py-1.5 text-[var(--hero-forest)]">
            <span
              className="size-1.5 rounded-full bg-[#18a768] shadow-[0_0_0_4px_rgba(24,167,104,0.12)]"
              aria-hidden="true"
            />
            {project.status}
          </p>
        </div>

        <h3 className="mt-7 text-balance text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--hero-ink)]">
          {project.title}
        </h3>
        <p className="mt-3 text-base font-semibold text-[var(--hero-forest)] sm:text-lg">
          {project.subtitle}
        </p>
        <div className="mt-6 max-w-xl space-y-4 text-base leading-[1.75] text-[var(--hero-muted)] sm:text-lg">
          {project.descriptions.map((description) => (
            <p key={description}>{description}</p>
          ))}
        </div>
      </div>

      <figure
        className={`min-w-0 self-center bg-[radial-gradient(circle_at_center,rgba(183,255,56,0.14),transparent_68%)] py-4 lg:row-span-2 lg:row-start-1 ${imageSide}`}
      >
        <Image
          src={project.image}
          alt={project.alt}
          sizes="(max-width: 1023px) 100vw, 56vw"
          className="mx-auto h-auto w-full max-w-[50rem] object-contain"
        />
      </figure>

      <div className={`min-w-0 lg:row-start-2 ${textSide}`}>
        <dl className="grid gap-6 sm:grid-cols-2">
          <Metadata label={labels.role} value={project.role} />
          <Metadata label={labels.areas} value={project.areas} />
          <div className="sm:col-span-2">
            <Metadata label={labels.stack} value={project.stack} />
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <PrimaryAction
            href={
              project.website
                ? project.website
                : `/${locale}/projects/${project.caseStudyId}`
            }
            external={Boolean(project.website)}
          >
            {project.primaryLabel}
          </PrimaryAction>

          {project.website ? (
            <Link
              href={`/${locale}/projects/${project.caseStudyId}`}
              className={`${secondaryLinkClassName} group`}
            >
              {labels.caseStudy}
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
              />
            </Link>
          ) : null}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryLinkClassName}
          >
            {labels.github}
            <ExternalLink size={13} aria-hidden="true" />
          </a>
          {project.demo ? (
            <Link href={project.demo} className={secondaryLinkClassName}>
              {labels.demo}
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function CatalogCaseStudy({ locale }: CatalogCaseStudyProps) {
  const t = useTranslations("catalogCaseStudy");
  const labels = {
    role: t("labels.role"),
    areas: t("labels.areas"),
    stack: t("labels.stack"),
    github: t("labels.github"),
    demo: t("labels.demo"),
    caseStudy: t("labels.caseStudy"),
  };

  const projects: ProjectData[] = [
    {
      number: "01",
      type: t("lms.type"),
      status: t("lms.status"),
      title: t("lms.title"),
      subtitle: t("lms.subtitle"),
      descriptions: [t("lms.description1"), t("lms.description2")],
      alt: t("lms.alt"),
      image: lmsMockup,
      role: t("lms.role"),
      areas: t("lms.areas"),
      stack: t("lms.stack"),
      caseStudyId: "002",
      github: "https://github.com/Michael8991/costaspanish-lms",
      demo: `/${locale}/projects/002/demo`,
      primaryLabel: t("lms.primaryCta"),
    },
    {
      number: "02",
      type: t("academy.type"),
      status: t("academy.status"),
      title: t("academy.title"),
      subtitle: t("academy.subtitle"),
      descriptions: [t("academy.description1"), t("academy.description2")],
      alt: t("academy.alt"),
      image: academyMockup,
      role: t("academy.role"),
      areas: t("academy.areas"),
      stack: t("academy.stack"),
      caseStudyId: "001",
      github: "https://github.com/Michael8991/costaspanish-academy",
      website: "https://www.costaspanishclass.com",
      primaryLabel: t("academy.primaryCta"),
      imageFirstDesktop: true,
    },
  ];

  return (
    <div className="mt-[clamp(4.5rem,7vw,6rem)]">
      {projects.map((project) => (
        <ProjectArticle
          key={project.number}
          project={project}
          locale={locale}
          labels={labels}
        />
      ))}
    </div>
  );
}
