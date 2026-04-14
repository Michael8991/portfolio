import { DocSubItem } from "@/lib/types/DocSidebarTypes";
import { motion, Transition, Variants } from "motion/react";
import { ActiveDot } from "./ActiveDot";
import { Badge } from "./Badge";

interface SubItemProps {
  sub: DocSubItem;
  index: number;
  isActive: boolean;
  onNavigate: (href: string, id: string) => void;
}

const easeStandard: [number, number, number, number] = [0.4, 0, 0.2, 1];

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.045,
      duration: 0.22,
      ease: easeStandard,
    } as Transition,
  }),
};

export function SubItem({ sub, index, isActive, onNavigate }: SubItemProps) {
  return (
    <motion.li
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      style={{ listStyle: "none" }}
    >
      <motion.button
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.12 }}
        onClick={() => onNavigate(sub.href, sub.id)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          padding: "6px 8px 6px 0",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: 13,
          fontWeight: isActive ? 500 : 400,
          color: isActive
            ? "var(--sidebar-accent)"
            : "var(--sidebar-text-secondary)",
          textAlign: "left",
          transition: "color 0.15s",
        }}
      >
        {isActive && <ActiveDot />}
        {!isActive && <span style={{ width: 5, height: 5, flexShrink: 0 }} />}
        <span style={{ flex: 1, lineHeight: 1.45 }}>{sub.label}</span>
        {sub.badge && <Badge label={sub.badge} isNew={sub.isNew} />}
      </motion.button>
    </motion.li>
  );
}
