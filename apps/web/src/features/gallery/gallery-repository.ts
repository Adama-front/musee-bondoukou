import { galleryMock } from "./gallery.mock";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  format: "landscape" | "portrait" | "square";
  isIllustration: boolean;
}

export interface GalleryRepository {
  getImages(): Promise<readonly GalleryImage[]>;
}

export const galleryRepository: GalleryRepository = {
  async getImages() { return galleryMock; },
};
