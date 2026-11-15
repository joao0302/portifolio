export default function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background-elevated px-3 py-1 text-sm text-foreground-muted">
      {children}
    </span>
  );
}
