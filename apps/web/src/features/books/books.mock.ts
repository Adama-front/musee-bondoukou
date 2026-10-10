import type { Book } from "./book-repository";
export const booksMock: Book[] = [
  { id: "demo-1", title: "Ouvrage de démonstration A", author: "Auteur à compléter", category: "Documents de démonstration", keywords: ["patrimoine", "culture"], availability: "Disponible", isMock: true },
  { id: "demo-2", title: "Ouvrage de démonstration B", author: "Auteur à compléter", category: "Documents de démonstration", keywords: ["archives", "recherche"], availability: "Consultation sur place", isMock: true },
  { id: "demo-3", title: "Ouvrage de démonstration C", author: "Auteur à compléter", category: "Documents de démonstration", keywords: ["lecture", "transmission"], availability: "Indisponible", isMock: true },
];

