"use client";

import { Editor } from "@/components/editor";
import indexDb, { IDBLessonPlan } from "@/lib/db/db";
import { toIdbLessonPlan } from "@/lib/db/extensions";
import { api } from "@/trpc/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function Home() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const {
    data: dbLessonPlan,
    isLoading: isDbLessonPlanLoading,
    status: dbLessonPlanStatus,
  } = api.plans.get.useQuery({
    planId: lessonId,
  });

  const {
    data: idbLessonPlan,
    isLoading: isIdbLessonPlanLoading,
    status: idbLessonPlanStatus,
  } = useQuery({
    queryKey: ["idb-lesson-plan", lessonId],
    queryFn: async () => {
      const idbLessonPlan = await indexDb.lessonPlans.get(lessonId);

      if (!idbLessonPlan) {
        return Promise.reject("No lesson plan cached");
      }

      return idbLessonPlan;
    },
  });

  const data: IDBLessonPlan | undefined = useMemo(() => {
    if (idbLessonPlanStatus === "error") {
      if (!dbLessonPlan) {
        return;
      }

      return toIdbLessonPlan(dbLessonPlan);
    }

    if (dbLessonPlanStatus === "error") {
      // TODO: handle error
      throw new Error("Db failed");
    }

    if (idbLessonPlanStatus === "success" && dbLessonPlanStatus === "success") {
      if (!idbLessonPlan) {
        return toIdbLessonPlan(dbLessonPlan);
      }

      const dbLastSyncTime = dbLessonPlan.updatedAt ?? dbLessonPlan.createdAt;
      const dbSyncTime = dbLastSyncTime.getTime();
      const idbSyncTime = new Date(idbLessonPlan.updatedAt).getTime();

      console.log("Is Idb fresher", idbSyncTime > dbSyncTime);
      console.log(idbLessonPlan.content);

      return dbSyncTime > idbSyncTime
        ? toIdbLessonPlan(dbLessonPlan)
        : idbLessonPlan;
    }
  }, [
    idbLessonPlan,
    dbLessonPlan,
    idbLessonPlanStatus,
    dbLessonPlanStatus,
    isDbLessonPlanLoading,
    isIdbLessonPlanLoading,
  ]);

  if (isIdbLessonPlanLoading || isDbLessonPlanLoading) {
    return <div>Loading...</div>;
  }

  return <Editor lessonPlan={data!} />;
}
