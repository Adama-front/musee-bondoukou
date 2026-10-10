import Link from "next/link";
import { Container } from "@musee/ui";
export function SiteFooter() {
  return <footer className="bg-ink py-16 text-background"><Container className="grid gap-8 md:grid-cols-2">
    <div><p className="font-editorial text-h3 font-semibold">Musée de Bondoukou<br />& Bibliothèque</p><p className="mt-4 text-sm">Bondoukou, Gontougo, Côte d’Ivoire.</p></div>
    <nav aria-label="Navigation de pied de page" className="flex flex-wrap items-start gap-6"><Link href="/#visiter" className="py-3 hover:underline">Préparer ma visite</Link><Link href="/bibliotheque/catalogue" className="py-3 hover:underline">Catalogue</Link></nav>
    <p className="border-t border-background/20 pt-6 text-sm md:col-span-2">Contenus institutionnels à compléter avant publication.</p>
  </Container></footer>;
}

