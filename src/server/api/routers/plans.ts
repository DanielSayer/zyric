import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { PlansTable } from "@/server/db/schema";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";

export const plansRouter = createTRPCRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
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
});
