import experience from "@/data/experience";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Trajetória" title="Experiência" />

        <div className="mt-16">
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
            <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
              {experience.map((item, i) => (
                <RevealOnScroll
                  as="li"
                  key={`${item.company}-${item.role}`}
                  delay={i * 0.05}
                  className="relative"
                >
                  <span
                    className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium text-accent">{item.period}</p>
                  <h3 className="font-display mt-1 text-xl font-semibold text-foreground">
                    {item.role} · {item.company}
                  </h3>
                  <p className="mt-2 max-w-xl text-foreground-muted">
                    {item.description}
                  </p>
                </RevealOnScroll>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
