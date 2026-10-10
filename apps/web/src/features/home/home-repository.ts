export interface HomeContent {
  exhibitions: ReadonlyArray<{ id: string; title: string }>;
  events: ReadonlyArray<{ id: string; title: string }>;
}
export interface HomeRepository { getContent(): Promise<HomeContent> }
const mockContent: HomeContent = { exhibitions: [], events: [] };
export const homeRepository: HomeRepository = { async getContent() { return mockContent; } };

