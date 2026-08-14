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
    <section id="technologies" className="relative px-5 py-20 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologias"
          description="Ferramentas que uso para construir produtos completos: interface, lógica, banco, integrações, mobile e IA."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <RevealOnScroll
              key={group.title}
              delay={i * 0.05}
              className="premium-panel rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,0,0,0.12)]"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
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
