import { getLessonPlans } from "@/server/data-access-layer/lesson-plans/get-all";

export async function getAllLessonPlans(userId: string) {
  const lessonPlans = await getLessonPlans(userId);

  return lessonPlans
    .map(({ id, ...x }) => ({ id: id.toString(), ...x }))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}
