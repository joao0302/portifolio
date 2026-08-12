import { ArrowRight, ArrowDown } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionTitle from "./SectionTitle";

const VARIANT_STYLES = {
  flow: "rounded-full border border-border bg-background-elevated px-5 py-3 text-sm font-medium text-foreground",
  app: "rounded-xl border-2 border-accent/40 bg-background-elevated px-5 py-3 text-sm font-medium text-foreground",
  pipeline:
    "rounded-md border-l-4 border-accent bg-background-elevated px-5 py-3 text-sm font-medium text-foreground text-left",
};

/**
 * Renders the project's `architecture` step list as a lightweight custom
 * flow diagram. `variant` changes the visual treatment so each case study
 * feels distinct rather than reusing one component style.
 */
export default function ProjectArchitecture({ project, variant = "flow" }) {
  const stepClass = VARIANT_STYLES[variant] ?? VARIANT_STYLES.flow;

  return (
    <section className="px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Como funciona" title="Arquitetura e fluxo" />

        <RevealOnScroll delay={0.1} className="mt-12">
          <ol className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {project.architecture.map((step, i) => (
              <li key={step} className="flex items-center gap-3 sm:contents">
                <span className={stepClass}>{step}</span>
                {i < project.architecture.length - 1 ? (
                  <span className="text-foreground-muted" aria-hidden="true">
                    <ArrowDown className="h-4 w-4 sm:hidden" />
                    <ArrowRight className="hidden h-4 w-4 sm:block" />
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </RevealOnScroll>
      </div>
    </section>
  );
}
