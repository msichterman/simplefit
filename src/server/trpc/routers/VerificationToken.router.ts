import { router, protectedProcedure } from "./helpers/config";
import { VerificationTokenFindUniqueSchema } from "../generated/schemas/findUniqueVerificationToken.schema";
import { VerificationTokenFindFirstSchema } from "../generated/schemas/findFirstVerificationToken.schema";
import { VerificationTokenFindManySchema } from "../generated/schemas/findManyVerificationToken.schema";
import { VerificationTokenCreateOneSchema } from "../generated/schemas/createOneVerificationToken.schema";
import { VerificationTokenCreateManySchema } from "../generated/schemas/createManyVerificationToken.schema";
import { VerificationTokenDeleteOneSchema } from "../generated/schemas/deleteOneVerificationToken.schema";
import { VerificationTokenUpdateOneSchema } from "../generated/schemas/updateOneVerificationToken.schema";
import { VerificationTokenDeleteManySchema } from "../generated/schemas/deleteManyVerificationToken.schema";
import { VerificationTokenUpdateManySchema } from "../generated/schemas/updateManyVerificationToken.schema";
import { VerificationTokenUpsertSchema } from "../generated/schemas/upsertOneVerificationToken.schema";
import { VerificationTokenAggregateSchema } from "../generated/schemas/aggregateVerificationToken.schema";
import { VerificationTokenGroupBySchema } from "../generated/schemas/groupByVerificationToken.schema";

export const verificationTokensRouter = router({
  aggregateVerificationToken: protectedProcedure
    .input(VerificationTokenAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateVerificationToken =
        await ctx.prisma.verificationToken.aggregate(input);
      return aggregateVerificationToken;
    }),
  createManyVerificationToken: protectedProcedure
    .input(VerificationTokenCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyVerificationToken =
        await ctx.prisma.verificationToken.createMany(input);
      return createManyVerificationToken;
    }),
  createOneVerificationToken: protectedProcedure
    .input(VerificationTokenCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneVerificationToken =
        await ctx.prisma.verificationToken.create(input);
      return createOneVerificationToken;
    }),
  deleteManyVerificationToken: protectedProcedure
    .input(VerificationTokenDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyVerificationToken =
        await ctx.prisma.verificationToken.deleteMany(input);
      return deleteManyVerificationToken;
    }),
  deleteOneVerificationToken: protectedProcedure
    .input(VerificationTokenDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneVerificationToken =
        await ctx.prisma.verificationToken.delete(input);
      return deleteOneVerificationToken;
    }),
  findFirstVerificationToken: protectedProcedure
    .input(VerificationTokenFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstVerificationToken =
        await ctx.prisma.verificationToken.findFirst(input);
      return findFirstVerificationToken;
    }),
  findFirstVerificationTokenOrThrow: protectedProcedure
    .input(VerificationTokenFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstVerificationTokenOrThrow =
        await ctx.prisma.verificationToken.findFirstOrThrow(input);
      return findFirstVerificationTokenOrThrow;
    }),
  findManyVerificationToken: protectedProcedure
    .input(VerificationTokenFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyVerificationToken =
        await ctx.prisma.verificationToken.findMany(input);
      return findManyVerificationToken;
    }),
  findUniqueVerificationToken: protectedProcedure
    .input(VerificationTokenFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVerificationToken =
        await ctx.prisma.verificationToken.findUnique(input);
      return findUniqueVerificationToken;
    }),
  findUniqueVerificationTokenOrThrow: protectedProcedure
    .input(VerificationTokenFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVerificationTokenOrThrow =
        await ctx.prisma.verificationToken.findUniqueOrThrow(input);
      return findUniqueVerificationTokenOrThrow;
    }),
  groupByVerificationToken: protectedProcedure
    .input(VerificationTokenGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByVerificationToken =
        await ctx.prisma.verificationToken.groupBy(input);
      return groupByVerificationToken;
    }),
  updateManyVerificationToken: protectedProcedure
    .input(VerificationTokenUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyVerificationToken =
        await ctx.prisma.verificationToken.updateMany(input);
      return updateManyVerificationToken;
    }),
  updateOneVerificationToken: protectedProcedure
    .input(VerificationTokenUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneVerificationToken =
        await ctx.prisma.verificationToken.update(input);
      return updateOneVerificationToken;
    }),
  upsertOneVerificationToken: protectedProcedure
    .input(VerificationTokenUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneVerificationToken =
        await ctx.prisma.verificationToken.upsert(input);
      return upsertOneVerificationToken;
    }),
});
