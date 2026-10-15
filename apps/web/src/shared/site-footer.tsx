import Link from "next/link";
import { Container } from "@musee/ui";
import { navigation } from "./navigation";

type FooterLink = readonly [label: string, href: string];
const exploreLinks: readonly FooterLink[] = [
  ...navigation.filter(([, href]) => href !== "/#visiter"),
  ["Catalogue des ouvrages", "/bibliotheque/catalogue"],
];
const informationLinks: readonly FooterLink[] = [
  ["Préparer ma visite", "/#visiter"],
  ["Consulter les ouvrages", "/bibliotheque#horaires"],
  ["Localisation & contact", "/bibliotheque#contact"],
];

function FooterIdentity() {
  return (
    <div className="min-w-0 lg:col-span-3">
      <Link href="/" aria-label="Musée de Bondoukou et sa bibliothèque — accueil" className="inline-block max-w-full">
        <span className="block font-editorial text-h3">Musée de</span>
        <span className="block font-editorial text-(length:--footer-wordmark-size) font-semibold leading-none tracking-tight">
          Bondoukou<span className="text-secondary-200">.</span>
        </span>
        <span className="mt-4 block text-sm font-semibold uppercase tracking-widest text-secondary-200">& Bibliothèque</span>
      </Link>
      <p className="mt-8 max-w-prose text-lg text-background/80">Le musée et sa bibliothèque, au cœur de Bondoukou.</p>
      <Link href="/#visiter" className="mt-6 inline-flex min-h-11 items-center gap-4 border-b border-secondary-200 pb-2 font-semibold text-secondary-200 transition-colors hover:text-background">
        Préparer ma visite <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}

function FooterLinkGroup({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <nav aria-label={`${title} — pied de page`} className="min-w-0">
      <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-secondary-200">{title}</h2>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="inline-flex min-h-11 items-center py-2 text-background/80 underline-offset-4 transition-colors hover:text-background hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterBottom() {
  return (
    <div className="mt-16 flex flex-col gap-4 border-t border-background/20 py-8 text-sm text-background/80 lg:mt-24 lg:flex-row lg:items-center lg:justify-between">
      <p>© {new Date().getFullYear()} Musée de Bondoukou & Bibliothèque</p>
      <p>Bondoukou · Côte d’Ivoire</p>
      <p className="max-w-prose text-xs">Contenus institutionnels à compléter avant publication.</p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer bg-ink pt-section text-background [&_a:focus-visible]:outline-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <FooterIdentity />
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:pt-3">
            <FooterLinkGroup title="Explorer" links={exploreLinks} />
            <FooterLinkGroup title="Informations" links={informationLinks} />
          </div>
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
}

