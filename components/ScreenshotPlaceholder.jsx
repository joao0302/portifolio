import { ImageIcon } from "lucide-react";

/**
 * On-brand stand-in for missing screenshots. Renders a styled div (never an
 * <img>) so the build never depends on image files that don't exist yet on
 * disk. Once real files are added to public/projects/<slug>/, components
 * should switch to next/image and this is skipped.
 */
export default function ScreenshotPlaceholder({ label = "Screenshot em breve", className = "" }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-background-elevated text-foreground-muted aspect-video ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, currentColor 1px, transparent 1px), linear-gradient(-45deg, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <ImageIcon className="h-8 w-8" aria-hidden="true" strokeWidth={1.5} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
