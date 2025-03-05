"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import "@/styles/editor.css";

import type { LessonPlan } from "@/lib/types/plan";
import { BlockNoteView } from "@blocknote/shadcn";
import { Textarea } from "../ui/textarea";
import { AddCoverButton } from "./add-cover-button";
import { Cover } from "./cover";
import { CustomSlashMenu } from "./custom-slash-menu";
import { useEditor } from "./useEditor";
import { useSyncLessonPlanToIndexDb } from "./useSyncLessonPlanToIndexDb";

type EditorProps = {
  lessonPlan: LessonPlan;
};

export default function Editor({ lessonPlan }: EditorProps) {
  const editor = useEditor({ initialContent: undefined });

  const {
    title,
    coverId,
    handleCoverChange,
    handleTitleChange,
    handleBlockChange,
  } = useSyncLessonPlanToIndexDb({ lessonPlan });

  const onChange = () => {
    handleBlockChange(editor.document);
  };

  return (
    <div className="flex h-full w-full flex-col gap-12">
      <Cover background={coverId} />
      <div className="container mx-auto mt-4 space-y-4">
        <div className="group flex flex-col gap-2">
          <div className="duration-400 flex opacity-0 transition-opacity group-hover:opacity-100">
            <AddCoverButton handleCoverChange={handleCoverChange} />
          </div>
          <Textarea
            className="line-clamp-1 min-h-0 resize-none appearance-none overflow-hidden truncate border-none p-0 !text-4xl font-bold shadow-none outline-none focus:outline-none focus-visible:ring-0"
            rows={1}
            placeholder="Untitled Page"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </div>
        <div className="-mx-[54px]">
          <BlockNoteView
            editor={editor}
            slashMenu={false}
            theme="dark"
            onChange={onChange}
          >
            <CustomSlashMenu editor={editor} />
          </BlockNoteView>
        </div>
      </div>
    </div>
  );
}
