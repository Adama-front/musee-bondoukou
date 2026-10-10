import Link from "next/link";
import { Button, Input } from "@musee/ui";
export function CatalogueSearch({ q, category }: { q: string; category: string }) {
  return <form action="/bibliotheque/catalogue" method="get" className="mb-10 grid items-end gap-4 lg:grid-cols-3">
    <div><label htmlFor="q" className="mb-2 block font-semibold">Rechercher un ouvrage</label><Input id="q" name="q" defaultValue={q} type="search" placeholder="Titre, auteur ou mot-clé" maxLength={200} /></div>
    <div><label htmlFor="category" className="mb-2 block font-semibold">Catégorie</label><select id="category" name="category" defaultValue={category} className="min-h-12 w-full rounded-md border border-border-strong bg-surface px-4 py-3"><option value="">Toutes les catégories</option><option value="Documents de démonstration">Documents de démonstration</option></select></div>
    <div className="flex flex-wrap items-center gap-4"><Button type="submit">Rechercher</Button><Link href="/bibliotheque/catalogue" className="py-3 text-primary underline underline-offset-4">Réinitialiser</Link></div>
  </form>;
}

