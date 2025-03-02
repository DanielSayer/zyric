"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";

import { BlockNoteView } from "@blocknote/shadcn";
import { Textarea } from "../ui/textarea";
import { AddCoverButton } from "./add-cover-button";
import { Cover } from "./cover";
import { CustomSlashMenu } from "./custom-slash-menu";
import { useEditor } from "./useEditor";
import { useState } from "react";

type EditorProps = {
  isEditable: boolean;
  initialContent?: string;
  onChange: () => void;
};

export default function Editor({
  isEditable,
  initialContent,
  onChange,
}: EditorProps) {
  const editor = useEditor({ initialContent });
  const [coverUrl, setCoverUrl] = useState<string | null>(null);

  const handleCoverUpload = (coverUrl: string) => {
    setCoverUrl(coverUrl);
  };

  return (
    <div className="flex h-full w-full flex-col gap-12">
      <Cover coverUrl={coverUrl} />
      <div className="container mx-auto space-y-4">
        <div className="group flex flex-col gap-2">
          <div className="flex opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <AddCoverButton handleCoverUpload={handleCoverUpload} />
          </div>
          <Textarea
            className="line-clamp-1 min-h-0 resize-none appearance-none overflow-hidden truncate border-none p-0 !text-4xl font-bold shadow-none outline-none focus:outline-none focus-visible:ring-0"
            rows={1}
            placeholder="Untitled Page"
          />
        </div>
        <div className="-mx-[54px]">
          <BlockNoteView
            editor={editor}
            onChange={onChange}
            editable={isEditable}
            slashMenu={false}
            theme="light"
          >
            <CustomSlashMenu editor={editor} />
          </BlockNoteView>
        </div>
      </div>
    </div>
  );
}
