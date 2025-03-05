import { backgrounds } from "@/lib/backgrounds";
import type { Optional } from "@/lib/types/optional";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { PlansTable } from "@/server/db/schema";
import { DBLessonPlan } from "@/server/db/types";
import { TRPCError } from "@trpc/server";
import { eq, and } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";

export const plansRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const lessonPlans = await ctx.db.query.PlansTable.findMany({
      columns: { id: true, name: true, background: true, createdAt: true },
      where: eq(PlansTable.userId, ctx.userId),
    });

    return lessonPlans
      .map(({ id, ...x }) => ({ id: id.toString(), ...x }))
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }),
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const [lessonPlan] = await ctx.db
      .insert(PlansTable)
      .values({
        userId: ctx.userId,
      })
      .returning({
        id: PlansTable.id,
      });

    if (!lessonPlan) {
      throw new TRPCError({
        message: "Failed to create lesson plan",
        code: "INTERNAL_SERVER_ERROR",
      });
    }

    return lessonPlan;
  }),
  get: protectedProcedure
    .input(
      z.object({
        planId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const parsedId = BigInt(input.planId);

      if (parsedId === undefined) {
        redirect("/not-found");
      }

      const lessonPlan = (await ctx.db.query.PlansTable.findFirst({
        where: and(
          eq(PlansTable.id, parsedId),
          eq(PlansTable.userId, ctx.userId),
        ),
      })) as Optional<DBLessonPlan>;

      if (!lessonPlan) {
        throw new TRPCError({
          message: "Failed to create get plan",
          code: "INTERNAL_SERVER_ERROR",
        });
      }

      return lessonPlan;
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        coverId: z.enum(backgrounds).nullable(),
        content: z.array(z.any()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...rest } = input;
      const parsedId = BigInt(id);

      if (parsedId === undefined) {
        redirect("/not-found");
      }

      const updatedLessonPlan = await ctx.db
        .update(PlansTable)
        .set({
          name: rest.title,
          background: rest.coverId,
          content: rest.content,
        })
        .where(
          and(eq(PlansTable.id, parsedId), eq(PlansTable.userId, ctx.userId)),
        )
        .returning({ id: PlansTable.id });

      if (!updatedLessonPlan) {
        throw new TRPCError({
          message: `Failed to update lesson plan ${id}, user ${ctx.userId}`,
          code: "NOT_FOUND",
        });
      }

      return updatedLessonPlan;
    }),
});
