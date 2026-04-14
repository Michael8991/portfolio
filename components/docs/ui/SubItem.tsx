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
      className="pe-4"
    >
      <motion.button
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.12 }}
        onClick={() => onNavigate(sub.href, sub.id)}
        className={`flex items-center justify-start text-left gap-4 w-full px-2 py-1 cursor-pointer text-sm ${isActive ? "bg-orange-500 text-white font-medium" : ""} rounded-lg transition-all duration-150 ease-in-out`}
      >
        {isActive && <ActiveDot />}
        {!isActive && <span style={{ width: 5, height: 5, flexShrink: 0 }} />}
        <span style={{ flex: 1, lineHeight: 1.45 }}>{sub.label}</span>
        {sub.badge && <Badge label={sub.badge} isNew={sub.isNew} />}
      </motion.button>
    </motion.li>
  );
}
