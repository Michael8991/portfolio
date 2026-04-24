"use client";

import { DocSection } from "@/lib/types/DocSidebarTypes";
import { MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { SectionItem } from "./ui/SectionItem";

export interface DocSidebarProps {
  sections: DocSection[];
  activeId?: string;
  onNavigate?: (href: string, id: string) => void;
  logo?: React.ReactNode;
  version?: string;
}

export function DocSidebar({
  sections,
  activeId = "",
  onNavigate = () => {},
}: DocSidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const openSectionId = useMemo(() => {
    if (!activeId) {
      return sections[0]?.id ?? "";
    }

    const section = sections.find((item) => {
      if (item.id === activeId) {
        return true;
      }

      return item.items?.some((subItem) => subItem.id === activeId);
    });

    return section?.id ?? sections[0]?.id ?? "";
  }, [activeId, sections]);

  const handleNavigate = (href: string, id: string) => {
    onNavigate(href, id);
    setIsMobileOpen(false);
  };

  const renderSidebarContent = () => (
    <ul className="flex flex-col flex-1 p-2 bg-gray-50 rounded-lg shadow-md">
      {sections.map((section) => (
        <SectionItem
          key={section.id}
          section={section}
          activeId={activeId}
          isOpen={openSectionId === section.id}
          onNavigate={handleNavigate}
        />
      ))}
    </ul>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open documentation navigation"
        aria-expanded={isMobileOpen}
        className="fixed left-4 top-20 z-40 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-900 shadow-md transition-colors hover:bg-gray-50 lg:hidden"
      >
        <MenuIcon size={22} aria-hidden="true" />
      </button>

      <nav
        aria-label="Documentation navigation"
        className="hidden w-72 shrink-0 lg:block"
      >
        <div className="sticky top-24">{renderSidebarContent()}</div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close documentation navigation"
              className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.nav
              aria-label="Documentation navigation"
              className="fixed inset-y-0 left-0 z-50 flex w-80 max-w-[85vw] flex-col bg-gray-50 p-4 shadow-xl lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="mb-3 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close documentation navigation"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-900 shadow-sm transition-colors hover:bg-gray-50"
                >
                  <XIcon size={20} aria-hidden="true" />
                </button>
              </div>

              <div className="min-h-0 overflow-y-auto">
                {renderSidebarContent()}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default DocSidebar;
