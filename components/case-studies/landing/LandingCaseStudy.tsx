import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import type { LandingCaseStudyDefinition } from "@/lib/case-studies";

import {
  CaseStudyHero,
  CaseStudyLayout,
  CaseStudyNavigation,
  ContentSection,
  MediaBlock,
} from "../shared";

interface LandingCaseStudyProps {
  caseStudy: LandingCaseStudyDefinition;
}

interface LandingSectionItem {
  title: string;
  body: string;
}

interface LandingSectionContent {
  intro: string;
  paragraphs?: readonly string[];
  items?: readonly LandingSectionItem[];
}

interface LandingMediaContent {
  eyebrow: string;
  title: string;
  caption: string;
}

interface LandingSectionMedia {
  src: StaticImageData;
  alt: string;
  content: LandingMediaContent;
}

const academySectionMedia = {
  design: {
    assetId: "academy-redesign",
    contentKey: "media.redesign",
  },
  evolution: {
    assetId: "academy-previous-landing",
    contentKey: "media.previousLanding",
  },
} as const;

function LandingSectionBody({
  paragraphs = [],
  items = [],
  media,
}: Omit<LandingSectionContent, "intro"> & { media?: ReactNode }) {
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

      {items.length ? (
        <dl className="grid border-y border-[var(--hero-border)] sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="border-t border-[var(--hero-border)] py-6 first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:pl-8"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--hero-forest)]">
                {item.title}
              </dt>
              <dd className="mt-3 text-sm leading-[1.75] text-[var(--hero-muted)] sm:text-base">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}

export default async function LandingCaseStudy({
  caseStudy,
}: LandingCaseStudyProps) {
  const catalogT = await getTranslations(
    `catalogCaseStudy.${caseStudy.content.catalogKey}`,
  );
  const catalogLabelsT = await getTranslations("catalogCaseStudy.labels");
  const contentT = await getTranslations(caseStudy.content.namespace);

  function getSectionMedia(sectionId: string): LandingSectionMedia | undefined {
    if (caseStudy.key !== "academy") {
      return undefined;
    }

    const mediaDefinition =
      academySectionMedia[sectionId as keyof typeof academySectionMedia];

    if (!mediaDefinition) {
      return undefined;
    }

    const asset = caseStudy.media.supporting?.find(
      (item) => item.id === mediaDefinition.assetId,
    );

    if (!asset) {
      return undefined;
    }

    return {
      src: asset.src,
      alt: contentT(asset.altKey),
      content: contentT.raw(mediaDefinition.contentKey) as LandingMediaContent,
    };
  }

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
            ...(caseStudy.links.website
              ? [
                  {
                    label: catalogT("primaryCta"),
                    href: caseStudy.links.website,
                    external: true,
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
              alt={contentT(caseStudy.media.cover.altKey)}
              priority
              sizes="(max-width: 1023px) calc(100vw - 4.5rem), (max-width: 1439px) 48vw, 42rem"
              className="h-auto w-full object-cover"
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
        const content = contentT.raw(
          sectionContentKey,
        ) as LandingSectionContent;
        const sectionMedia = getSectionMedia(section.id);

        return (
          <ContentSection
            key={section.id}
            id={section.id}
            eyebrow={String(index + 1).padStart(2, "0")}
            title={contentT(section.labelKey)}
            intro={content.intro}
          >
            <LandingSectionBody
              paragraphs={content.paragraphs}
              items={content.items}
              media={
                sectionMedia ? (
                  <MediaBlock
                    src={sectionMedia.src}
                    alt={sectionMedia.alt}
                    eyebrow={sectionMedia.content.eyebrow}
                    title={sectionMedia.content.title}
                    caption={sectionMedia.content.caption}
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
