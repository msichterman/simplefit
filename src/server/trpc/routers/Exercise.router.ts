import { z } from "zod";
import { router, protectedProcedure, adminProcedure } from "./helpers/config";

const exerciseIdSchema = z.number();
const exerciseNameSchema = z.string().min(2).max(100);
const exerciseDifficultySchema = z.string().min(2).max(64);
const exerciseSetsSchema = z.number();
const exerciseRepsSchema = z.string();
const exerciseRestSchema = z.string();
const exerciseConnectTagsSchema = z.array(z.object({ id: z.number() }));
const exerciseConnectWorkoutsSchema = z.array(z.object({ id: z.number() }));
const exerciseExampleLinkSchema = z.string();

const exerciseWhereQuery = (searchString: string) => ({
  where: {
    OR: [
      {
        name: {
          search: searchString,
        },
      },
      {
        name: {
          contains: searchString,
        },
      },
    ],
  },
});

export const exerciseRouter = router({
  create: adminProcedure
    .input(
      z.object({
        name: exerciseNameSchema,
        difficulty: exerciseDifficultySchema,
        sets: exerciseSetsSchema,
        reps: exerciseRepsSchema,
        rest: exerciseRestSchema,
        tags: exerciseConnectTagsSchema,
        exampleLink: exerciseExampleLinkSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const createdExercise = await ctx.prisma.exercise.create({
        data: {
          name: input.name,
          difficulty: input.difficulty,
          sets: input.sets,
          reps: input.reps,
          rest: input.rest,
          exampleLink: input.exampleLink,

          author: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          tags: {
            connect: input.tags,
          },
        },
      });
      return createdExercise;
    }),
  read: protectedProcedure
    .input(
      z.object({
        id: exerciseIdSchema,
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.exercise.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  update: adminProcedure
    .input(
      z
        .object({
          name: exerciseNameSchema,
          difficulty: exerciseDifficultySchema,
          sets: exerciseSetsSchema,
          reps: exerciseRepsSchema,
          rest: exerciseRestSchema,
          tags: exerciseConnectTagsSchema,
          workouts: exerciseConnectWorkoutsSchema,
          exampleLink: exerciseExampleLinkSchema,
        })
        .partial()
        .extend({ id: exerciseIdSchema })
    )
    .mutation(async ({ ctx, input }) => {
      const updatedExercise = await ctx.prisma.exercise.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          difficulty: input.difficulty,
          sets: input.sets,
          reps: input.reps,
          rest: input.rest,
          exampleLink: input.exampleLink,

          author: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          workouts: {
            connect: input.workouts,
          },
          tags: {
            connect: input.tags,
          },
        },
      });
      return updatedExercise;
    }),
  count: protectedProcedure
    .input(z.object({ searchString: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      const countExercise = await ctx.prisma.exercise.count({
        ...(input.searchString ? exerciseWhereQuery(input.searchString) : {}),
      });
      return countExercise;
    }),
  list: protectedProcedure
    .input(
      z
        .object({
          take: z.number(),
          skip: z.number(),
          searchString: z.string(),
        })
        .partial()
    )
    .query(async ({ ctx, input }) => {
      const listWorkouts = await ctx.prisma.exercise.findMany({
        take: input.take,
        skip: input.skip,
        ...(input.searchString ? exerciseWhereQuery(input.searchString) : {}),
        include: {
          tags: true,
          author: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          updatedAt: "desc",
        },
      });
      return listWorkouts;
    }),
  delete: adminProcedure
    .input(
      z.object({
        id: exerciseIdSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const deletedExercise = await ctx.prisma.exercise.delete({
        where: { id: input.id },
      });
      return deletedExercise;
    }),
});
