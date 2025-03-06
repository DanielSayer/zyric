import type { DBLessonPlan } from "@/server/db/types";
import type { LessonPlan } from "../types/plan";
import type { IDBLessonPlan } from "./db";

export function toIdbLessonPlan(lessonPlan: DBLessonPlan): IDBLessonPlan;
export function toIdbLessonPlan(lessonPlan: LessonPlan): IDBLessonPlan;
export function toIdbLessonPlan(
  lessonPlan: DBLessonPlan | LessonPlan,
): IDBLessonPlan {
  return {
    id: `${lessonPlan.id}`,
    title: lessonPlan.name ?? "",
    backgroundId: lessonPlan.background,
    content: lessonPlan.content,
    updatedAt: (lessonPlan.updatedAt ?? lessonPlan.createdAt).toISOString(),
  };
}
