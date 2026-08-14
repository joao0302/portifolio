"use client";

import {useEffect, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionTitle from "./SectionTitle";

export default function ProjectGallery({project}) {
  const screenshots = project.screenshots || [];
  const [index, setIndex] = useState(0);
  const isMobile = project.imageOrientation === "mobile";
  if (!screenshots.length) return null;

  const items = screenshots.map((shot, i) => ({
    src: typeof shot === "string" ? shot : shot.src,
    title: typeof shot === "string" ? `${project.title} — screenshot ${i + 1}` : shot.title,
    description: typeof shot === "string" ? "" : shot.description,
  }));
  const current = items[index];
  const go = (direction) => setIndex((value) => (value + direction + items.length) % items.length);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % items.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <section className="px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Produto" title="Galeria" />
        <RevealOnScroll delay={0.1} className="mt-10">
          <div className={`relative overflow-hidden rounded-3xl border border-border bg-background-elevated ${isMobile ? "mx-auto grid aspect-video max-w-3xl place-items-center p-4" : ""}`}>
            <img
              src={current.src}
              alt={current.title}
              className={isMobile ? "rounded-[1.5rem]" : "aspect-video w-full"}
              style={isMobile ? {height: "100%", maxHeight: "420px", width: "auto", objectFit: "contain"} : {objectFit: "cover", objectPosition: "top"}}
            />
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur transition hover:bg-black/70"
              style={{left: 16, top: "50%", transform: "translateY(-50%)"}}
              aria-label="Screenshot anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur transition hover:bg-black/70"
              style={{right: 16, top: "50%", transform: "translateY(-50%)"}}
              aria-label="Próximo screenshot"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {current.title}
              </h3>
              {current.description ? (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                  {current.description}
                </p>
              ) : null}
            </div>
            <span className="rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-wide text-foreground-muted">
              {index + 1} / {items.length}
            </span>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {items.map((shot, shotIndex) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setIndex(shotIndex)}
                className={`h-16 shrink-0 overflow-hidden rounded-xl border transition ${shotIndex === index ? "border-accent opacity-100" : "border-border opacity-55 hover:opacity-90"} ${isMobile ? "w-10" : "w-28"}`}
                aria-label={`Ir para screenshot ${shotIndex + 1}`}
              >
                <img src={shot.src} alt="" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
