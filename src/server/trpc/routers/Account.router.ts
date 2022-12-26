import { router, protectedProcedure } from "./helpers/config";
import { AccountFindUniqueSchema } from "../generated/schemas/findUniqueAccount.schema";
import { AccountFindFirstSchema } from "../generated/schemas/findFirstAccount.schema";
import { AccountFindManySchema } from "../generated/schemas/findManyAccount.schema";
import { AccountCreateOneSchema } from "../generated/schemas/createOneAccount.schema";
import { AccountCreateManySchema } from "../generated/schemas/createManyAccount.schema";
import { AccountDeleteOneSchema } from "../generated/schemas/deleteOneAccount.schema";
import { AccountUpdateOneSchema } from "../generated/schemas/updateOneAccount.schema";
import { AccountDeleteManySchema } from "../generated/schemas/deleteManyAccount.schema";
import { AccountUpdateManySchema } from "../generated/schemas/updateManyAccount.schema";
import { AccountUpsertSchema } from "../generated/schemas/upsertOneAccount.schema";
import { AccountAggregateSchema } from "../generated/schemas/aggregateAccount.schema";
import { AccountGroupBySchema } from "../generated/schemas/groupByAccount.schema";

export const accountsRouter = router({
  aggregateAccount: protectedProcedure
    .input(AccountAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateAccount = await ctx.prisma.account.aggregate(input);
      return aggregateAccount;
    }),
  createManyAccount: protectedProcedure
    .input(AccountCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyAccount = await ctx.prisma.account.createMany(input);
      return createManyAccount;
    }),
  createOneAccount: protectedProcedure
    .input(AccountCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneAccount = await ctx.prisma.account.create(input);
      return createOneAccount;
    }),
  deleteManyAccount: protectedProcedure
    .input(AccountDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyAccount = await ctx.prisma.account.deleteMany(input);
      return deleteManyAccount;
    }),
  deleteOneAccount: protectedProcedure
    .input(AccountDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneAccount = await ctx.prisma.account.delete(input);
      return deleteOneAccount;
    }),
  findFirstAccount: protectedProcedure
    .input(AccountFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAccount = await ctx.prisma.account.findFirst(input);
      return findFirstAccount;
    }),
  findFirstAccountOrThrow: protectedProcedure
    .input(AccountFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAccountOrThrow = await ctx.prisma.account.findFirstOrThrow(
        input
      );
      return findFirstAccountOrThrow;
    }),
  findManyAccount: protectedProcedure
    .input(AccountFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyAccount = await ctx.prisma.account.findMany(input);
      return findManyAccount;
    }),
  findUniqueAccount: protectedProcedure
    .input(AccountFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAccount = await ctx.prisma.account.findUnique(input);
      return findUniqueAccount;
    }),
  findUniqueAccountOrThrow: protectedProcedure
    .input(AccountFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAccountOrThrow =
        await ctx.prisma.account.findUniqueOrThrow(input);
      return findUniqueAccountOrThrow;
    }),
  groupByAccount: protectedProcedure
    .input(AccountGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByAccount = await ctx.prisma.account.groupBy(input);
      return groupByAccount;
    }),
  updateManyAccount: protectedProcedure
    .input(AccountUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyAccount = await ctx.prisma.account.updateMany(input);
      return updateManyAccount;
    }),
  updateOneAccount: protectedProcedure
    .input(AccountUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneAccount = await ctx.prisma.account.update(input);
      return updateOneAccount;
    }),
  upsertOneAccount: protectedProcedure
    .input(AccountUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneAccount = await ctx.prisma.account.upsert(input);
      return upsertOneAccount;
    }),
});
