"use client";

import { DocSection } from "@/lib/types/DocSidebarTypes";
import { useMemo } from "react";

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

  return (
    <nav aria-label="Documentation navigation">
      <div className="flex flex-col flex-1 p-2 bg-gray-50 rounded-lg shadow-md fixed">
        {sections.map((section) => (
          <SectionItem
            key={section.id}
            section={section}
            activeId={activeId}
            isOpen={openSectionId === section.id}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </nav>
  );
}

export default DocSidebar;
