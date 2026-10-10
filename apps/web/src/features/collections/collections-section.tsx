import { Container, EmptyState } from "@musee/ui";
import { CollectionCard } from "./collection-card";
import type { CollectionPreview } from "./collection-repository";

export function CollectionsSection({ collections }: { collections: ReadonlyArray<CollectionPreview> }) {
  return (
    <section id="collections" aria-labelledby="collections-title" className="bg-muted py-section">
      <Container>
        <header className="mx-auto mb-10 max-w-prose text-center lg:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">À découvrir</p>
          <h2 id="collections-title" className="font-editorial text-h2 font-semibold">Les collections du musée</h2>
          <span aria-hidden="true" className="mx-auto my-5 block h-px w-16 bg-secondary" />
          <p className="text-muted-foreground">Les collections seront présentées à partir des photographies et des notices officielles du musée.</p>
        </header>
        {collections.length > 0 ? (
          <>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {collections.map((collection) => <li key={collection.id} className="min-w-0"><CollectionCard collection={collection} /></li>)}
            </ul>
          </>
        ) : (
          <EmptyState title="Les collections seront bientôt présentées ici.">Notices et photographies à compléter.</EmptyState>
        )}
      </Container>
    </section>
  );
}
