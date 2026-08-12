import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import TechBadge from "./TechBadge";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

export default function ProjectHero({ project }) {
  return (
    <section className="px-6 pt-16 pb-20 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            {project.category}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground-muted sm:text-xl">
            {project.tagline}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-wide text-foreground-muted">Ano</dt>
              <dd className="mt-1 text-foreground">{project.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-foreground-muted">Papel</dt>
              <dd className="mt-1 text-foreground">{project.role}</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-xs uppercase tracking-wide text-foreground-muted">Categoria</dt>
              <dd className="mt-1 text-foreground">{project.category}</dd>
            </div>
            {project.demo ? (
              <div>
                <dt className="text-xs uppercase tracking-wide text-foreground-muted">Link</dt>
                <dd className="mt-1">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 text-foreground"
                  >
                    Acessar
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="mt-14">
          <ScreenshotPlaceholder
            label={`${project.title} — screenshot em breve`}
            className="aspect-[16/9]"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
