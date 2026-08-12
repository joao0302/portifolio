import projects from "@/data/projects";
import SectionTitle from "./SectionTitle";
import ProjectShowcase from "./ProjectShowcase";

export default function SelectedProjects() {
  return (
    <section id="work" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Trabalho selecionado"
          title="Produtos que construí"
          description="Uma seleção de projetos onde atuei do problema à solução em produção — combinando produto, engenharia e, quando faz sentido, Inteligência Artificial."
        />

        <div className="mt-16 flex flex-col gap-24 sm:gap-32">
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
