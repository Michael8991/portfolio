export function Badge({ label, isNew }: { label: string; isNew?: boolean }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "2px 7px",
        borderRadius: 99,
        lineHeight: 1.6,
        background: isNew ? "var(--sidebar-accent)" : "var(--sidebar-badge-bg)",
        color: isNew ? "#fff" : "var(--sidebar-badge-text)",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}
