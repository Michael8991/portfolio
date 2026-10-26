import type { Metadata } from "next";

import type { Locale } from "@/i18n/routing";

export const SITE_NAME = "Michael Rodríguez · Full-Stack Developer";

const productionSiteUrl = "https://www.michael-rodriguez.dev";

function normalizeSiteUrl(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(
      value.startsWith("http://") || value.startsWith("https://")
        ? value
        : `https://${value}`,
    );
    url.pathname = "/";
    url.search = "";
    url.hash = "";
    return url;
  } catch {
    return undefined;
  }
}

const configuredSiteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  (process.env.VERCEL_ENV === "production"
    ? normalizeSiteUrl(process.env.VERCEL_URL)
    : undefined);

export const siteUrl = configuredSiteUrl ?? new URL(productionSiteUrl);

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function localizedPath(locale: Locale, pathname = "") {
  return `/${locale}${pathname}`;
}

export function localizedAlternates(
  locale: Locale,
  pathname = "",
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: absoluteUrl(localizedPath(locale, pathname)),
    languages: {
      es: absoluteUrl(localizedPath("es", pathname)),
      en: absoluteUrl(localizedPath("en", pathname)),
      "x-default": absoluteUrl(pathname || "/"),
    },
  };
}

export function openGraphLocale(locale: Locale) {
  return locale === "es"
    ? { locale: "es_ES", alternateLocale: ["en_US"] }
    : { locale: "en_US", alternateLocale: ["es_ES"] };
}
