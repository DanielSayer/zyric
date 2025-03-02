"use client";

import { Editor } from "@/components/editor";

export default function Home() {
  return (
    <Editor
      isEditable={true}
      onChange={() => {
        console.log("change");
      }}
    />
  );
}
