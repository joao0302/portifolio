import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import projects from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionTitle from "@/components/SectionTitle";
import ProjectHero from "@/components/ProjectHero";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectScreenshotShowcase from "@/components/ProjectScreenshotShowcase";
import ProjectArchitecture from "@/components/ProjectArchitecture";
import TechBadge from "@/components/TechBadge";

const ARCHITECTURE_VARIANTS = {
  vyral: "flow",
  dora: "app",
  legisia: "pipeline",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | João Paulo`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(index + 1) % projects.length];
  const isLastProject = index === projects.length - 1;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProjectHero project={project} />

        <section className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2">
            <RevealOnScroll>
              <SectionTitle eyebrow="Visão geral" title="Overview" />
              <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                {project.description}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <SectionTitle eyebrow="Desafio" title="Problema" />
              <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                {project.problem}
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Abordagem" title="Solução" />
            <RevealOnScroll delay={0.1} className="mt-6 max-w-3xl">
              <p className="text-base leading-relaxed text-foreground-muted">
                {project.solution}
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Recursos" title="Funcionalidades principais" />
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, i) => (
                <RevealOnScroll key={feature.title} delay={(i % 3) * 0.05}>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {feature.description}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {project.demoScreenshots?.length ? (
          <ProjectScreenshotShowcase project={project} />
        ) : project.youtubeId ? (
          <section className="px-6 py-20 sm:px-8">
            <div className="mx-auto max-w-6xl">
              <SectionTitle eyebrow="Demonstração" title="Vídeo do projeto" />
              <RevealOnScroll delay={0.1} className="mt-8">
                <ProjectVideo youtubeId={project.youtubeId} title={project.title} />
              </RevealOnScroll>
            </div>
          </section>
        ) : null}

        <ProjectArchitecture project={project} variant={ARCHITECTURE_VARIANTS[project.slug]} />

        <section className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2">
            <RevealOnScroll>
              <SectionTitle eyebrow="Papel no projeto" title="Meu papel" />
              <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                {project.role}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <SectionTitle eyebrow="Engenharia" title="Desafios técnicos" />
              <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                {project.challenges}
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Stack" title="Tecnologias utilizadas" />
            <RevealOnScroll delay={0.1} className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </RevealOnScroll>
          </div>
        </section>

        <ProjectGallery project={project} />

        <section className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Resultados" title="Impacto" />
            <RevealOnScroll delay={0.1} className="mt-6 max-w-3xl">
              <p className="text-base leading-relaxed text-foreground-muted">
                {project.results}
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="border-t border-border px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <Link
                href={isLastProject ? "/#work" : `/work/${nextProject.slug}`}
                className="group flex items-center justify-between gap-6"
              >
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-foreground-muted">
                    {isLastProject ? "Ver todos os projetos" : "Próximo projeto"}
                  </p>
                  <p className="font-display mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    {isLastProject ? "Todos os projetos" : nextProject.title}
                  </p>
                </div>
                <ArrowRight
                  className="h-8 w-8 flex-shrink-0 text-foreground transition-transform group-hover:translate-x-2"
                  aria-hidden="true"
                />
              </Link>
            </RevealOnScroll>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-10 inline-flex items-center gap-1 text-sm font-medium text-foreground"
              >
                Acessar o projeto
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
