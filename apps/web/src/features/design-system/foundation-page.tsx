import Link from "next/link";
import { Badge, Button, Container, EmptyState, Input, SectionHeader, Textarea } from "@musee/ui";
export function FoundationPage() {
  return <>
    <Container><header className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-6">
      <Link href="/" className="font-editorial text-h4 font-semibold">Musée de Bondoukou<br /><span className="font-body text-sm font-normal">& Bibliothèque</span></Link>
      <Badge variant="outline">Design System · v1.0</Badge>
    </header></Container>
    <main id="main"><Container className="py-section">
      <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Fondations du site public</p>
      <h1 className="font-editorial text-display max-w-prose font-semibold">Un patrimoine à découvrir.<br />Un savoir à transmettre.</h1>
      <p className="mt-6 max-w-prose text-lg text-muted-foreground">Page de référence du système visuel. Les contenus institutionnels seront intégrés après validation ; aucun contenu historique n’est présenté ici.</p>
    </Container>
    <Container className="space-y-16 pb-section">
      <section aria-labelledby="controls"><SectionHeader title="Actions & états" eyebrow="01 · Composants" /><h3 id="controls" className="sr-only">Variantes des boutons</h3>
        <div className="flex flex-wrap gap-4"><Button>Action principale</Button><Button variant="secondary">Secondaire</Button><Button variant="outline">Découvrir</Button><Button variant="ghost">Annuler</Button><Button variant="danger">Archiver</Button><Button disabled>Indisponible</Button></div>
        <p className="mt-4 text-sm text-muted-foreground">Ces boutons présentent les variantes visuelles ; aucune opération métier n’est déclenchée.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Badge variant="success">Disponible</Badge><Badge variant="info">Consultation sur place</Badge><Badge variant="default">Indisponible</Badge><Badge variant="primary">Exemple</Badge></div>
      </section>
      <section><SectionHeader title="Champs & messages" eyebrow="02 · Saisie" /><div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3"><label htmlFor="search" className="block font-semibold">Rechercher un ouvrage</label><Input id="search" type="search" placeholder="Titre, auteur, mot-clé" aria-describedby="search-help" /><p id="search-help" className="text-sm text-muted-foreground">Champ de démonstration, sans catalogue connecté.</p></div>
        <div className="space-y-3"><label htmlFor="message" className="block font-semibold">Votre message</label><Textarea id="message" placeholder="Écrivez votre message…" /></div>
      </div></section>
      <section><SectionHeader title="Un état vide compréhensible" eyebrow="03 · Retour utilisateur" /><EmptyState title="Aucun ouvrage ne correspond à votre recherche.">Essayez un autre titre, un auteur ou un mot-clé.</EmptyState></section>
    </Container></main>
    <footer className="bg-ink py-10 text-background"><Container><p className="font-editorial text-h3">Musée de Bondoukou & Bibliothèque</p><p className="mt-4 text-sm">Prototype de fondations · Contenu à compléter</p></Container></footer>
  </>;
}

