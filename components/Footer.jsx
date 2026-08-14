import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import links from "@/data/links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-10 sm:px-8">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-foreground-muted">
          João Paulo — Software Developer · © {year}
        </p>

        <div className="flex items-center gap-5">
          {links.github ? (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground-muted transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" aria-hidden="true" />
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
              <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : null}
          {links.email ? (
            <a
              href={`mailto:${links.email}`}
              aria-label="E-mail"
              className="text-foreground-muted transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
