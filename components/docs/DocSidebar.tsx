"use client";

import { DocSection } from "@/lib/types/DocSidebarTypes";

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
  return (
    <nav aria-label="Documentation navigation">
      {/* Nav sections */}
      <div style={{ padding: "12px 10px 24px", flex: 1 }}>
        {sections.map((section) => (
          <SectionItem
            key={section.id}
            section={section}
            activeId={activeId}
            onNavigate={onNavigate}
            isInitiallyOpen={
              section.items?.some((i) => i.id === activeId) ?? false
            }
          />
        ))}
      </div>
    </nav>
  );
}

export default DocSidebar;
