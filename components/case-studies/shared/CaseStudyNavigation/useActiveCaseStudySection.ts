"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { preferredScrollBehavior } from "@/lib/motion";

function getHashSectionId(sectionIds: readonly string[]) {
  try {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    return sectionIds.includes(hash) ? hash : "";
  } catch {
    return "";
  }
}

function getObserverTopOffset() {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    "--case-study-observer-offset",
  );
  return Number.parseFloat(value) || 148;
}

export function useActiveCaseStudySection(sectionIds: readonly string[]) {
  const sectionIdsKey = sectionIds.join("|");
  const stableSectionIds = useMemo(
    () => sectionIdsKey.split("|").filter(Boolean),
    [sectionIdsKey],
  );
  const [activeId, setActiveId] = useState(stableSectionIds[0] ?? "");
  const visibleSections = useRef(new Map<string, IntersectionObserverEntry>());

  const selectSection = useCallback(
    (sectionId: string) => {
      if (stableSectionIds.includes(sectionId)) {
        setActiveId(sectionId);
      }
    },
    [stableSectionIds],
  );

  useEffect(() => {
    let firstScrollFrame = 0;
    let secondScrollFrame = 0;

    const syncFromHash = (initialLoad = false) => {
      const hashSectionId = getHashSectionId(stableSectionIds);
      setActiveId(hashSectionId || stableSectionIds[0] || "");

      if (!hashSectionId) {
        return;
      }

      window.cancelAnimationFrame(firstScrollFrame);
      window.cancelAnimationFrame(secondScrollFrame);
      firstScrollFrame = window.requestAnimationFrame(() => {
        secondScrollFrame = window.requestAnimationFrame(() => {
          document.getElementById(hashSectionId)?.scrollIntoView({
            behavior: initialLoad
              ? ("instant" as ScrollBehavior)
              : preferredScrollBehavior(),
            block: "start",
          });
        });
      });
    };

    syncFromHash(true);
    const handleHashChange = () => syncFromHash();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.cancelAnimationFrame(firstScrollFrame);
      window.cancelAnimationFrame(secondScrollFrame);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [stableSectionIds]);

  useEffect(() => {
    if (!stableSectionIds.length) {
      return;
    }

    let observer: IntersectionObserver | undefined;
    let resizeFrame = 0;

    const observeSections = () => {
      observer?.disconnect();
      visibleSections.current.clear();

      const topOffset = getObserverTopOffset();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.id;

            if (entry.isIntersecting) {
              visibleSections.current.set(sectionId, entry);
            } else {
              visibleSections.current.delete(sectionId);
            }
          });

          const candidates = stableSectionIds
            .map((sectionId) => visibleSections.current.get(sectionId))
            .filter((entry): entry is IntersectionObserverEntry => !!entry)
            .sort((first, second) => {
              const firstDistance = Math.abs(
                first.target.getBoundingClientRect().top - topOffset,
              );
              const secondDistance = Math.abs(
                second.target.getBoundingClientRect().top - topOffset,
              );
              return firstDistance - secondDistance;
            });

          if (candidates[0]) {
            setActiveId(candidates[0].target.id);
          }
        },
        {
          rootMargin: `-${topOffset}px 0px -55% 0px`,
          threshold: [0, 0.01],
        },
      );

      stableSectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer?.observe(section);
        }
      });
    };

    const handleResize = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(observeSections);
    };

    observeSections();
    window.addEventListener("resize", handleResize);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [stableSectionIds]);

  return { activeId, selectSection };
}
