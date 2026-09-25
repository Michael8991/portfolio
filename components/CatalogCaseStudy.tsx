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
  statusTone: "development" | "live";
  title: string;
  description: string;
  alt: string;
  image: StaticImageData;
  role?: string;
  areas?: string;
  stack: string;
  caseStudyId: string;
  github: string;
  demo?: string;
  website?: string;
  primaryLabel: string;
  imageFirstDesktop?: boolean;
};

function Metadata({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#625F59]/75">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm font-medium leading-relaxed text-[#151515] sm:text-base">
        {value}
      </dd>
    </div>
  );
}

function ProjectArticle({
  project,
  locale,
  labels,
}: {
  project: ProjectData;
  locale: string;
  labels: { role: string; areas: string; stack: string; github: string; demo: string; caseStudy: string };
}) {
  const imageSide = project.imageFirstDesktop ? "lg:col-start-1" : "lg:col-start-2";
  const textSide = project.imageFirstDesktop ? "lg:col-start-2" : "lg:col-start-1";

  return (
    <article className="grid gap-x-14 gap-y-8 border-t border-[#151515]/15 py-16 sm:py-20 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:py-24 xl:gap-x-20">
      <div className={`min-w-0 lg:row-start-1 ${textSide}`}>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.14em]">
          <p className="text-[#f36b2b]">
            {project.number} / <span className="text-[#625F59]">{project.type}</span>
          </p>
          <p className="flex items-center gap-2 text-[#625F59]">
            <span
              className={`size-1.5 rounded-full ${project.statusTone === "live" ? "bg-emerald-700" : "bg-[#f36b2b]"}`}
              aria-hidden="true"
            />
            {project.status}
          </p>
        </div>

        <h3 className="mt-7 text-balance text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#151515]">
          {project.title}
        </h3>
        <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#625F59] sm:text-lg">
          {project.description}
        </p>
      </div>

      <figure className={`min-w-0 self-center lg:row-span-2 lg:row-start-1 ${imageSide}`}>
        <Image
          src={project.image}
          alt={project.alt}
          sizes="(max-width: 1023px) 100vw, 56vw"
          className="mx-auto h-auto w-full max-w-[48rem] object-contain"
        />
      </figure>

      <div className={`min-w-0 lg:row-start-2 ${textSide}`}>
        <dl className={`grid gap-6 ${project.role && project.areas ? "sm:grid-cols-2" : ""}`}>
          {project.role ? <Metadata label={labels.role} value={project.role} /> : null}
          {project.areas ? <Metadata label={labels.areas} value={project.areas} /> : null}
          <div className={project.role && project.areas ? "sm:col-span-2" : ""}>
            <Metadata label={labels.stack} value={project.stack} />
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          {project.website ? (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-[4px] border border-[#151515] bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2b2b2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36b2b] motion-reduce:transform-none"
            >
              {project.primaryLabel}
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          ) : (
            <Link
              href={`/${locale}/projects/${project.caseStudyId}`}
              className="group inline-flex min-h-11 items-center gap-2 rounded-[4px] border border-[#151515] bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2b2b2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36b2b] motion-reduce:transform-none"
            >
              {project.primaryLabel}
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
          )}

          {project.website ? (
            <Link href={`/${locale}/projects/${project.caseStudyId}`} className="group inline-flex items-center gap-1.5 border-b border-[#151515]/35 pb-0.5 text-sm font-medium text-[#151515] transition hover:border-[#f36b2b] hover:text-[#f36b2b] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f36b2b]">
              {labels.caseStudy}<ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
          ) : null}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border-b border-[#151515]/35 pb-0.5 text-sm font-medium text-[#151515] transition hover:border-[#f36b2b] hover:text-[#f36b2b] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f36b2b]">
            {labels.github}<ExternalLink size={13} aria-hidden="true" />
          </a>
          {project.demo ? (
            <Link href={project.demo} className="inline-flex items-center gap-1.5 border-b border-[#151515]/35 pb-0.5 text-sm font-medium text-[#151515] transition hover:border-[#f36b2b] hover:text-[#f36b2b] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f36b2b]">
              {labels.demo}<ArrowRight size={13} aria-hidden="true" />
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
      statusTone: "development",
      title: t("lms.title"),
      description: t("lms.description"),
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
      statusTone: "live",
      title: t("academy.title"),
      description: t("academy.description"),
      alt: t("academy.alt"),
      image: academyMockup,
      stack: t("academy.stack"),
      caseStudyId: "001",
      github: "https://github.com/Michael8991/costaspanish-academy",
      website: "https://www.costaspanishclass.com",
      primaryLabel: t("academy.primaryCta"),
      imageFirstDesktop: true,
    },
  ];

  return (
    <div className="mt-16 sm:mt-20">
      {projects.map((project) => (
        <ProjectArticle key={project.number} project={project} locale={locale} labels={labels} />
      ))}
    </div>
  );
}
