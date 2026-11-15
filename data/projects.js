// Central data source for all project case studies.
// Add screenshots by dropping image files into public/projects/<slug>/
// and updating the `cover` / `screenshots` paths below — components fall
// back to a styled placeholder automatically when files are missing.

const projects = [
  {
    slug: "seruvo",
    title: "Seruvo",
    tagline:
      "Plataforma PaaS para publicar, configurar e operar aplicações em nuvem com uma experiência centralizada.",
    category: "PaaS • DevOps • Cloud Computing",
    year: "2026",
    role: "Idealização, desenvolvimento full stack e implementação da infraestrutura da plataforma.",
    description:
      "Seruvo é uma plataforma de hospedagem e gerenciamento de aplicações em nuvem criada para simplificar deploy, configuração e monitoramento. Em um único painel, desenvolvedores organizam projetos, serviços, bancos de dados, variáveis de ambiente, domínios e ambientes de produção.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Fastify",
      "Zod",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
      "Nginx Proxy Manager",
      "SSL/TLS",
    ],
    cover: "/projects/seruvo/cover.png",
    screenshots: [
      {
        src: "/projects/seruvo/cover.png",
        title: "Workspace e projetos",
        description: "Visão centralizada dos projetos, repositórios e serviços em produção.",
      },
      {
        src: "/projects/seruvo/projeto-canvas.png",
        title: "Canvas de infraestrutura",
        description: "Aplicações e bancos de dados conectados visualmente por dependências e variáveis.",
      },
      {
        src: "/projects/seruvo/infraestrutura.png",
        title: "Monitoramento da plataforma",
        description: "Acompanhamento de CPU, memória, disco e workspaces hospedados.",
      },
    ],
    demoScreenshots: [
      {
        src: "/projects/seruvo/cover.png",
        title: "Projetos em um só workspace",
        description: "Organização de aplicações, repositórios, ambientes e status dos serviços.",
      },
      {
        src: "/projects/seruvo/projeto-canvas.png",
        title: "Topologia visual",
        description: "Leitura imediata da relação entre frontend, backend e PostgreSQL.",
      },
      {
        src: "/projects/seruvo/infraestrutura.png",
        title: "Operação e capacidade",
        description: "Métricas reais da máquina e administração dos workspaces da plataforma.",
      },
    ],
    problem:
      "Publicar uma aplicação moderna costuma exigir domínio de containers, proxy reverso, certificados, bancos de dados, persistência e automação de deploy. Essa fragmentação aumenta o tempo operacional e cria uma barreira para desenvolvedores e empresas que só precisam colocar seus produtos no ar com segurança.",
    solution:
      "O Seruvo concentra o ciclo de implantação em uma interface única: integra repositórios do GitHub, executa serviços isolados em Docker, provisiona PostgreSQL persistente, gerencia variáveis de ambiente e conecta domínios com SSL/TLS. A plataforma também oferece controles de reinicialização, atualização, backup e acompanhamento da infraestrutura.",
    features: [
      {
        title: "Deploy integrado ao GitHub",
        description: "Publicação e atualização de aplicações diretamente a partir dos repositórios.",
      },
      {
        title: "Projetos e ambientes",
        description: "Organização de aplicações, serviços e ambientes em um workspace centralizado.",
      },
      {
        title: "PostgreSQL gerenciado",
        description: "Provisionamento de bancos persistentes com recursos de backup e restauração.",
      },
      {
        title: "Domínios e SSL/TLS",
        description: "Configuração de domínios personalizados e certificados para acesso seguro.",
      },
      {
        title: "Variáveis de ambiente",
        description: "Configuração centralizada e isolada para cada aplicação implantada.",
      },
      {
        title: "Infraestrutura containerizada",
        description: "Execução e isolamento de aplicações com Docker e gerenciamento de serviços.",
      },
    ],
    architecture: [
      "GitHub",
      "Pipeline de deploy",
      "Containers Docker",
      "Aplicações e serviços",
      "PostgreSQL persistente",
      "Nginx Proxy Manager",
      "Domínio + SSL/TLS",
      "Monitoramento e backups",
    ],
    challenges:
      "Orquestrar containers e persistência com segurança, automatizar a publicação de diferentes stacks, conectar serviços e bancos sem expor credenciais e manter domínios, certificados e métricas operacionais acessíveis por uma interface simples.",
    results:
      "Uma infraestrutura PaaS funcional que reduz tarefas manuais de DevOps e permite administrar aplicações, bancos e domínios em um fluxo visual único, do repositório à produção.",
    github: null,
    demo: null,
  },
  {
    slug: "voltty",
    title: "Voltty",
    tagline:
      "Plataforma SaaS para vendas, estoque, gestão financeira e fidelização de clientes de negócios locais.",
    category: "SaaS • Varejo • Gestão e Fidelização",
    year: "2026",
    role: "Idealização, desenvolvimento full stack, modelagem de dados e implantação da plataforma SaaS.",
    description:
      "Voltty é uma plataforma SaaS multiempresa que reúne frente de caixa, produtos, estoque, etiquetas, balanço financeiro e relacionamento com clientes. O produto conecta a operação diária da loja a recursos de fidelização, como CRM, cupons, campanhas, avaliações e QR Codes.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Docker",
      "API do WhatsApp",
    ],
    cover: "/projects/voltty/cover.png",
    screenshots: [
      {src: "/projects/voltty/vendas.png", title: "Caixa e vendas", description: "PDV com leitor de etiquetas, carrinho, pagamentos, fiado e trocas."},
      {src: "/projects/voltty/produtos.png", title: "Produtos e estoque", description: "Catálogo, variações, custos, preços e alertas de estoque baixo."},
      {src: "/projects/voltty/balanco.png", title: "Balanço da loja", description: "Faturamento, lucro, despesas, metas e formas de pagamento."},
      {src: "/projects/voltty/etiquetas.png", title: "Etiquetas", description: "Geração de códigos Code 128 vinculados a produto, tamanho e estoque."},
      {src: "/projects/voltty/clientes.png", title: "CRM de clientes", description: "Preferências, compras, visitas e oportunidades de relacionamento."},
      {src: "/projects/voltty/fidelizacao.png", title: "Cupons segmentados", description: "Benefícios para boas-vindas, aniversariantes e clientes inativos."},
    ],
    demoScreenshots: [
      {src: "/projects/voltty/vendas.png", title: "Operação de vendas", description: "Fluxo de caixa preparado para etiquetas, múltiplos pagamentos, fiado e trocas."},
      {src: "/projects/voltty/produtos.png", title: "Estoque em tempo real", description: "Indicadores financeiros e alertas para apoiar reposição e precificação."},
      {src: "/projects/voltty/balanco.png", title: "Decisão financeira", description: "Metas, faturamento, lucro e despesas reunidos em um painel gerencial."},
      {src: "/projects/voltty/clientes.png", title: "Relacionamento conectado", description: "Histórico de clientes e dados de compra integrados à fidelização."},
    ],
    problem:
      "Negócios locais frequentemente usam ferramentas separadas para vender, controlar estoque, acompanhar resultados e manter relacionamento com clientes. A fragmentação reduz a visibilidade da operação e faz oportunidades de recompra, aniversário e recuperação de clientes se perderem.",
    solution:
      "O Voltty une operação e relacionamento em uma única plataforma multiempresa. A venda atualiza estoque e indicadores financeiros; os dados de clientes alimentam CRM, segmentações, cupons e campanhas; etiquetas e QR Codes conectam a rotina física da loja ao sistema digital.",
    features: [
      {title: "Frente de caixa", description: "Vendas com leitor de etiquetas, formas de pagamento, fiado, despesas e trocas."},
      {title: "Produtos e estoque", description: "Cadastro de peças e variações, custos, preços e alertas de estoque baixo."},
      {title: "Balanço financeiro", description: "Faturamento, lucro bruto e líquido, despesas, metas e relatórios por período."},
      {title: "Etiquetas Code 128", description: "Códigos vinculados a cada produto, tamanho e quantidade disponível."},
      {title: "CRM e fidelização", description: "Clientes, preferências, visitas, cupons, campanhas e avaliações em um só fluxo."},
      {title: "SaaS multiempresa", description: "Autenticação, isolamento de dados, planos e administração central da plataforma."},
    ],
    architecture: [
      "Loja e operadores",
      "Aplicação React",
      "API Node.js/Express",
      "Autenticação JWT",
      "PostgreSQL multiempresa",
      "Vendas + Estoque + Financeiro",
      "CRM + Fidelização",
      "Integrações e campanhas",
    ],
    challenges:
      "Garantir isolamento seguro entre empresas, manter estoque e indicadores financeiros consistentes a cada venda, modelar variações e etiquetas por produto e conectar dados operacionais a segmentações de relacionamento sem duplicar fontes de verdade.",
    results:
      "Um sistema de gestão completo em produção, com operação real de caixa, mais de mil peças controladas no ambiente demonstrado e uma camada de fidelização conectada ao histórico de clientes.",
    github: null,
    demo: "https://voltty.com.br/",
    preferCaseStudy: true,
  },
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
      {src: "/projects/vyral/home-01.png", title: "Home — hero", description: "Primeira dobra comercial do Vyral."},
      {src: "/projects/vyral/home-02.png", title: "Home — preview do produto", description: "Demonstração visual dos módulos do sistema."},
      {src: "/projects/vyral/home-03.png", title: "Home — recursos", description: "Recursos já existentes apresentados para conversão."},
      {src: "/projects/vyral/home-04.png", title: "Home — operação", description: "Como o Vyral organiza a rotina da agência."},
      {src: "/projects/vyral/home-05.png", title: "Home — planos e valor", description: "Área comercial e posicionamento SaaS."},
      {src: "/projects/vyral/home-06.png", title: "Home — chamada final", description: "Fechamento da landing page."},
      {src: "/projects/vyral/login.png", title: "Login", description: "Autenticação profissional do Vyral."},
      {src: "/projects/vyral/selecionar-empresa.png", title: "Seleção de cliente", description: "Entrada por cliente atendido pela agência."},
      {src: "/projects/vyral/dashboard.png", title: "Dashboard", description: "Resumo inteligente e indicadores do cliente."},
      {src: "/projects/vyral/clientes-crm.png", title: "Clientes CRM", description: "Gestão dos clientes da agência."},
      {src: "/projects/vyral/cliente-detalhe.png", title: "Área exclusiva do cliente", description: "CRM, Instagram, conteúdos, calendário e arquivos por cliente."},
      {src: "/projects/vyral/conteudos.png", title: "Redes sociais", description: "Conteúdos e métricas sincronizadas."},
      {src: "/projects/vyral/calendario.png", title: "Calendário editorial", description: "Planejamento de pautas por cliente."},
      {src: "/projects/vyral/arquivos.png", title: "Biblioteca", description: "Arquivos de marca organizados por cliente."},
      {src: "/projects/vyral/tendencias.png", title: "IA de tendências", description: "Sugestões de trends alinhadas ao segmento do cliente."},
      {src: "/projects/vyral/relatorios.png", title: "Relatórios", description: "Relatórios automáticos com resultados e análises."},
      {src: "/projects/vyral/equipe.png", title: "Equipe", description: "Gestão de equipe e acessos da agência."},
      {src: "/projects/vyral/configuracoes.png", title: "Configurações", description: "Conta, agência, segurança e preferências."},
    ],
    demoScreenshots: [
      {src: "/projects/vyral/dashboard.png", title: "Dashboard por cliente", description: "Resumo inteligente, crescimento e sinais importantes em uma visão executiva."},
      {src: "/projects/vyral/clientes-crm.png", title: "CRM de clientes", description: "Cada empresa atendida tem dados, marca, responsáveis e Instagram próprios."},
      {src: "/projects/vyral/conteudos.png", title: "Conteúdos e métricas", description: "Publicações, alcance, views, engajamento e análise de IA."},
      {src: "/projects/vyral/calendario.png", title: "Calendário editorial", description: "Pautas por dia, hora e cliente selecionado."},
      {src: "/projects/vyral/arquivos.png", title: "Biblioteca da marca", description: "Logos, fotos, fontes, paletas e identidade visual por cliente."},
      {src: "/projects/vyral/tendencias.png", title: "IA de tendências", description: "Trends brasileiras com match para o segmento do cliente."},
      {src: "/projects/vyral/relatorios.png", title: "Relatórios", description: "Entregáveis para apresentar resultados com clareza."},
    ],
    youtubeId: null,
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
    demo: "https://vyral.app.br/",
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
    cover: "/projects/dora/cover.jpeg",
    imageOrientation: "mobile",
    screenshots: [
      {src: "/projects/dora/screenshot-1.jpeg", title: "DORA — início", description: "Tela inicial do aplicativo."},
      {src: "/projects/dora/screenshot-2.jpeg", title: "DORA — catálogo", description: "Experiência mobile para explorar peças."},
      {src: "/projects/dora/screenshot-3.jpeg", title: "DORA — produto", description: "Detalhes da peça antes da visualização."},
      {src: "/projects/dora/screenshot-4.jpeg", title: "DORA — provador", description: "Fluxo de pré-visualização com IA."},
      {src: "/projects/dora/screenshot-5.jpeg", title: "DORA — resultado", description: "Demonstração visual gerada pelo app."},
      {src: "/projects/dora/screenshot-6.jpeg", title: "DORA — navegação", description: "Interface mobile do produto."},
      {src: "/projects/dora/screenshot-7.jpeg", title: "DORA — experiência", description: "Jornada visual do usuário dentro do app."},
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
    demo: "https://apps.apple.com/br/app/dora/id6741698497",
  },
  {
    slug: "legisia",
    title: "LegisIA",
    tagline:
      "Plataforma de Inteligência Artificial para assessoria e fiscalização legislativa municipal.",
    category: "SaaS • GovTech • Inteligência Artificial",
    year: "2024",
    role: "Desenvolvimento full stack da plataforma: backend, frontend, integração com IA e arquitetura multi-Câmara.",
    description:
      "LegisIA é uma plataforma que aplica Inteligência Artificial ao trabalho legislativo municipal: assessoria via chat sobre Regimento Interno e Lei Orgânica, fiscalização de contratos e licitações, análise de proposições (constitucionalidade, jurisprudência, veto, competência) e cruzamento de dados públicos, atendendo múltiplas Câmaras Municipais em uma estrutura multi-tenant.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Anthropic Claude API",
      "Mercado Pago API",
    ],
    cover: "/projects/legisia/cover.png",
    screenshots: [
      {src: "/projects/legisia/login.png", title: "Login", description: "Acesso seguro à plataforma de inteligência parlamentar."},
      {src: "/projects/legisia/trial.png", title: "Teste grátis", description: "Fluxo de cadastro para avaliação da plataforma."},
      {src: "/projects/legisia/dashboard.png", title: "Meu Plano", description: "Controle de assinatura, recursos disponíveis e consultas com IA."},
      {src: "/projects/legisia/regimental.png", title: "Assessoria regimental", description: "Chat jurídico baseado no Regimento Interno e na Lei Orgânica."},
      {src: "/projects/legisia/proposicao.png", title: "Proposição inteligente", description: "Análise de projetos antes do protocolo legislativo."},
      {src: "/projects/legisia/fiscalizacao-ranking.png", title: "Fiscalização", description: "Ranking de fornecedores e leitura de contratos públicos."},
      {src: "/projects/legisia/fiscalizacao-alertas.png", title: "Alertas", description: "Detecção de anomalias e pontos de atenção para fiscalização."},
      {src: "/projects/legisia/fiscalizacao-cruzamento.png", title: "Cruzamento de dados", description: "Cruzamento com dados públicos, TCE e Judiciário."},
      {src: "/projects/legisia/admin.png", title: "Painel administrativo", description: "Gestão de clientes, planos e acessos da plataforma."},
    ],
    demoScreenshots: [
      {src: "/projects/legisia/dashboard.png", title: "Plano e consumo", description: "Acompanhe consultas, dias restantes e recursos liberados."},
      {src: "/projects/legisia/regimental.png", title: "Consulta jurídica", description: "Assessoria parlamentar em formato de chat com IA."},
      {src: "/projects/legisia/proposicao.png", title: "Análise legislativa", description: "Apoio para revisar proposições, competência e fundamentos."},
      {src: "/projects/legisia/fiscalizacao-ranking.png", title: "Fiscalização de contratos", description: "Visualize fornecedores, valores e concentração contratual."},
      {src: "/projects/legisia/fiscalizacao-alertas.png", title: "Alertas inteligentes", description: "Identifique anomalias e sinais de risco automaticamente."},
      {src: "/projects/legisia/admin.png", title: "Administração SaaS", description: "Gerencie Câmaras, planos e operação da plataforma."},
    ],
    problem:
      "Vereadores e equipes legislativas precisam consultar constantemente o Regimento Interno, a Lei Orgânica e dados de fiscalização (contratos, licitações, TCE) de seu município, além de avaliar a constitucionalidade e a jurisprudência de proposições — um trabalho manual, disperso entre fontes diferentes e que consome tempo das equipes de cada Câmara.",
    solution:
      "LegisIA concentra essa assessoria em uma plataforma com IA: um chat especializado responde consultas com base no Regimento Interno e na Lei Orgânica do município do usuário, um módulo de fiscalização cruza dados de contratos, licitações (via PNCP) e TCE para gerar rankings, alertas e detecção de anomalias, e um módulo de proposições analisa constitucionalidade, competência, jurisprudência e veto. Tudo isso dentro de uma arquitetura multi-Câmara, com cada município (atualmente Sanharó-PE, Pesqueira-PE e Cortês-PE) mantendo sua própria base jurídica isolada.",
    features: [
      {
        title: "Assessoria regimental via IA",
        description:
          "Chat com IA que responde consultas com base no Regimento Interno e na Lei Orgânica do município do usuário.",
      },
      {
        title: "Análise de proposições",
        description:
          "Verificação de constitucionalidade, competência, jurisprudência e veto de proposições legislativas.",
      },
      {
        title: "Fiscalização",
        description:
          "Consulta de contratos e licitações (integração com o PNCP), ranking de empresas, alertas e detecção de anomalias, com cruzamento de dados do TCE.",
      },
      {
        title: "Estrutura multi-Câmara",
        description:
          "Cada Câmara Municipal atendida (Sanharó-PE, Pesqueira-PE, Cortês-PE) mantém sua base jurídica e seus dados isolados dentro da mesma plataforma.",
      },
      {
        title: "Planos e assinatura",
        description:
          "Quatro modalidades de acesso (Trial, Básico, Profissional, Avançado) com limite mensal de consultas, liberação progressiva de recursos e pagamento via Mercado Pago.",
      },
      {
        title: "Painel administrativo",
        description:
          "Área de administração para gestão de clientes, planos e acompanhamento de uso da plataforma.",
      },
    ],
    architecture: [
      "Câmara Municipal",
      "Regimento Interno + Lei Orgânica",
      "IA (Claude)",
      "Assessoria + Análise de Proposições",
      "Fiscalização (Contratos, Licitações, TCE)",
      "Plataforma multi-Câmara",
    ],
    challenges:
      "Estruturar a base jurídica de cada município (Regimento Interno e Lei Orgânica) de forma isolada e escalável para múltiplas Câmaras, e desenhar o sistema de planos e permissões que controla, por assinatura, quais recursos de IA e fiscalização cada cliente pode consumir.",
    results:
      "Resultados detalhados em atualização.",
    github: null,
    demo: null,
  },
];

export default projects;
