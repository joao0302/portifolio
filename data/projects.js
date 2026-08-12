// Central data source for all project case studies.
// Add screenshots by dropping image files into public/projects/<slug>/
// and updating the `cover` / `screenshots` paths below — components fall
// back to a styled placeholder automatically when files are missing.

const projects = [
  {
    slug: "vyral",
    title: "Vyral",
    tagline:
      "Plataforma SaaS que centraliza a operação de agências de marketing em um só lugar.",
    category: "SaaS • MarTech • Inteligência Artificial",
    year: "2024",
    role: "Desenvolvimento full stack da plataforma, arquitetura de dados e integração de IA.",
    description:
      "Vyral é uma plataforma SaaS multiagência para agências de marketing gerenciarem clientes, redes sociais e conteúdo em um único painel, combinando CRM, inteligência de Instagram e IA para transformar métricas em decisões.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "OpenAI API",
      "Meta APIs",
      "Tailwind CSS",
    ],
    cover: "/projects/vyral/cover.png",
    screenshots: [
      "/projects/vyral/screenshot-1.png",
      "/projects/vyral/screenshot-2.png",
      "/projects/vyral/screenshot-3.png",
    ],
    problem:
      "Agências de marketing costumam operar com ferramentas fragmentadas: uma planilha para o CRM, outra para o calendário editorial, relatórios manuais e nenhuma visão unificada da performance de cada cliente nas redes sociais. Isso gera retrabalho, perda de contexto entre equipes e dificuldade para transformar dados brutos em recomendações acionáveis.",
    solution:
      "Vyral centraliza toda a operação em uma estrutura multiagência e multicliente: CRM próprio, biblioteca de ativos de marca, calendário editorial e uma camada de Instagram Intelligence que coleta métricas (alcance, visualizações, curtidas, comentários, compartilhamentos, crescimento) e as transforma em insights com apoio de IA — incluindo análise de conteúdo, detecção de tendências, geração de ideias e roteiros, e interpretação de performance.",
    features: [
      {
        title: "Dashboard",
        description:
          "Visão geral consolidada da operação, com indicadores centrais de cada cliente e agência.",
      },
      {
        title: "Estrutura multiagência e multicliente",
        description:
          "Cada agência gerencia múltiplos clientes de forma isolada, com permissões e dados próprios.",
      },
      {
        title: "CRM",
        description:
          "Gestão de relacionamento com clientes integrada ao restante da operação da agência.",
      },
      {
        title: "Instagram Intelligence",
        description:
          "Coleta e leitura de métricas de conteúdo, alcance, engajamento e crescimento das contas conectadas.",
      },
      {
        title: "Inteligência Artificial",
        description:
          "Análise de conteúdo, detecção de tendências, geração de ideias e roteiros, recomendações e interpretação de performance.",
      },
      {
        title: "Calendário editorial",
        description:
          "Planejamento e organização da publicação de conteúdo por cliente.",
      },
      {
        title: "Biblioteca de ativos",
        description:
          "Repositório central de logos, imagens e materiais de marca de cada cliente.",
      },
      {
        title: "Relatórios",
        description:
          "Consolidação de métricas e insights em relatórios para apresentação aos clientes.",
      },
      {
        title: "Estrutura SaaS",
        description:
          "Planos, assinaturas, período de teste e limites de uso configuráveis por agência.",
      },
    ],
    architecture: [
      "Agência",
      "Clientes",
      "Instagram, CRM, Conteúdo e Calendário",
      "Biblioteca de ativos",
      "Dados coletados",
      "Inteligência Artificial",
      "Insights, roteiros, tendências e recomendações",
      "Relatórios",
    ],
    challenges:
      "Modelar uma estrutura de dados multiagência e multicliente que fosse segura e escalável, orquestrar a coleta e normalização de métricas de redes sociais, e desenhar um pipeline de IA capaz de transformar dados brutos em recomendações compreensíveis para usuários não técnicos.",
    results:
      "Resultados detalhados em atualização.",
    github: null,
    demo: "https://vyral-staging.up.railway.app/",
  },
  {
    slug: "dora",
    title: "DORA",
    tagline:
      "App mobile que usa IA para mostrar como uma roupa fica em você antes de comprar.",
    category: "Mobile • Flutter • Inteligência Artificial",
    year: "2024",
    role: "Desenvolvimento do aplicativo mobile em Flutter e integração com API e IA.",
    description:
      "DORA é um aplicativo mobile em Flutter que busca produtos e peças de roupa em uma API e utiliza inteligência artificial para gerar uma visualização da peça aplicada à foto do usuário, funcionando como um provador virtual.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Inteligência Artificial",
      "Processamento de imagem",
    ],
    cover: "/projects/dora/cover.png",
    screenshots: [
      "/projects/dora/screenshot-1.png",
      "/projects/dora/screenshot-2.png",
    ],
    problem:
      "É difícil visualizar como uma peça de roupa vai ficar em você apenas olhando a foto do produto em uma loja online, o que gera insegurança na hora da compra e aumenta a taxa de devolução.",
    solution:
      "DORA busca produtos de vestuário via API e aplica IA para gerar uma visualização da peça sobre a foto do usuário, funcionando como um provador virtual dentro do próprio aplicativo.",
    features: [
      {
        title: "Catálogo de produtos",
        description:
          "Busca e exibição de roupas disponíveis a partir de uma API de produtos.",
      },
      {
        title: "Provador virtual",
        description:
          "Geração por IA da visualização da peça de roupa aplicada à foto do usuário.",
      },
      {
        title: "Processamento de imagem",
        description:
          "Pipeline de tratamento da imagem do usuário e da peça para compor o resultado final.",
      },
    ],
    architecture: [
      "Usuário",
      "App Flutter",
      "API",
      "Produto / Roupa",
      "Inteligência Artificial",
      "Processamento da imagem",
      "Resultado",
    ],
    challenges:
      "Integrar o app Flutter a uma API externa de produtos, orquestrar o envio de imagens para o processamento por IA e manter a experiência fluida em dispositivos móveis mesmo durante o processamento assíncrono da visualização.",
    results:
      "Resultados detalhados em atualização.",
    github: null,
    demo: null,
  },
  {
    slug: "legisia",
    title: "LegisIA",
    tagline:
      "Plataforma GovTech que usa IA para transcrever e resumir sessões legislativas.",
    category: "SaaS • GovTech • Inteligência Artificial",
    year: "2024",
    role: "Desenvolvimento full stack da plataforma e do pipeline de processamento de vídeo e IA.",
    description:
      "LegisIA é uma plataforma que aplica inteligência artificial ao trabalho legislativo, processando vídeos de sessões, extraindo áudio, gerando transcrições e resumos automáticos para apoiar câmaras municipais em uma estrutura multi-tenant.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "OpenAI API",
      "FFmpeg",
    ],
    cover: "/projects/legisia/cover.png",
    screenshots: [
      "/projects/legisia/screenshot-1.png",
      "/projects/legisia/screenshot-2.png",
    ],
    problem:
      "Sessões legislativas geram horas de vídeo que raramente são revisadas na íntegra, tornando difícil localizar informações específicas, produzir atas e dar transparência ao processo legislativo de forma acessível.",
    solution:
      "LegisIA processa os vídeos das sessões, extrai o áudio, gera transcrições e produz resumos automáticos com IA, disponibilizando tudo em uma plataforma com autenticação e suporte a múltiplas câmaras (multi-tenant).",
    features: [
      {
        title: "Processamento de vídeo",
        description:
          "Ingestão de gravações de sessões legislativas para extração de áudio via FFmpeg.",
      },
      {
        title: "Transcrição automática",
        description:
          "Conversão do áudio extraído em texto transcrito da sessão.",
      },
      {
        title: "Resumos gerados por IA",
        description:
          "Geração automática de resumos a partir da transcrição completa da sessão.",
      },
      {
        title: "Histórico",
        description:
          "Registro e consulta de sessões processadas anteriormente.",
      },
      {
        title: "Autenticação",
        description:
          "Controle de acesso de usuários à plataforma.",
      },
      {
        title: "Estrutura multi-Câmara",
        description:
          "Suporte a múltiplas câmaras legislativas de forma isolada (multi-tenant).",
      },
    ],
    architecture: ["Vídeo", "FFmpeg", "Áudio", "Transcrição", "IA", "Resumo", "Plataforma"],
    challenges:
      "Construir um pipeline confiável de processamento de vídeo e áudio com FFmpeg, lidar com arquivos de mídia longos de forma performática e estruturar o isolamento de dados entre diferentes câmaras na mesma plataforma.",
    results:
      "Resultados detalhados em atualização.",
    github: null,
    demo: null,
  },
];

export default projects;
