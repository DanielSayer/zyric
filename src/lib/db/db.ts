import Dexie, { type EntityTable } from "dexie";
import type { BackgroundId } from "../backgrounds";

type IDBLessonPlan = {
  id: string;
  title: string;
  backgroundId: BackgroundId | undefined;
};

const db = new Dexie("zyric") as Dexie & {
  lessonPlans: EntityTable<IDBLessonPlan, "id">;
};

db.version(1).stores({
  lessonPlans: "id, backgroundId, title",
});

export default db;
