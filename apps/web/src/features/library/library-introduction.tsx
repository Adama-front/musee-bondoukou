import Link from "next/link";
import { Container, SectionHeader, buttonVariants } from "@musee/ui";
import type { LibraryContent } from "./library-repository";

export function LibraryIntroduction({ introduction }: Pick<LibraryContent, "introduction">) {
  return (
    <section id="presentation" aria-label="Présentation de la bibliothèque" className="py-section">
      <Container className="grid gap-8 md:grid-cols-2 md:gap-16">
        <SectionHeader eyebrow="À propos" title="Un espace pour découvrir et comprendre." />
        <div className="space-y-6 text-lg">
          <p>{introduction}</p>
          <p className="text-muted-foreground">Les fonds documentaires et les services seront présentés à partir des informations validées par la bibliothèque.</p>
        </div>
      </Container>
    </section>
  );
}

export function LibraryCatalogueSection() {
  return (
    <section id="catalogue" aria-label="Catalogue de la bibliothèque" className="bg-muted py-section">
      <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <SectionHeader eyebrow="Au fil des pages" title="Quel sera votre prochain livre ?">Recherchez par titre, auteur ou mot-clé, puis affinez par catégorie.</SectionHeader>
        <div>
          <p className="mb-6 text-muted-foreground">Le catalogue actuel propose des fiches de démonstration. Le fonds réel sera ajouté à partir des notices de la bibliothèque.</p>
          <Link href="/bibliotheque/catalogue" className={buttonVariants({ size: "lg" })}>Parcourir le catalogue <span aria-hidden="true">→</span></Link>
        </div>
      </Container>
    </section>
  );
}
