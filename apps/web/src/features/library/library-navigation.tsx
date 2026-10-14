import Link from "next/link";
import { Container } from "@musee/ui";

const links = [
  ["Présentation", "#presentation"], ["Catalogue", "#catalogue"],
  ["Horaires", "#horaires"], ["Événements", "#evenements"],
  ["Actualités", "#actualites"], ["Contact", "#contact"],
] as const;

export function LibraryNavigation() {
  return (
    <nav aria-label="Dans la bibliothèque" className="border-b border-border bg-surface">
      <Container className="flex flex-wrap justify-center gap-x-6 gap-y-1 py-4">
        {links.map(([label, href]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center text-sm font-semibold hover:text-primary">{label}</Link>)}
      </Container>
    </nav>
  );
}
