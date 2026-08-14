// Professional experience timeline.
// Add real entries as objects with this shape (dates as free text, e.g. "2023 — Presente"):
//
// {
//   role: "Cargo",
//   company: "Empresa",
//   period: "Ano — Ano",
//   description: "Breve descrição das responsabilidades e conquistas.",
//   technologies: ["Tecnologia 1", "Tecnologia 2"],
//   link: "https://exemplo.com" | null,
// }
//
// Do not invent employers, roles or dates beyond what's documented here.
const experience = [
  {
    role: "Desenvolvedor de Software",
    company: "Pulse",
    period: "Atualmente",
    description:
      "Atuo no desenvolvimento do Pulse, plataforma cloud angolana que une controlo de acessos físicos (torniquetes, biometria, RFID e reconhecimento facial) a um ERP com mais de 25 módulos sincronizados em tempo real — cobrindo áreas como RH, Compras, Stocks, Vendas, CRM, POS, Business Intelligence e verticais sectoriais (Construção, Saúde, Hotelaria, Indústria, Agricultura, entre outras). É uma arquitetura multi-tenant, com cada empresa cliente isolada em sua própria base de dados, usada por empresas em Angola, Portugal, Moçambique e Cabo Verde para controlar entradas e saídas de colaboradores, visitantes e viaturas com segurança e rastreabilidade, além de gerir toda a operação corporativa em um único ambiente.\n\nDentro desse sistema, desenvolvi do zero um módulo de e-commerce totalmente dinâmico: qualquer empresa cliente do Pulse pode criar sua própria loja online e configurar tudo — do início ao fim — sem depender de código, com back-end e front-end programados por mim. Também atuo em frentes web e mobile do ecossistema ProGest/Pulse, trabalhando com APIs, multi-tenancy, autenticação, dashboards, geração de documentos, integrações e interfaces de operação em tempo real.",
    technologies: [
      "PHP",
      "Laravel",
      "AWS S3",
      "Resend",
      "Vite",
      "Tailwind CSS",
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "Dart",
      "SQLite / sqflite",
      "APIs REST",
    ],
    link: "https://pulse.ao/",
  },
];

export default experience;
