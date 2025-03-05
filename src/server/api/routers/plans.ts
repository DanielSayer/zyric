import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { PlansTable } from "@/server/db/schema";
import { TRPCError } from "@trpc/server";
import { eq, and } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";

export const plansRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.query.PlansTable.findMany({
      where: eq(PlansTable.userId, ctx.userId),
    });

    return posts
      .map(({ id, ...x }) => ({ id: id.toString(), ...x }))
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }),
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const [post] = await ctx.db
      .insert(PlansTable)
      .values({
        userId: ctx.userId,
      })
      .returning({
        id: PlansTable.id,
      });

    if (!post) {
      throw new TRPCError({
        message: "Failed to create lesson plan",
        code: "INTERNAL_SERVER_ERROR",
      });
    }

    return post;
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

      const post = await ctx.db.query.PlansTable.findFirst({
        where: and(
          eq(PlansTable.id, parsedId),
          eq(PlansTable.userId, ctx.userId),
        ),
      });

      if (!post) {
        throw new TRPCError({
          message: "Failed to create get plan",
          code: "INTERNAL_SERVER_ERROR",
        });
      }

      const { id, ...rest } = post;
      return {
        id: id.toString(),
        ...rest,
      };
    }),
});
