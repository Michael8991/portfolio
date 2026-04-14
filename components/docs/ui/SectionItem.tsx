"use client";

import { DocSection } from "@/lib/types/DocSidebarTypes";
import { AnimatePresence, motion, Transition, Variants } from "motion/react";
import { useState } from "react";
import { Badge } from "./Badge";
import { ChevronRightIcon } from "lucide-react";
import { SubItem } from "./SubItem";

interface SectionItemProps {
  section: DocSection;
  activeId: string;
  onNavigate: (href: string, id: string) => void;
  isInitiallyOpen?: boolean;
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
  onNavigate,
  isInitiallyOpen = false,
}: SectionItemProps) {
  const hasChildren = !!section.items?.length;
  const isActive = activeId === section.id;
  const isChildActive = section.items?.some((i) => i.id === activeId) ?? false;

  const [open, setOpen] = useState(isInitiallyOpen || isChildActive);

  const handleClick = () => {
    if (hasChildren) {
      setOpen((v) => !v);
    } else if (section.href) {
      onNavigate(section.href, section.id);
    }
  };

  return (
    <li style={{ listStyle: "none" }}>
      <motion.button
        onClick={handleClick}
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        aria-expanded={hasChildren ? open : undefined}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          width: "100%",
          padding: "7px 12px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          background: isActive ? "var(--sidebar-active-bg)" : "transparent",
          color: isActive
            ? "var(--sidebar-accent)"
            : isChildActive
              ? "var(--sidebar-text-primary)"
              : "var(--sidebar-text-secondary)",
          fontFamily: "inherit",
          fontSize: 13.5,
          fontWeight: isActive || isChildActive ? 500 : 400,
          textAlign: "left",
          transition: "background 0.15s, color 0.15s",
        }}
      >
        {/* Icon */}
        <span
          style={{
            width: 18,
            height: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: isActive
              ? "var(--sidebar-accent)"
              : "var(--sidebar-icon-color)",
            transition: "color 0.15s",
          }}
        >
          {section.icon}
        </span>

        {/* Label */}
        <span style={{ flex: 1, lineHeight: 1.4 }}>{section.label}</span>

        {/* Badge */}
        {section.badge && <Badge label={section.badge} />}

        {/* Chevron */}
        {hasChildren && (
          <motion.span
            variants={chevronVariants}
            animate={open ? "open" : "closed"}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              display: "flex",
              alignItems: "center",
              color: "var(--sidebar-icon-color)",
              flexShrink: 0,
            }}
          >
            <ChevronRightIcon size={14} />
          </motion.span>
        )}
      </motion.button>

      {/* Submenu */}
      {hasChildren && (
        <AnimatePresence initial={false}>
          {open && (
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
            >
              <div
                style={{
                  marginLeft: 22,
                  paddingLeft: 16,
                  borderLeft: "1.5px solid var(--sidebar-divider)",
                }}
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
