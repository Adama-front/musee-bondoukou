import { visitInformationMock } from "./visit-information.mock";

export interface VisitInformation {
  id: "hours" | "prices" | "tours" | "audio" | "rules" | "accessibility";
  title: string;
  description: string;
}

export interface VisitRepository {
  getInformation(): Promise<ReadonlyArray<VisitInformation>>;
}

export const visitRepository: VisitRepository = {
  async getInformation() { return visitInformationMock; },
};
