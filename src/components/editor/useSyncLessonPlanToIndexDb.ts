import { useDebounce } from "@/hooks/use-debounce";
import db from "@/lib/db/db";
import type { LessonPlan } from "@/lib/types/plan";
import type { Block } from "@blocknote/core";
import { useEffect, useState } from "react";

const TITLE_DEBOUNCE = 1000;
const BLOCK_SAVE_DEBOUNCE = 5000;

type HookProps = {
  lessonPlan: LessonPlan;
};

export const useSyncLessonPlanToIndexDb = ({ lessonPlan }: HookProps) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const debouncedBlocks = useDebounce(blocks, BLOCK_SAVE_DEBOUNCE);

  const [title, setTitle] = useState(lessonPlan.name ?? "");
  const debouncedTitle = useDebounce(title, TITLE_DEBOUNCE);

  const [coverId, setCoverId] = useState(lessonPlan.background);

  useEffect(() => {
    const saveToIdb = async () => {
      await db.lessonPlans.put({
        id: lessonPlan.id,
        title: debouncedTitle,
        backgroundId: coverId,
        content: debouncedBlocks,
      });
    };

    void saveToIdb();
  }, [lessonPlan.id, debouncedTitle, coverId, debouncedBlocks]);

  return {
    title,
    coverId,
    handleTitleChange: setTitle,
    handleCoverChange: setCoverId,
    handleBlockChange: setBlocks,
  };
};
