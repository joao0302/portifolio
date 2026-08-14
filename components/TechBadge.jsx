export default function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background-elevated/80 px-3 py-1 text-sm text-foreground-muted shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/30 hover:text-foreground">
      {children}
    </span>
  );
}
