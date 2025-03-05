"use client";

import { Editor } from "@/components/editor";
import type { LessonPlan } from "@/lib/types/plan";
import { api } from "@/trpc/react";
import { useParams } from "next/navigation";

export default function Home() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { data } = api.plans.get.useQuery({
    planId: lessonId,
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return <Editor lessonPlan={data as LessonPlan} />;
}
