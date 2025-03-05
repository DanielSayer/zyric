import Dexie, { type EntityTable } from "dexie";
import type { BackgroundId } from "../backgrounds";
import type { Block } from "@blocknote/core";

type IDBLessonPlan = {
  id: string;
  title: string;
  backgroundId: BackgroundId | undefined;
  content: Block[];
};

const db = new Dexie("zyric") as Dexie & {
  lessonPlans: EntityTable<IDBLessonPlan, "id">;
};

db.version(1).stores({
  lessonPlans: "id,backgroundId,title,content",
});

export default db;
