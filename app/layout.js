import { Inter, Manrope } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = "https://jpfreitasdev.com.br";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "João Paulo Freitas | Desenvolvedor de software",
    template: "%s | João Paulo",
  },
  description:
    "Portfólio de João Paulo Freitas, desenvolvedor full stack de aplicações web, mobile e produtos SaaS.",
  openGraph: {
    title: "João Paulo Freitas | Desenvolvedor de software",
    description:
      "Projetos web, mobile e SaaS desenvolvidos da arquitetura à publicação.",
    url: siteUrl,
    siteName: "João Paulo Freitas",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Paulo Freitas | Desenvolvedor de software",
    description:
      "Projetos web, mobile e SaaS desenvolvidos da arquitetura à publicação.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-foreground">
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
