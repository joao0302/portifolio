import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
        <SectionTitle eyebrow="Sobre" title="Full stack & mobile developer" />

        <RevealOnScroll delay={0.1} className="lg:col-span-2 max-w-2xl">
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
