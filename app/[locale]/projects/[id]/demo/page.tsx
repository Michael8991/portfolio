import { getCaseStudy } from "@/lib/case-studies";
import { locales } from "@/i18n/routing";
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

type DemoPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({
  params,
}: DemoPageProps): Promise<Metadata> {
  const { id, locale } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy?.links.demoRoute || !hasLocale(locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata.demo" });
  const title = t("title");
  const description = t("description");

  return {
    title: { absolute: title },
    description,
    robots: {
      index: false,
      follow: true,
    },
    alternates: localizedAlternates(locale, caseStudy.links.demoRoute),
    openGraph: {
      title,
      description,
      url: absoluteUrl(localizedPath(locale, caseStudy.links.demoRoute)),
      siteName: SITE_NAME,
      type: "website",
      ...openGraphLocale(locale),
    },
  };
}

export default async function CaseStudyPage({
  params,
}: DemoPageProps) {
  const { id, locale } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy?.links.demoRoute || !hasLocale(locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "caseStudies.demo" });

  return (
    <main className="container mx-auto flex max-w-7xl flex-col items-center px-4 pb-8 pt-28 text-slate-800 md:px-8 md:pt-32">
      <div className="flex flex-col items-center justify-center gap-4 py-20 px-6 text-center min-h-screen">
        <h1 className="sr-only">{t("title")}</h1>
        <div className="flex items-center gap-2 bg-[#ff512f]/10 border border-[#ff512f]/30 text-[#ff512f] text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff512f] opacity-75 motion-reduce:animate-none"></span>
            <span className="relative inline-flex size-2 rounded-full bg-[#ff512f]"></span>
          </span>
          {t("badge")}
        </div>

        <p className="text-gray-500 text-sm max-w-md">
          {t("description")}
        </p>

        <a
          href={caseStudy.links.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-black/80 transition-colors duration-200"
        >
          <div style={{ width: 50, height: 50, position: "relative" }}>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </div>
          {t("github")}
        </a>
      </div>
    </main>
  );
}
