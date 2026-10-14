import { libraryMock } from "./library.mock";

export interface LibraryEntry { id: string; title: string; description: string }
export interface LibraryContent {
  introduction: string;
  hours: string;
  consultation: string;
  location: string;
  contact: string;
  events: readonly LibraryEntry[];
  news: readonly LibraryEntry[];
}
export interface LibraryRepository { getContent(): Promise<LibraryContent> }
export const libraryRepository: LibraryRepository = {
  async getContent() { return libraryMock; },
};
