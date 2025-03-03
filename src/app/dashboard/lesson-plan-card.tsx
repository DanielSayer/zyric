import { Backgrounds } from "@/components/backgrounds";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type LessonPlanCardProps = {
  id: string;
  name: string | null;
};

export const LessonPlanCard = ({ id, name }: LessonPlanCardProps) => {
  return (
    <Link
      href={`/dashboard/${id}`}
      className="max-w-96 transition-all duration-200 hover:scale-[1.02]"
    >
      <Card>
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
          <Backgrounds.Constellation className="rounded-t-xl object-cover" />
        </div>
        <CardHeader>
          <CardTitle>{name ?? "Untitled Lesson Plan"}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
};
