import { router, protectedProcedure } from "./helpers/config";
import { ExerciseFindUniqueSchema } from "../generated/schemas/findUniqueExercise.schema";
import { ExerciseFindFirstSchema } from "../generated/schemas/findFirstExercise.schema";
import { ExerciseFindManySchema } from "../generated/schemas/findManyExercise.schema";
import { ExerciseCreateOneSchema } from "../generated/schemas/createOneExercise.schema";
import { ExerciseCreateManySchema } from "../generated/schemas/createManyExercise.schema";
import { ExerciseDeleteOneSchema } from "../generated/schemas/deleteOneExercise.schema";
import { ExerciseUpdateOneSchema } from "../generated/schemas/updateOneExercise.schema";
import { ExerciseDeleteManySchema } from "../generated/schemas/deleteManyExercise.schema";
import { ExerciseUpdateManySchema } from "../generated/schemas/updateManyExercise.schema";
import { ExerciseUpsertSchema } from "../generated/schemas/upsertOneExercise.schema";
import { ExerciseAggregateSchema } from "../generated/schemas/aggregateExercise.schema";
import { ExerciseGroupBySchema } from "../generated/schemas/groupByExercise.schema";
import { ExerciseCountSchema } from "../generated/schemas/countExercise.schema";

export const exercisesRouter = router({
  aggregateExercise: protectedProcedure
    .input(ExerciseAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateExercise = await ctx.prisma.exercise.aggregate(input);
      return aggregateExercise;
    }),
  createManyExercise: protectedProcedure
    .input(ExerciseCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyExercise = await ctx.prisma.exercise.createMany(input);
      return createManyExercise;
    }),
  createOneExercise: protectedProcedure
    .input(ExerciseCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneExercise = await ctx.prisma.exercise.create(input);
      return createOneExercise;
    }),
  deleteManyExercise: protectedProcedure
    .input(ExerciseDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyExercise = await ctx.prisma.exercise.deleteMany(input);
      return deleteManyExercise;
    }),
  deleteOneExercise: protectedProcedure
    .input(ExerciseDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneExercise = await ctx.prisma.exercise.delete(input);
      return deleteOneExercise;
    }),
  findFirstExercise: protectedProcedure
    .input(ExerciseFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstExercise = await ctx.prisma.exercise.findFirst(input);
      return findFirstExercise;
    }),
  findFirstExerciseOrThrow: protectedProcedure
    .input(ExerciseFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstExerciseOrThrow =
        await ctx.prisma.exercise.findFirstOrThrow(input);
      return findFirstExerciseOrThrow;
    }),
  findManyExercise: protectedProcedure
    .input(ExerciseFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyExercise = await ctx.prisma.exercise.findMany(input);
      return findManyExercise;
    }),
  findUniqueExercise: protectedProcedure
    .input(ExerciseFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueExercise = await ctx.prisma.exercise.findUnique(input);
      return findUniqueExercise;
    }),
  findUniqueExerciseOrThrow: protectedProcedure
    .input(ExerciseFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueExerciseOrThrow =
        await ctx.prisma.exercise.findUniqueOrThrow(input);
      return findUniqueExerciseOrThrow;
    }),
  groupByExercise: protectedProcedure
    .input(ExerciseGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByExercise = await ctx.prisma.exercise.groupBy(input);
      return groupByExercise;
    }),
  updateManyExercise: protectedProcedure
    .input(ExerciseUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyExercise = await ctx.prisma.exercise.updateMany(input);
      return updateManyExercise;
    }),
  updateOneExercise: protectedProcedure
    .input(ExerciseUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneExercise = await ctx.prisma.exercise.update(input);
      return updateOneExercise;
    }),
  upsertOneExercise: protectedProcedure
    .input(ExerciseUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneExercise = await ctx.prisma.exercise.upsert(input);
      return upsertOneExercise;
    }),
  countExercise: protectedProcedure
    .input(ExerciseCountSchema)
    .query(async ({ ctx, input }) => {
      const countExercise = await ctx.prisma.exercise.count(input);
      return countExercise;
    }),
});
