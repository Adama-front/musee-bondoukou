import type { VisitInformation } from "./visit-repository";

// Horaires proposés puis validés par l'utilisateur ; autres conditions à confirmer.
export const visitInformationMock: ReadonlyArray<VisitInformation> = [
  { id: "hours", title: "Horaires d’ouverture", description: "Du mardi au dimanche : 9 h – 17 h. Fermé le lundi." },
  { id: "prices", title: "Tarifs & accès", description: "Tarifs, gratuités éventuelles et modalités d’accès à confirmer." },
  { id: "tours", title: "Visites guidées", description: "Disponibilité, réservation et accueil des groupes à confirmer." },
  { id: "audio", title: "Audioguides", description: "Présence du service, langues et conditions d’utilisation à confirmer." },
  { id: "rules", title: "Règles de visite", description: "Consignes concernant les photographies, les sacs et la visite à confirmer." },
  { id: "accessibility", title: "Accessibilité", description: "Accès au bâtiment, équipements et accompagnement proposés à confirmer." },
];
