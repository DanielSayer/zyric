import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { BackgroundId } from "@/lib/backgrounds";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LessonPlanCardProps = {
  id: string;
  background: BackgroundId | null;
  name: string | null;
};

export const LessonPlanCard = ({
  id,
  name,
  background,
}: LessonPlanCardProps) => {
  return (
    <Link
      href={`/dashboard/${id}`}
      className="max-w-96 transition-all duration-200 hover:scale-[1.02]"
    >
      <Card>
        <div
          className={cn(
            "relative h-48 w-full overflow-hidden rounded-t-xl",
            {
              "bg-neutral-400": !background,
            },
            { background: !!background },
          )}
        ></div>
        <CardHeader>
          <CardTitle>{name ?? "Untitled Lesson Plan"}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
};
