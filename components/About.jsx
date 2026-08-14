import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";

const PRINCIPLES = [
  {
    title: "Autonomia",
    description:
      "Consigo sair de uma ideia vaga, estruturar o produto e transformar isso em software funcionando.",
  },
  {
    title: "Ponta a ponta",
    description:
      "Atuo em interface, back-end, banco de dados, autenticação, integrações, deploy e ajustes de produto.",
  },
  {
    title: "Visão de negócio",
    description:
      "Não penso só no código; penso em uso, clareza, venda, manutenção e evolução do produto.",
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
                produtos digitais completos — não apenas telas. Trabalho em
                aplicações Web, Mobile e SaaS, cuidando da experiência de ponta
                a ponta: da arquitetura de dados à interface final.
              </p>
              <p>
                Tenho interesse particular em integrar Inteligência Artificial
                de forma útil aos produtos que construo, transformando dados e
                processos manuais em experiências mais inteligentes e
                automatizadas.
              </p>
              <p>
                Gosto de trabalhar próximo do problema real do usuário, sempre
                buscando equilíbrio entre qualidade técnica, simplicidade e
                velocidade de entrega.
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
