import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { BackgroundId } from "@/lib/backgrounds";
import Link from "next/link";

type LessonPlanCardProps = {
  id: string;
  background: BackgroundId | undefined;
  name: string | null;
};

export const LessonPlanCard = ({ id, name }: LessonPlanCardProps) => {
  return (
    <Link
      href={`/dashboard/${id}`}
      className="max-w-96 transition-all duration-200 hover:scale-[1.02]"
    >
      <Card>
        <div className="Rainbow relative h-48 w-full overflow-hidden rounded-t-xl"></div>
        <CardHeader>
          <CardTitle>{name ?? "Untitled Lesson Plan"}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
};
