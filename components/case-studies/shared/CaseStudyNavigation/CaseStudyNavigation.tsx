"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef } from "react";

import type {
  CaseStudyContentNamespace,
  CaseStudySectionDefinition,
} from "@/lib/case-studies";
import { preferredScrollBehavior } from "@/lib/motion";

import { useActiveCaseStudySection } from "./useActiveCaseStudySection";

type NavigationItem = {
  id: string;
  label: string;
};

export interface CaseStudyNavigationProps {
  sections: readonly CaseStudySectionDefinition[];
  contentNamespace: CaseStudyContentNamespace;
  className?: string;
}

type NavigationVariantProps = {
  activeId: string;
  items: readonly NavigationItem[];
  navigationLabel: string;
  onSelect: (sectionId: string) => void;
};

const focusClassName =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-forest)]";

function DesktopNavigation({
  activeId,
  items,
  navigationLabel,
  onSelect,
}: NavigationVariantProps) {
  const t = useTranslations("caseStudies.navigation");

  return (
    <nav
      aria-label={navigationLabel}
      data-navigation-variant="desktop"
      className="hidden min-[1180px]:block"
    >
      <div className="max-h-[calc(100svh-var(--case-study-navigation-top)-2rem)] overflow-y-auto pr-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--hero-forest)]/65">
          {t("eyebrow")}
        </p>
        <p className="mt-2 text-sm font-semibold text-[var(--hero-ink)]">
          {t("title")}
        </p>

        <ol className="mt-5 border-l border-[var(--hero-border)]">
          {items.map((item, index) => {
            const isActive = item.id === activeId;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => onSelect(item.id)}
                  className={`group relative grid min-h-11 grid-cols-[1.65rem_1fr] items-start gap-2.5 rounded-r-xl py-2.5 pl-4 pr-2 text-sm leading-snug transition-colors ${focusClassName} ${
                    isActive
                      ? "bg-[var(--hero-lime-subtle)] font-semibold text-[var(--hero-forest)]"
                      : "text-[var(--hero-muted)] hover:bg-white/70 hover:text-[var(--hero-ink)]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`font-mono text-[10px] leading-5 ${
                      isActive
                        ? "text-[var(--hero-forest)]"
                        : "text-[var(--hero-muted)]/60"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute -left-px top-2.5 h-[calc(100%-1.25rem)] w-0.5 rounded-full bg-[var(--hero-lime)]"
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

function CompactNavigation({
  activeId,
  items,
  navigationLabel,
  onSelect,
}: NavigationVariantProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const activeLink = activeLinkRef.current;
    if (!list || !activeLink) {
      return;
    }

    const left =
      activeLink.offsetLeft - list.clientWidth / 2 + activeLink.clientWidth / 2;
    list.scrollTo({
      left: Math.max(0, left),
      behavior: preferredScrollBehavior(),
    });
  }, [activeId]);

  return (
    <nav
      aria-label={navigationLabel}
      data-case-study-compact-navigation
      data-navigation-variant="compact"
      className="hidden rounded-2xl border border-[var(--hero-border)] bg-white/90 p-1.5 shadow-[0_10px_30px_rgba(23,59,46,0.10)] backdrop-blur-xl min-[720px]:block min-[1180px]:hidden"
    >
      <div
        ref={listRef}
        className="case-study-navigation-scrollbar flex max-w-full gap-1 overflow-x-auto overscroll-x-contain"
      >
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              ref={isActive ? activeLinkRef : undefined}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => onSelect(item.id)}
              className={`inline-flex min-h-11 shrink-0 items-center rounded-xl px-3.5 text-sm font-semibold whitespace-nowrap transition-colors ${focusClassName} ${
                isActive
                  ? "bg-[var(--hero-forest)] text-white shadow-sm"
                  : "text-[var(--hero-muted)] hover:bg-[var(--hero-lime-subtle)] hover:text-[var(--hero-forest)]"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function MobileNavigation({
  activeId,
  items,
  navigationLabel,
  onSelect,
}: NavigationVariantProps) {
  const t = useTranslations("caseStudies.navigation");
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const activeLabel =
    items.find((item) => item.id === activeId)?.label ?? items[0]?.label ?? "";

  const handleSelect = (sectionId: string) => {
    detailsRef.current?.removeAttribute("open");
    onSelect(sectionId);
  };

  return (
    <div
      data-navigation-variant="mobile"
      className="min-[720px]:hidden"
    >
      <details
        ref={detailsRef}
        className="group relative rounded-2xl border border-[var(--hero-border)] bg-white/92 shadow-[0_10px_30px_rgba(23,59,46,0.10)] backdrop-blur-xl"
        onKeyDown={(event) => {
          if (event.key === "Escape" && detailsRef.current?.open) {
            detailsRef.current.removeAttribute("open");
            summaryRef.current?.focus();
          }
        }}
      >
        <summary
          ref={summaryRef}
          className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-4 py-2.5 text-left [&::-webkit-details-marker]:hidden ${focusClassName}`}
        >
          <span className="min-w-0">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--hero-muted)]">
              {t("mobileTrigger")}
            </span>
            <span className="mt-0.5 block truncate text-sm font-semibold text-[var(--hero-forest)]">
              {activeLabel}
            </span>
          </span>
          <ChevronDown
            size={18}
            aria-hidden="true"
            className="shrink-0 text-[var(--hero-forest)] transition-transform group-open:rotate-180 motion-reduce:transition-none"
          />
        </summary>

        <nav
          aria-label={navigationLabel}
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] max-h-[min(60svh,24rem)] overflow-y-auto rounded-2xl border border-[var(--hero-border)] bg-white p-2 shadow-[0_18px_45px_rgba(23,59,46,0.16)]"
        >
          <ol>
            {items.map((item, index) => {
              const isActive = item.id === activeId;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => handleSelect(item.id)}
                    className={`grid min-h-11 grid-cols-[1.75rem_1fr] items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${focusClassName} ${
                      isActive
                        ? "bg-[var(--hero-lime-subtle)] font-semibold text-[var(--hero-forest)]"
                        : "text-[var(--hero-muted)] hover:bg-[var(--hero-background)] hover:text-[var(--hero-ink)]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-[10px] text-[var(--hero-forest)]/60"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </details>
    </div>
  );
}

export default function CaseStudyNavigation({
  sections,
  contentNamespace,
  className = "",
}: CaseStudyNavigationProps) {
  const t = useTranslations();
  const navigationT = useTranslations("caseStudies.navigation");
  const items = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        label: t(`${contentNamespace}.${section.labelKey}`),
      })),
    [contentNamespace, sections, t],
  );
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
  const { activeId, selectSection } = useActiveCaseStudySection(sectionIds);

  if (!items.length) {
    return null;
  }

  const sharedProps: NavigationVariantProps = {
    activeId,
    items,
    navigationLabel: navigationT("ariaLabel"),
    onSelect: selectSection,
  };

  return (
    <div
      data-case-study-navigation
      data-active-section={activeId}
      style={{ alignSelf: "start", height: "fit-content" }}
      className={`sticky top-[var(--case-study-navigation-top)] z-40 min-w-0 ${className}`}
    >
      <MobileNavigation {...sharedProps} />
      <CompactNavigation {...sharedProps} />
      <DesktopNavigation {...sharedProps} />
    </div>
  );
}
