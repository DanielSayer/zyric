import type { IDBLessonPlan } from "@/lib/db/db";
import indexDb from "@/lib/db/db";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type UseSyncOnUnmountProps = {
  lessonPlan: Omit<IDBLessonPlan, "updatedAt">;
};

export const useSyncOnUnmount = ({ lessonPlan }: UseSyncOnUnmountProps) => {
  const saveToIndexDbRef = useRef<() => void>();
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    saveToIndexDbRef.current = () => {
      indexDb
        .table("lessonPlans")
        .put({
          id: lessonPlan.id,
          title: lessonPlan.title ?? "",
          backgroundId: lessonPlan.backgroundId,
          content: lessonPlan.content,
          updatedAt: new Date().toISOString(),
        })
        .catch(console.error);
    };
  }, [lessonPlan]);

  useEffect(() => {
    return () => {
      saveToIndexDbRef.current?.();
    };
  }, [pathname, params]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      saveToIndexDbRef.current?.();

      // This ensures the above runs
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setTimeout(() => {}, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [lessonPlan.id]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        saveToIndexDbRef.current?.();

        // This ensures the above runs
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setTimeout(() => {}, 0);
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [lessonPlan.id]);
};
