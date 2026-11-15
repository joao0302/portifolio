"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";
import TechBadge from "./TechBadge";

const PROJECT_HIGHLIGHTS = {
  seruvo: {
    status: "Produto próprio",
    focus: "Infraestrutura e DevOps",
    bullets: [
      "Deploy via GitHub",
      "Orquestração com Docker",
      "PostgreSQL gerenciado",
      "Domínios e SSL/TLS",
    ],
    summary:
      "Painel, API e infraestrutura desenvolvidos para automatizar deploy, persistência, proxy reverso e operação de serviços.",
  },
  voltty: {
    status: "Produto em produção",
    focus: "Gestão para varejo",
    bullets: [
      "PDV e estoque integrados",
      "Balanço financeiro",
      "Etiquetas Code 128",
      "CRM e fidelização",
    ],
    summary:
      "Plataforma multiempresa que conecta vendas, estoque, financeiro e relacionamento com clientes em uma única operação.",
  },
  vyral: {
    status: "Produto SaaS",
    focus: "Operação de agências",
    bullets: [
      "Arquitetura multiagência",
      "Dashboards por cliente",
      "IA com consumo por plano",
      "Autenticação e permissões",
    ],
    summary:
      "CRM, conteúdo, relatórios e dados de redes sociais organizados em uma arquitetura multiagência e multicliente.",
  },
  dora: {
    status: "Aplicativo mobile",
    focus: "Moda e visão computacional",
    bullets: [
      "Aplicativo em Flutter",
      "IA aplicada à imagem",
      "Catálogo via API",
      "Processamento assíncrono",
    ],
    summary:
      "Aplicativo publicado para consulta de produtos e simulação visual de roupas a partir da foto do usuário.",
  },
  legisia: {
    status: "Plataforma GovTech",
    focus: "Legislativo municipal",
    bullets: [
      "Consulta regimental com IA",
      "Fiscalização de contratos",
      "Análise de proposições",
      "Arquitetura multi-Câmara",
    ],
    summary:
      "Base jurídica, dados públicos e ferramentas de análise reunidos em uma plataforma isolada por Câmara Municipal.",
  },
};

export default function ProjectShowcase({ project, index, reverse = false }) {
  const number = String(index).padStart(2, "0");
  const highlight = PROJECT_HIGHLIGHTS[project.slug];
  const previewShots = useMemo(
    () =>
      [...new Set([
        project.cover,
        ...(project.screenshots || []).map((shot) =>
          typeof shot === "string" ? shot : shot.src
        ),
      ].filter(Boolean))],
    [project.cover, project.screenshots]
  );
  const [shotIndex, setShotIndex] = useState(0);
  const currentShot = previewShots[shotIndex] || "";
  const isMobile = project.imageOrientation === "mobile";
  const showProjectLink = project.slug !== "legisia";

  const go = (direction) =>
    setShotIndex((value) => (value + direction + previewShots.length) % previewShots.length);

  useEffect(() => {
    if (previewShots.length <= 1) return;
    const timer = window.setInterval(() => {
      setShotIndex((value) => (value + 1) % previewShots.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [previewShots.length]);

  return (
    <RevealOnScroll
      className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="group block min-w-0">
        <div className="relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01] lg:group-hover:scale-[1.015]">
          {previewShots.length ? (
            <div
              className="premium-panel relative overflow-hidden rounded-2xl p-3 sm:p-4"
              style={{
                aspectRatio: "16 / 10",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isMobile ? (
                <img
                  src={currentShot}
                  alt={`${project.title} — preview ${shotIndex + 1}`}
                  className="rounded-[1.25rem] shadow-2xl"
                  style={{
                    maxHeight: "92%",
                    width: "auto",
                    maxWidth: "58%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <img
                  src={currentShot}
                  alt={`${project.title} — preview ${shotIndex + 1}`}
                  className="rounded-xl transition-transform duration-700 group-hover:scale-[1.01] sm:group-hover:scale-[1.02]"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              )}

              {previewShots.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="absolute z-10 grid h-8 w-8 place-items-center rounded-full border border-white/25 bg-black/55 text-white shadow-lg backdrop-blur transition hover:bg-black/80 sm:h-9 sm:w-9"
                    style={{ left: 10, top: "50%", transform: "translateY(-50%)" }}
                    aria-label="Screenshot anterior"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="absolute z-10 grid h-8 w-8 place-items-center rounded-full border border-white/25 bg-black/55 text-white shadow-lg backdrop-blur transition hover:bg-black/80 sm:h-9 sm:w-9"
                    style={{ right: 10, top: "50%", transform: "translateY(-50%)" }}
                    aria-label="Próximo screenshot"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-3 py-2 backdrop-blur">
                    {previewShots.slice(0, 8).map((src, i) => (
                      <button
                        key={`${src}-${i}`}
                        type="button"
                        onClick={() => setShotIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === shotIndex
                            ? "w-5 bg-white sm:w-6"
                            : "w-2 bg-white/45 hover:bg-white/80"
                        }`}
                        aria-label={`Ir para screenshot ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          ) : project.youtubeId ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-background-elevated">
              <img
                src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
                  <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
                </div>
              </div>
            </div>
          ) : (
            <ScreenshotPlaceholder label={`${project.title} — screenshot em breve`} />
          )}
        </div>
      </div>

      <div className="relative min-w-0">
        <span className="font-mono text-sm text-accent">{number}</span>

        {highlight ? (
          <div className="mt-3 max-w-xl border-t border-border pt-5">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground sm:text-[11px] sm:tracking-[0.18em]">
                {highlight.status}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-foreground-muted sm:text-[11px] sm:tracking-[0.14em]">
                {highlight.focus}
              </span>
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-accent sm:text-sm">
              {project.category}
            </p>
            <h3 className="font-display mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground-muted sm:text-lg">
              {project.tagline}
            </p>

            <div className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-foreground-muted">
              {highlight.summary}
            </div>

            <div className="mt-4 grid gap-2 text-sm text-foreground-muted sm:grid-cols-2">
              {highlight.bullets.map((item) => (
                <span
                  key={item}
                  className="border-b border-border py-2.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-foreground-muted">
              {project.category}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground-muted">
              {project.tagline}
            </p>
          </>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        {showProjectLink ? (
          <Link
            href={`/work/${project.slug}`}
            className="link-underline mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground"
          >
            Ver projeto
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </RevealOnScroll>
  );
}
