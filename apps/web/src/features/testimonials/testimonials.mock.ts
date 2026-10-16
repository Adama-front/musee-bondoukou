import type { TestimonialPreview } from "./testimonial-repository";

// Avis fictifs pour tester le carrousel, sans attribution à de véritables visiteurs.
export const testimonialsMock: readonly TestimonialPreview[] = [
  { id: "individual", quote: "Une découverte qui donne envie de prendre le temps, d’observer et d’en apprendre davantage.", author: "Visiteur de démonstration", context: "Exemple fictif · découverte individuelle", isMock: true },
  { id: "family", quote: "Partager un moment de curiosité et échanger nos impressions : une autre façon de découvrir ensemble.", author: "Famille de démonstration", context: "Exemple fictif · sortie en famille", isMock: true },
  { id: "reader", quote: "Passer des images aux pages, puis revenir avec de nouvelles questions : la découverte se prolonge.", author: "Lecteur de démonstration", context: "Exemple fictif · intérêt pour la bibliothèque", isMock: true },
];
