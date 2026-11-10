import type { Metadata } from "next";
import Link from "next/link";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { locales } from "@/i18n/routing";
import { localizedAlternates } from "@/lib/seo";

const email = "michael2002982@gmail.com";
const vercelPrivacyUrl = "https://vercel.com/docs/analytics/privacy-policy";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Privacy" });

  return {
    title: t("title"),
    description: t("intro"),
    alternates: localizedAlternates(locale, "/privacy"),
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Privacy" });
  const sections = [
    [t("audienceTitle"), t("audienceBody")],
    [t("dataTitle"), t("dataBody")],
    [t("languageTitle"), t("languageBody")],
    [t("limitsTitle"), t("limitsBody")],
  ] as const;

  return (
    <main className="min-h-screen bg-[var(--hero-background)] px-4 pb-20 pt-28 text-[var(--hero-ink)] sm:px-6 sm:pt-32 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[clamp(1.5rem,4vw,2.5rem)] border border-[var(--hero-border)] bg-[var(--hero-surface-strong)] p-6 shadow-[0_24px_70px_rgba(23,59,46,0.08)] sm:p-10 lg:p-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--hero-forest)]">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 text-balance text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            {t("title")}
          </h1>
          <p className="mt-6 text-pretty text-base leading-[1.8] text-[var(--hero-muted)] sm:text-lg">
            {t("intro")}
          </p>
        </header>

        <div className="mt-10 divide-y divide-[var(--hero-border)] border-y border-[var(--hero-border)]">
          {sections.map(([title, body]) => (
            <section key={title} className="py-7 sm:grid sm:grid-cols-[13rem_1fr] sm:gap-10">
              <h2 className="text-base font-semibold tracking-[-0.01em]">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-[1.8] text-[var(--hero-muted)] sm:mt-0 sm:text-base">
                {body}
              </p>
            </section>
          ))}

          <section className="py-7 sm:grid sm:grid-cols-[13rem_1fr] sm:gap-10">
            <h2 className="text-base font-semibold tracking-[-0.01em]">
              {t("providerTitle")}
            </h2>
            <div className="mt-3 sm:mt-0">
              <p className="text-sm leading-[1.8] text-[var(--hero-muted)] sm:text-base">
                {t("providerBody")}
              </p>
              <a
                href={vercelPrivacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-11 items-center font-semibold text-[var(--hero-forest)] underline decoration-[var(--hero-lime)] decoration-2 underline-offset-4 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-forest)]"
              >
                {t("providerLink")} ↗
              </a>
            </div>
          </section>

          <section className="py-7 sm:grid sm:grid-cols-[13rem_1fr] sm:gap-10">
            <h2 className="text-base font-semibold tracking-[-0.01em]">
              {t("contactTitle")}
            </h2>
            <p className="mt-3 text-sm leading-[1.8] text-[var(--hero-muted)] sm:mt-0 sm:text-base">
              {t("contactBody")}{" "}
              <a
                href={`mailto:${email}`}
                className="font-semibold text-[var(--hero-forest)] underline decoration-[var(--hero-lime)] decoration-2 underline-offset-4 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-forest)]"
              >
                {email}
              </a>
              .
            </p>
          </section>
        </div>

        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex min-h-12 items-center rounded-[14px] bg-[var(--hero-forest)] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,59,46,0.16)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hero-forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-background)] motion-reduce:transform-none"
        >
          ← {t("backHome")}
        </Link>
      </article>
    </main>
  );
}
