export type LessonPlan = {
  id: string;
  name: string | null;
  content: string | null;
  coverImageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};
