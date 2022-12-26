import { router, protectedProcedure } from "./helpers/config";
import { SessionFindUniqueSchema } from "../generated/schemas/findUniqueSession.schema";
import { SessionFindFirstSchema } from "../generated/schemas/findFirstSession.schema";
import { SessionFindManySchema } from "../generated/schemas/findManySession.schema";
import { SessionCreateOneSchema } from "../generated/schemas/createOneSession.schema";
import { SessionCreateManySchema } from "../generated/schemas/createManySession.schema";
import { SessionDeleteOneSchema } from "../generated/schemas/deleteOneSession.schema";
import { SessionUpdateOneSchema } from "../generated/schemas/updateOneSession.schema";
import { SessionDeleteManySchema } from "../generated/schemas/deleteManySession.schema";
import { SessionUpdateManySchema } from "../generated/schemas/updateManySession.schema";
import { SessionUpsertSchema } from "../generated/schemas/upsertOneSession.schema";
import { SessionAggregateSchema } from "../generated/schemas/aggregateSession.schema";
import { SessionGroupBySchema } from "../generated/schemas/groupBySession.schema";

export const sessionsRouter = router({
  aggregateSession: protectedProcedure
    .input(SessionAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateSession = await ctx.prisma.session.aggregate(input);
      return aggregateSession;
    }),
  createManySession: protectedProcedure
    .input(SessionCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManySession = await ctx.prisma.session.createMany(input);
      return createManySession;
    }),
  createOneSession: protectedProcedure
    .input(SessionCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneSession = await ctx.prisma.session.create(input);
      return createOneSession;
    }),
  deleteManySession: protectedProcedure
    .input(SessionDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManySession = await ctx.prisma.session.deleteMany(input);
      return deleteManySession;
    }),
  deleteOneSession: protectedProcedure
    .input(SessionDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneSession = await ctx.prisma.session.delete(input);
      return deleteOneSession;
    }),
  findFirstSession: protectedProcedure
    .input(SessionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstSession = await ctx.prisma.session.findFirst(input);
      return findFirstSession;
    }),
  findFirstSessionOrThrow: protectedProcedure
    .input(SessionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstSessionOrThrow = await ctx.prisma.session.findFirstOrThrow(
        input
      );
      return findFirstSessionOrThrow;
    }),
  findManySession: protectedProcedure
    .input(SessionFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManySession = await ctx.prisma.session.findMany(input);
      return findManySession;
    }),
  findUniqueSession: protectedProcedure
    .input(SessionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueSession = await ctx.prisma.session.findUnique(input);
      return findUniqueSession;
    }),
  findUniqueSessionOrThrow: protectedProcedure
    .input(SessionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueSessionOrThrow =
        await ctx.prisma.session.findUniqueOrThrow(input);
      return findUniqueSessionOrThrow;
    }),
  groupBySession: protectedProcedure
    .input(SessionGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupBySession = await ctx.prisma.session.groupBy(input);
      return groupBySession;
    }),
  updateManySession: protectedProcedure
    .input(SessionUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManySession = await ctx.prisma.session.updateMany(input);
      return updateManySession;
    }),
  updateOneSession: protectedProcedure
    .input(SessionUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneSession = await ctx.prisma.session.update(input);
      return updateOneSession;
    }),
  upsertOneSession: protectedProcedure
    .input(SessionUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneSession = await ctx.prisma.session.upsert(input);
      return upsertOneSession;
    }),
});
