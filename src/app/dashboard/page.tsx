import { api } from "@/trpc/server";
import { Dashboard } from "./dashboard";
import type { LessonPlan } from "@/lib/types/plan";

export default async function Page() {
  const lessonPlans = await api.plans.getAll();

  return <Dashboard plans={lessonPlans as LessonPlan[]} />;
}
