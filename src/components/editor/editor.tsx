"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";

import type { PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import { Cover } from "./cover";
import { Camera } from "lucide-react";
import { Button } from "../ui/button";

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
  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });

  return (
    <div className="flex h-full w-full flex-col gap-12">
      <Cover />
      <div className="container mx-auto space-y-4">
        <div className="group flex flex-col gap-2">
          <div className="opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <Button className="h-8" disabled>
              <Camera className="h-4 w-4" />
              Add cover
            </Button>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight">
            This is a title
          </h1>
        </div>
        <div className="-mx-[54px]">
          <BlockNoteView
            editor={editor}
            onChange={onChange}
            editable={isEditable}
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}
