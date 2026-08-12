import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";
import TechBadge from "./TechBadge";

/**
 * Large, generous showcase card for a single project on the home page.
 * `reverse` flips the visual/text order to vary layout between projects.
 */
export default function ProjectShowcase({ project, index, reverse = false }) {
  const number = String(index).padStart(2, "0");

  return (
    <RevealOnScroll
      className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block focus-visible:outline-none"
        aria-label={`Ver projeto ${project.title}`}
      >
        <div className="overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.015]">
          <ScreenshotPlaceholder label={`${project.title} — screenshot em breve`} />
        </div>
      </Link>

      <div>
        <span className="font-mono text-sm text-accent">{number}</span>
        <p className="mt-3 text-sm font-medium uppercase tracking-wide text-foreground-muted">
          {project.category}
        </p>
        <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground-muted">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="link-underline mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground"
        >
          Ver projeto
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </RevealOnScroll>
  );
}
