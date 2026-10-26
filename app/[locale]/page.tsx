import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { HeroSection, AboutSection, ProjectsSection } from "./sections";
import { Footer } from "@/components/Footer";
import { locales } from "@/i18n/routing";
import {
  absoluteUrl,
  localizedAlternates,
  localizedPath,
  openGraphLocale,
  SITE_NAME,
} from "@/lib/seo";
import michaelPhoto from "@/public/MichaelMainPhoto.png";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata.home" });
  const title = t("title");
  const description = t("description");
  const image = {
    url: absoluteUrl(michaelPhoto.src),
    width: michaelPhoto.width,
    height: michaelPhoto.height,
    alt: t("imageAlt"),
  };

  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates(locale),
    openGraph: {
      title,
      description,
      url: absoluteUrl(localizedPath(locale)),
      siteName: SITE_NAME,
      type: "website",
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

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  return (
    <main
      className="
        bg-white
      "
    >
      <HeroSection locale={locale} />
      <ProjectsSection locale={locale} />
      <AboutSection />
      <Footer />
    </main>
  );
}
