import type { CollectionCategoryPreview } from "./collection-repository";

// Catégories proposées pour la maquette, sans valeur d'inventaire officiel.
export const permanentCollectionsMock: ReadonlyArray<CollectionCategoryPreview> = [
  { id: "objects", title: "Objets patrimoniaux", description: "Origines, usages et contextes à documenter à partir des notices officielles.", isMock: true },
  { id: "art", title: "Arts visuels", description: "Œuvres et démarches artistiques à présenter après validation des collections.", isMock: true },
  { id: "heritage", title: "Patrimoine culturel", description: "Présentation des thématiques culturelles à compléter avec les contenus validés.", isMock: true },
  { id: "documents", title: "Documents & archives", description: "Documents, sources et conditions de consultation à préciser.", isMock: true },
  { id: "sculpture", title: "Sculptures", description: "Matériaux, formes et histoires des œuvres à renseigner à partir des notices.", isMock: true },
  { id: "explore", title: "Explorer le patrimoine", description: "Parcourir les collections et découvrir leurs notices.", isMock: false, href: "#collections" },
];
