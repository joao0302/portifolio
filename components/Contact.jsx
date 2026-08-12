import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import links from "@/data/links";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  const mailHref = links.email ? `mailto:${links.email}` : null;

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Vamos construir alguma coisa juntos?
          </h2>
          <p className="mt-5 text-lg text-foreground-muted">
            Estou aberto a novos projetos e oportunidades. Envie uma mensagem
            e vamos conversar.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {mailHref ? (
            <a
              href={mailHref}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
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

          <div className="flex items-center gap-4">
            {links.github ? (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground-muted hover:text-foreground transition-colors"
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
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
