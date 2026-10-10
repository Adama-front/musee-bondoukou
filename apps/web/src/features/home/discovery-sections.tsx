import Link from "next/link";
import { Container, buttonVariants } from "@musee/ui";
export function LibrarySection() {
  return <section id="bibliotheque" className="bg-muted py-section"><Container className="grid gap-10 md:grid-cols-2 md:gap-16">
    <div><p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">La bibliothèque</p><h2 className="font-editorial text-h2 font-semibold">Le savoir se partage.<br />La curiosité se cultive.</h2></div>
    <div><p className="max-w-prose text-lg">Un espace dédié aux ouvrages et aux documents, avec une recherche par titre, auteur, catégorie et mot-clé.</p><p className="mt-4 text-sm text-muted-foreground">Le catalogue actuel contient uniquement des fiches de démonstration clairement identifiées.</p><Link href="/bibliotheque/catalogue" className={buttonVariants({ variant: "outline", size: "lg" }) + " mt-6"}>Explorer le catalogue</Link></div>
  </Container></section>;
}

