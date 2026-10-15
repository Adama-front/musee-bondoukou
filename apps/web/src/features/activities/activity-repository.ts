import { activitiesMock } from "./activities.mock";

export interface ActivityPreview {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: "palette" | "book" | "users" | "crown" | "diamond" | "building";
  isMock: boolean;
}

export interface ActivityRepository {
  getPreviews(): Promise<readonly ActivityPreview[]>;
}

export const activityRepository: ActivityRepository = {
  async getPreviews() { return activitiesMock; },
};
