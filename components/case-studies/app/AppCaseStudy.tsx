import Image from "next/image";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import type { AppCaseStudyDefinition } from "@/lib/case-studies";

import {
  CaseStudyHero,
  CaseStudyLayout,
  CaseStudyNavigation,
  ContentSection,
  MediaBlock,
} from "../shared";

interface AppCaseStudyProps {
  caseStudy: AppCaseStudyDefinition;
  locale: string;
}

interface AppSectionItem {
  title: string;
  body: string;
}

interface AppSectionFlow extends AppSectionItem {
  steps: readonly string[];
}

interface AppSectionContent {
  intro: string;
  paragraphs?: readonly string[];
  items?: readonly AppSectionItem[];
  flows?: readonly AppSectionFlow[];
}

interface AppMediaContent {
  alt: string;
  eyebrow: string;
  title: string;
  caption: string;
}

function AppSectionBody({
  content,
  media,
}: {
  content: AppSectionContent;
  media?: ReactNode;
}) {
  const { paragraphs = [], items = [], flows = [] } = content;

  return (
    <div className="space-y-10">
      {paragraphs.length ? (
        <div className="grid gap-6 text-base leading-[1.8] text-[var(--hero-muted)] md:grid-cols-2 md:gap-10">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {media}

      {flows.length ? (
        <div className="border-y border-[var(--hero-border)]">
          {flows.map((flow) => (
            <article
              key={flow.title}
              className="grid gap-5 border-t border-[var(--hero-border)] py-7 first:border-t-0 lg:grid-cols-[minmax(12rem,0.65fr)_minmax(0,1.35fr)] lg:gap-10"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--hero-ink)]">
                  {flow.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-[var(--hero-muted)]">
                  {flow.body}
                </p>
              </div>
              <ol className="flex flex-wrap content-start gap-2" aria-label={flow.title}>
                {flow.steps.map((step, index) => (
                  <li
                    key={`${flow.title}-${step}`}
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--hero-border)] bg-white/75 px-3.5 py-2 text-sm font-medium text-[var(--hero-forest)]"
                  >
                    <span className="font-mono text-[10px] text-[var(--hero-forest)]/55">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      ) : null}

      {items.length ? (
        <div className="grid border-y border-[var(--hero-border)] sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="border-t border-[var(--hero-border)] py-6 first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:pl-8"
            >
              <h3 className="text-sm font-semibold tracking-[-0.01em] text-[var(--hero-ink)] sm:text-base">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-[var(--hero-muted)] sm:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default async function AppCaseStudy({
  caseStudy,
  locale,
}: AppCaseStudyProps) {
  const catalogT = await getTranslations(
    `catalogCaseStudy.${caseStudy.content.catalogKey}`,
  );
  const catalogLabelsT = await getTranslations("catalogCaseStudy.labels");
  const contentT = await getTranslations(caseStudy.content.namespace);
  const mediaContent = contentT.raw("media.dashboard") as AppMediaContent;

  return (
    <CaseStudyLayout
      hero={
        <CaseStudyHero
          category={catalogT("type")}
          title={catalogT("title")}
          summary={catalogT("description1")}
          status={catalogT("status")}
          meta={[
            { label: catalogLabelsT("role"), value: catalogT("role") },
            { label: catalogLabelsT("areas"), value: catalogT("areas") },
            { label: catalogLabelsT("stack"), value: catalogT("stack") },
          ]}
          links={[
            ...(caseStudy.links.demoRoute
              ? [
                  {
                    label: contentT("actions.demo"),
                    href: `/${locale}${caseStudy.links.demoRoute}`,
                    variant: "primary" as const,
                  },
                ]
              : []),
            {
              label: catalogLabelsT("github"),
              href: caseStudy.links.repository,
              external: true,
              variant: "secondary",
            },
          ]}
          media={
            <Image
              src={caseStudy.media.cover.src}
              alt={mediaContent.alt}
              priority
              sizes="(max-width: 1023px) calc(100vw - 4.5rem), (max-width: 1439px) 48vw, 42rem"
              className="h-auto w-full object-contain"
            />
          }
        />
      }
      navigation={
        <CaseStudyNavigation
          sections={caseStudy.sections}
          contentNamespace={caseStudy.content.namespace}
        />
      }
    >
      {caseStudy.sections.map((section, index) => {
        const sectionContentKey = section.labelKey.replace(/\.label$/, "");
        const content = contentT.raw(sectionContentKey) as AppSectionContent;
        const isProductSection = section.id === "product";

        return (
          <ContentSection
            key={section.id}
            id={section.id}
            eyebrow={String(index + 1).padStart(2, "0")}
            title={contentT(section.labelKey)}
            intro={content.intro}
          >
            <AppSectionBody
              content={content}
              media={
                isProductSection ? (
                  <MediaBlock
                    src={caseStudy.media.cover.src}
                    alt={mediaContent.alt}
                    eyebrow={mediaContent.eyebrow}
                    title={mediaContent.title}
                    caption={mediaContent.caption}
                    sizes="(max-width: 1179px) calc(100vw - 3rem), (max-width: 1439px) calc(100vw - 24rem), 62rem"
                  />
                ) : undefined
              }
            />
          </ContentSection>
        );
      })}
    </CaseStudyLayout>
  );
}
