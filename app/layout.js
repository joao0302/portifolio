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

const siteUrl = "https://joaopaulo.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "João Paulo | Software Developer",
    template: "%s | João Paulo",
  },
  description:
    "Desenvolvedor de software especializado em aplicações Web, Mobile, SaaS e soluções utilizando Inteligência Artificial.",
  openGraph: {
    title: "João Paulo | Software Developer",
    description:
      "Desenvolvedor de software especializado em aplicações Web, Mobile, SaaS e soluções utilizando Inteligência Artificial.",
    url: siteUrl,
    siteName: "João Paulo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Paulo | Software Developer",
    description:
      "Desenvolvedor de software especializado em aplicações Web, Mobile, SaaS e soluções utilizando Inteligência Artificial.",
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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
