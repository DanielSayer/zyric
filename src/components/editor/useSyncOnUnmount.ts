import type { IDBLessonPlan } from "@/lib/db/db";
import indexDb from "@/lib/db/db";
import { useCallback, useEffect } from "react";

type UseSyncOnUnmountProps = {
  lessonPlan: Omit<IDBLessonPlan, "updatedAt">;
};

export const useSyncOnUnmount = ({ lessonPlan }: UseSyncOnUnmountProps) => {
  const saveToIndexedDB = useCallback(() => {
    console.log("saving to indexedDB");
    return indexDb.table("lessonPlans").put({
      id: lessonPlan.id,
      title: lessonPlan.title ?? "",
      backgroundId: lessonPlan.backgroundId,
      content: lessonPlan.content,
      updatedAt: new Date().toISOString(),
    });
  }, [lessonPlan]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      saveToIndexedDB().catch(console.error);

      // This ensures the above runs
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setTimeout(() => {}, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [lessonPlan.id, saveToIndexedDB]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        saveToIndexedDB().catch(console.error);

        // This ensures the above runs
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setTimeout(() => {}, 0);
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [lessonPlan.id, saveToIndexedDB]);
};
