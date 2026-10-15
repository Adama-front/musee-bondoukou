import type { GalleryImage } from "./gallery-repository";

// Illustrations d'ambiance génériques, sans valeur documentaire sur le musée réel.
export const galleryMock: readonly GalleryImage[] = [
  { id: "hall", src: "/images/museum-hero-illustration.webp", alt: "Illustration d’un vaste hall aux colonnes et à la lumière dorée.", format: "landscape", isIllustration: true },
  { id: "archives", src: "/images/gallery/archives.webp", alt: "Illustration d’une salle de lecture et de ses rayonnages d’archives.", format: "portrait", isIllustration: true },
  { id: "contemporary", src: "/images/gallery/contemporary.webp", alt: "Illustration d’une galerie claire présentant des compositions abstraites.", format: "portrait", isIllustration: true },
  { id: "sculpture", src: "/images/gallery/sculpture.webp", alt: "Illustration de sculptures abstraites dans une galerie éclairée par le jour.", format: "portrait", isIllustration: true },
  { id: "photography", src: "/images/gallery/photography.webp", alt: "Illustration d’une galerie sombre présentant des photographies en noir et blanc.", format: "portrait", isIllustration: true },
  { id: "books", src: "/images/library-illustration.webp", alt: "Illustration d’un livre ouvert et de pages à la lumière chaude.", format: "square", isIllustration: true },
  { id: "exhibition", src: "/images/gallery/exhibition.webp", alt: "Illustration d’un espace d’exposition aux vitrines et au parquet chaleureux.", format: "portrait", isIllustration: true },
  { id: "art", src: "/images/gallery/art.webp", alt: "Illustration d’une salle d’art aux tons ivoire et terre cuite.", format: "portrait", isIllustration: true },
];
