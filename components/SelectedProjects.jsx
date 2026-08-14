import projects from "@/data/projects";
import SectionTitle from "./SectionTitle";
import ProjectShowcase from "./ProjectShowcase";

export default function SelectedProjects() {
  return (
    <section id="work" className="relative px-5 py-20 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Trabalho selecionado"
          title="Projetos que provam execução"
          description="Produtos completos, com interface, dados, regras de negócio, integrações e deploy. A ideia aqui é mostrar exatamente o que um recrutador precisa ver: escopo, complexidade e entrega."
        />

        <div className="mt-12 flex flex-col gap-20 sm:mt-16 sm:gap-32">
          {projects.map((project, i) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              index={i + 1}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
