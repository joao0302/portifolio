"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BrainCircuit,
  Layers3,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-0"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex flex-col items-start gap-3 min-[420px]:flex-row min-[420px]:items-center"
          >
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border shadow-xl sm:h-16 sm:w-16">
              <Image
                src="/profile.jpg"
                alt="João Paulo"
                width={64}
                height={64}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <p className="max-w-full text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground-muted sm:text-xs sm:tracking-[0.18em]">
              João Paulo Freitas · Desenvolvedor de software
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display max-w-4xl text-[2.55rem] font-semibold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Desenvolvimento de produtos web, mobile e SaaS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-xl"
          >
            Atuo da definição técnica à publicação: arquitetura, interface,
            APIs, banco de dados, integrações e infraestrutura. Desenvolvo
            sistemas voltados a operações reais e evolução contínua.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:items-center sm:mt-10"
          >
            <Link
              href="/#work"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90 min-[420px]:w-auto"
            >
              Ver projetos
            </Link>
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:border-foreground-muted min-[420px]:w-auto"
            >
              Entrar em contato
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-10"
          >
            {[
              ["5", "projetos apresentados"],
              ["Web", "front-end e back-end"],
              ["Mobile", "aplicações em Flutter"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-background-elevated/70 p-4 backdrop-blur"
              >
                <div className="font-display text-2xl font-semibold text-foreground">
                  {value}
                </div>
                <div className="mt-1 text-xs leading-snug text-foreground-muted">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden overflow-hidden rounded-[2rem] border border-border bg-background-elevated p-6 lg:block"
        >
          <div className="absolute right-6 top-6 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-foreground-muted backdrop-blur">
            Engenharia de produto
          </div>
          <div className="mt-12 rounded-3xl border border-border bg-background-elevated p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent">
                  Atuação técnica
                </p>
                <h2 className="font-display mt-1 text-2xl font-semibold">
                  Da arquitetura à operação
                </h2>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                [Layers3, "Arquitetura", "Modelagem, regras, permissões, serviços e integrações."],
                [Smartphone, "UX prática", "Interfaces limpas para web e mobile, com foco em uso real."],
                [BrainCircuit, "Automação e IA", "Integrações aplicadas a fluxos e necessidades específicas."],
                [ShieldCheck, "Operação", "Autenticação, limites, planos, admin e ambiente em produção."],
              ].map(([Icon, title, text]) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-2xl border border-border bg-background px-4 py-3"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {title}
                    </div>
                    <div className="mt-0.5 text-sm text-foreground-muted">
                      {text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5 animate-bounce text-foreground-muted" />
      </motion.div>
    </section>
  );
}
