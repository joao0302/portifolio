import RevealOnScroll from "./RevealOnScroll";

export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <RevealOnScroll className={`max-w-2xl ${alignClass}`} as="div">
      {eyebrow ? (
        <span className="block text-sm font-medium tracking-wide text-accent uppercase mb-3">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed">
          {description}
        </p>
      ) : null}
    </RevealOnScroll>
  );
}
