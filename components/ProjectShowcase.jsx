"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";
import TechBadge from "./TechBadge";

const PROJECT_HIGHLIGHTS = {
  vyral: {
    badge: "SaaS real em produção",
    secondary: "Multiempresa · IA · Instagram",
    gradient:
      "radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.16),transparent_30%)",
    bullets: [
      "🏢 Arquitetura multiagência",
      "📊 Dashboards por cliente",
      "🤖 IA com consumo por plano",
      "🔐 Autenticação e permissões",
    ],
    recruiter:
      "Mostra domínio de produto SaaS ponta a ponta: autenticação, banco, planos, limites, dashboards, admin e integrações externas.",
  },
  dora: {
    badge: "Mobile app com IA",
    secondary: "Flutter · API · experiência visual",
    gradient:
      "radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(96,165,250,0.16),transparent_30%)",
    bullets: [
      "📱 Experiência mobile",
      "🧠 IA aplicada à imagem",
      "🛍️ Catálogo via API",
      "⚡ Fluxo assíncrono",
    ],
    recruiter:
      "Mostra capacidade de construir produto mobile completo, integrar APIs e aplicar IA em uma experiência simples para usuário final.",
  },
  legisia: {
    badge: "GovTech com IA",
    secondary: "Legislativo municipal",
    gradient:
      "radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.12),transparent_30%)",
    bullets: [
      "⚖️ Chat jurídico com IA",
      "🔍 Fiscalização de contratos",
      "📋 Análise de proposições",
      "🏛️ Multi-Câmara",
    ],
    recruiter:
      "Mostra maturidade para lidar com domínio complexo, regras de negócio sensíveis, dados públicos e IA aplicada a decisões legislativas.",
  },
};

export default function ProjectShowcase({ project, index, reverse = false }) {
  const number = String(index).padStart(2, "0");
  const highlight = PROJECT_HIGHLIGHTS[project.slug];
  const previewShots = useMemo(
    () =>
      [
        project.cover,
        ...(project.screenshots || []).map((shot) =>
          typeof shot === "string" ? shot : shot.src
        ),
      ].filter(Boolean),
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
        {highlight ? (
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] blur-sm sm:-inset-6"
            style={{ background: highlight.gradient }}
          />
        ) : null}

        <span className="font-mono text-sm text-accent">{number}</span>

        {highlight ? (
          <div className="mt-3 max-w-xl rounded-3xl border border-accent/20 bg-background-elevated/80 p-4 shadow-[0_24px_80px_rgba(59,58,255,0.12)] backdrop-blur sm:p-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="shine-border inline-flex rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-foreground sm:text-[11px] sm:tracking-[0.18em]">
                {highlight.badge}
              </span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground-muted sm:text-[11px] sm:tracking-[0.14em]">
                {highlight.secondary}
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

            <div className="mt-5 rounded-2xl border border-border bg-background/80 p-4 text-sm leading-relaxed text-foreground-muted">
              <span className="font-semibold text-foreground">Por que chama atenção:</span>{" "}
              {highlight.recruiter}
            </div>

            <div className="mt-4 grid gap-2 text-sm text-foreground-muted sm:grid-cols-2">
              {highlight.bullets.map((item) => (
                <span
                  key={item}
                  className="rounded-2xl border border-border bg-background px-4 py-3"
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
          project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground"
            >
              Ver projeto
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <Link
              href={`/work/${project.slug}`}
              className="link-underline mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground"
            >
              Ver projeto
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )
        ) : null}
      </div>
    </RevealOnScroll>
  );
}
