import type { ActivityPreview } from "./activity-repository";

// Propositions pour la maquette : aucun événement ni service annoncé comme confirmé.
export const activitiesMock: readonly ActivityPreview[] = [
  { id: "creative", category: "Arts & création", title: "Ateliers artistiques", description: "Formats, intervenants et conditions de participation à préciser.", icon: "palette", isMock: true },
  { id: "education", category: "Transmission", title: "Programmes éducatifs", description: "Des pistes de découverte pour les scolaires, à définir avec le musée.", icon: "book", isMock: true },
  { id: "talks", category: "Rencontres", title: "Conférences & échanges", description: "Thèmes, invités et dates à annoncer après confirmation.", icon: "users", isMock: true },
  { id: "culture", category: "Culture", title: "Rendez-vous culturels", description: "Une programmation à construire à partir des activités validées.", icon: "crown", isMock: true },
  { id: "families", category: "Jeune public", title: "Découvertes en famille", description: "Contenus, âges et modalités d’accueil à confirmer.", icon: "diamond", isMock: true },
  { id: "exhibitions", category: "Au fil des saisons", title: "Expositions temporaires", description: "Projets, œuvres présentées et calendrier à documenter.", icon: "building", isMock: true },
];
