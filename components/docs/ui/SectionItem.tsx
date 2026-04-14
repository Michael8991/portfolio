"use client";

import { DocSection } from "@/lib/types/DocSidebarTypes";
import { AnimatePresence, motion, Transition, Variants } from "motion/react";
import { Badge } from "./Badge";
import { ChevronRightIcon } from "lucide-react";
import { SubItem } from "./SubItem";

interface SectionItemProps {
  section: DocSection;
  activeId: string;
  isOpen: boolean;
  onNavigate: (href: string, id: string) => void;
}

const easeStandard: [number, number, number, number] = [0.4, 0, 0.2, 1];

const submenuVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.28, ease: easeStandard } as Transition,
      opacity: { duration: 0.15, ease: "easeIn" } as Transition,
    },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: easeStandard } as Transition,
      opacity: { duration: 0.2, ease: "easeOut", delay: 0.05 } as Transition,
    },
  },
};

const chevronVariants: Variants = {
  closed: { rotate: 0 },
  open: { rotate: 90 },
};

export function SectionItem({
  section,
  activeId,
  isOpen,
  onNavigate,
}: SectionItemProps) {
  const hasChildren = !!section.items?.length;
  const isSectionActive =
    activeId === section.id ||
    (section.items?.some((item) => item.id === activeId) ?? false);
  const resolvedHref = section.href ?? "";

  const handleClick = () => {
    onNavigate(resolvedHref, section.id);
  };

  return (
    <li
      className={`list-none ${isSectionActive ? "bg-orange-100" : ""} rounded-lg`}
    >
      <motion.button
        onClick={handleClick}
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        aria-expanded={hasChildren ? isOpen : undefined}
        className={`flex items-center gap-2 w-full py-2 px-4 rounded-lg cursor-pointer ${isSectionActive ? "font-semibold" : ""} text-sm transition-colors duration-150 ease-in-out justify-start my-2`}
      >
        <span
          className={`text-md flex items-center justify-center ${isSectionActive ? "text-orange-600" : ""} transition-colors duration-150 ease-in-out`}
        >
          {section.icon}
        </span>

        <span className="flex flex-1">{section.label}</span>

        {section.badge && <Badge label={section.badge} />}

        {/* Chevron */}
        {hasChildren && (
          <motion.span
            variants={chevronVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              display: "flex",
              alignItems: "center",
              color: "var(--sidebar-icon-color)",
              flexShrink: 0,
            }}
            className=""
          >
            <ChevronRightIcon size={14} />
          </motion.span>
        )}
      </motion.button>

      {/* Submenu */}
      {hasChildren && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              key="submenu"
              variants={submenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                margin: "2px 0 4px 0",
                padding: 0,
                overflow: "hidden",
                listStyle: "none",
              }}
              className=""
            >
              <div
                style={{
                  borderLeft: "1.5px solid var(--sidebar-divider)",
                }}
                className={`ms-3 mb-2 ${isSectionActive ? "border-l border-orange-400" : ""} `}
              >
                {section.items!.map((sub, i) => (
                  <SubItem
                    key={sub.id}
                    sub={sub}
                    index={i}
                    isActive={activeId === sub.id}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </li>
  );
}
