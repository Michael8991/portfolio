import { motion } from "motion/react";

export function ActiveDot() {
  return (
    <motion.span
      layoutId="active-dot"
      style={{
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "var(--sidebar-accent)",
        flexShrink: 0,
        display: "inline-block",
      }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );
}
