import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";

const PRINCIPLES = [
  {
    title: "Autonomia",
    description:
      "Organizo requisitos, defino a solução técnica e acompanho a implementação até a entrega.",
  },
  {
    title: "Ponta a ponta",
    description:
      "Atuo em interface, back-end, banco de dados, autenticação, integrações, deploy e ajustes de produto.",
  },
  {
    title: "Visão de negócio",
    description:
      "Considero uso, clareza, manutenção e evolução do produto nas decisões técnicas.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-20 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
        <SectionTitle eyebrow="Sobre" title="Full stack & mobile developer" />

        <div className="lg:col-span-2">
          <RevealOnScroll
            delay={0.1}
            className="premium-panel rounded-[2rem] p-5 sm:p-8"
          >
            <div className="space-y-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
              <p>
                Sou João Paulo, desenvolvedor de software focado em construir
                produtos digitais. Trabalho em aplicações web, mobile e SaaS,
                participando da arquitetura, modelagem de dados, implementação
                da interface e publicação.
              </p>
              <p>
                Também desenvolvo integrações com serviços de inteligência
                artificial quando elas atendem a uma necessidade concreta do
                produto, como análise de dados, automação e processamento de
                imagens.
              </p>
              <p>
                Trabalho próximo às regras de negócio e aos usuários para
                equilibrar qualidade técnica, simplicidade de uso e prazo de
                entrega.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {PRINCIPLES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-background-elevated/70 p-4"
                >
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
