import { router, protectedProcedure } from "./helpers/config";
import { CustomerPaymentFindUniqueSchema } from "../generated/schemas/findUniqueCustomerPayment.schema";
import { CustomerPaymentFindFirstSchema } from "../generated/schemas/findFirstCustomerPayment.schema";
import { CustomerPaymentFindManySchema } from "../generated/schemas/findManyCustomerPayment.schema";
import { CustomerPaymentCreateOneSchema } from "../generated/schemas/createOneCustomerPayment.schema";
import { CustomerPaymentCreateManySchema } from "../generated/schemas/createManyCustomerPayment.schema";
import { CustomerPaymentDeleteOneSchema } from "../generated/schemas/deleteOneCustomerPayment.schema";
import { CustomerPaymentUpdateOneSchema } from "../generated/schemas/updateOneCustomerPayment.schema";
import { CustomerPaymentDeleteManySchema } from "../generated/schemas/deleteManyCustomerPayment.schema";
import { CustomerPaymentUpdateManySchema } from "../generated/schemas/updateManyCustomerPayment.schema";
import { CustomerPaymentUpsertSchema } from "../generated/schemas/upsertOneCustomerPayment.schema";
import { CustomerPaymentAggregateSchema } from "../generated/schemas/aggregateCustomerPayment.schema";
import { CustomerPaymentGroupBySchema } from "../generated/schemas/groupByCustomerPayment.schema";

export const customerPaymentsRouter = router({
  aggregateCustomerPayment: protectedProcedure
    .input(CustomerPaymentAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateCustomerPayment =
        await ctx.prisma.customerPayment.aggregate(input);
      return aggregateCustomerPayment;
    }),
  createManyCustomerPayment: protectedProcedure
    .input(CustomerPaymentCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyCustomerPayment =
        await ctx.prisma.customerPayment.createMany(input);
      return createManyCustomerPayment;
    }),
  createOneCustomerPayment: protectedProcedure
    .input(CustomerPaymentCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneCustomerPayment = await ctx.prisma.customerPayment.create(
        input
      );
      return createOneCustomerPayment;
    }),
  deleteManyCustomerPayment: protectedProcedure
    .input(CustomerPaymentDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyCustomerPayment =
        await ctx.prisma.customerPayment.deleteMany(input);
      return deleteManyCustomerPayment;
    }),
  deleteOneCustomerPayment: protectedProcedure
    .input(CustomerPaymentDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneCustomerPayment = await ctx.prisma.customerPayment.delete(
        input
      );
      return deleteOneCustomerPayment;
    }),
  findFirstCustomerPayment: protectedProcedure
    .input(CustomerPaymentFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCustomerPayment =
        await ctx.prisma.customerPayment.findFirst(input);
      return findFirstCustomerPayment;
    }),
  findFirstCustomerPaymentOrThrow: protectedProcedure
    .input(CustomerPaymentFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCustomerPaymentOrThrow =
        await ctx.prisma.customerPayment.findFirstOrThrow(input);
      return findFirstCustomerPaymentOrThrow;
    }),
  findManyCustomerPayment: protectedProcedure
    .input(CustomerPaymentFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyCustomerPayment = await ctx.prisma.customerPayment.findMany(
        input
      );
      return findManyCustomerPayment;
    }),
  findUniqueCustomerPayment: protectedProcedure
    .input(CustomerPaymentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCustomerPayment =
        await ctx.prisma.customerPayment.findUnique(input);
      return findUniqueCustomerPayment;
    }),
  findUniqueCustomerPaymentOrThrow: protectedProcedure
    .input(CustomerPaymentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCustomerPaymentOrThrow =
        await ctx.prisma.customerPayment.findUniqueOrThrow(input);
      return findUniqueCustomerPaymentOrThrow;
    }),
  groupByCustomerPayment: protectedProcedure
    .input(CustomerPaymentGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByCustomerPayment = await ctx.prisma.customerPayment.groupBy(
        input
      );
      return groupByCustomerPayment;
    }),
  updateManyCustomerPayment: protectedProcedure
    .input(CustomerPaymentUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyCustomerPayment =
        await ctx.prisma.customerPayment.updateMany(input);
      return updateManyCustomerPayment;
    }),
  updateOneCustomerPayment: protectedProcedure
    .input(CustomerPaymentUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneCustomerPayment = await ctx.prisma.customerPayment.update(
        input
      );
      return updateOneCustomerPayment;
    }),
  upsertOneCustomerPayment: protectedProcedure
    .input(CustomerPaymentUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneCustomerPayment = await ctx.prisma.customerPayment.upsert(
        input
      );
      return upsertOneCustomerPayment;
    }),
});
