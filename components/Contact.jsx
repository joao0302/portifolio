import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import links from "@/data/links";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  const mailHref = links.email ? `mailto:${links.email}` : null;

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll className="relative overflow-hidden rounded-[2rem] border border-border bg-background-elevated px-5 py-12 text-center sm:px-10 sm:py-20">
          <div className="relative">
            <span className="mx-auto mb-5 inline-flex text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.18em]">
              Contato
            </span>
            <h2 className="font-display mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Disponível para novos projetos e oportunidades.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
              Entre em contato por e-mail ou consulte meus perfis profissionais.
            </p>

            <div className="mt-8 grid justify-center gap-4 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:items-center sm:mt-10">
              {mailHref ? (
                <a
                  href={mailHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90 min-[420px]:w-auto"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Enviar e-mail
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-6 py-3 text-sm text-foreground-muted">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  E-mail em atualização
                </span>
              )}

              <div className="flex items-center justify-center gap-4">
                {links.github ? (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-12 w-12 place-items-center rounded-full border border-border text-foreground-muted transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ) : null}
                {links.linkedin ? (
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-foreground-muted transition-colors hover:text-foreground"
                  >
                    <LinkedinIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
