import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import TechBadge from "./TechBadge";

const GROUPS = [
  {
    title: "Front-end",
    items: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "Express", "PHP", "Laravel"],
  },
  {
    title: "Banco de dados",
    items: ["PostgreSQL"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Docker", "FFmpeg"],
  },
  {
    title: "IA e integrações",
    items: ["OpenAI API", "REST APIs", "Meta APIs"],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Stack" title="Tecnologias" />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <RevealOnScroll key={group.title} delay={i * 0.05}>
              <h3 className="text-sm font-medium uppercase tracking-wide text-foreground-muted">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
