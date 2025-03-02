import type { PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";

type EditorProps = {
  initialContent?: string;
};

export const useEditor = ({ initialContent }: EditorProps) => {
  return useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });
};

export type ZyricEditor = ReturnType<typeof useEditor>;
