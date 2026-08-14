import experience from "@/data/experience";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import TechBadge from "./TechBadge";

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-20 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Trajetória" title="Experiência" />

        <div className="premium-panel mt-12 rounded-[2rem] p-5 sm:mt-16 sm:p-8">
          {experience.length === 0 ? (
            <RevealOnScroll
              delay={0.1}
              className="rounded-2xl border border-dashed border-border px-8 py-16 text-center"
            >
              <p className="text-foreground-muted">
                Histórico profissional em atualização.
              </p>
            </RevealOnScroll>
          ) : (
            <ol className="relative flex flex-col gap-10 border-l border-border pl-6 sm:pl-8">
              {experience.map((item, i) => (
                <RevealOnScroll
                  as="li"
                  key={`${item.company}-${item.role}`}
                  delay={i * 0.05}
                  className="relative"
                >
                  <span
                    className="absolute -left-[calc(1.5rem+7px)] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent shadow-[0_0_0_6px_rgba(59,58,255,0.12)] sm:-left-[calc(2rem+7px)]"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium text-accent">{item.period}</p>
                  <h3 className="font-display mt-1 text-xl font-semibold text-foreground">
                    {item.role} ·{" "}
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </h3>
                  <p className="mt-3 max-w-4xl whitespace-pre-line text-foreground-muted">
                    {item.description}
                  </p>
                  {item.technologies?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                      ))}
                    </div>
                  )}
                </RevealOnScroll>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
