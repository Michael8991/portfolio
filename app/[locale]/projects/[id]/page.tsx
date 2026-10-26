import { AppCaseStudy, LandingCaseStudy } from "@/components/case-studies";
import { locales } from "@/i18n/routing";
import {
  getCaseStudy,
  type AppCaseStudyDefinition,
  type CaseStudyDefinition,
  type LandingCaseStudyDefinition,
} from "@/lib/case-studies";
import {
  absoluteUrl,
  localizedAlternates,
  localizedPath,
  openGraphLocale,
  SITE_NAME,
} from "@/lib/seo";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type CaseStudyPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { id, locale } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy || !hasLocale(locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: `metadata.projects.${caseStudy.key}`,
  });
  const title = t("title");
  const description = t("description");
  const image = {
    url: absoluteUrl(caseStudy.media.cover.src.src),
    width: caseStudy.media.cover.src.width,
    height: caseStudy.media.cover.src.height,
    alt: t("imageAlt"),
  };

  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates(locale, caseStudy.route),
    openGraph: {
      title,
      description,
      url: absoluteUrl(localizedPath(locale, caseStudy.route)),
      siteName: SITE_NAME,
      type: "article",
      ...openGraphLocale(locale),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

function isLandingCaseStudy(
  caseStudy: CaseStudyDefinition,
): caseStudy is LandingCaseStudyDefinition {
  return caseStudy.kind === "landing";
}

function isAppCaseStudy(
  caseStudy: CaseStudyDefinition,
): caseStudy is AppCaseStudyDefinition {
  return caseStudy.kind === "app";
}

function renderCaseStudy(caseStudy: CaseStudyDefinition, locale: string) {
  if (isLandingCaseStudy(caseStudy)) {
    return <LandingCaseStudy caseStudy={caseStudy} />;
  }

  if (isAppCaseStudy(caseStudy)) {
    return <AppCaseStudy caseStudy={caseStudy} locale={locale} />;
  }

  throw new Error(`Unsupported case study kind: ${String(caseStudy.kind)}`);
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { id, locale } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy) {
    notFound();
  }

  return renderCaseStudy(caseStudy, locale);
}
