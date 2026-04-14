"use client";

import { DocSection } from "@/lib/types/DocSidebarTypes";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef } from "react";

interface DocContentRenderProps {
  sections: DocSection[];
  activeId: string;
}

function getFallbackSectionContent(sectionLabel: string) {
  return `Generic section content for ${sectionLabel}.`;
}

function getFallbackItemContent(sectionLabel: string, itemLabel: string) {
  return `Generic content for ${itemLabel} inside ${sectionLabel}.`;
}

export default function DocContentRender({
  sections,
  activeId,
}: DocContentRenderProps) {
  const isFirstRender = useRef(true);

  const activeSection = useMemo(() => {
    if (!sections.length) {
      return undefined;
    }

    return sections.find((section) => {
      if (section.id === activeId) {
        return true;
      }

      return section.items?.some((item) => item.id === activeId);
    });
  }, [activeId, sections]);

  useEffect(() => {
    if (!activeId || !activeSection) {
      return;
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const activeNode = document.getElementById(activeId);

    if (activeNode) {
      activeNode.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const parentNode = document.getElementById(activeSection.id);
    parentNode?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeId, activeSection]);

  return (
    <div className="w-full max-w-4xl py-4">
      <AnimatePresence mode="wait">
        {activeSection ? (
          <motion.section
            key={activeSection.id}
            id={activeSection.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="scroll-mt-32 bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {activeSection.label}
            </h2>
            <p className="mt-3 whitespace-pre-line text-md leading-6 text-slate-900">
              {activeSection.content ||
                getFallbackSectionContent(activeSection.label)}
            </p>

            {!!activeSection.items?.length && (
              <div className="mt-7 space-y-6">
                {activeSection.items.map((item) => {
                  //   const isItemActive = activeId === item.id;

                  return (
                    <div
                      key={item.id}
                      id={item.id}
                      className={`scroll-mt-32 p-4 transition-colors`}
                    >
                      <h3 className="text-md font-medium text-slate-900">
                        {item.label}
                      </h3>
                      <p className="mt-2 whitespace-pre-line text-md leading-6 text-slate-800">
                        {item.content ||
                          getFallbackItemContent(
                            activeSection.label,
                            item.label,
                          )}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.section>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
