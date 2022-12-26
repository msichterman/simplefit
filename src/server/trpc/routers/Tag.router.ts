import { router, protectedProcedure } from "./helpers/config";
import { TagFindUniqueSchema } from "../generated/schemas/findUniqueTag.schema";
import { TagFindFirstSchema } from "../generated/schemas/findFirstTag.schema";
import { TagFindManySchema } from "../generated/schemas/findManyTag.schema";
import { TagCreateOneSchema } from "../generated/schemas/createOneTag.schema";
import { TagCreateManySchema } from "../generated/schemas/createManyTag.schema";
import { TagDeleteOneSchema } from "../generated/schemas/deleteOneTag.schema";
import { TagUpdateOneSchema } from "../generated/schemas/updateOneTag.schema";
import { TagDeleteManySchema } from "../generated/schemas/deleteManyTag.schema";
import { TagUpdateManySchema } from "../generated/schemas/updateManyTag.schema";
import { TagUpsertSchema } from "../generated/schemas/upsertOneTag.schema";
import { TagAggregateSchema } from "../generated/schemas/aggregateTag.schema";
import { TagGroupBySchema } from "../generated/schemas/groupByTag.schema";

export const tagsRouter = router({
  aggregateTag: protectedProcedure
    .input(TagAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateTag = await ctx.prisma.tag.aggregate(input);
      return aggregateTag;
    }),
  createManyTag: protectedProcedure
    .input(TagCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyTag = await ctx.prisma.tag.createMany(input);
      return createManyTag;
    }),
  createOneTag: protectedProcedure
    .input(TagCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneTag = await ctx.prisma.tag.create(input);
      return createOneTag;
    }),
  deleteManyTag: protectedProcedure
    .input(TagDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyTag = await ctx.prisma.tag.deleteMany(input);
      return deleteManyTag;
    }),
  deleteOneTag: protectedProcedure
    .input(TagDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneTag = await ctx.prisma.tag.delete(input);
      return deleteOneTag;
    }),
  findFirstTag: protectedProcedure
    .input(TagFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstTag = await ctx.prisma.tag.findFirst(input);
      return findFirstTag;
    }),
  findFirstTagOrThrow: protectedProcedure
    .input(TagFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstTagOrThrow = await ctx.prisma.tag.findFirstOrThrow(input);
      return findFirstTagOrThrow;
    }),
  findManyTag: protectedProcedure
    .input(TagFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyTag = await ctx.prisma.tag.findMany(input);
      return findManyTag;
    }),
  findUniqueTag: protectedProcedure
    .input(TagFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueTag = await ctx.prisma.tag.findUnique(input);
      return findUniqueTag;
    }),
  findUniqueTagOrThrow: protectedProcedure
    .input(TagFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueTagOrThrow = await ctx.prisma.tag.findUniqueOrThrow(
        input
      );
      return findUniqueTagOrThrow;
    }),
  groupByTag: protectedProcedure
    .input(TagGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByTag = await ctx.prisma.tag.groupBy(input);
      return groupByTag;
    }),
  updateManyTag: protectedProcedure
    .input(TagUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyTag = await ctx.prisma.tag.updateMany(input);
      return updateManyTag;
    }),
  updateOneTag: protectedProcedure
    .input(TagUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneTag = await ctx.prisma.tag.update(input);
      return updateOneTag;
    }),
  upsertOneTag: protectedProcedure
    .input(TagUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneTag = await ctx.prisma.tag.upsert(input);
      return upsertOneTag;
    }),
});
