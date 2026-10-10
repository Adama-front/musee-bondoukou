import type { CollectionPreview } from "./collection-repository";

// Six emplacements de démonstration pour valider la composition du modèle.
// Ils ne constituent ni un inventaire ni des catégories officielles du musée.
export const collectionsMock: ReadonlyArray<CollectionPreview> = Array.from(
  { length: 6 },
  (_, index) => ({
    id: `demo-collection-${index + 1}`,
    title: `Collection de démonstration ${index + 1}`,
    subtitle: "Notice à compléter",
    image: null,
    isMock: true,
  }),
);
