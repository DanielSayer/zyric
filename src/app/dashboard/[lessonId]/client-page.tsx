"use client";

import { Editor } from "@/components/editor";
import indexDb, { IDBLessonPlan } from "@/lib/db/db";
import { toIdbLessonPlan } from "@/lib/db/extensions";
import { DBLessonPlan } from "@/server/db/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useMemo } from "react";

type LessonPlanPageProps = {
  dbLessonPlan: DBLessonPlan;
};

export default function LessonPlanPage({ dbLessonPlan }: LessonPlanPageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const {
    data: idbLessonPlan,
    isFetching,
    status,
  } = useQuery({
    queryKey: ["idb-lesson-plan", lessonId],
    queryFn: async () => {
      const idbLessonPlan = await indexDb.lessonPlans.get(lessonId);

      if (!idbLessonPlan) {
        return Promise.reject("No lesson plan cached");
      }

      return idbLessonPlan;
    },
    staleTime: 0,
  });

  const data: IDBLessonPlan | undefined = useMemo(() => {
    if (isFetching) return;
    if (status === "error") {
      return toIdbLessonPlan(dbLessonPlan);
    }

    if (status === "success") {
      if (!idbLessonPlan) {
        return toIdbLessonPlan(dbLessonPlan);
      }

      const dbLastSyncTime = dbLessonPlan.updatedAt ?? dbLessonPlan.createdAt;
      const dbSyncTime = dbLastSyncTime.getTime();
      const idbSyncTime = new Date(idbLessonPlan.updatedAt).getTime();

      return dbSyncTime > idbSyncTime
        ? toIdbLessonPlan(dbLessonPlan)
        : idbLessonPlan;
    }
  }, [idbLessonPlan, dbLessonPlan, status, isFetching]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <Editor lessonPlan={data!} />;
}
