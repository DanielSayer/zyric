"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import "@/styles/editor.css";

import { BlockNoteView } from "@blocknote/shadcn";
import { Textarea } from "../ui/textarea";
import { AddCoverButton } from "./add-cover-button";
import { Cover } from "./cover";
import { CustomSlashMenu } from "./custom-slash-menu";
import { useEditor } from "./useEditor";
import type { LessonPlan } from "@/lib/types/plan";
import { useEffect, useState } from "react";
import db from "@/lib/db/db";

type EditorProps = {
  isEditable: boolean;
  lessonPlan: LessonPlan;
  onChange: () => void;
};

export default function Editor({
  lessonPlan,
  isEditable,
  onChange,
}: EditorProps) {
  const editor = useEditor({ initialContent: undefined });

  const [title, setTitle] = useState(lessonPlan.name ?? "");
  const [coverId, setCoverId] = useState(lessonPlan.background);

  useEffect(() => {
    const saveToIdb = async () => {
      await db.lessonPlans.put({
        id: lessonPlan.id,
        title,
        backgroundId: coverId,
      });
    };

    void saveToIdb();
  }, [lessonPlan.id, title, coverId]);

  return (
    <div className="flex h-full w-full flex-col gap-12">
      <Cover background={coverId} />
      <div className="container mx-auto mt-4 space-y-4">
        <div className="group flex flex-col gap-2">
          <div className="duration-400 flex opacity-0 transition-opacity group-hover:opacity-100">
            <AddCoverButton handleCoverChange={setCoverId} />
          </div>
          <Textarea
            className="line-clamp-1 min-h-0 resize-none appearance-none overflow-hidden truncate border-none p-0 !text-4xl font-bold shadow-none outline-none focus:outline-none focus-visible:ring-0"
            rows={1}
            placeholder="Untitled Page"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="-mx-[54px]">
          <BlockNoteView
            editor={editor}
            onChange={onChange}
            editable={isEditable}
            slashMenu={false}
            theme="dark"
          >
            <CustomSlashMenu editor={editor} />
          </BlockNoteView>
        </div>
      </div>
    </div>
  );
}
