import Link from "next/link";
import { Container, EmptyState, SectionHeader, buttonVariants } from "@musee/ui";
export function MuseumIntroduction() {
  return <section id="musee" className="border-y border-border bg-muted py-section"><Container className="grid gap-8 md:grid-cols-2 md:gap-16">
    <SectionHeader title="Le musée, un lieu de découverte." />
    <div className="max-w-prose"><p className="text-lg">Découvrir le patrimoine culturel de Bondoukou et du Gontougo, rencontrer les collections et accéder au savoir : le musée et sa bibliothèque réunissent ces deux dimensions.</p><p className="mt-5 text-sm text-muted-foreground">Contenu temporaire. L’histoire du musée, ses missions officielles et la présentation du bâtiment seront intégrées après validation institutionnelle.</p></div>
  </Container></section>;
}
export function CollectionsSection() {
  return <section id="collections" className="py-section"><Container><SectionHeader title="Les collections, au premier plan.">Les objets, les œuvres et leur contexte seront présentés à partir des notices officielles du musée.</SectionHeader><EmptyState title="Les collections seront bientôt présentées ici.">Notices et photographies à compléter.</EmptyState></Container></section>;
}
export function LibrarySection() {
  return <section id="bibliotheque" className="bg-muted py-section"><Container className="grid gap-10 md:grid-cols-2 md:gap-16">
    <div><p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">La bibliothèque</p><h2 className="font-editorial text-h2 font-semibold">Le savoir se partage.<br />La curiosité se cultive.</h2></div>
    <div><p className="max-w-prose text-lg">Un espace dédié aux ouvrages et aux documents, avec une recherche par titre, auteur, catégorie et mot-clé.</p><p className="mt-4 text-sm text-muted-foreground">Le catalogue actuel contient uniquement des fiches de démonstration clairement identifiées.</p><Link href="/bibliotheque/catalogue" className={buttonVariants({ variant: "outline", size: "lg" }) + " mt-6"}>Explorer le catalogue</Link></div>
  </Container></section>;
}

