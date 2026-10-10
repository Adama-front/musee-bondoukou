import { collectionsMock } from "./collections.mock";
import { permanentCollectionsMock } from "./permanent-collections.mock";

export interface CollectionPreview {
  id: string;
  title: string;
  subtitle: string;
  image: { src: string; alt: string } | null;
  isMock: boolean;
}

export interface CollectionRepository {
  getFeatured(): Promise<ReadonlyArray<CollectionPreview>>;
  getCategories(): Promise<ReadonlyArray<CollectionCategoryPreview>>;
}

export interface CollectionCategoryPreview {
  id: "objects" | "art" | "heritage" | "documents" | "sculpture";
  title: string;
  description: string;
  isMock: boolean;
}

export const collectionRepository: CollectionRepository = {
  async getFeatured() { return collectionsMock; },
  async getCategories() { return permanentCollectionsMock; },
};
