import { router, protectedProcedure } from "./helpers/config";
import { WorkoutFindUniqueSchema } from "../generated/schemas/findUniqueWorkout.schema";
import { WorkoutFindFirstSchema } from "../generated/schemas/findFirstWorkout.schema";
import { WorkoutFindManySchema } from "../generated/schemas/findManyWorkout.schema";
import { WorkoutCreateOneSchema } from "../generated/schemas/createOneWorkout.schema";
import { WorkoutCreateManySchema } from "../generated/schemas/createManyWorkout.schema";
import { WorkoutDeleteOneSchema } from "../generated/schemas/deleteOneWorkout.schema";
import { WorkoutUpdateOneSchema } from "../generated/schemas/updateOneWorkout.schema";
import { WorkoutDeleteManySchema } from "../generated/schemas/deleteManyWorkout.schema";
import { WorkoutUpdateManySchema } from "../generated/schemas/updateManyWorkout.schema";
import { WorkoutUpsertSchema } from "../generated/schemas/upsertOneWorkout.schema";
import { WorkoutAggregateSchema } from "../generated/schemas/aggregateWorkout.schema";
import { WorkoutGroupBySchema } from "../generated/schemas/groupByWorkout.schema";

export const workoutsRouter = router({
  aggregateWorkout: protectedProcedure
    .input(WorkoutAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateWorkout = await ctx.prisma.workout.aggregate(input);
      return aggregateWorkout;
    }),
  createManyWorkout: protectedProcedure
    .input(WorkoutCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyWorkout = await ctx.prisma.workout.createMany(input);
      return createManyWorkout;
    }),
  createOneWorkout: protectedProcedure
    .input(WorkoutCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneWorkout = await ctx.prisma.workout.create({
        data: {
          name: input.data.name,
          description: input.data.description,
          author: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          exercises: input.data.exercises,
          tags: input.data.tags,
        },
      });
      return createOneWorkout;
    }),
  deleteManyWorkout: protectedProcedure
    .input(WorkoutDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyWorkout = await ctx.prisma.workout.deleteMany(input);
      return deleteManyWorkout;
    }),
  deleteOneWorkout: protectedProcedure
    .input(WorkoutDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneWorkout = await ctx.prisma.workout.delete(input);
      return deleteOneWorkout;
    }),
  findFirstWorkout: protectedProcedure
    .input(WorkoutFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstWorkout = await ctx.prisma.workout.findFirst(input);
      return findFirstWorkout;
    }),
  findFirstWorkoutOrThrow: protectedProcedure
    .input(WorkoutFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstWorkoutOrThrow = await ctx.prisma.workout.findFirstOrThrow(
        input
      );
      return findFirstWorkoutOrThrow;
    }),
  findManyWorkout: protectedProcedure
    .input(WorkoutFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyWorkout = await ctx.prisma.workout.findMany(input);
      return findManyWorkout;
    }),
  findUniqueWorkout: protectedProcedure
    .input(WorkoutFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueWorkout = await ctx.prisma.workout.findUnique(input);
      return findUniqueWorkout;
    }),
  findUniqueWorkoutOrThrow: protectedProcedure
    .input(WorkoutFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueWorkoutOrThrow =
        await ctx.prisma.workout.findUniqueOrThrow(input);
      return findUniqueWorkoutOrThrow;
    }),
  groupByWorkout: protectedProcedure
    .input(WorkoutGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByWorkout = await ctx.prisma.workout.groupBy(input);
      return groupByWorkout;
    }),
  updateManyWorkout: protectedProcedure
    .input(WorkoutUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyWorkout = await ctx.prisma.workout.updateMany(input);
      return updateManyWorkout;
    }),
  updateOneWorkout: protectedProcedure
    .input(WorkoutUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneWorkout = await ctx.prisma.workout.update(input);
      return updateOneWorkout;
    }),
  upsertOneWorkout: protectedProcedure
    .input(WorkoutUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneWorkout = await ctx.prisma.workout.upsert(input);
      return upsertOneWorkout;
    }),
});
