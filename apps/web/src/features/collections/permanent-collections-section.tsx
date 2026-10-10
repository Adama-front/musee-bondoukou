import { Container, EmptyState } from "@musee/ui";
import { CollectionCategoryCard } from "./collection-category-card";
import type { CollectionCategoryPreview } from "./collection-repository";

export function PermanentCollectionsSection({ categories }: { categories: ReadonlyArray<CollectionCategoryPreview> }) {
  return (
    <section id="collections-permanentes" aria-labelledby="permanent-collections-title" className="bg-background py-section">
      <Container>
        <header className="mx-auto mb-10 max-w-prose text-center lg:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Explorer le patrimoine</p>
          <h2 id="permanent-collections-title" className="font-editorial text-h2 font-semibold">Collections permanentes</h2>
          <span aria-hidden="true" className="mx-auto mt-5 block h-px w-16 bg-secondary" />
        </header>
        {categories.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {categories.map((category) => <li key={category.id} className="min-w-0"><CollectionCategoryCard category={category} /></li>)}
          </ul>
        ) : (
          <EmptyState title="Les catégories seront bientôt présentées ici.">Les catégories officielles restent à compléter.</EmptyState>
        )}
      </Container>
    </section>
  );
}
