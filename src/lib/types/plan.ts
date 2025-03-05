import type { BackgroundId } from "../backgrounds";

export type LessonPlan = {
  id: string;
  name: string | null;
  content: string | null;
  background: BackgroundId | undefined;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};
