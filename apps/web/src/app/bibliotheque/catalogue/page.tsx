import type { Metadata } from "next";
import Link from "next/link";
import { Container, EmptyState } from "@musee/ui";
import { SiteHeader } from "../../../shared/site-header";
import { SiteFooter } from "../../../shared/site-footer";
import { bookRepository } from "../../../features/books/book-repository";
import { BookCard } from "../../../features/books/book-card";
import { CatalogueSearch } from "../../../features/books/catalogue-search";
export const metadata: Metadata = { title: "Catalogue de la bibliothèque" };
type Params = Promise<Record<string, string | string[] | undefined>>;
export default async function CataloguePage({ searchParams }: { searchParams: Params }) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q.slice(0, 200) : "";
  const category = typeof params.category === "string" ? params.category : "";
  const books = await bookRepository.search({ q, category });
  return <><SiteHeader /><main id="main"><Container className="py-section">
    <nav aria-label="Fil d’Ariane" className="mb-8 text-sm"><Link href="/" className="text-primary underline">Accueil</Link><span> / </span><Link href="/bibliotheque" className="text-primary underline">Bibliothèque</Link><span> / Catalogue</span></nav>
    <h1 className="font-editorial text-h1 font-semibold">Le catalogue de la bibliothèque</h1><p className="mb-8 mt-4 max-w-prose text-muted-foreground">Ces fiches sont des données de démonstration. Elles ne représentent pas les ouvrages ni leur disponibilité réelle.</p>
    <CatalogueSearch q={q} category={category} /><p className="mb-6 text-sm">{books.length} résultat{books.length > 1 ? "s" : ""}</p>
    {books.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{books.map(book => <BookCard key={book.id} book={book} />)}</div> : <EmptyState headingLevel={2} title="Aucun ouvrage ne correspond à votre recherche.">Essayez un autre titre, un auteur ou un mot-clé.</EmptyState>}
  </Container></main><SiteFooter /></>;
}
